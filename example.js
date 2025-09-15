// Node.js example for using pdfmake-font-vfs
// Make sure to install pdfmake: npm install pdfmake

const PdfPrinter = require('pdfmake/src/printer');
const vfsFonts = require('./vfs_fonts-base'); // or vfs_fonts-full for CJK support

// Create printer with VFS fonts
const printer = new PdfPrinter({
    Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
    },
    NotoSansArabic: {
        normal: 'NotoSansArabic-Regular.ttf',
        bold: 'NotoSansArabic-Bold.ttf',
        italics: 'NotoSansArabic-Regular.ttf',
        bolditalics: 'NotoSansArabic-Bold.ttf'
    },
    NotoSansDevanagari: {
        normal: 'NotoSansDevanagari-Regular.ttf',
        bold: 'NotoSansDevanagari-Bold.ttf',
        italics: 'NotoSansDevanagari-Regular.ttf',
        bolditalics: 'NotoSansDevanagari-Bold.ttf'
    },
    NotoSansHebrew: {
        normal: 'NotoSansHebrew-Regular.ttf',
        bold: 'NotoSansHebrew-Bold.ttf',
        italics: 'NotoSansHebrew-Regular.ttf',
        bolditalics: 'NotoSansHebrew-Bold.ttf'
    },
    NotoSansThai: {
        normal: 'NotoSansThai-Regular.ttf',
        bold: 'NotoSansThai-Bold.ttf',
        italics: 'NotoSansThai-Regular.ttf',
        bolditalics: 'NotoSansThai-Bold.ttf'
    }
}, null, vfsFonts);

// If using full fonts with CJK support, add:
// NotoSansCJK: {
//     normal: 'NotoSansCJK-Regular.ttf',
//     bold: 'NotoSansCJK-Medium.ttf',
//     italics: 'NotoSansCJK-Regular.ttf',
//     bolditalics: 'NotoSansCJK-Medium.ttf'
// }

// Document definition
const docDefinition = {
    content: [
        { text: 'Multilingual PDF Example', style: 'header' },
        { text: '\n' },
        { text: 'English: Hello World!', font: 'Roboto' },
        { text: 'Arabic: مرحبا بالعالم!', font: 'NotoSansArabic' },
        { text: 'Hindi: नमस्ते दुनिया!', font: 'NotoSansDevanagari' },
        { text: 'Hebrew: שלום עולם!', font: 'NotoSansHebrew' },
        { text: 'Thai: สวัสดีชาวโลก!', font: 'NotoSansThai' },
        { text: '\n' },
        { text: 'Styled Examples:', style: 'subheader' },
        { 
            text: 'Bold Arabic Text', 
            font: 'NotoSansArabic',
            bold: true
        },
        { 
            text: 'نص عربي عريض', 
            font: 'NotoSansArabic',
            bold: true
        },
        { 
            text: 'Bold Hindi Text', 
            font: 'NotoSansDevanagari',
            bold: true
        },
        { 
            text: 'हिंदी में मोटा टेक्स्ट', 
            font: 'NotoSansDevanagari',
            bold: true
        }
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            font: 'Roboto'
        },
        subheader: {
            fontSize: 14,
            bold: true,
            font: 'Roboto'
        }
    },
    defaultStyle: {
        fontSize: 12,
        font: 'Roboto'
    }
};

// Generate PDF
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(require('fs').createWriteStream('multilingual-example.pdf'));
pdfDoc.end();

console.log('PDF generated successfully: multilingual-example.pdf');
