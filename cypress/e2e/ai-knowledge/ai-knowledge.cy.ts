describe('AI Knowledge - การทดสอบทั้งหมด', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/knowledge')
  })

  describe('การสร้าง Knowledge', () => {
    describe('ไฟล์ PDF', () => {
      it('สามารถสร้าง Knowledge ด้วยไฟล์ PDF พื้นฐาน', () => {
        cy.createKnowledge_File()
        
        // ตรวจสอบว่าสร้างสำเร็จ
        cy.url().should('include', '/#/knowledge')
        cy.searchKnowledge('Test_pdf_cy')
        cy.contains('Test_pdf_cy').should('be.visible')
      })

      it('สามารถสร้าง Knowledge ด้วยไฟล์ PDF และขนาดชั้นข้อมูลใหญ่', () => {
        cy.createKnowledge_File('withLargeChunkSize')
        
        // ตรวจสอบว่าสร้างสำเร็จ
        cy.url().should('include', '/#/knowledge')
        cy.searchKnowledge('PDF_Large_Chunk')
        cy.contains('PDF_Large_Chunk').should('be.visible')
      })
    })

    describe('ไฟล์ CSV', () => {
      it('สามารถสร้าง Knowledge ด้วยไฟล์ CSV พื้นฐาน', () => {
        cy.createKnowledge_File('basic') // ใช้ชื่อเคส basic จาก csvTestCases
        
        // ตรวจสอบว่าสร้างสำเร็จ
        cy.url().should('include', '/#/knowledge')
        cy.searchKnowledge('CSV_Knowledge_Basic')
        cy.contains('CSV_Knowledge_Basic').should('be.visible')
      })

      it('สามารถสร้าง Knowledge ด้วยชื่อที่กำหนดเอง', () => {
        cy.createKnowledge_File('withCustomName')
        
        // ตรวจสอบว่าสร้างสำเร็จ
        cy.url().should('include', '/#/knowledge')
        cy.searchKnowledge('Custom_Name_Knowledge')
        cy.contains('Custom_Name_Knowledge').should('be.visible')
      })
    })

//     describe('ไฟล์ Excel', () => {
//       it('สามารถสร้าง Knowledge ด้วยไฟล์ Excel พื้นฐาน', () => {
//         cy.createKnowledge_File('basic') // ใช้ชื่อเคส basic จาก xlsxTestCases
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge('Excel_Knowledge_Basic')
//         cy.contains('Excel_Knowledge_Basic').should('be.visible')
//       })

//       it('สามารถสร้าง Knowledge ด้วยแท็กที่กำหนดเอง', () => {
//         cy.createKnowledge_File('withCustomTags')
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge('Test_AI_Knowledge_cy')
//         cy.contains('Test_AI_Knowledge_cy').should('be.visible')
//       })
//     })

//     describe('ไฟล์รูปภาพ PNG', () => {
//       it('สามารถสร้าง Knowledge ด้วยไฟล์รูปภาพ PNG', () => {
//         cy.createKnowledge_File('basic') // ใช้ชื่อเคส basic จาก pngTestCases
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge('Image_Knowledge_Basic')
//         cy.contains('Image_Knowledge_Basic').should('be.visible')
//       })
//     })

//     describe('ไฟล์ Word', () => {
//       it('สามารถสร้าง Knowledge ด้วยไฟล์ Word พื้นฐาน', () => {
//         cy.createKnowledge_File('basic') // ใช้ชื่อเคส basic จาก docxTestCases
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge('Test_pdf_cy')
//         cy.contains('Test_pdf_cy').should('be.visible')
//       })
//     })

//     describe('URL', () => {
//       it('สามารถสร้าง Knowledge ด้วย URL พื้นฐาน', () => {
//         cy.createKnowledge_URL('basic')
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge('URL_Knowledge_Basic')
//         cy.contains('URL_Knowledge_Basic').should('be.visible')
//       })

//       it('สามารถสร้าง Knowledge ด้วย URL จาก Wikipedia', () => {
//         cy.createKnowledge_URL('wikipedia')
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge('Wikipedia_Article')
//         cy.contains('Wikipedia_Article').should('be.visible')
//       })
    })
  })

//   describe('การอัปเดต Knowledge', () => {
//     describe('ไฟล์ PDF', () => {
//       it('สามารถอัปเดต Knowledge ที่สร้างด้วยไฟล์ PDF', () => {
//         // สร้าง Knowledge ก่อน
//         cy.createKnowledge_File('forUpdate')
        
//         // อัปเดตแท็ก
//         const newTags = ['Updated', 'PDF', 'Test', `PDF_${new Date().getTime()}`]
//         cy.updateKnowledgeTags('Update_Knowledge_PDF', newTags)
        
//         // ตรวจสอบว่าอัปเดตสำเร็จ
//         cy.searchKnowledge('Update_Knowledge_PDF')
//         cy.contains('Update_Knowledge_PDF').click()
//         newTags.forEach(tag => {
//           cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
//         })
//       })
//     })

//     describe('URL', () => {
//       it('สามารถอัปเดต Knowledge ที่สร้างด้วย URL', () => {
//         // สร้าง Knowledge ก่อน
//         cy.createKnowledge_URL('forUpdate')
        
//         // อัปเดตแท็ก
//         const newTags = ['Updated', 'URL', 'Test', `URL_${new Date().getTime()}`]
//         cy.updateKnowledgeTags('Update_Knowledge_URL', newTags)
        
//         // ตรวจสอบว่าอัปเดตสำเร็จ
//         cy.searchKnowledge('Update_Knowledge_URL')
//         cy.contains('Update_Knowledge_URL').click()
//         newTags.forEach(tag => {
//           cy.get('.knowledge-detail .mat-chip').contains(tag).should('exist')
//         })
//       })
//     })
//   })

//   describe('การลบ Knowledge', () => {
//     describe('ไฟล์ PDF', () => {
//       it('สามารถลบ Knowledge ที่สร้างด้วยไฟล์ PDF', () => {
//         // สร้าง Knowledge ก่อน
//         cy.createKnowledge_File('forDelete')
        
//         // ลบ Knowledge
//         cy.deleteKnowledge('Delete_Knowledge_PDF')
        
//         // ตรวจสอบว่าลบสำเร็จ
//         cy.searchKnowledge('Delete_Knowledge_PDF')
//         cy.contains('Delete_Knowledge_PDF').should('not.exist')
//       })
//     })

//     describe('URL', () => {
//       it('สามารถลบ Knowledge ที่สร้างด้วย URL', () => {
//         // สร้าง Knowledge ก่อน
//         cy.createKnowledge_URL('forDelete')
        
//         // ลบ Knowledge
//         cy.deleteKnowledge('Delete_Knowledge_URL')
        
//         // ตรวจสอบว่าลบสำเร็จ
//         cy.searchKnowledge('Delete_Knowledge_URL')
//         cy.contains('Delete_Knowledge_URL').should('not.exist')
//       })
//     })
//   })
// }) 