// ***********************************************************
// ไฟล์นี้จะโหลดอัตโนมัติก่อนที่จะรัน spec ทั้งหมด
// ***********************************************************

// นำเข้าคำสั่งที่สร้างไว้
import './commands'
import 'cypress-file-upload'

// นำเข้าคำสั่งและค่าคงที่ของ AI Knowledge
import '../e2e/ai-knowledge/commands/ai-knowledge.commands'
import '../e2e/ai-knowledge/constants/ai-knowledge.constants'

// เรากำหนด viewport ไว้ที่นี่เพื่อให้ใช้กับทุกการทดสอบ
// Note: ไม่ควรใช้ cy.viewport() ใน beforeEach ของแต่ละไฟล์ทดสอบอีก
beforeEach(() => {
  cy.viewport(1920, 1080)
})

// ข้ามข้อผิดพลาดที่อาจเกิดขึ้นบน UI ที่ไม่เกี่ยวข้องกับการทดสอบ
Cypress.on('uncaught:exception', (err, runnable) => {
  // ข้ามข้อผิดพลาดและให้ทดสอบดำเนินต่อไป
  return false
}) 