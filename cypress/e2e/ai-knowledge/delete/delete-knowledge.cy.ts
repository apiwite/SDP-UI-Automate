describe('การลบ AI Knowledge', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/ai-knowledge')
  })

  describe('ลบ Knowledge ประเภทไฟล์ PDF', () => {
    it('สามารถลบ Knowledge ที่สร้างด้วยไฟล์ PDF', () => {
      // ค้นหา Knowledge ที่ต้องการลบ
      cy.searchKnowledge('Delete_Knowledge_PDF')
      cy.contains('Delete_Knowledge_PDF').should('exist')
      
      // ลบ Knowledge
      cy.deleteKnowledge('Delete_Knowledge_PDF')
      
      // ตรวจสอบว่าลบสำเร็จ
      cy.searchKnowledge('Delete_Knowledge_PDF')
      cy.contains('Delete_Knowledge_PDF').should('not.exist')
    })
  })

  describe('ลบ Knowledge ประเภทไฟล์ CSV', () => {
    it('สามารถลบ Knowledge ที่สร้างด้วยไฟล์ CSV', () => {
      // ค้นหา Knowledge ที่ต้องการลบ
      cy.searchKnowledge('Delete_Knowledge_CSV')
      cy.contains('Delete_Knowledge_CSV').should('exist')
      
      // ลบ Knowledge
      cy.deleteKnowledge('Delete_Knowledge_CSV')
      
      // ตรวจสอบว่าลบสำเร็จ
      cy.searchKnowledge('Delete_Knowledge_CSV')
      cy.contains('Delete_Knowledge_CSV').should('not.exist')
    })
  })

  describe('ลบ Knowledge ประเภทไฟล์ Excel', () => {
    it('สามารถลบ Knowledge ที่สร้างด้วยไฟล์ Excel', () => {
      // ค้นหา Knowledge ที่ต้องการลบ
      cy.searchKnowledge('Delete_Knowledge_Excel')
      cy.contains('Delete_Knowledge_Excel').should('exist')
      
      // ลบ Knowledge
      cy.deleteKnowledge('Delete_Knowledge_Excel')
      
      // ตรวจสอบว่าลบสำเร็จ
      cy.searchKnowledge('Delete_Knowledge_Excel')
      cy.contains('Delete_Knowledge_Excel').should('not.exist')
    })
  })

  describe('ลบ Knowledge ประเภทไฟล์รูปภาพ', () => {
    it('สามารถลบ Knowledge ที่สร้างด้วยไฟล์รูปภาพ', () => {
      // ค้นหา Knowledge ที่ต้องการลบ
      cy.searchKnowledge('Delete_Knowledge_Image')
      cy.contains('Delete_Knowledge_Image').should('exist')
      
      // ลบ Knowledge
      cy.deleteKnowledge('Delete_Knowledge_Image')
      
      // ตรวจสอบว่าลบสำเร็จ
      cy.searchKnowledge('Delete_Knowledge_Image')
      cy.contains('Delete_Knowledge_Image').should('not.exist')
    })
  })

  describe('ลบ Knowledge ประเภทไฟล์ Word', () => {
    it('สามารถลบ Knowledge ที่สร้างด้วยไฟล์ Word', () => {
      // ค้นหา Knowledge ที่ต้องการลบ
      cy.searchKnowledge('Delete_Knowledge_Word')
      cy.contains('Delete_Knowledge_Word').should('exist')
      
      // ลบ Knowledge
      cy.deleteKnowledge('Delete_Knowledge_Word')
      
      // ตรวจสอบว่าลบสำเร็จ
      cy.searchKnowledge('Delete_Knowledge_Word')
      cy.contains('Delete_Knowledge_Word').should('not.exist')
    })
  })

  describe('ลบ Knowledge ประเภท URL', () => {
    it('สามารถลบ Knowledge ที่สร้างด้วย URL', () => {
      // ค้นหา Knowledge ที่ต้องการลบ
      cy.searchKnowledge('Delete_Knowledge_URL')
      cy.contains('Delete_Knowledge_URL').should('exist')
      
      // ลบ Knowledge
      cy.deleteKnowledge('Delete_Knowledge_URL')
      
      // ตรวจสอบว่าลบสำเร็จ
      cy.searchKnowledge('Delete_Knowledge_URL')
      cy.contains('Delete_Knowledge_URL').should('not.exist')
    })
  })
}) 