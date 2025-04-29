/// <reference types="cypress" />
/// <reference types="cypress-file-upload" />

import { defaultConfig, fileTestCases, urlTestCases } from '../constants/ai-knowledge.constants'

// ================== คำสั่งทั่วไป ==================

// คำสั่งสำหรับตรวจสอบว่าไฟล์มีอยู่ใน fixtures
Cypress.Commands.add('checkFixtureFileExists', (fileName: string) => {
  cy.task('fileExists', `cypress/fixtures/${fileName}`)
    .then((exists) => {
      if (!exists) {
        throw new Error(`ไม่พบไฟล์ ${fileName} ใน cypress/fixtures/ กรุณาตรวจสอบว่าชื่อไฟล์ถูกต้อง`)
      }
      cy.log(`ตรวจพบไฟล์ ${fileName} ใน fixtures`)
      return cy.wrap(true)
    })
})

// คำสั่งสำหรับเริ่มการสร้าง Knowledge
Cypress.Commands.add('startCreateKnowledge', () => {
  cy.get(':nth-child(3) > .nav-link').click()
  cy.wait(3000)
  cy.get(':nth-child(4) > .btn').click()
  cy.get(':nth-child(1) > .nav-link')
  return cy.wrap(true)
})

// คำสั่งสำหรับกรอกข้อมูล Knowledge
Cypress.Commands.add('fillKnowledgeInfo', (knowledgeName = 'Test_AI_Knowledge_cy', tags = ['Test_by_cypress', 'Api']) => {
  cy.get('input[name="knowledgeName"]').type(knowledgeName)
  
  tags.forEach(tag => {
    cy.get('#mat-chip-list-input-0').click().type(tag).type('{enter}')
  })
  
  return cy.wrap(true)
})

// คำสั่งสำหรับเลือกโมเดลสำหรับ Knowledge
Cypress.Commands.add('selectKnowledgeModel', (modelName = 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2') => {
  cy.get('.inside-next-btn > .btn').click()
  cy.get('.ng-select-container').click()
  cy.contains('span', modelName).click()
  cy.get('.float-right > [awnextstep=""]').click()
  
  return cy.wrap(true)
})

// คำสั่งสำหรับกำหนดค่า Chunking
Cypress.Commands.add('configureChunking', (chunkSize = '200') => {
  cy.get('.view').click()
  cy.get('#chunk_size').click().clear().type(chunkSize).type('{enter}')
  cy.wait(3000)
  
  cy.get('.float-right > .btn-primary').click()
  
  return cy.wrap(true)
})

// คำสั่งสำหรับจบการสร้าง Knowledge
Cypress.Commands.add('finalizeKnowledge', (tags = defaultConfig.tags) => {
  cy.intercept('POST', '**/sdp/api/knowledge').as('knowledgeAPI')
  cy.get('.btn-success').click()
  cy.wait('@knowledgeAPI')
  
  // ตรวจสอบ mat-chip ตามแท็กที่ระบุใน config
  tags.forEach(tag => {
    cy.get('.mat-chip').contains(tag).should('exist')
  })
  
  cy.intercept('POST', '**/process_chunking').as('process_chunkingAPI')
  cy.get('.btn-process').click()
  cy.wait('@process_chunkingAPI', { timeout: 60000 })
  cy.wait(3000)
  
  return cy.wrap(true)
})

// ================== คำสั่งสำหรับไฟล์ ==================

// คำสั่งสำหรับอัพโหลดไฟล์
Cypress.Commands.add('uploadFile', (fileName: string) => {
  cy.log(`กำลังอัพโหลดไฟล์ ${fileName}`)
  
  // ใช้ selectFile 
  cy.get('input[type="file"]').selectFile(`cypress/fixtures/${fileName}`, { force: true })
  
  // รอให้อัพโหลดเสร็จและตรวจสอบ
  cy.wait(2000)
  cy.get('.file-container').should('exist')
  cy.get('.file-container > p').should('contain', fileName)
  
  return cy.wrap(true)
})

