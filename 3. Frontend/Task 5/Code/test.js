const buttonStyles = {
    selector: 'button',
    styles: {
        'border-radius': '12px',
    }
};

const editorStyles = {
    selector: '.contenteditable',
    styles: {
        'border-radius': '12px',
    }
};

const createStylesheet = (jsStyles) => {
    return jsStyles.reduce((stylesheet, styles) => {
        let string = ';'
        for (let key in styles.styles) {
            string += `${key}: ${styles.styles[key]};`;
        }
        stylesheet += styles.selector + `{` + string + `}`;
        return stylesheet;
    }, '');
};

let isThemed = false;
const themeStyle = createStylesheet([buttonStyles, editorStyles]);
const styleTag = document.getElementById('theme-styles');
const themeButton = document.getElementById('theme-switch');
themeButton.addEventListener('click', () => {
    if (isThemed) {
        styleTag.innerHTML = '';
    } else {
        styleTag.innerHTML = themeStyle;
    }
    isThemed = !isThemed;
});