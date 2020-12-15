const switchButton = document.querySelector('.show-table-btn');
const colorTable = document.querySelector('.color-weakness-scheme');

switchButton.addEventListener('click', handleClickBtn);

function handleClickBtn(event) {
    const isHidden = colorTable.style.display == 'none';
    if (!isHidden) {
        colorTable.style.display = 'none';
        switchButton.innerHTML = "Показать таблицу цветов";
        switchButton.style.marginBottom = '30px';
    } else {
        colorTable.style.display = 'block';
        switchButton.innerHTML = "Скрыть таблицу цветов";
        switchButton.style.marginBottom = '0px';
    }
}