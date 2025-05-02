import { defaultConfig, urlTestCases } from '../constants/ai-knowledge.constants'

describe('การสร้าง AI Knowledge ด้วย URL', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/ai-knowledge')
  })

  describe('ทดสอบการสร้าง Knowledge ด้วย URL พื้นฐาน', () => {
    it('สามารถสร้าง Knowledge ด้วย URL พื้นฐาน', () => {
      cy.createKnowledge_URL('basic')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(urlTestCases.basic.knowledgeName)
      cy.contains(urlTestCases.basic.knowledgeName).should('be.visible')
    })
  })

  describe('ทดสอบการสร้าง Knowledge ด้วยเว็บไซต์ Wikipedia', () => {
    it('สามารถสร้าง Knowledge ด้วยบทความจาก Wikipedia', () => {
      cy.createKnowledge_URL('wikipedia')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(urlTestCases.wikipedia.knowledgeName)
      cy.contains(urlTestCases.wikipedia.knowledgeName).should('be.visible')
    })
  })

  describe('ทดสอบกรณีทั่วไป', () => {
    it('สามารถสร้าง Knowledge สำหรับ gxHo ด้วย URL', () => {
      cy.createKnowledge_URL('gxHo')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(urlTestCases.gxHo.knowledgeName)
      cy.contains(urlTestCases.gxHo.knowledgeName).should('be.visible')
      
      // ตรวจสอบแท็ก
      cy.contains(urlTestCases.gxHo.knowledgeName).click()
      cy.get('.knowledge-detail .mat-chip').contains('gxHo').should('exist')
      cy.get('.knowledge-detail .mat-chip').contains('Automated').should('exist')
    })
  })

  describe('ทดสอบสำหรับการอัปเดตและลบ', () => {
    it('สามารถสร้าง Knowledge สำหรับการอัปเดต URL', () => {
      cy.createKnowledge_URL('forUpdate')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(urlTestCases.forUpdate.knowledgeName)
      cy.contains(urlTestCases.forUpdate.knowledgeName).should('be.visible')
    })

    it('สามารถสร้าง Knowledge สำหรับการลบ URL', () => {
      cy.createKnowledge_URL('forDelete')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(urlTestCases.forDelete.knowledgeName)
      cy.contains(urlTestCases.forDelete.knowledgeName).should('be.visible')
    })
  })
}) 