// กำหนดค่าเริ่มต้นสำหรับการทดสอบ AI Knowledge
export const defaultConfig = {
  knowledgeName: 'Test_pdf_cy',
  modelName: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
  fileReader: 'Simple Reader',
  fileName: 'XPeng_G6.pdf',
  fileType: 'application/pdf',
  tags: ['Test_by_cypress', 'PDF', 'sentence-transformers','1'],
  chunkSize: '200'
}

// กรณีทดสอบต่างๆ สำหรับไฟล์ PDF
export const pdfTestCases = {
  basic: {
    knowledgeName: 'Test_pdf_cy',
    fileName: 'XPeng_G6.pdf',
    fileType: 'application/pdf',
    tags: ['PDF', 'Test', 'Basic', '1']
  },
  withLargeChunkSize: {
    knowledgeName: 'PDF_Large_Chunk',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['PDF', 'Test', 'LargeChunk','2'],
    chunkSize: '500'
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_PDF',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Update', 'Test', 'PDF','3']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_PDF',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Delete', 'Test', 'PDF','4']
  }
}

// กรณีทดสอบต่างๆ สำหรับไฟล์ CSV
export const csvTestCases = {
  basic: {
    knowledgeName: 'CSV_Knowledge_Basic',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['CSV', 'Test', 'Basic','1']
  },
  withCustomName: {
    knowledgeName: 'Custom_Name_CSV',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['CSV', 'Test', 'CustomName','2']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_CSV',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Update', 'Test', 'CSV','3']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_CSV',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Delete', 'Test', 'CSV','4']
  }
}

// กรณีทดสอบต่างๆ สำหรับไฟล์ Excel (XLSX)
export const xlsxTestCases = {
  basic: {
    knowledgeName: 'Excel_Knowledge_Basic',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Excel', 'XLSX', 'Test', 'Basic']
  },
  withCustomTags: {
    knowledgeName: 'Excel_Custom_Tags',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Custom_Tag1', 'Custom_Tag2', 'Excel', 'XLSX']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_Excel',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Update', 'Test', 'Excel', 'XLSX']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_Excel',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Delete', 'Test', 'Excel', 'XLSX']
  }
}

// กรณีทดสอบต่างๆ สำหรับไฟล์รูปภาพ (PNG)
export const pngTestCases = {
  basic: {
    knowledgeName: 'Image_Knowledge_Basic',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Image', 'PNG', 'Test', 'Basic']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_Image',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Update', 'Test', 'Image', 'PNG']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_Image',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Delete', 'Test', 'Image', 'PNG']
  }
}

// กรณีทดสอบต่างๆ สำหรับไฟล์ Word (DOCX)
export const docxTestCases = {
  basic: {
    knowledgeName: 'Test_pdf_cy',
    fileName: 'XPeng_G6.pdf',
    fileType: 'application/pdf',
    tags: ['Word', 'DOCX', 'Test', 'Basic', 'XPeng_G6']
  },
  withCustomTags: {
    knowledgeName: 'Word_Custom_Tags',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Custom_Tag1', 'Custom_Tag2', 'Word', 'DOCX']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_Word',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Update', 'Test', 'Word', 'DOCX']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_Word',
    fileName: 'dummy.pdf',
    fileType: 'application/pdf',
    tags: ['Delete', 'Test', 'Word', 'DOCX']
  }
}

// รวมกรณีทดสอบทั้งหมดของไฟล์ประเภทต่างๆ
export const fileTestCases = {
  ...pdfTestCases,
  ...csvTestCases,
  ...xlsxTestCases,
  ...pngTestCases,
  ...docxTestCases,
  
//   // กรณีทดสอบทั่วไปที่ไม่ขึ้นกับประเภทไฟล์
//   withCustomName: {
//     knowledgeName: 'Custom_Name_Knowledge',
//     fileName: 'dummy.pdf',
//     fileType: 'application/pdf',
//     tags: ['PDF', 'CustomName', 'Test']
//   },
//   withCustomTags: {
//     knowledgeName: 'Test_AI_Knowledge_cy',
//     fileName: 'dummy.pdf',
//     fileType: 'application/pdf',
//     tags: ['Custom_Tag1', 'Custom_Tag2', 'Test']
//   },
//   gxHo: {
//     knowledgeName: 'gxHo_Knowledge_File',
//     fileName: 'dummy.pdf',
//     fileType: 'application/pdf',
//     tags: ['gxHo', 'Test', 'Automated', 'PDF']
//   }
}

// กรณีทดสอบต่างๆ สำหรับ AI Knowledge แบบ URL
export const urlTestCases = {
  basic: {
    knowledgeName: 'URL_Knowledge_Basic',
    url: 'https://example.com/document.pdf',
    fileType: 'application/pdf',
    tags: ['URL', 'Test', 'Basic']
  },
  wikipedia: {
    knowledgeName: 'Wikipedia_Article',
    url: 'https://th.wikipedia.org/wiki/หน้าหลัก',
    fileType: 'text/html',
    tags: ['URL', 'Wikipedia', 'Test']
  },
  gxHo: {
    knowledgeName: 'gxHo_Knowledge_URL',
    url: 'https://www.gxho.com/documentation',
    fileType: 'text/html',
    tags: ['gxHo', 'Test', 'Automated', 'URL']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_URL',
    url: 'https://example.com/update-document',
    fileType: 'text/html',
    tags: ['Update', 'Test', 'URL']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_URL',
    url: 'https://example.com/delete-document',
    fileType: 'text/html',
    tags: ['Delete', 'Test', 'URL']
  }
} 