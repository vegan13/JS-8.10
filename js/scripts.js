var getButtons = document.getElementsByClassName('button'),
    getButtonsText = getButtons.innerText;

for (var i = 0; i < getButtons.length; i++) {
//    console.log(getButtons[i]);
//    console.log(getButtons[i].textContent);
    alert(getButtons[i].textContent);
}
