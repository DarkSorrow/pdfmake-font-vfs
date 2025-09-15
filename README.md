# PDFMake Font VFS

A comprehensive collection of Virtual File System (VFS) fonts for [pdfmake](https://github.com/bpampuch/pdfmake) with support for multiple languages including Arabic, Devanagari, Hebrew, Thai, CJK, and Roboto.

## Overview

This package provides pre-built VFS font files that can be used with pdfmake to generate PDFs with proper font support for various languages and scripts. The fonts are embedded as base64-encoded data, eliminating the need to host font files separately.

## Available Fonts

### Base Fonts (`vfs_fonts-base.js`)
- **NotoSansArabic**: Arabic script support
- **NotoSansDevanagari**: Devanagari script support (Hindi, Sanskrit, etc.)
- **NotoSansHebrew**: Hebrew script support
- **NotoSansThai**: Thai script support
- **Roboto**: Latin script support

### Full Fonts (`vfs_fonts-full.js`)
Includes all base fonts plus:
- **NotoSansCJK**: Comprehensive CJK (Chinese, Japanese, Korean) support

## Installation

### Via CDN (Recommended)

#### Hybrid Approach (Recommended)
Use VFS for base fonts and direct URLs for CJK fonts:

```html
<!-- Include base fonts via VFS -->
<script src="https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@latest/vfs_fonts-base.js"></script>
```

```javascript
// Add CJK fonts as direct URLs
const cjkFonts = {
  NotoSansCJK: {
    normal: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansCJK-Regular.ttf',
    bold: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansCJK-Medium.ttf',
    italics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansCJK-Regular.ttf',
    bolditalics: 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/fonts/NotoSansCJK-Medium.ttf'
  }
};

// Merge with VFS fonts
const allFonts = Object.assign({}, vfs, cjkFonts);
```

#### Individual Font Files (All URLs)
Reference all font files directly in your pdfmake configuration:

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
  }
  // ... other fonts
};
```

#### VFS Files Only
If you prefer the traditional VFS approach:

```html
<script src="https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@latest/vfs_fonts-base.js"></script>
<script src="https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@latest/vfs_fonts-full.js"></script>
```

### Via NPM
```bash
npm install pdfmake-font-vfs
```

## Usage

### Basic Setup

#### Hybrid Approach (Recommended)

1. Include pdfmake and base fonts via VFS:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js"></script>
<script src="https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@latest/vfs_fonts-base.js"></script>
```

2. Configure fonts and load base fonts:
```javascript
const CDN_BASE_URL = 'https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/';
const fonts = {
  'NotoSansArabic': {
    normal: 'NotoSansArabic-Regular.ttf',
    bold: 'NotoSansArabic-Bold.ttf',
    italics: 'NotoSansArabic-Regular.ttf',
    bolditalics: 'NotoSansArabic-Bold.ttf'
  },
  'NotoSansDevanagari': {
    normal: 'NotoSansDevanagari-Regular.ttf',
    bold: 'NotoSansDevanagari-Bold.ttf',
    italics: 'NotoSansDevanagari-Regular.ttf',
    bolditalics: 'NotoSansDevanagari-Bold.ttf'
  },
  'NotoSansHebrew': {
    normal: 'NotoSansHebrew-Regular.ttf',
    bold: 'NotoSansHebrew-Bold.ttf',
    italics: 'NotoSansHebrew-Regular.ttf',
    bolditalics: 'NotoSansHebrew-Bold.ttf'
  },
  'NotoSansThai': {
    normal: 'NotoSansThai-Regular.ttf',
    bold: 'NotoSansThai-Bold.ttf',
    italics: 'NotoSansThai-Regular.ttf',
    bolditalics: 'NotoSansThai-Bold.ttf'
  },
  'Roboto': {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf'
  }
};

// Load base fonts from VFS
const loadBaseFonts = async () => {
  try {
    const baseModule = await import(`${CDN_BASE_URL}vfs_fonts-base.js`);
    pdfMake.vfs = baseModule.vfs;
  } catch (error) {
    console.error('Failed to load base fonts from CDN:', error);
  }
};

// Add CJK fonts as direct URLs when needed
if (supportCJK) {
  fonts['NotoSansCJK'] = {
    normal: `${CDN_BASE_URL}fonts/NotoSansCJK-Regular.ttf`,
    bold: `${CDN_BASE_URL}fonts/NotoSansCJK-Medium.ttf`,
    italics: `${CDN_BASE_URL}fonts/NotoSansCJK-Regular.ttf`,
    bolditalics: `${CDN_BASE_URL}fonts/NotoSansCJK-Medium.ttf`
  };
}
```

