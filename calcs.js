var check = document.querySelector("#fizzcount");
var checkuser = document.querySelector("#fizzuser");
var storage = [];
var storageuser = [];
var counter = 1;
var counteruser = 1;
var timer = 0;
var result = 0;
var u_error = 0;

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
        counter++;
    }

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
        document.querySelector(".btns").classList.add("disablebtn");
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
        el.innerHTML = '<p class="result">xii, você foi mal, precisa melhorar o raciocínio, por que não escolhe o nivel Newbie? o seu resultado final é: ' + result + "% de acertos e " + u_error + '% de erros!</p>';
    } else if (result >= 30 && result <= 50) {
        el.innerHTML = '<p class="result">hmmmm, acho que dá pra melhorar, você não acha? O seu resultado final é: ' + result + "% de acertos e " + u_error + '% de erros!</p>';
    } else if (result > 51 && result <= 70) {
        el.innerHTML = '<p class="result">Parabéns, você foi muito bem pelo nível que escolheu! Que tal aumentar a dificuldade agora? o seu resultado final é: ' + result + "% de acertos e " + u_error + '% de erros!</p>';
    } else {
        el.innerHTML = '<p class="result">Ahh, está muito fácil pra você! Tenta um nível mais alto! seu resultado final é: ' + result + "% de acertos e " + u_error + '% de erros!</p>';
    }

}

function fizzbuzz() {
    setInterval(() => {
        calcfizz()
    }, timer);
}