let checkW, checkS, checkU, checkLT;
let getS = selector => document.querySelector(selector)
let regExp = /^\d{0,5}$/;

function fontWeight() {
    if (!checkW) {
        getS('.textarea').classList.add('font-weight-bold')
        checkW = true;
    } else {
        getS('.textarea').classList.remove('font-weight-bold')
        checkW = false;
    }
}

function fontStyle() {
    if (!checkS) {
        getS('.textarea').classList.add('font-italic')
        checkS = true;
    } else {
        getS('.textarea').classList.remove('font-italic')
        checkS = false;
    }
}

function fontUnderline() {
    getS('.textarea').classList.remove('text-decoration-line-through', 'text-decoration-none')
    checkLT = false;
    if (!checkU) {
        getS('.textarea').classList.add('text-decoration-underline')
        checkU = true;
    } else {
        getS('.textarea').classList.remove('text-decoration-underline')
        getS('.textarea').classList.add('text-decoration-none')
        checkU = false;
    }
}

function fontLineThrough() {
    getS('.textarea').classList.remove('text-decoration-underline', 'text-decoration-none')
    checkU = false;
    if (!checkLT) {
        getS('.textarea').classList.add('text-decoration-line-through')
        checkLT = true;
    } else {
        getS('.textarea').classList.remove('text-decoration-line-through')
        getS('.textarea').classList.add('text-decoration-none')
        checkLT = false;
    }
}

function textLeft() {
    getS('.textarea').classList.remove('text-center', 'text-right')
    getS('.textarea').classList.add('text-left')
}
function textCenter() {
    getS('.textarea').classList.remove('text-left', 'text-right')
    getS('.textarea').classList.add('text-center')
}
function textRight() {
    getS('.textarea').classList.remove('text-center', 'text-left')
    getS('.textarea').classList.add('text-right')
}

function fontFamily() {
    getS('.textarea').style.fontFamily = event.target.textContent;
}
function fontSize() {
    getS('.textarea').style.fontSize = event.target.textContent;
}

const colors = ['aquamarine', 'cyan', 'aqua', 'deepskyblue', 'dodgerblue', 'darkcyan', 'darkslategrey', 'violet', 'purple', 'darkslateblue', 'goldenrod', 'orange', 'chocolate', 'darkgoldenrod', 'firebrick', 'tomato', 'bisque', 'beige', 'lightgrey', 'darkgrey', 'gray']
function textColor() {
    getS('.disp-n').style.display = 'flex';
    let str = `<div class="colorsBl d-flex flex-row flex-wrap justify-content-between ">`;
    for (let i = 0; i < colors.length; i++) {
        str += `<div class="colorRR" style="background: ${colors[i]}" onclick="chooseTextColor()"></div>`
    }
    str += '</div>';
    getS('.blochek').innerHTML += str;
}

function exit() {
    getS('.blochek').innerHTML = '<div class="topR d-flex justify-content-between "><h4>Choose text color</h4><i class="fas fa-times" onclick="exit()"></i></div>';
    getS('.disp-n').style.display = 'none';
}

function chooseTextColor() {
    getS('.textarea').style.color = event.target.style.background;
}

function pickColor() {
    getS('.files').classList.remove('active');
    getS('.clrs').classList.add('active');
    getS('.imgs').classList.remove('active');
    getS('.block-active').innerHTML = '';
    backgColor()
}

const bgColors = ['aquamarine', 'cyan', 'aqua', 'deepskyblue', 'dodgerblue', 'darkcyan', 'darkslategrey', 'violet', 'purple', 'darkslateblue', 'goldenrod', 'orange', 'chocolate', 'darkgoldenrod', 'firebrick', 'tomato', 'beige', 'lightgrey', 'darkgrey', 'gray', 'black']
function backgColor() {
    getS('.files').classList.remove('active');
    getS('.clrs').classList.add('active');
    getS('.imgs').classList.remove('active');
    getS('.block-active').innerHTML = '';
    getS('.disp-n2').style.display = 'flex';
    let str = `<div class="colorsBl second d-flex flex-row flex-wrap justify-content-between ">`;
    for (let i = 0; i < bgColors.length; i++) {
        str += `<div class="colorRR" style="background: ${bgColors[i]}" onclick="chooseBgColor()"></div>`
    }
    str += '</div>';
    getS('.block-active').innerHTML += str;
}

function exit2() {
    getS('.block-active').innerHTML = '';
    getS('.disp-n2').style.display = 'none';
}

function chooseBgColor() {
    getS('.textarea').style.background = event.target.style.background;
}


