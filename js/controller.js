'use strict'

function init() {
    gUserPref = loadFromStorage(KEY);

    setUserPref()

}



function save(ev) {
    ev.preventDefault();
    onSavePrefs()
}


function onSavePrefs() {
    let elName = document.querySelector('#name').value
    let elColor = document.querySelector('#color').value
    let elAge = document.querySelector('#dob').value
    let elBirthDay = document.querySelector('#tob').value
    createUser(elName, elColor, elAge, elBirthDay)

}

function setUserPref() {
    let elcolor = gUserPref.color
    let elBody = document.querySelector('.body')
    elBody.style.backgroundColor = elcolor
    console.log(elcolor);

}