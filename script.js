// script.js

function generateDecoratedName() {
    const name = document.getElementById('nameInput').value;
    const decorations = ['★', '✿', '♡', '❀', '✦', '❖', '═', '─', '•', '✧', '♦', '♢']; // رموز زخرفية
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'gold', 'cyan']; // ألوان مختلفة
    const fonts = [
        'Arial', 
        'Tahoma', 
        'Verdana', 
        'Courier New', 
        'Times New Roman', 
        'Shorif', 
        'Amiri', 
        'Cairo', 
        'Noto Naskh Arabic'
    ]; // خطوط متنوعة

    // زخرفة الحروف مع خطوط وألوان ورموز
    const decoratedName = name.split('').map(char => {
        if (char.trim()) {
            const randomDecoration1 = decorations[Math.floor(Math.random() * decorations.length)];
            const randomDecoration2 = decorations[Math.floor(Math.random() * decorations.length)];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            return `<span style="color: ${randomColor}; font-family: '${randomFont}'; font-size: 24px;">${randomDecoration1}${char}${randomDecoration2}</span>`;
        }
        return char;
    }).join('');

    // إضافة خطوط زخرفية حول الاسم
    const topLine = '━'.repeat(20);
    const bottomLine = '━'.repeat(20);

    // عرض الاسم المزخرف
    document.getElementById('decoratedName').innerHTML = `
        <div style="margin: 10px 0; font-size: 20px;">${topLine}</div>
        <div>${decoratedName}</div>
        <div style="margin: 10px 0; font-size: 20px;">${bottomLine}</div>
    `;
}