const images = ['Style/img/1.jpg', 'Style/img/173710411.jpg', 'Style/img/1582301456_3214.jpg', 'Style/img/2-nature.jpg', 'Style/img/завантаження.jpg', 'Style/img/apps.26620.13682773009232620.62a18cea-40b3-43f1-811b-46ef9d15331b.jpg', 'Style/img/GP0STOE2U.jpg', 'Style/img/man-walking-dog.jpg', 'Style/img/nature.jpg']
function openIm() {
    getS('.files').classList.remove('active');
    getS('.clrs').classList.remove('active');
    getS('.imgs').classList.add('active');
    getS('.block-active').innerHTML = '';
    let str = `<div class="colorsBl second d-flex flex-row flex-wrap justify-content-around ">`;
    for (let i = 0; i < images.length; i++) {
        str += `<div class="colorRR bgimg" style="background-image: url(${images[i]}); background-size: cover;" onclick="chooseBgImg()"></div>`
    }
    str += '</div>';
    getS('.block-active').innerHTML += str;

}
function chooseBgImg() {
    getS('.textarea').style.background = event.target.style.backgroundImage;
    getS('.textarea').style.backgroundSize = 'cover';
    getS('.textarea').style.backgroundRepeat = 'no-repeat';
}

function importImg() {
    getS('.clrs').classList.remove('active');
    getS('.imgs').classList.remove('active');
    getS('.files').classList.add('active');
    getS('.block-active').innerHTML = '';
    let str = `<div class="colorsBl second d-flex flex-row lab"><form name="f5"><label for="file" class="d-flex flex-row label""> <div id="choose" >Choose file...</div><div id="browse"> Browse </div><input type="file" name="file" id="file" onchange="fileImp()"></input></label></form></div>`;
    getS('.block-active').innerHTML += str;

    const f5 = document.forms['f5'];
    f5.file.onchange = function (event) {
        const url = URL.createObjectURL(event.target.files[0]);
        getS('.textarea').style.backgroundImage = `url(${url})`;
        getS('.textarea').style.backgroundSize = 'cover';
        getS('.textarea').style.backgroundRepeat = 'no-repeat';
    }
}

const signInF = document.forms['signIn'];
let sign = true;
function signInForm() {
    if (sign === true) {
        getS('.disp-n3').style.display = 'flex';
    }
    else if (sign === false) {
        getS('.disp-n3').style.display = 'none';
        getS('.disp-n9').style.display = 'flex';
    }
}

function exit3() {
    getS('.disp-n3').style.display = 'none';
}

function signBut() {
    if (signInF.login.value === '' & signInF.password.value === '') {
        getS('.eror').style.display = 'flex';
        getS('.eror').textContent = 'Value is empty'
        getS('#login').style.border = '1px solid firebrick';
        getS('#password').style.border = '1px solid firebrick';
    } else if (signInF.login.value === 'admin' & signInF.password.value === 'admin') {
        signInF.reset()
        getS('.disp-n3').style.display = 'none';
        getS('#lock').innerHTML = '<i class="fas fa-lock-open"></i>';
        getS('#disabled').removeAttribute("disabled");
        sign = false;
    } else {
        getS('.eror').style.display = 'flex';
        getS('.eror').textContent = 'Please check your login or password'
        getS('#login').style.border = '1px solid firebrick';
        getS('#password').style.border = '1px solid firebrick';
    }
}

function cancelBtn() {
    getS('.disp-n9').style.display = 'none';
}

function signOutBtn() {
    getS('.disp-n9').style.display = 'none';
    getS('#disabled').setAttribute("disabled", "true");
    getS('#lock').innerHTML = '<i class="fas fa-lock"></i>';
    sign = true;
}

function textRedactor() {
    getS('textarea').style.display = 'block';
    getS('textarea').value = getS('.textarea').innerHTML;
    getS('.textarea').style.display = 'none';
    getS('.nav1').style.display = 'none';
    getS('.nav2').style.display = 'flex';
}

function saveText() {
    getS('.textarea').style.display = 'block';
    getS('.textarea').innerHTML = getS('textarea').value;
    getS('textarea').style.display = 'none';
    getS('.nav2').style.display = 'none';
    getS('.nav1').style.display = 'flex';
}

function createTable() {
    getS('.disp-n4').style.display = 'flex';
}

let form = document.forms['form-create-table'];
let crt = form.elements;
let tbl = document.querySelectorAll('.table');
let permit = 0;
let permit2 = 0;

