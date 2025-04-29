# Cypress Fixtures

โฟลเดอร์นี้ใช้สำหรับเก็บไฟล์ทดสอบสำหรับ Cypress

## ไฟล์ที่ต้องเตรียมสำหรับการทดสอบ AI Knowledge

- `gxho-test.pdf`: ไฟล์ PDF สำหรับการทดสอบกรณี gxHo
- `test-file.pdf`: ไฟล์ PDF ทั่วไปสำหรับการทดสอบกรณีพื้นฐาน

## วิธีการเพิ่มไฟล์ทดสอบใหม่

1. นำไฟล์ที่ต้องการทดสอบมาวางในโฟลเดอร์นี้
2. กำหนดค่าในไฟล์ `cypress/support/constants/ai-knowledge.ts` โดยเพิ่มกรณีทดสอบใหม่เข้าไปในตัวแปร `testCases`

```typescript
// ตัวอย่างการเพิ่มกรณีทดสอบใหม่
newTestCase: {
  knowledgeName: 'New_Test_Knowledge',
  fileName: 'new-test-file.pdf',
  tags: ['New_Test', 'Automated']
}
```

3. ในการทดสอบ สามารถเรียกใช้คำสั่งได้ดังนี้:

```typescript
// ใช้กรณีทดสอบใหม่
cy.createKnowledge_File('newTestCase')
``` 