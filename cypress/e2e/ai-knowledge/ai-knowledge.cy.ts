import { pdfTestCases, csvTestCases, xlsxTestCases, pngTestCases, docxTestCases } from './constants/ai-knowledge.constants'

describe('AI Knowledge - การทดสอบทั้งหมด', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/knowledge')
  })

  describe('การสร้าง Knowledge', () => {
    describe('ไฟล์ PDF', () => {
      it('สามารถสร้าง Knowledge ด้วยไฟล์ PDF พื้นฐาน', () => {
        cy.createKnowledge_File('pdf.basic')
        
        // ตรวจสอบว่าสร้างสำเร็จ
        cy.url().should('include', '/#/knowledge')
        cy.searchKnowledge(pdfTestCases.basic.knowledgeName)
        cy.contains(pdfTestCases.basic.knowledgeName).should('be.visible')
      })

    //   it('สามารถสร้าง Knowledge ด้วยไฟล์ PDF และขนาดชั้นข้อมูลใหญ่', () => {
    //     cy.createKnowledge_File('pdf.withLargeChunkSize')
        
    //     // ตรวจสอบว่าสร้างสำเร็จ
    //     cy.url().should('include', '/#/knowledge')
    //     cy.searchKnowledge(pdfTestCases.withLargeChunkSize.knowledgeName)
    //     cy.contains(pdfTestCases.withLargeChunkSize.knowledgeName).should('be.visible')
    //   })
    })

    describe('ไฟล์ CSV', () => {
      it('สามารถสร้าง Knowledge ด้วยไฟล์ CSV พื้นฐาน', () => {
        cy.createKnowledge_File('csv.basic')
        
        // ตรวจสอบว่าสร้างสำเร็จ
        cy.url().should('include', '/#/knowledge')
        cy.searchKnowledge(csvTestCases.basic.knowledgeName)
        cy.contains(csvTestCases.basic.knowledgeName).should('be.visible')
      })

      it('สามารถสร้าง Knowledge ด้วยชื่อที่กำหนดเอง', () => {
        cy.createKnowledge_File('csv.withCustomName')
        
        // ตรวจสอบว่าสร้างสำเร็จ
        cy.url().should('include', '/#/knowledge')
        cy.searchKnowledge(csvTestCases.withCustomName.knowledgeName)
        cy.contains(csvTestCases.withCustomName.knowledgeName).should('be.visible')
      })
    })

//     describe('ไฟล์ Excel', () => {
//       it('สามารถสร้าง Knowledge ด้วยไฟล์ Excel พื้นฐาน', () => {
//         cy.createKnowledge_File('xlsx.basic')
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge(xlsxTestCases.basic.knowledgeName)
//         cy.contains(xlsxTestCases.basic.knowledgeName).should('be.visible')
//       })

//       it('สามารถสร้าง Knowledge ด้วยแท็กที่กำหนดเอง', () => {
//         cy.createKnowledge_File('xlsx.withCustomTags')
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge(xlsxTestCases.withCustomTags.knowledgeName)
//         cy.contains(xlsxTestCases.withCustomTags.knowledgeName).should('be.visible')
//       })
//     })

//     describe('ไฟล์รูปภาพ PNG', () => {
//       it('สามารถสร้าง Knowledge ด้วยไฟล์รูปภาพ PNG', () => {
//         cy.createKnowledge_File('png.basic')
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge(pngTestCases.basic.knowledgeName)
//         cy.contains(pngTestCases.basic.knowledgeName).should('be.visible')
//       })
//     })

//     describe('ไฟล์ Word', () => {
//       it('สามารถสร้าง Knowledge ด้วยไฟล์ Word พื้นฐาน', () => {
//         cy.createKnowledge_File('docx.basic')
        
//         // ตรวจสอบว่าสร้างสำเร็จ
//         cy.url().should('include', '/#/knowledge')
//         cy.searchKnowledge(docxTestCases.basic.knowledgeName)
//         cy.contains(docxTestCases.basic.knowledgeName).should('be.visible')
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