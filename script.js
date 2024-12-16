// script.js

function generateDecoratedName() {
    const name = document.getElementById('nameInput').value;
    const decoratedName = name.split('').map(char => {
        // زخرفة الحروف بشكل بسيط
        switch(char) {
            case 'أ': return 'أ';
            case 'ب': return 'ب';
            case 'ت': return 'ت';
            case 'ث': return 'ث';
            case 'ج': return 'ج';
            case 'ح': return 'ح';
            case 'خ': return 'خ';
            case 'د': return 'د';
            case 'ذ': return 'ذ';
            case 'ر': return 'ر';
            case 'ز': return 'ز';
            case 'س': return 'س';
            case 'ش': return 'ش';
            case 'ص': return 'ص';
            case 'ض': return 'ض';
            case 'ط': return 'ط';
            case 'ظ': return 'ظ';
            case 'ع': return 'ع';
            case 'غ': return 'غ';
            case 'ف': return 'ف';
            case 'ق': return 'ق';
            case 'ك': return 'ك';
            case 'ل': return 'ل';
            case 'م': return 'م';
            case 'ن': return 'ن';
            case 'ه': return 'ه';
            case 'و': return 'و';
            case 'ي': return 'ي';
            default: return char;
        }
    }).join('');

    document.getElementById('decoratedName').innerText = decoratedName;
}