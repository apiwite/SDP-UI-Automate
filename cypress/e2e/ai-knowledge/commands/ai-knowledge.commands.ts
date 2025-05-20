/// <reference types="cypress" />
/// <reference types="cypress-file-upload" />

import { defaultConfig, fileTestCases, urlTestCases, pdfTestCases, csvTestCases, xlsxTestCases, pngTestCases, docxTestCases } from '../constants/ai-knowledge.constants'

// ฟังก์ชั่นช่วยสำหรับจัดการข้อผิดพลาด
function handleError(message: string) {
  cy.log(`เกิดข้อผิดพลาด: ${message}`)
  // หยุดและทำให้เคสล้มเหลว
  throw new Error(message)
}

// ตรวจสอบว่าไฟล์มีอยู่ใน fixtures fileName มักจะมี path ต่อท้าย เช่น pdf/file.pdf
Cypress.Commands.add('checkFixtureFileExists', (fileName: string) => {
  cy.task('fileExists', `cypress/fixtures/${fileName}`)
    .then((exists) => {
      if (!exists) {
        handleError(`ไม่พบไฟล์ ${fileName} ใน cypress/fixtures/ กรุณาตรวจสอบว่าชื่อไฟล์ถูกต้อง`)
      }
      cy.log(`ตรวจพบไฟล์ ${fileName} ใน fixtures`)
      return cy.wrap(true)
    })
})

// สร้าง Knowledge
Cypress.Commands.add('startCreateKnowledge', () => {
  try {
    cy.get(':nth-child(3) > .nav-link').click()
    cy.wait(3000)
    cy.get(':nth-child(4) > .btn').click()
    cy.get(':nth-child(1) > .nav-link')
    return cy.wrap(true)
  } catch (error) {
    handleError(`ไม่สามารถเริ่มสร้าง Knowledge ได้: ${error.message}`)
  }
})

// กรอกข้อมูล Knowledge
Cypress.Commands.add('fillKnowledgeInfo', (knowledgeName = 'Test_AI_Knowledge_cy', tags = ['Test_by_cypress', 'Api']) => {
  try {
    cy.get('input[name="knowledgeName"]').type(knowledgeName)
    
    tags.forEach(tag => {
      cy.get('#mat-chip-list-input-0').click().type(tag).type('{enter}')
    })
    
    return cy.wrap(true)
  } catch (error) {
    handleError(`ไม่สามารถกรอกข้อมูล Knowledge ได้: ${error.message}`)
  }
})

// เลือกโมเดลสำหรับ Knowledge
Cypress.Commands.add('selectKnowledgeModel', (modelName) => {
  try {
    cy.wait(3000)
    cy.get('.inside-next-btn > .btn').click()
    cy.get('.ng-select-container').click()
    
    cy.wait(1000)
    
    cy.get('.ng-dropdown-panel-items').should('be.visible')
    cy.contains('span', modelName).should('be.visible')
    cy.wait(1000)

    // เพิ่มการรอ API และตรวจสอบข้อมูล
    cy.intercept('POST', '**/knowledge/preview_chunking').as('previewChunkingAPI')
    cy.get('.float-right > [awnextstep=""]').click()
    
    // เพิ่ม timeout และตรวจสอบ response
    cy.wait('@previewChunkingAPI', { timeout: 60000 }).then((interception: any) => {
      cy.log(JSON.stringify(interception.response?.body))
      // ตรวจสอบว่ามีข้อมูลหรือไม่
      if (!interception.response?.body || interception.response.body.length === 0) {
        cy.log('ไม่พบข้อมูล preview chunking, รอและลองใหม่')
        cy.wait(5000) // รอ 5 วินาที
        cy.get('.float-right > [awnextstep=""]').click()
        cy.wait('@previewChunkingAPI', { timeout: 60000 }).then((secondInterception: any) => {
          if (!secondInterception.response?.body || secondInterception.response.body.length === 0) {
            handleError('ไม่สามารถรับข้อมูล preview chunking ได้หลังจากลองสองครั้ง')
          }
        })
      }
    })
    
    return cy.wrap(true)
  } catch (error) {
    handleError(`ไม่สามารถเลือกโมเดล Knowledge ได้: ${error.message}`)
  }
})

// กำหนดค่า Chunking
Cypress.Commands.add('configureChunking', (chunkSize = '200') => {
  try {
    cy.get('.view').click()
    cy.wait(3000)
    
    cy.get('.float-right > .btn-primary').click()
    
    return cy.wrap(true)
  } catch (error) {
    handleError(`ไม่สามารถกำหนดค่า Chunking ได้: ${error.message}`)
  }
})

// จบการสร้าง Knowledge
Cypress.Commands.add('finalizeKnowledge', (tags = defaultConfig.tags) => {
  try {
    cy.intercept('POST', '**/sdp/api/knowledge').as('knowledgeAPI')
    cy.get('.btn-success').click({ force: true })
    cy.wait('@knowledgeAPI').then((interception: any) => {
      if (!interception.response || interception.response.statusCode >= 400) {
        handleError(`การสร้าง Knowledge ล้มเหลว: API ตอบกลับด้วย status ${interception.response?.statusCode}`)
      }
    })
    
    // ตรวจสอบ mat-chip ตามแท็กที่ระบุใน config
    tags.forEach(tag => {
      cy.get('.mat-chip').contains(tag).should('exist')
    })
    
    cy.wait(10000)
    
    return cy.wrap(true)
  } catch (error) {
    handleError(`ไม่สามารถสร้าง Knowledge ได้: ${error.message}`)
  }
})


