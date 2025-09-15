#!/usr/bin/env node

// Test script to verify VFS files work correctly
const fs = require('fs');
const path = require('path');

console.log('🧪 Testing PDFMake Font VFS files...\n');

// Test function to validate VFS file
function testVFSFile(filename) {
    console.log(`📁 Testing ${filename}...`);
    
    try {
        // Check if file exists
        if (!fs.existsSync(filename)) {
            console.error(`❌ File ${filename} not found`);
            return false;
        }
        
        // Check file size
        const stats = fs.statSync(filename);
        const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
        console.log(`   📊 File size: ${fileSizeInMB} MB`);
        
        // Test syntax by requiring the file
        const vfs = require(path.resolve(filename));
        
        // Check if it's a valid VFS object
        if (typeof vfs !== 'object' || vfs === null) {
            console.error(`❌ ${filename} does not export a valid VFS object`);
            return false;
        }
        
        // Count font files
        const fontCount = Object.keys(vfs).length;
        console.log(`   🔤 Font files: ${fontCount}`);
        
        // Check for expected fonts
        const expectedFonts = {
            'vfs_fonts-base.js': [
                'NotoSansArabic-Regular.ttf',
                'NotoSansArabic-Bold.ttf',
                'NotoSansDevanagari-Regular.ttf',
                'NotoSansDevanagari-Bold.ttf',
                'NotoSansHebrew-Regular.ttf',
                'NotoSansHebrew-Bold.ttf',
                'NotoSansThai-Regular.ttf',
                'NotoSansThai-Bold.ttf',
                'Roboto-Regular.ttf',
                'Roboto-Medium.ttf',
                'Roboto-Italic.ttf',
                'Roboto-MediumItalic.ttf'
            ],
            'vfs_fonts-full.js': [
                'NotoSansArabic-Regular.ttf',
                'NotoSansArabic-Bold.ttf',
                'NotoSansDevanagari-Regular.ttf',
                'NotoSansDevanagari-Bold.ttf',
                'NotoSansHebrew-Regular.ttf',
                'NotoSansHebrew-Bold.ttf',
                'NotoSansThai-Regular.ttf',
                'NotoSansThai-Bold.ttf',
                'Roboto-Regular.ttf',
                'Roboto-Medium.ttf',
                'Roboto-Italic.ttf',
                'Roboto-MediumItalic.ttf',
                'NotoSansCJK-Regular.ttf',
                'NotoSansCJK-Medium.ttf'
            ]
        };
        
        const expected = expectedFonts[filename] || [];
        const missing = expected.filter(font => !vfs[font]);
        
        if (missing.length > 0) {
            console.error(`❌ Missing expected fonts: ${missing.join(', ')}`);
            return false;
        }
        
        // Check if font data is base64 encoded
        const sampleFont = Object.values(vfs)[0];
        if (typeof sampleFont !== 'string' || sampleFont.length < 100) {
            console.error(`❌ Font data does not appear to be base64 encoded`);
            return false;
        }
        
        console.log(`✅ ${filename} is valid`);
        return true;
        
    } catch (error) {
        console.error(`❌ Error testing ${filename}:`, error.message);
        return false;
    }
}

// Test both VFS files
const baseResult = testVFSFile('vfs_fonts-base.js');
const fullResult = testVFSFile('vfs_fonts-full.js');

console.log('\n📋 Test Summary:');
console.log(`   Base fonts: ${baseResult ? '✅ PASS' : '❌ FAIL'}`);
console.log(`   Full fonts: ${fullResult ? '✅ PASS' : '❌ FAIL'}`);

if (baseResult && fullResult) {
    console.log('\n🎉 All tests passed! VFS files are ready for distribution.');
    
    // Generate CDN URLs
    console.log('\n🌐 CDN URLs (replace your-username with actual GitHub username):');
    console.log('   Base fonts: https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/vfs_fonts-base.js');
    console.log('   Full fonts: https://cdn.jsdelivr.net/gh/Darksorrow/pdfmake-font-vfs@main/vfs_fonts-full.js');
    
    process.exit(0);
} else {
    console.log('\n💥 Some tests failed. Please check the errors above.');
    process.exit(1);
}