// คำสั่งรวมสำหรับสร้าง Knowledge ด้วยไฟล์
Cypress.Commands.add('createKnowledge_File', (options: any = {}) => {
  let config: any = {}
  
  if (typeof options === 'string' && fileTestCases[options]) {
    config = { ...defaultConfig, ...fileTestCases[options] }
  } else if (Object.keys(options).length === 0) {
    config = { ...defaultConfig }
  } else {
    config = { ...defaultConfig, ...options }
  }
  
  cy.log(`กำลังสร้าง Knowledge (File): ${config.knowledgeName}`)
  cy.log(`ใช้โมเดล: ${config.modelName}`)
  cy.log(`ไฟล์: ${config.fileName}`)
  cy.log(`ใช้แท็ก: ${config.tags.join(', ')}`)
  
  cy.checkFixtureFileExists(config.fileName)
    .then(() => {      
      cy.startCreateKnowledge()
        .then(() => cy.fillKnowledgeInfo(config.knowledgeName, config.tags))
        .then(() => cy.uploadFile(config.fileName))
        .then(() => cy.selectKnowledgeModel(config.modelName))
        .then(() => cy.configureChunking(config.chunkSize))
        cy.get('.btn-success').click()
        // .then(() => cy.finalizeKnowledge(config.tags))
    })
})

// ================== คำสั่งสำหรับ URL ==================

// คำสั่งสำหรับกรอก URL ใน Knowledge
Cypress.Commands.add('inputKnowledgeUrl', (url = 'https://example.com/document.pdf', fileType = 'application/pdf') => {
  cy.log(`กำลังใช้ URL: ${url} (${fileType})`)
  
  // เลือกแท็บ URL
  cy.get(':nth-child(2) > .nav-link').click()
  cy.wait(1000)
  
  // กรอก URL
  cy.get('input[placeholder="URL"]').type(url)
  
  // คลิกปุ่มยืนยัน
  cy.get('.form-group > .btn').click()
  cy.wait(5000)
  
  // ตรวจสอบว่าดึงข้อมูลจาก URL สำเร็จ
  cy.get('.file-container').should('exist')
  
  return cy.wrap(true)
})

// คำสั่งรวมสำหรับสร้าง Knowledge ด้วย URL
Cypress.Commands.add('createKnowledge_URL', (options: any = {}) => {
  let config: any = {}
  
  if (typeof options === 'string' && urlTestCases[options]) {
    config = { ...defaultConfig, ...urlTestCases[options] }
  } else if (Object.keys(options).length === 0) {
    config = { ...urlTestCases.basic }
  } else {
    config = { ...urlTestCases.basic, ...options }
  }
  
  cy.log(`กำลังสร้าง Knowledge (URL): ${config.knowledgeName}`)
  cy.log(`ใช้โมเดล: ${config.modelName}`)
  cy.log(`URL: ${config.url}`)
  cy.log(`ใช้แท็ก: ${config.tags.join(', ')}`)
  
  cy.startCreateKnowledge()
    .then(() => cy.fillKnowledgeInfo(config.knowledgeName, config.tags))
    .then(() => cy.inputKnowledgeUrl(config.url, config.fileType))
    .then(() => cy.selectKnowledgeModel(config.modelName))
    .then(() => cy.configureChunking(config.chunkSize))
    .then(() => cy.finalizeKnowledge(config.tags))
})

// ================== คำสั่งสำหรับการอัปเดต Knowledge ==================

Cypress.Commands.add('searchKnowledge', (knowledgeName: string) => {
  cy.get(':nth-child(3) > .nav-link').click()
  cy.wait(2000)
  cy.get('.form > .form-control').click().type(knowledgeName)
  cy.wait(2000)
  return cy.wrap(true)
})

Cypress.Commands.add('openKnowledgeEditForm', (knowledgeName: string) => {
  cy.searchKnowledge(knowledgeName)
  cy.contains(knowledgeName).closest('tr').find('.edit-btn').click()
  cy.wait(1000)
  return cy.wrap(true)
})

Cypress.Commands.add('updateKnowledgeTags', (knowledgeName: string, newTags: string[]) => {
  cy.openKnowledgeEditForm(knowledgeName)
  
  // ลบแท็กเดิมทั้งหมด
  cy.get('.mat-chip-remove').each(($el) => {
    cy.wrap($el).click()
  })
  
  // เพิ่มแท็กใหม่
  newTags.forEach(tag => {
    cy.get('#mat-chip-list-input-0').click().type(tag).type('{enter}')
  })
  
  // บันทึกการเปลี่ยนแปลง
  cy.get('.btn-save').click()
  cy.wait(2000)
  
  return cy.wrap(true)
})

// ================== คำสั่งสำหรับการลบ Knowledge ==================

Cypress.Commands.add('deleteKnowledge', (knowledgeName: string) => {
  cy.searchKnowledge(knowledgeName)
  cy.contains(knowledgeName).closest('tr').find('.delete-btn').click()
  cy.get('.confirm-delete-btn').click()
  cy.wait(2000)
  
  // ตรวจสอบว่าไม่พบรายการที่ลบแล้ว
  cy.searchKnowledge(knowledgeName)
  cy.contains(knowledgeName).should('not.exist')
  
  return cy.wrap(true)
}) 