// อัพโหลดไฟล์
Cypress.Commands.add('uploadFile', (fileName: string) => {
  try {
    cy.log(`กำลังอัพโหลดไฟล์ ${fileName}`)
    
    // ตรวจสอบขนาดไฟล์ก่อนอัพโหลด
    cy.task('getFileSize', `cypress/fixtures/${fileName}`).then((size) => {
      cy.log(`ขนาดไฟล์ต้นฉบับ: ${size} bytes`)
      if (size === 0) {
        handleError(`ไฟล์ ${fileName} มีขนาดเป็น 0 bytes หรือไม่พบไฟล์`)
      }
    })
    
    // ใช้ selectFile
    cy.get('input[type="file"]').selectFile(`cypress/fixtures/${fileName}`, { force: true })
    
    // รอให้อัพโหลดเสร็จและตรวจสอบ
    cy.intercept('POST', '**/v2/knowledge/validate_file').as('validateFileAPI')
    cy.wait('@validateFileAPI', { timeout: 30000 }).then((interception: any) => {
      if (!interception.response || interception.response.statusCode >= 400) {
        handleError(`การอัพโหลดไฟล์ล้มเหลว: API ตอบกลับด้วย status ${interception.response?.statusCode}`)
      }
    })
    
    cy.get('.file-container').should('exist')
    
    // ดึงชื่อไฟล์จาก path (ตัดส่วน directory ออก)
    const fileNameOnly = fileName.split('/').pop()
    cy.get('.file-container > p').should('contain', fileNameOnly)
    
    return cy.wrap(true)
  } catch (error) {
    handleError(`ไม่สามารถอัพโหลดไฟล์ได้: ${error.message}`)
  }
})

// สร้าง Knowledge ด้วยไฟล์
Cypress.Commands.add('createKnowledge_File', (options: any = {}) => {
  let config: any = {}
  
  if (typeof options === 'string') {
    // ตรวจสอบว่ามีการระบุประเภทไฟล์ใน options หรือไม่ (เช่น 'pdf.basic')
    if (options.includes('.')) {
      const [fileType, testCase] = options.split('.')
      
      // เลือกกลุ่มทดสอบตามประเภทไฟล์
      let selectedTestCases = null
      switch (fileType) {
        case 'pdf':
          selectedTestCases = pdfTestCases
          break
        case 'csv':
          selectedTestCases = csvTestCases
          break
        case 'xlsx':
          selectedTestCases = xlsxTestCases
          break
        case 'png':
          selectedTestCases = pngTestCases
          break
        case 'docx':
          selectedTestCases = docxTestCases
          break
        default:
          throw new Error(`ไม่พบประเภทไฟล์ ${fileType} กรุณาระบุให้ถูกต้อง (pdf, csv, xlsx, png, docx)`)
      }
      
      // ตรวจสอบว่ามีเคสทดสอบตามที่ระบุหรือไม่
      if (selectedTestCases && selectedTestCases[testCase]) {
        config = { ...defaultConfig, ...selectedTestCases[testCase] }
      } else {
        throw new Error(`ไม่พบเคสทดสอบ ${testCase} ในประเภทไฟล์ ${fileType}`)
      }
    } else if (fileTestCases[options]) {
      // รองรับการระบุชื่อเคสแบบเดิม (เช่น 'basic')
      config = { ...defaultConfig, ...fileTestCases[options] }
    } else {
      throw new Error(`ไม่พบเคสทดสอบ ${options} กรุณาตรวจสอบชื่อให้ถูกต้อง`)
    }
  } else if (Object.keys(options).length === 0) {
    config = { ...defaultConfig }
  } else {
    config = { ...defaultConfig, ...options }
  }
  
  cy.log(`กำลังสร้าง Knowledge (File): ${config.knowledgeName}`)
  cy.log(`ใช้โมเดล: ${config.embeddingModel || config.modelName}`)
  cy.log(`ไฟล์: ${config.fileName}`)
  cy.log(`ใช้แท็ก: ${config.tags.join(', ')}`)
  
  cy.checkFixtureFileExists(config.fileName)
    .then(() => {      
      cy.startCreateKnowledge()
        .then(() => cy.fillKnowledgeInfo(config.knowledgeName, config.tags))
        .then(() => cy.uploadFile(config.fileName))
        .then(() => cy.selectKnowledgeModel(config.embeddingModel || config.modelName))
        .then(() => cy.configureChunking(config.chunkSize))
        .then(() => cy.finalizeKnowledge(config.tags))
    })
})

// ==================  URL ==================

// กรอก URL ใน Knowledge
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

// ================== การอัปเดต Knowledge ==================

Cypress.Commands.add('searchKnowledge', (knowledgeName: string) => {
  cy.get(':nth-child(3) > .nav-link').click()
  cy.wait(2000)
  cy.get('.form > .form-control').click().type(knowledgeName)
  cy.wait(2000)
  return cy.wrap(true)
})

Cypress.Commands.add('processKnowledge', () => {
  try {
    cy.get(':nth-child(1) > .card').click()
    cy.intercept('POST', '**/process_chunking').as('processChunkingAPI')
    cy.get('.btn-process').click()
    cy.wait('@processChunkingAPI', { timeout: 60000 }).then((interception: any) => {
      if (!interception.response || interception.response.statusCode >= 400) {
        handleError(`การประมวลผล Knowledge ล้มเหลว: API ตอบกลับด้วย status ${interception.response?.statusCode}`)
      }
    })
    cy.wait(2000)
  } catch (error) {
    handleError(`ไม่สามารถประมวลผล Knowledge ได้: ${error.message}`)
  }
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

// ================== การลบ Knowledge ==================

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