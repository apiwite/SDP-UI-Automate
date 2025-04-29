describe('หน้าฐานความรู้', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/knowledge')
  })

  it('แสดงหน้าฐานความรู้ได้อย่างถูกต้อง', () => {
    cy.get('[data-cy="knowledge-page"]').should('be.visible')
    cy.get('[data-cy="knowledge-header"]').should('be.visible')
    cy.get('[data-cy="knowledge-list"]').should('be.visible')
  })

  it('สามารถค้นหาบทความในฐานความรู้ได้', () => {
    cy.get('[data-cy="search-input"]').type('คู่มือการใช้งาน')
    cy.get('[data-cy="search-button"]').click()
    cy.get('[data-cy="knowledge-item"]').should('contain', 'คู่มือการใช้งาน')
  })

  it('สามารถเปิดดูรายละเอียดบทความได้', () => {
    cy.get('[data-cy="knowledge-item"]').first().click()
    cy.get('[data-cy="knowledge-detail"]').should('be.visible')
  })

  it('สามารถดาวน์โหลดเอกสารได้', () => {
    cy.get('[data-cy="knowledge-item"]').first().click()
    cy.get('[data-cy="download-button"]').should('be.visible').click()
    // ตรวจสอบว่ามีการดาวน์โหลดเอกสาร
    cy.get('[data-cy="download-success"]').should('be.visible')
  })
}) 