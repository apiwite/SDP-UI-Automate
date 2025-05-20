// ***********************************************
// คำสั่งที่กำหนดเองสำหรับใช้ในการทดสอบ
// ***********************************************

/// <reference types="cypress" />
/// <reference path="./index.d.ts" />

// คำสั่งสำหรับเข้าถึง URL หลักของระบบ
Cypress.Commands.add('visitHost', (path = '') => {
  // const baseUrl = Cypress.env('BASE_URL')
  const baseUrl = Cypress.config('baseUrl')
  cy.log(`Base URL: ${baseUrl}`)
  
  if (!baseUrl) {
    throw new Error('BASE_URL is not defined in environment variables')
  }
  
  cy.visit(`${baseUrl}${path}`)
})

// คำสั่งสำหรับล็อกอิน
Cypress.Commands.add('login', (username = 'admin', password = 'admin') => {
  cy.visitHost('/#/login')
  cy.get('input[name="username"]').type(username)
  cy.get('input[name="password"]').type(password)
  cy.intercept('POST', '**/sdp/api/authentication').as('authAPI')
  cy.get('button[type="submit"]').click()
  cy.wait('@authAPI', { timeout: 60000 })
})

// คำสั่งสำหรับออกจากระบบ
Cypress.Commands.add('logout', () => {
  cy.get('[data-cy="logout-button"]').click()
})

// คำสั่งสำหรับตรวจสอบว่าอยู่ในหน้าที่ต้องการ
Cypress.Commands.add('shouldBeOnPage', (pageName: string) => {
  cy.url().should('include', pageName)
})

// คำสั่งสำหรับการนำทางไปยังเมนูต่างๆ
Cypress.Commands.add('navigateTo', (menuItem: string) => {
  cy.get(`[data-cy="nav-item-${menuItem}"]`).click()
})

// คำสั่งสำหรับตรวจสอบข้อความแจ้งเตือน
Cypress.Commands.add('checkToast', (type: string, message?: string) => {
  cy.get(`[data-cy="toast-${type}"]`).should('be.visible')
  if (message) {
    cy.get(`[data-cy="toast-${type}"]`).should('contain', message)
  }
})

// คำสั่งสำหรับตรวจสอบการโหลดข้อมูล
Cypress.Commands.add('waitForLoading', () => {
  cy.get('[data-cy="loading-indicator"]').should('not.exist')
})

// คำสั่งสำหรับสร้างข้อมูลทดสอบ
Cypress.Commands.add('createTestData', (dataType: string, data: any) => {
  cy.request({
    method: 'POST',
    url: `/api/${dataType}`,
    body: data,
  })
})

// คำสั่งสำหรับลบข้อมูลทดสอบ
Cypress.Commands.add('cleanupTestData', (dataType: string, id: string) => {
  cy.request({
    method: 'DELETE',
    url: `/api/${dataType}/${id}`,
  })
}) 