let userscore = 0;
let comscore = 0;
let comchoice;
let rounds = 1;
let butn = document.querySelector("#btn");
butn.onclick = () => {
    let a = document.querySelector("#sec");
    a.classList.add("class", "moveup");
    let b = document.querySelector(".ongamebluran");
    b.classList.add("ongameblur");
    let c = document.querySelector("#gamepor");
    c.classList.add("ongameblur");
    let d = document.querySelector(".letsstart");
    d.classList.add("letsstartblur");
    let e = document.querySelector(".togohome");
    e.classList.add("letsstartblur");
}
let butnhom = document.querySelector(".togohome");
butnhom.onclick = () => {
    rounds = 1;
    userscore = 0;
    comscore = 0;
    let scputsecorein = document.querySelector(".scputsecorein");
    scputsecorein.innerText = 0;
    let you = document.querySelector(".you");
    you.innerText = userscore;
    let com = document.querySelector(".com");
    com.innerText = comscore;
    let letsstartw = document.querySelector(".letsstartw");
    letsstartw.innerText = "This game has 10 rounds. To start first Round click on start button.";
    let letsstart = document.querySelector(".letsstart");
    letsstart.classList.remove("letsstartdisnon");
    let b = document.querySelector(".ongamebluran");
    b.classList.remove("ongameblur");
    let c = document.querySelector("#gamepor");
    c.classList.remove("ongameblur");
    let d = document.querySelector(".letsstart");
    d.classList.remove("letsstartblur");
    let e = document.querySelector(".togohome");
    e.classList.remove("letsstartblur");
    let a = document.querySelector("#sec");
    a.classList.remove("class", "moveup");

}
let help = document.querySelector(".help");
let helptf = true;
help.onclick = () => {
    if (helptf == true) {
        let helpworddiv = document.querySelector(".helpworddiv");
        helpworddiv.classList.add("helpworddiv2");
        helptf = false;
    } else if (helptf == false) {
        let helpworddiv = document.querySelector(".helpworddiv");
        helpworddiv.classList.remove("helpworddiv2");
        helptf = true;
    }
}
const comchoiceFun = () => {
    b = Math.random() * 2;
    b = b.toFixed();
    return b;
}
let letsstartbtn = document.querySelector(".letsstartbtn");
letsstartbtn.onclick = () => {
    if (rounds < 11) {
        let scputsecorein = document.querySelector(".scputsecorein");
        scputsecorein.innerText = rounds;
        rounds++;
        let letsstart = document.querySelector(".letsstart");
        letsstart.classList.add("letsstartdisnon");
    }
}
let restartbutn = document.querySelector(".restartbutn");
restartbutn.onclick = () => {
    if (rounds > 1) {
        rounds = 1;
        userscore = 0;
        comscore = 0;
        let you = document.querySelector(".you");
        you.innerText = userscore;
        let com = document.querySelector(".com");
        com.innerText = comscore;
        let scputsecorein = document.querySelector(".scputsecorein");
        scputsecorein.innerText = rounds;
        rounds++;
        let letsstartw = document.querySelector(".letsstartw");
        letsstartw.classList.remove("togivgoldcolor");
        let letsstart = document.querySelector(".letsstart");
        letsstart.classList.add("letsstartdisnon");
    }
}
const tied = () => {
    if (rounds < 11) {
        let letsstartw = document.querySelector(".letsstartw");
        letsstartw.innerText = "This round had been tied.\n To start next round click on start button.";
    } else {
        tocheckwhowin();
    }

    let letsstart = document.querySelector(".letsstart");
    letsstart.classList.remove("letsstartdisnon");
}
const userwin = (scor) => {
    let you = document.querySelector(".you");
    you.innerText = scor;
    if (rounds < 11) {
        let letsstartw = document.querySelector(".letsstartw");
        letsstartw.innerText = "You win this round.\n To start next round click on start button.";
    } else {
        tocheckwhowin();
    }
    let letsstart = document.querySelector(".letsstart");
    letsstart.classList.remove("letsstartdisnon");
}
const comwin = (scor) => {
    let com = document.querySelector(".com");
    com.innerText = scor;
    if (rounds < 11) {
        let letsstartw = document.querySelector(".letsstartw");
        letsstartw.innerText = "Computer win this round.\n To start next round click on start button.";
    } else {
        tocheckwhowin();
    }

    let letsstart = document.querySelector(".letsstart");
    letsstart.classList.remove("letsstartdisnon");
}
const tocheckwhowin = () => {
    if (userscore > comscore) {
        let letsstartw = document.querySelector(".letsstartw");
        letsstartw.classList.add("togivgoldcolor");
        letsstartw.innerText = "You are winner.\n To start new game click on Restart button.";
    } else if (userscore < comscore) {
        let letsstartw = document.querySelector(".letsstartw");
        letsstartw.classList.add("togivgoldcolor");
        letsstartw.innerText = "Computer is winner.\n To start new game click on Restart button.";
    } else if (userscore == comscore) {
        let letsstartw = document.querySelector(".letsstartw");
        letsstartw.innerText = "Tied.\n To start new game click on Restart button.";
    }
}
let snake = document.querySelector(".snake");
snake.onclick = () => {
    comchoice = comchoiceFun();
    if (rounds < 12) {
        if (comchoice == 0) {
            tied();
        } else if (comchoice == 1) {
            userscore++;
            userwin(userscore);
        } else if (comchoice == 2) {
            comscore++;
            comwin(comscore);
        }
    }

}
let water = document.querySelector(".water");
water.onclick = () => {
    comchoice = comchoiceFun();
    if (rounds < 12) {
        if (comchoice == 1) {
            tied();
        } else if (comchoice == 2) {
            userscore++;
            userwin(userscore);
        } else if (comchoice == 0) {
            comscore++;
            comwin(comscore);
        }
    }
}
let gun = document.querySelector(".gun");
gun.onclick = () => {
    comchoice = comchoiceFun();
    if (rounds < 12) {
        if (comchoice == 2) {
            tied();
        } else if (comchoice == 0) {
            userscore++;
            userwin(userscore);
        } else if (comchoice == 1) {
            comscore++;
            comwin(comscore);
        }
    }

}

