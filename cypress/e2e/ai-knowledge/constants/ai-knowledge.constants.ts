// กำหนดค่าเริ่มต้นสำหรับการทดสอบ AI Knowledge
export const defaultConfig = {
  knowledgeName: 'Test_pdf_cy',
  modelName: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
  embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
  fileReader: 'Simple Reader',
  fileName: 'pdf/XPeng_G6.pdf',
  fileType: 'application/pdf',
  tags: ['Test_by_cypress', 'PDF', 'sentence-transformers','1'],
  chunkSize: '200'
}

// กรณีทดสอบต่างๆ สำหรับไฟล์ PDF
export const pdfTestCases = {
  basic: {
    knowledgeName: 'PDF_Knowledge_Basic',
    fileName: 'pdf/XPeng_G6.pdf',
    fileType: 'application/pdf',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['PDF', 'Test', 'Basic']
  },
  ultimaker:{
    knowledgeName: 'PDF_Knowledge_ultimaker',
    fileName: 'pdf/ultimaker.pdf',
    fileType: 'application/pdf',
    embeddingModel: 'text-embedding-ada-002',
    tags: ['PDF', 'Test', 'ultimaker']

  },
  withLargeChunkSize: {
    knowledgeName: 'PDF_Large_Chunk',
    fileName: 'pdf/XPeng_G6.pdf',
    fileType: 'application/pdf',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['PDF', 'Test', 'LargeChunk'],
    chunkSize: '500'
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_PDF',
    fileName: 'pdf/XPeng_G6.pdf',
    fileType: 'application/pdf',
    embeddingModel: 'intfloat/multilingual-e5-base',
    tags: ['Update', 'Test', 'PDF']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_PDF',
    fileName: 'pdf/XPeng_G6.pdf',
    fileType: 'application/pdf',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Delete', 'Test', 'PDF']
  }
}

// กรณีทดสอบต่างๆ สำหรับไฟล์ CSV
export const csvTestCases = {
  basic: {
    knowledgeName: 'CSV_Knowledge_Basic',
    fileName: 'csv/day.csv',
    fileType: 'text/csv',
    embeddingModel: 'intfloat/multilingual-e5-base',
    tags: ['CSV', 'Test', 'Basic']
  },
  withCustomName: {
    knowledgeName: 'Custom_Name_CSV',
    fileName: 'csv/day.csv',
    fileType: 'text/csv',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['CSV', 'Test', 'CustomName']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_CSV',
    fileName: 'csv/day.csv',
    fileType: 'text/csv',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Update', 'Test', 'CSV']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_CSV',
    fileName: 'csv/day.csv',
    fileType: 'text/csv',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Delete', 'Test', 'CSV']
  }
}

// กรณีทดสอบต่างๆ สำหรับไฟล์ Excel (XLSX)
export const xlsxTestCases = {
  basic: {
    knowledgeName: 'Excel_Knowledge_Basic',
    fileName: 'xlsx/Comparison_table-SPEC-elevator.xlsx',
    fileType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Excel', 'XLSX', 'Test', 'Basic']
  },
  withCustomTags: {
    knowledgeName: 'Excel_Custom_Tags',
    fileName: 'xlsx/Comparison_table-SPEC-elevator.xlsx',
    fileType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Custom_Tag1', 'Custom_Tag2', 'Excel', 'XLSX']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_Excel',
    fileName: 'xlsx/Comparison_table-SPEC-elevator.xlsx',
    fileType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Update', 'Test', 'Excel', 'XLSX']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_Excel',
    fileName: 'xlsx/Comparison_table-SPEC-elevator.xlsx',
    fileType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Delete', 'Test', 'Excel', 'XLSX']
  }
}

// กรณีทดสอบต่างๆ สำหรับไฟล์รูปภาพ (PNG)
export const pngTestCases = {
  basic: {
    knowledgeName: 'Image_Knowledge_Basic',
    fileName: 'png/ภาพถ่ายหน้าจอ 2568-04-28 เวลา 10.00.54.png',
    fileType: 'image/png',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Image', 'PNG', 'Test', 'Basic']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_Image',
    fileName: 'png/ภาพถ่ายหน้าจอ 2568-04-28 เวลา 10.00.54.png',
    fileType: 'image/png',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Update', 'Test', 'Image', 'PNG']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_Image',
    fileName: 'png/ภาพถ่ายหน้าจอ 2568-04-28 เวลา 10.00.54.png',
    fileType: 'image/png',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Delete', 'Test', 'Image', 'PNG']
  }
}

// กรณีทดสอบต่างๆ สำหรับไฟล์ Word (DOCX)
export const docxTestCases = {
  basic: {
    knowledgeName: 'Word_Knowledge_Basic',
    fileName: 'docx/ตารางเปรียบเทียบโครงการ.docx',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Word', 'DOCX', 'Test', 'Basic']
  },
  withCustomTags: {
    knowledgeName: 'Word_Custom_Tags',
    fileName: 'docx/ตารางวันหยุดประจำปี2025 ของบริษัท แยกตามประเทศ.docx',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Custom_Tag1', 'Custom_Tag2', 'Word', 'DOCX']
  },
  forUpdate: {
    knowledgeName: 'Update_Knowledge_Word',
    fileName: 'docx/256712111052494664190.docx',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
    tags: ['Update', 'Test', 'Word', 'DOCX']
  },
  forDelete: {
    knowledgeName: 'Delete_Knowledge_Word',
    fileName: 'docx/256712111052494664190.docx',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    embeddingModel: 'sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2',
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