describe('หน้ารายการผู้ใช้', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/users')
  })

  it('แสดงรายการผู้ใช้ได้อย่างถูกต้อง', () => {
    cy.get('[data-cy="user-table"]').should('be.visible')
    cy.get('[data-cy="user-list-item"]').should('have.length.at.least', 1)
  })

  it('สามารถค้นหาผู้ใช้ได้', () => {
    cy.get('[data-cy="search-input"]').type('admin')
    cy.get('[data-cy="search-button"]').click()
    cy.get('[data-cy="user-list-item"]').should('contain', 'admin')
  })

  it('สามารถเปิดฟอร์มเพิ่มผู้ใช้ใหม่ได้', () => {
    cy.get('[data-cy="add-user-button"]').click()
    cy.get('[data-cy="add-user-form"]').should('be.visible')
  })

  it('สามารถเปิดดูรายละเอียดผู้ใช้ได้', () => {
    cy.get('[data-cy="user-list-item"]').first().find('[data-cy="view-user-button"]').click()
    cy.get('[data-cy="user-detail-modal"]').should('be.visible')
  })

  it('สามารถแก้ไขข้อมูลผู้ใช้ได้', () => {
    cy.get('[data-cy="user-list-item"]').first().find('[data-cy="edit-user-button"]').click()
    cy.get('[data-cy="edit-user-form"]').should('be.visible')
    cy.get('[data-cy="user-name-input"]').clear().type('Updated User')
    cy.get('[data-cy="save-user-button"]').click()
    cy.get('[data-cy="toast-success"]').should('be.visible')
  })
}) 