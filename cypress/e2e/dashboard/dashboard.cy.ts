describe('หน้าแดชบอร์ด', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/dashboard')
  })

  it('แสดงข้อมูลผู้ใช้ได้อย่างถูกต้อง', () => {
    cy.get('[data-cy="user-profile"]').should('be.visible')
    cy.get('[data-cy="user-name"]').should('contain', 'Admin')
  })

  it('แสดงเมนูนำทางได้อย่างถูกต้อง', () => {
    cy.get('[data-cy="nav-menu"]').should('be.visible')
    cy.get('[data-cy="nav-item-reports"]').should('be.visible')
    cy.get('[data-cy="nav-item-settings"]').should('be.visible')
    cy.get('[data-cy="nav-item-users"]').should('be.visible')
  })

  it('สามารถดูข้อมูลสรุปได้', () => {
    cy.get('[data-cy="summary-cards"]').should('be.visible')
    cy.get('[data-cy="summary-card-users"]').should('be.visible')
    cy.get('[data-cy="summary-card-projects"]').should('be.visible')
    cy.get('[data-cy="summary-card-tasks"]').should('be.visible')
  })

  it('สามารถออกจากระบบได้', () => {
    cy.get('[data-cy="logout-button"]').click()
    cy.url().should('include', 'login')
  })
}) 