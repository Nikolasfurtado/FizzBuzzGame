    var check = document.getElementById("fizzcount");

    var storage = [];
    var counter = 0;

    function calcfizz() {
        if (counter < 100) {

            let fizz = counter % 3;
            let buzz = counter % 5;

            if (fizz === 0 && buzz === 0) {
                let addfizz = '<spam>Fizz-buzz!, </spam>';
                fizzcount.insertAdjacentHTML("beforeend", addfizz);
            } else if (fizz === 0) {
                let addbuzz = '<spam>Fizz!, </spam>';
                fizzcount.insertAdjacentHTML("beforeend", addbuzz);
            } else if (buzz === 0) {
                let addfbuzz = '<spam>Buzz!, </spam>';
                fizzcount.insertAdjacentHTML("beforeend", addfbuzz);
            } else {
                let addnormal = counter + ', ';
                fizzcount.insertAdjacentHTML("beforeend", addnormal);
            }
            storage.push(counter);

            counter++;
        }

    }


    function fizzbuzz() {
        setInterval(() => {
            calcfizz()
        }, 100);





    }