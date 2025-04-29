describe('หน้าล็อกอิน', () => {
  beforeEach(() => {
    cy.visitHost('/#/login')
  })

  it('แสดงหน้าล็อกอินได้อย่างถูกต้อง', () => {
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('แสดงข้อความเตือนเมื่อกรอกข้อมูลไม่ครบ', () => {
    cy.get('button[type="submit"]').click()
    cy.get('[data-cy="error-message"]').should('be.visible')
  })

  it('ล็อกอินด้วยข้อมูลที่ถูกต้อง', () => {
    cy.get('input[name="username"]').type('admin')
    cy.get('input[name="password"]').type('admin')
    cy.intercept('POST', '**/sdp/api/authentication').as('authAPI')
    cy.get('button[type="submit"]').click()
    cy.wait('@authAPI', { timeout: 60000 })
    cy.url().should('include', 'dashboard')
  })
}) 