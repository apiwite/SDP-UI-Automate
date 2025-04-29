/// <reference types="cypress" />
/// <reference types="cypress-file-upload" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * ไปยัง URL ของระบบโดยใช้ Base URL ที่กำหนด
     * @example cy.visitHost('/#/dashboard')
     */
    visitHost(path?: string): Chainable<void>

    /**
     * ล็อกอินเข้าสู่ระบบ
     * @example cy.login()
     * @example cy.login('admin', 'admin')
     */
    login(username?: string, password?: string): Chainable<void>

    /**
     * ออกจากระบบ
     * @example cy.logout()
     */
    logout(): Chainable<void>

    /**
     * ตรวจสอบว่าอยู่ในหน้าที่ต้องการ
     * @example cy.shouldBeOnPage('dashboard')
     */
    shouldBeOnPage(pageName: string): Chainable<void>

    /**
     * นำทางไปยังเมนูต่างๆ
     * @example cy.navigateTo('users')
     */
    navigateTo(menuItem: string): Chainable<void>

    /**
     * ตรวจสอบข้อความแจ้งเตือน
     * @example cy.checkToast('success')
     * @example cy.checkToast('error', 'ไม่สามารถบันทึกข้อมูลได้')
     */
    checkToast(type: string, message?: string): Chainable<void>

    /**
     * รอให้การโหลดข้อมูลเสร็จสิ้น
     * @example cy.waitForLoading()
     */
    waitForLoading(): Chainable<void>

    /**
     * สร้างข้อมูลทดสอบผ่าน API
     * @example cy.createTestData('users', { name: 'Test User' })
     */
    createTestData(dataType: string, data: any): Chainable<void>

    /**
     * ลบข้อมูลทดสอบผ่าน API
     * @example cy.cleanupTestData('users', '123')
     */
    cleanupTestData(dataType: string, id: string): Chainable<void>

    /**
     * ตรวจสอบว่าไฟล์มีอยู่ใน fixtures
     * @example cy.checkFixtureFileExists('test.pdf')
     */
    checkFixtureFileExists(fileName: string): Chainable<boolean>

    /**
     * เริ่มการสร้าง Knowledge
     * @example cy.startCreateKnowledge()
     */
    startCreateKnowledge(): Chainable<boolean>

    /**
     * กรอกข้อมูล Knowledge
     * @example cy.fillKnowledgeInfo('Test Knowledge', ['tag1', 'tag2'])
     */
    fillKnowledgeInfo(knowledgeName?: string, tags?: string[]): Chainable<boolean>

    /**
     * อัพโหลดไฟล์ Knowledge
     * @example cy.uploadKnowledgeFile('test.pdf', 'application/pdf')
     */
    uploadKnowledgeFile(fileName?: string, fileType?: string): Chainable<boolean>

    /**
     * กรอก URL สำหรับ Knowledge
     * @example cy.inputKnowledgeUrl('https://example.com/doc.pdf', 'application/pdf')
     */
    inputKnowledgeUrl(url?: string, fileType?: string): Chainable<boolean>

    /**
     * เลือกโมเดลสำหรับ Knowledge
     * @example cy.selectKnowledgeModel('model-name')
     */
    selectKnowledgeModel(modelName?: string): Chainable<boolean>

    /**
     * กำหนดค่า Chunking
     * @example cy.configureChunking('200')
     */
    configureChunking(chunkSize?: string): Chainable<boolean>

    /**
     * จบการสร้าง Knowledge
     * @example cy.finalizeKnowledge(['tag1', 'tag2'])
     */
    finalizeKnowledge(tags?: string[]): Chainable<boolean>

    /**
     * สร้าง Knowledge แบบครบวงจรด้วยไฟล์
     * @example cy.createKnowledge_File()
     * @example cy.createKnowledge_File('gxHo')
     * @example cy.createKnowledge_File({ knowledgeName: 'Custom Name' })
     */
    createKnowledge_File(options?: any): Chainable<void>

    /**
     * สร้าง Knowledge แบบครบวงจรด้วย URL
     * @example cy.createKnowledge_URL()
     * @example cy.createKnowledge_URL('gxHo')
     * @example cy.createKnowledge_URL({ url: 'https://example.com' })
     */
    createKnowledge_URL(options?: any): Chainable<void>

    /**
     * ค้นหา Knowledge ตามชื่อ
     * @example cy.searchKnowledge('Test Knowledge')
     */
    searchKnowledge(knowledgeName: string): Chainable<boolean>

    /**
     * เปิดฟอร์มแก้ไข Knowledge
     * @example cy.openKnowledgeEditForm('Test Knowledge')
     */
    openKnowledgeEditForm(knowledgeName: string): Chainable<boolean>

    /**
     * อัปเดต tags ของ Knowledge
     * @example cy.updateKnowledgeTags('Test Knowledge', ['new-tag1', 'new-tag2'])
     */
    updateKnowledgeTags(knowledgeName: string, newTags: string[]): Chainable<boolean>

    /**
     * ลบ Knowledge
     * @example cy.deleteKnowledge('Test Knowledge')
     */
    deleteKnowledge(knowledgeName: string): Chainable<boolean>

    /**
     * อัพโหลดไฟล์
     * @example cy.uploadFile('test.pdf')
     */
    uploadFile(fileName: string): Chainable<boolean>
  }
} 