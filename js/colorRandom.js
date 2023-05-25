const changeColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.documentElement.style.setProperty('--main-color', '#' + randomColor);
}

btnChangeColor.addEventListener('click', changeColor);