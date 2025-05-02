import { pdfTestCases, urlTestCases } from '../constants/ai-knowledge.constants'

describe('การอัปเดต AI Knowledge', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/ai-knowledge')
  })

  describe('อัปเดต Knowledge จากไฟล์', () => {
    it('สามารถอัปเดตแท็กของ Knowledge ที่สร้างจากไฟล์ PDF', () => {
      // สร้าง Knowledge สำหรับทดสอบการอัปเดต (หรือใช้ Knowledge ที่มีอยู่แล้ว)
      cy.visitHost('/#/knowledge')
      cy.searchKnowledge(pdfTestCases.forUpdate.knowledgeName)
      
      // อัปเดตแท็ก
      const newTags = ['Updated_Tag1', 'Updated_Tag2', 'PDF']
      cy.updateKnowledgeTags(pdfTestCases.forUpdate.knowledgeName, newTags)
      
      // ตรวจสอบว่าอัปเดตสำเร็จ
      cy.searchKnowledge(pdfTestCases.forUpdate.knowledgeName)
      cy.contains(pdfTestCases.forUpdate.knowledgeName).click()
      
      // ตรวจสอบแท็กใหม่
      newTags.forEach(tag => {
        cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
      })
      
      // ตรวจสอบว่าแท็กเดิมถูกลบ
      pdfTestCases.forUpdate.tags.forEach(tag => {
        if (!newTags.includes(tag)) {
          cy.get('.knowledge-detail .mat-chip').contains(tag).should('not.exist')
        }
      })
    })
  })

  describe('อัปเดต Knowledge จาก URL', () => {
    it('สามารถอัปเดตแท็กของ Knowledge ที่สร้างจาก URL', () => {
      // สร้าง Knowledge สำหรับทดสอบการอัปเดต (หรือใช้ Knowledge ที่มีอยู่แล้ว)
      cy.visitHost('/#/knowledge')
      cy.searchKnowledge(urlTestCases.forUpdate.knowledgeName)
      
      // อัปเดตแท็ก
      const newTags = ['Updated_Tag1', 'Updated_Tag2', 'URL']
      cy.updateKnowledgeTags(urlTestCases.forUpdate.knowledgeName, newTags)
      
      // ตรวจสอบว่าอัปเดตสำเร็จ
      cy.searchKnowledge(urlTestCases.forUpdate.knowledgeName)
      cy.contains(urlTestCases.forUpdate.knowledgeName).click()
      
      // ตรวจสอบแท็กใหม่
      newTags.forEach(tag => {
        cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
      })
      
      // ตรวจสอบว่าแท็กเดิมถูกลบ
      urlTestCases.forUpdate.tags.forEach(tag => {
        if (!newTags.includes(tag)) {
          cy.get('.knowledge-detail .mat-chip').contains(tag).should('not.exist')
        }
      })
    })
  })
}) 