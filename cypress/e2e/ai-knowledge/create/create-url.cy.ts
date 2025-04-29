describe('การสร้าง AI Knowledge ด้วย URL', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/ai-knowledge')
  })

  it('สามารถสร้าง Knowledge ด้วย URL พื้นฐาน', () => {
    cy.createKnowledge_URL('basic')
    
    // ตรวจสอบว่าสร้างสำเร็จ
    cy.url().should('include', 'ai-knowledge')
    cy.searchKnowledge('URL_Knowledge_Basic')
    cy.contains('URL_Knowledge_Basic').should('be.visible')
  })

  it('สามารถสร้าง Knowledge ด้วย URL Wikipedia', () => {
    cy.createKnowledge_URL('wikipedia')
    
    // ตรวจสอบว่าสร้างสำเร็จ
    cy.url().should('include', 'ai-knowledge')
    cy.searchKnowledge('Wikipedia_Article')
    cy.contains('Wikipedia_Article').should('be.visible')
    
    // ตรวจสอบแท็ก
    cy.contains('Wikipedia_Article').click()
    cy.get('.knowledge-detail .mat-chip').contains('Wikipedia').should('exist')
    cy.get('.knowledge-detail .mat-chip').contains('URL').should('exist')
  })

  it('สามารถสร้าง Knowledge ด้วย URL gxHo', () => {
    cy.createKnowledge_URL('gxHo')
    
    // ตรวจสอบว่าสร้างสำเร็จ
    cy.url().should('include', 'ai-knowledge')
    cy.searchKnowledge('gxHo_Knowledge_URL')
    cy.contains('gxHo_Knowledge_URL').should('be.visible')
    
    // ตรวจสอบแท็ก
    cy.contains('gxHo_Knowledge_URL').click()
    cy.get('.knowledge-detail .mat-chip').contains('gxHo').should('exist')
    cy.get('.knowledge-detail .mat-chip').contains('URL').should('exist')
  })

  it('สามารถสร้าง Knowledge ด้วย URL สำหรับการอัปเดตต่อไป', () => {
    cy.createKnowledge_URL('forUpdate')
    
    // ตรวจสอบว่าสร้างสำเร็จ
    cy.url().should('include', 'ai-knowledge')
    cy.searchKnowledge('Update_Knowledge_URL')
    cy.contains('Update_Knowledge_URL').should('be.visible')
  })

  it('สามารถสร้าง Knowledge ด้วย URL สำหรับการลบต่อไป', () => {
    cy.createKnowledge_URL('forDelete')
    
    // ตรวจสอบว่าสร้างสำเร็จ
    cy.url().should('include', 'ai-knowledge')
    cy.searchKnowledge('Delete_Knowledge_URL')
    cy.contains('Delete_Knowledge_URL').should('be.visible')
  })
}) 