describe('การอัปเดต AI Knowledge', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/ai-knowledge')
  })

  describe('อัปเดต Knowledge ประเภทไฟล์ PDF', () => {
    it('สามารถอัปเดตแท็กของ Knowledge ที่สร้างด้วยไฟล์ PDF', () => {
      // ค้นหา Knowledge ที่ต้องการอัปเดต
      cy.searchKnowledge('Update_Knowledge_PDF')
      cy.contains('Update_Knowledge_PDF').should('exist')
      
      // อัปเดตแท็ก
      const newTags = ['Updated', 'PDF', 'Test', `PDF_${new Date().getTime()}`]
      cy.updateKnowledgeTags('Update_Knowledge_PDF', newTags)
      
      // ตรวจสอบว่าอัปเดตสำเร็จ
      cy.searchKnowledge('Update_Knowledge_PDF')
      cy.contains('Update_Knowledge_PDF').click()
      newTags.forEach(tag => {
        cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
      })
    })
  })

  describe('อัปเดต Knowledge ประเภทไฟล์ CSV', () => {
    it('สามารถอัปเดตแท็กของ Knowledge ที่สร้างด้วยไฟล์ CSV', () => {
      // ค้นหา Knowledge ที่ต้องการอัปเดต
      cy.searchKnowledge('Update_Knowledge_CSV')
      cy.contains('Update_Knowledge_CSV').should('exist')
      
      // อัปเดตแท็ก
      const newTags = ['Updated', 'CSV', 'Test', `CSV_${new Date().getTime()}`]
      cy.updateKnowledgeTags('Update_Knowledge_CSV', newTags)
      
      // ตรวจสอบว่าอัปเดตสำเร็จ
      cy.searchKnowledge('Update_Knowledge_CSV')
      cy.contains('Update_Knowledge_CSV').click()
      newTags.forEach(tag => {
        cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
      })
    })
  })

  describe('อัปเดต Knowledge ประเภทไฟล์ Excel', () => {
    it('สามารถอัปเดตแท็กของ Knowledge ที่สร้างด้วยไฟล์ Excel', () => {
      // ค้นหา Knowledge ที่ต้องการอัปเดต
      cy.searchKnowledge('Update_Knowledge_Excel')
      cy.contains('Update_Knowledge_Excel').should('exist')
      
      // อัปเดตแท็ก
      const newTags = ['Updated', 'Excel', 'XLSX', 'Test', `Excel_${new Date().getTime()}`]
      cy.updateKnowledgeTags('Update_Knowledge_Excel', newTags)
      
      // ตรวจสอบว่าอัปเดตสำเร็จ
      cy.searchKnowledge('Update_Knowledge_Excel')
      cy.contains('Update_Knowledge_Excel').click()
      newTags.forEach(tag => {
        cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
      })
    })
  })

  describe('อัปเดต Knowledge ประเภทไฟล์รูปภาพ', () => {
    it('สามารถอัปเดตแท็กของ Knowledge ที่สร้างด้วยไฟล์รูปภาพ', () => {
      // ค้นหา Knowledge ที่ต้องการอัปเดต
      cy.searchKnowledge('Update_Knowledge_Image')
      cy.contains('Update_Knowledge_Image').should('exist')
      
      // อัปเดตแท็ก
      const newTags = ['Updated', 'Image', 'PNG', 'Test', `Image_${new Date().getTime()}`]
      cy.updateKnowledgeTags('Update_Knowledge_Image', newTags)
      
      // ตรวจสอบว่าอัปเดตสำเร็จ
      cy.searchKnowledge('Update_Knowledge_Image')
      cy.contains('Update_Knowledge_Image').click()
      newTags.forEach(tag => {
        cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
      })
    })
  })

  describe('อัปเดต Knowledge ประเภทไฟล์ Word', () => {
    it('สามารถอัปเดตแท็กของ Knowledge ที่สร้างด้วยไฟล์ Word', () => {
      // ค้นหา Knowledge ที่ต้องการอัปเดต
      cy.searchKnowledge('Update_Knowledge_Word')
      cy.contains('Update_Knowledge_Word').should('exist')
      
      // อัปเดตแท็ก
      const newTags = ['Updated', 'Word', 'DOCX', 'Test', `Word_${new Date().getTime()}`]
      cy.updateKnowledgeTags('Update_Knowledge_Word', newTags)
      
      // ตรวจสอบว่าอัปเดตสำเร็จ
      cy.searchKnowledge('Update_Knowledge_Word')
      cy.contains('Update_Knowledge_Word').click()
      newTags.forEach(tag => {
        cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
      })
    })
  })

  describe('อัปเดต Knowledge ประเภท URL', () => {
    it('สามารถอัปเดตแท็กของ Knowledge ที่สร้างด้วย URL', () => {
      // ค้นหา Knowledge ที่ต้องการอัปเดต
      cy.searchKnowledge('Update_Knowledge_URL')
      cy.contains('Update_Knowledge_URL').should('exist')
      
      // อัปเดตแท็ก
      const newTags = ['Updated', 'URL', 'Test', `URL_${new Date().getTime()}`]
      cy.updateKnowledgeTags('Update_Knowledge_URL', newTags)
      
      // ตรวจสอบว่าอัปเดตสำเร็จ
      cy.searchKnowledge('Update_Knowledge_URL')
      cy.contains('Update_Knowledge_URL').click()
      newTags.forEach(tag => {
        cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
      })
    })
  })
}) 