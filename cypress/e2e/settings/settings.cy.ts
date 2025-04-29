describe('หน้าตั้งค่า', () => {
  beforeEach(() => {
    cy.login()
    cy.visitHost('/#/settings')
  })

  it('แสดงแท็บการตั้งค่าต่างๆ ได้อย่างถูกต้อง', () => {
    cy.get('[data-cy="settings-tabs"]').should('be.visible')
    cy.get('[data-cy="tab-profile"]').should('be.visible')
    cy.get('[data-cy="tab-security"]').should('be.visible')
    cy.get('[data-cy="tab-notifications"]').should('be.visible')
  })

  it('สามารถเปลี่ยนแท็บได้', () => {
    cy.get('[data-cy="tab-security"]').click()
    cy.get('[data-cy="security-settings"]').should('be.visible')
    
    cy.get('[data-cy="tab-notifications"]').click()
    cy.get('[data-cy="notification-settings"]').should('be.visible')
  })

  it('สามารถแก้ไขข้อมูลโปรไฟล์ได้', () => {
    cy.get('[data-cy="tab-profile"]').click()
    cy.get('[data-cy="profile-form"]').should('be.visible')
    cy.get('[data-cy="display-name-input"]').clear().type('Updated Admin')
    cy.get('[data-cy="save-profile-button"]').click()
    cy.get('[data-cy="toast-success"]').should('be.visible')
  })

  it('สามารถเปลี่ยนรหัสผ่านได้', () => {
    cy.get('[data-cy="tab-security"]').click()
    cy.get('[data-cy="change-password-form"]').should('be.visible')
    cy.get('[data-cy="current-password-input"]').type('password123')
    cy.get('[data-cy="new-password-input"]').type('newPassword123')
    cy.get('[data-cy="confirm-password-input"]').type('newPassword123')
    cy.get('[data-cy="change-password-button"]').click()
    cy.get('[data-cy="toast-success"]').should('be.visible')
  })
}) 