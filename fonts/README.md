# Individual Font Files

This directory contains the individual font files that can be used directly with pdfmake by referencing their CDN URLs.

## Available Fonts

### Base Fonts
- `NotoSansArabic-Regular.ttf` - Arabic regular
- `NotoSansArabic-Bold.ttf` - Arabic bold
- `NotoSansDevanagari-Regular.ttf` - Devanagari regular
- `NotoSansDevanagari-Bold.ttf` - Devanagari bold
- `NotoSansHebrew-Regular.ttf` - Hebrew regular
- `NotoSansHebrew-Bold.ttf` - Hebrew bold
- `NotoSansThai-Regular.ttf` - Thai regular
- `NotoSansThai-Bold.ttf` - Thai bold
- `Roboto-Regular.ttf` - Roboto regular
- `Roboto-Medium.ttf` - Roboto medium (bold)
- `Roboto-Italic.ttf` - Roboto italic
- `Roboto-MediumItalic.ttf` - Roboto medium italic

### CJK Fonts
- `NotoSansCJK-Regular.ttf` - CJK regular
- `NotoSansCJK-Medium.ttf` - CJK medium (bold)

## Usage

Instead of using VFS files, you can reference these fonts directly in your pdfmake configuration:

```javascript
const fonts = {
  Roboto: {
    normal: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/Roboto-Regular.ttf',
    bold: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/Roboto-Medium.ttf',
    italics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/Roboto-Italic.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/Roboto-MediumItalic.ttf'
  },
  NotoSansArabic: {
    normal: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansArabic-Regular.ttf',
    bold: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansArabic-Bold.ttf',
    italics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansArabic-Regular.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansArabic-Bold.ttf'
  },
  NotoSansDevanagari: {
    normal: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansDevanagari-Regular.ttf',
    bold: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansDevanagari-Bold.ttf',
    italics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansDevanagari-Regular.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansDevanagari-Bold.ttf'
  },
  NotoSansHebrew: {
    normal: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansHebrew-Regular.ttf',
    bold: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansHebrew-Bold.ttf',
    italics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansHebrew-Regular.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansHebrew-Bold.ttf'
  },
  NotoSansThai: {
    normal: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansThai-Regular.ttf',
    bold: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansThai-Bold.ttf',
    italics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansThai-Regular.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansThai-Bold.ttf'
  },
  NotoSansCJK: {
    normal: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansCJK-Regular.ttf',
    bold: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansCJK-Medium.ttf',
    italics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansCJK-Regular.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansCJK-Medium.ttf'
  }
};

// Use with pdfmake
const docDefinition = {
  content: [
    { text: 'Hello World - English', font: 'Roboto' },
    { text: 'مرحبا بالعالم - Arabic', font: 'NotoSansArabic' },
    { text: 'नमस्ते दुनिया - Hindi', font: 'NotoSansDevanagari' },
    { text: 'שלום עולם - Hebrew', font: 'NotoSansHebrew' },
    { text: 'สวัสดีชาวโลก - Thai', font: 'NotoSansThai' },
    { text: '你好世界 - Chinese', font: 'NotoSansCJK' }
  ],
  defaultStyle: {
    font: 'Roboto'
  }
};

pdfMake.createPdf(docDefinition, null, fonts).download('multilingual-document.pdf');
```

## Benefits of Direct Font URLs

1. **Smaller bundle size** - No need to include large VFS files
2. **Better caching** - Individual fonts can be cached separately
3. **Selective loading** - Only load the fonts you need
4. **Easier maintenance** - Update individual fonts without rebuilding VFS
5. **Better performance** - Fonts load on-demand

## CDN URLs

All fonts are available via jsDelivr CDN:
- Base URL: `https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/`
- Example: `https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/Roboto-Regular.ttf`