function createT() {
    permit = 0;
    permit2 = 0;
    for (let i = 0; i < crt.length - 3; i++) {

        if (crt[i].value === '') {
            crt[i].style.border = '1px solid firebrick';
            getS('.eror1').style.display = 'flex';
            getS('.eror1').textContent = 'Invalid value'
        }
        else if (regExp.test(crt[i].value) === false) {
            crt[i].style.border = '1px solid firebrick';
            getS('.eror1').style.display = 'flex';
            getS('.eror1').textContent = 'Invalid value'
        }
        else {
            crt[i].style.border = '1px solid rgb(238, 238, 238)';
            permit++;
        }
    }
    for (let j = crt.length - 2; j > crt.length - 4; j--) {
        if (crt[j].value === '') {
            crt[j].style.border = '1px solid firebrick';
            getS('.eror1').style.display = 'flex';
            getS('.eror1').textContent = 'Invalid value'
        }
        else {
            crt[j].style.border = '1px solid rgb(238, 238, 238)';
            permit2++;
        }
    }
    if (permit === 5 & permit2 === 2) {
        getS('.eror1').textContent = ''
        getTable()
    }
}

function getTable() {
    const countTR = getS('.countTR').value;
    const countTD = getS('.countTD').value;
    let table = `<table>`;
    for (let i = 1; i <= countTR; i++) {
        table += '<tr>';
        for (let j = 1; j <= countTD; j++) {
            table += `<td style="width: ${getS('#tdW').value}px; height: ${getS('#tdH').value}px; border: ${getS('#bW').value}px ${getS('#selectType').value} ${getS('#selectColor').value}">TD</td>`
        }
        table += '</tr>'
    }
    table += `<table>`;
    getS('textarea').value += table;
}

function resetT() {
    document.forms['form-create-table'].reset()
    getS('#selectType').selectedIndex = 0;
    getS('#selectColor').selectedIndex = 0;
    getS('.eror1').textContent = ''
    document.querySelectorAll('.table').forEach(element => {
        element.style.border = '1px solid rgb(238, 238, 238)';
    });
}
function exit4() {
    getS('.disp-n4').style.display = 'none';
}

const olForm = document.forms['ol'];
function getOL() {
    getS('.disp-n5').style.display = 'flex';
}

function exit5() {
    getS('.disp-n5').style.display = 'none';
}

function resetOL() {
    olForm.reset()
    getS('#olTypes').selectedIndex = 0;
    document.querySelectorAll('.table').forEach(element => {
        element.style.border = '1px solid rgb(238, 238, 238)';
    });
    getS('.eror2').textContent = ''
}

let permitOl = 0;
let ol = olForm.elements
function createOL() {
    permitOl = 0;
    for (let i = 0; i < ol.length - 2; i++) {
        if (ol[i].value === '') {
            ol[i].style.border = '1px solid firebrick';
            getS('.eror2').style.display = 'flex';
            getS('.eror2').textContent = 'Invalid value'
        }
        else if (regExp.test(olForm.li.value) === false) {
            olForm.li.style.border = '1px solid firebrick';
            getS('.eror2').style.display = 'flex';
            getS('.eror2').textContent = 'Invalid value'
        }
        else {
            ol[i].style.border = '1px solid rgb(238, 238, 238)';
            permitOl++;
        }
    }
    if (permitOl >= 2) {
        getS('.eror2').textContent = ''
        let countLi = getS('#olli').value;
        let ul = `<ol style="list-style-type:${getS('#olTypes').value}">`;
        for (let i = 1; i <= countLi; i++) {
            ul += `<li> item ${i}</li>`
        }
        ul += '</ul>';
        getS('textarea').value += ul;
    }
}

const ulForm = document.forms['ul'];
function getUL() {
    getS('.disp-n6').style.display = 'flex';
}

function exit6() {
    getS('.disp-n6').style.display = 'none';
}

function resetUL() {
    ulForm.reset()
    getS('#ulTypes').selectedIndex = 0;
    document.querySelectorAll('.table').forEach(element => {
        element.style.border = '1px solid rgb(238, 238, 238)';
    });
    getS('.eror3').textContent = ''
}

let permitUl = 0;
let ul = ulForm.elements
function createUL() {
    permitUl = 0;
    for (let i = 0; i < ul.length - 2; i++) {
        if (ul[i].value === '') {
            ul[i].style.border = '1px solid firebrick';
            getS('.eror3').style.display = 'flex';
            getS('.eror3').textContent = 'Invalid value'
        }
        else if (regExp.test(ulForm.li.value) === false) {
            ulForm.li.style.border = '1px solid firebrick';
            getS('.eror3').style.display = 'flex';
            getS('.eror3').textContent = 'Invalid value'
        }
        else {
            ul[i].style.border = '1px solid rgb(238, 238, 238)';
            permitUl++;
        }
    }
    if (permitUl >= 2) {
        getS('.eror3').textContent = ''
        let countLi = getS('#ulli').value;
        let ul = `<ul style="list-style-type:${getS('#ulTypes').value}">`;
        for (let i = 1; i <= countLi; i++) {
            ul += `<li> item ${i}</li>`
        }
        ul += '</ul>';
        getS('textarea').value += ul;
    }
}