var check = document.querySelector("#fizzcount");
var checkuser = document.querySelector("#fizzuser");
var resposta = document.querySelector(".resposta")
var storage = [];
var storageuser = [];
var counter = 1;
var counteruser = 1;
var timer = 0;
var result = 0;
var u_error = 0;

function settimer(timerchoosen) {

    switch (timerchoosen) {
        case "nb":
            timer = 12000;
            break;

        case "ey":
            timer = 9000;
            break;
        case "mm":
            timer = 6000;
            break;
        case "hd":
            timer = 3000;
            break;
        case "ie":
            timer = 1000;
            break;

        default:
            timer = 0;
            break;
    }
    return timer;

}

function pg_redirect() {
    if (timer != 0) {
        window.location.href = "game.html";
        sessionStorage.setItem("recover", timer)
    } else {
        resposta.innerText = "Selecione uma dificuldade."
        setTimeout(function() { resposta.innerText = "" }, 2000);
    }
}

function calcfizz() {

    if (counter <= 100) {

        let fizz = counter % 3;
        let buzz = counter % 5;

        if (fizz === 0 && buzz === 0) {
            let addfizz = '<spam>Fizz-buzz!, </spam>';
            check.insertAdjacentHTML("beforeend", addfizz);
            storage.push("Fizz-Buzz");
        } else if (fizz === 0) {
            let addbuzz = '<spam>Fizz!, </spam>';
            check.insertAdjacentHTML("beforeend", addbuzz);
            storage.push("Fizz");
        } else if (buzz === 0) {
            let addfbuzz = '<spam>Buzz!, </spam>';
            check.insertAdjacentHTML("beforeend", addfbuzz);
            storage.push("Buzz");
        } else {
            let addnormal = counter + ', ';
            check.insertAdjacentHTML("beforeend", addnormal);
            storage.push(counter);
        }

    } else {
        var btn1 = document.getElementById("n").disabled = true;
        var btn2 = document.getElementById("f").disabled = true;
        var btn3 = document.getElementById("b").disabled = true;
        var btn4 = document.getElementById("fb").disabled = true;

    }
    counter++;
}

function user_answer(id) {

    if (counteruser <= 100) {

        if (id === "fb") {
            let addfizz = '<spam>Fizz-buzz!, </spam>';
            checkuser.insertAdjacentHTML("beforeend", addfizz);
            storageuser.push("Fizz-Buzz");
        } else if (id === "f") {
            let addbuzz = '<spam>Fizz!, </spam>';
            checkuser.insertAdjacentHTML("beforeend", addbuzz);
            storageuser.push("Fizz");
        } else if (id === "b") {
            let addfbuzz = '<spam>Buzz!, </spam>';
            checkuser.insertAdjacentHTML("beforeend", addfbuzz);
            storageuser.push("Buzz");
        } else {
            let addnormal = counteruser + ', ';
            checkuser.insertAdjacentHTML("beforeend", addnormal);
            storageuser.push(counteruser);
        }
        counteruser++;
    } else {
        document.querySelectorAll(".btns").classList.add("d_btnt");
    }
}

function result_user() {
    for (let i = 0; i < storage.length; i++) {

        if (storage[i] === storageuser[i]) {
            result += 1;
        } else {
            u_error += 1;
        }
    }
    let el = document.querySelector(".result");
    if (result < 30) {
        el.innerHTML = '<p class="result">xii, voc?? foi mal, precisa melhorar o racioc??nio, por que n??o escolhe o nivel Newbie? o seu resultado final ??: ' + result + "% de acertos e " + u_error + '% de erros!</p>';
    } else if (result >= 30 && result <= 50) {
        el.innerHTML = '<p class="result">hmmmm, acho que d?? pra melhorar, voc?? n??o acha? O seu resultado final ??: ' + result + "% de acertos e " + u_error + '% de erros!</p>';
    } else if (result > 51 && result <= 70) {
        el.innerHTML = '<p class="result">Parab??ns, voc?? foi muito bem pelo n??vel que escolheu! Que tal aumentar a dificuldade agora? o seu resultado final ??: ' + result + "% de acertos e " + u_error + '% de erros!</p>';
    } else {
        el.innerHTML = '<p class="result">Ahh, est?? muito f??cil pra voc??! Tenta um n??vel mais alto! seu resultado final ??: ' + result + "% de acertos e " + u_error + '% de erros!</p>';
    }
    var btn5 = document.getElementById("showmyscore").disabled = true;
}

function fizzbuzz() {
    let timer = sessionStorage.getItem("recover");
    setInterval(() => {
        calcfizz()
    }, timer);
}