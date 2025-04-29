import { defaultConfig } from '../constants/ai-knowledge.constants'

describe('การสร้าง AI Knowledge ด้วยไฟล์', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/ai-knowledge')
  })

  describe('ทดสอบการสร้าง Knowledge ด้วยค่าเริ่มต้น', () => {
    it('สามารถสร้าง Knowledge ด้วยค่าเริ่มต้น', () => {
      cy.createKnowledge_File()  // ไม่ระบุ options จะใช้ defaultConfig
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(defaultConfig.knowledgeName)
      cy.contains(defaultConfig.knowledgeName).should('be.visible')
    })
  })

  describe('ทดสอบไฟล์ PDF', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์ PDF พื้นฐาน', () => {
      cy.createKnowledge_File('basic')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('PDF_Knowledge_Basic')
      cy.contains('PDF_Knowledge_Basic').should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยไฟล์ PDF ที่มี Chunk Size ใหญ่', () => {
      cy.createKnowledge_File('withLargeChunkSize')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('PDF_Large_Chunk')
      cy.contains('PDF_Large_Chunk').should('be.visible')
    })
  })

  describe('ทดสอบไฟล์ CSV', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์ CSV พื้นฐาน', () => {
      cy.createKnowledge_File('CSV_Knowledge_Basic')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('CSV_Knowledge_Basic')
      cy.contains('CSV_Knowledge_Basic').should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยไฟล์ CSV ที่มีชื่อกำหนดเอง', () => {
      cy.createKnowledge_File('Custom_Name_CSV')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Custom_Name_CSV')
      cy.contains('Custom_Name_CSV').should('be.visible')
    })
  })

  describe('ทดสอบไฟล์ Excel', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์ Excel พื้นฐาน', () => {
      cy.createKnowledge_File('Excel_Knowledge_Basic')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Excel_Knowledge_Basic')
      cy.contains('Excel_Knowledge_Basic').should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยไฟล์ Excel ที่มีแท็กกำหนดเอง', () => {
      cy.createKnowledge_File('Excel_Custom_Tags')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Excel_Custom_Tags')
      cy.contains('Excel_Custom_Tags').should('be.visible')
      
      // ตรวจสอบแท็ก
      cy.contains('Excel_Custom_Tags').click()
      cy.get('.knowledge-detail .mat-chip').contains('Custom_Tag1').should('exist')
      cy.get('.knowledge-detail .mat-chip').contains('Custom_Tag2').should('exist')
    })
  })

  describe('ทดสอบไฟล์รูปภาพ', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์รูปภาพ PNG', () => {
      cy.createKnowledge_File('Image_Knowledge_Basic')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Image_Knowledge_Basic')
      cy.contains('Image_Knowledge_Basic').should('be.visible')
    })
  })

  describe('ทดสอบไฟล์ Word', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์ Word พื้นฐาน', () => {
      cy.createKnowledge_File('Test_pdf_cy')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Test_pdf_cy')
      cy.contains('Test_pdf_cy').should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยไฟล์ Word ที่มีแท็กกำหนดเอง', () => {
      cy.createKnowledge_File('Word_Custom_Tags')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Word_Custom_Tags')
      cy.contains('Word_Custom_Tags').should('be.visible')
      
      // ตรวจสอบแท็ก
      cy.contains('Word_Custom_Tags').click()
      cy.get('.knowledge-detail .mat-chip').contains('Custom_Tag1').should('exist')
      cy.get('.knowledge-detail .mat-chip').contains('Custom_Tag2').should('exist')
    })
  })

  describe('ทดสอบกรณีทั่วไป', () => {
    it('สามารถสร้าง Knowledge ด้วยชื่อที่กำหนดเอง', () => {
      cy.createKnowledge_File('withCustomName')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Custom_Name_Knowledge')
      cy.contains('Custom_Name_Knowledge').should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยแท็กที่กำหนดเอง', () => {
      cy.createKnowledge_File('withCustomTags')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Test_AI_Knowledge_cy')
      cy.contains('Test_AI_Knowledge_cy').should('be.visible')
      
      // ตรวจสอบแท็ก
      cy.contains('Test_AI_Knowledge_cy').click()
      cy.get('.knowledge-detail .mat-chip').contains('Custom_Tag1').should('exist')
      cy.get('.knowledge-detail .mat-chip').contains('Custom_Tag2').should('exist')
    })

    it('สามารถสร้าง Knowledge สำหรับ gxHo', () => {
      cy.createKnowledge_File('gxHo')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('gxHo_Knowledge_File')
      cy.contains('gxHo_Knowledge_File').should('be.visible')
      
      // ตรวจสอบแท็ก
      cy.contains('gxHo_Knowledge_File').click()
      cy.get('.knowledge-detail .mat-chip').contains('gxHo').should('exist')
      cy.get('.knowledge-detail .mat-chip').contains('Automated').should('exist')
    })
  })

  describe('ทดสอบสำหรับการอัปเดตและลบ', () => {
    it('สามารถสร้าง Knowledge สำหรับการอัปเดต PDF', () => {
      cy.createKnowledge_File('forUpdate')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Update_Knowledge_PDF')
      cy.contains('Update_Knowledge_PDF').should('be.visible')
    })

    it('สามารถสร้าง Knowledge สำหรับการลบ PDF', () => {
      cy.createKnowledge_File('forDelete')
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge('Delete_Knowledge_PDF')
      cy.contains('Delete_Knowledge_PDF').should('be.visible')
    })
  })
}) 