**Note:** Base fonts are loaded from VFS, CJK fonts use direct URLs only when needed.


### Font Configuration

Use the fonts in your document definition by passing the fonts object to pdfMake.createPdf():

```javascript
const docDefinition = {
  content: [
    {
      text: 'Hello World - English',
      font: 'Roboto'
    },
    {
      text: 'مرحبا بالعالم - Arabic',
      font: 'NotoSansArabic'
    },
    {
      text: 'नमस्ते दुनिया - Hindi',
      font: 'NotoSansDevanagari'
    },
    {
      text: 'שלום עולם - Hebrew',
      font: 'NotoSansHebrew'
    },
    {
      text: 'สวัสดีชาวโลก - Thai',
      font: 'NotoSansThai'
    },
    {
      text: '你好世界 - Chinese',
      font: 'NotoSansCJK'
    }
  ],
  defaultStyle: {
    font: 'Roboto'
  }
};

// For hybrid approach, use allFonts (VFS + CJK URLs)
pdfMake.createPdf(docDefinition, null, allFonts).download('multilingual-document.pdf');

// For all direct URLs approach, use fonts
// pdfMake.createPdf(docDefinition, null, fonts).download('multilingual-document.pdf');
```

### Available Font Styles

Each font that isn't in roboto do not support italics:
- `normal`: Regular weight
- `bold`: Bold weight

Example:
```javascript
{
  text: 'Bold Arabic Text',
  font: 'NotoSansArabic',
  bold: true
}
```

## Font Details

### NotoSansArabic
- **Script**: Arabic
- **Languages**: Arabic, Persian, Urdu, and other Arabic-script languages
- **Styles**: Regular, Bold

### NotoSansDevanagari
- **Script**: Devanagari
- **Languages**: Hindi, Sanskrit, Marathi, Nepali, and other Devanagari-script languages
- **Styles**: Regular, Bold

### NotoSansHebrew
- **Script**: Hebrew
- **Languages**: Hebrew, Yiddish
- **Styles**: Regular, Bold

### NotoSansThai
- **Script**: Thai
- **Languages**: Thai
- **Styles**: Regular, Bold

### NotoSansCJK
- **Script**: CJK (Chinese, Japanese, Korean)
- **Languages**: Chinese (Simplified & Traditional), Japanese, Korean
- **Styles**: Regular, Medium (used for bold)

### Roboto
- **Script**: Latin
- **Languages**: English and other Latin-script languages
- **Styles**: Regular, Medium, Italic, Medium Italic

## File Sizes

- `vfs_fonts-base.js`: ~2.5MB (without CJK fonts)

Choose the base version if you don't need CJK support to reduce file size.

## Browser Support

This package works with all modern browsers that support pdfmake:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is licensed under the MIT License. The fonts themselves are licensed under the SIL Open Font License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Changelog

### 0.2.0
- Initial release
- Added NotoSansArabic, NotoSansDevanagari, NotoSansHebrew, NotoSansThai fonts
- Added NotoSansCJK for comprehensive CJK support
- Added Roboto for Latin script support

## Support

If you encounter any issues or have questions, please file an issue on the [GitHub repository](https://github.com/Darksorrow/pdfmake-font-vfs/issues).

## Related Projects

- [pdfmake](https://github.com/bpampuch/pdfmake) - The main PDF generation library
- [Noto Fonts](https://fonts.google.com/noto) - The source fonts used in this package
