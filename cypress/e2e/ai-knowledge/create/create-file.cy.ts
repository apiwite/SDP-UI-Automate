import { defaultConfig, pdfTestCases, csvTestCases, xlsxTestCases, pngTestCases, docxTestCases } from '../constants/ai-knowledge.constants'

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
      cy.createKnowledge_File('pdf.basic')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(pdfTestCases.basic.knowledgeName)
      cy.contains(pdfTestCases.basic.knowledgeName).should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยไฟล์ PDF ที่มี Chunk Size ใหญ่', () => {
      cy.createKnowledge_File('pdf.withLargeChunkSize')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(pdfTestCases.withLargeChunkSize.knowledgeName)
      cy.contains(pdfTestCases.withLargeChunkSize.knowledgeName).should('be.visible')
    })
  })

  describe('ทดสอบไฟล์ CSV', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์ CSV พื้นฐาน', () => {
      cy.createKnowledge_File('csv.basic')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(csvTestCases.basic.knowledgeName)
      cy.contains(csvTestCases.basic.knowledgeName).should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยไฟล์ CSV ที่มีชื่อกำหนดเอง', () => {
      cy.createKnowledge_File('csv.withCustomName')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(csvTestCases.withCustomName.knowledgeName)
      cy.contains(csvTestCases.withCustomName.knowledgeName).should('be.visible')
    })
  })

  describe('ทดสอบไฟล์ Excel', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์ Excel พื้นฐาน', () => {
      cy.createKnowledge_File('xlsx.basic')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(xlsxTestCases.basic.knowledgeName)
      cy.contains(xlsxTestCases.basic.knowledgeName).should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยไฟล์ Excel ที่มีแท็กกำหนดเอง', () => {
      cy.createKnowledge_File('xlsx.withCustomTags')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(xlsxTestCases.withCustomTags.knowledgeName)
      cy.contains(xlsxTestCases.withCustomTags.knowledgeName).should('be.visible')
      
      // ตรวจสอบแท็ก
      cy.contains(xlsxTestCases.withCustomTags.knowledgeName).click()
      cy.get('.knowledge-detail .mat-chip').contains(xlsxTestCases.withCustomTags.tags[0]).should('exist')
      cy.get('.knowledge-detail .mat-chip').contains(xlsxTestCases.withCustomTags.tags[1]).should('exist')
    })
  })

  describe('ทดสอบไฟล์รูปภาพ', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์รูปภาพ PNG', () => {
      cy.createKnowledge_File('png.basic')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(pngTestCases.basic.knowledgeName)
      cy.contains(pngTestCases.basic.knowledgeName).should('be.visible')
    })
  })

  describe('ทดสอบไฟล์ Word', () => {
    it('สามารถสร้าง Knowledge ด้วยไฟล์ Word พื้นฐาน', () => {
      cy.createKnowledge_File('docx.basic')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(docxTestCases.basic.knowledgeName)
      cy.contains(docxTestCases.basic.knowledgeName).should('be.visible')
    })

    it('สามารถสร้าง Knowledge ด้วยไฟล์ Word ที่มีแท็กกำหนดเอง', () => {
      cy.createKnowledge_File('docx.withCustomTags')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(docxTestCases.withCustomTags.knowledgeName)
      cy.contains(docxTestCases.withCustomTags.knowledgeName).should('be.visible')
      
      // ตรวจสอบแท็ก
      cy.contains(docxTestCases.withCustomTags.knowledgeName).click()
      cy.get('.knowledge-detail .mat-chip').contains(docxTestCases.withCustomTags.tags[0]).should('exist')
      cy.get('.knowledge-detail .mat-chip').contains(docxTestCases.withCustomTags.tags[1]).should('exist')
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
      cy.createKnowledge_File('pdf.forUpdate')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(pdfTestCases.forUpdate.knowledgeName)
      cy.contains(pdfTestCases.forUpdate.knowledgeName).should('be.visible')
    })

    it('สามารถสร้าง Knowledge สำหรับการลบ PDF', () => {
      cy.createKnowledge_File('pdf.forDelete')  // ระบุประเภทไฟล์ให้ชัดเจน
      
      // ตรวจสอบว่าสร้างสำเร็จ
      cy.url().should('include', '/#/knowledge')
      cy.searchKnowledge(pdfTestCases.forDelete.knowledgeName)
      cy.contains(pdfTestCases.forDelete.knowledgeName).should('be.visible')
    })
  })
}) 