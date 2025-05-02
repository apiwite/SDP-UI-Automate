import { pdfTestCases, urlTestCases } from '../constants/ai-knowledge.constants'

describe('การลบ AI Knowledge', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/ai-knowledge')
  })

  describe('ลบ Knowledge จากไฟล์', () => {
    it('สามารถลบ Knowledge ที่สร้างจากไฟล์ PDF', () => {
      // สร้าง Knowledge สำหรับทดสอบการลบ (หรือใช้ Knowledge ที่มีอยู่แล้ว)
      cy.visitHost('/#/knowledge')
      
      // ลบ Knowledge
      cy.deleteKnowledge(pdfTestCases.forDelete.knowledgeName)
      
      // ตรวจสอบว่าลบสำเร็จ
      cy.searchKnowledge(pdfTestCases.forDelete.knowledgeName)
      cy.contains(pdfTestCases.forDelete.knowledgeName).should('not.exist')
    })
  })

  describe('ลบ Knowledge จาก URL', () => {
    it('สามารถลบ Knowledge ที่สร้างจาก URL', () => {
      // สร้าง Knowledge สำหรับทดสอบการลบ (หรือใช้ Knowledge ที่มีอยู่แล้ว)
      cy.visitHost('/#/knowledge')
      
      // ลบ Knowledge
      cy.deleteKnowledge(urlTestCases.forDelete.knowledgeName)
      
      // ตรวจสอบว่าลบสำเร็จ
      cy.searchKnowledge(urlTestCases.forDelete.knowledgeName)
      cy.contains(urlTestCases.forDelete.knowledgeName).should('not.exist')
    })
  })
}) 