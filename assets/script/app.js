//Name function
const resultHtml = document.querySelector("#resultHtml")
const resultName = document.querySelector("#resultName")
const nameEl = document.querySelector("#name");
const countryEL = document.querySelector("#country");
const submit = document.querySelector("#submit1");
//Date function
const monthEL = document.querySelector("#month");
const dayEL = document.querySelector("#day");
const countryettEL = document.querySelector("#countries");
const sEL = document.querySelector("#s");



submit.addEventListener('click', function (e) {
    e.preventDefault;

    const inputName = nameEl.value;
    const inputCountry = countryEL.value;

    //Function that shows for ther user
    api(inputName, inputCountry)
        .then(infoName => {
            let output = ""
            infoName.results.forEach((res) => {

                output = `
                
                <div class="card"  id="resultName">
                    <div class="card-body" >
                        <h5 class="card-title">På det här datumet:</h5>
                        <h2 class="text-center"> ${res.day} / ${res.month}</h2>
                        <p class="card-text">Så har <span class="namn">${res.name}</span> namnsdag</p>

                    </div>
                </div>
              `;
            });
            resultName.innerHTML += output;
        })
});





sEL.addEventListener('click', function () {

    const input1 = countryettEL.value;
    const input2 = monthEL.value;
    const input3 = dayEL.value;

//Function that shows for ther user
    api2(input1, input2, input3)
        .then(data => {
            let output = ""
            data.data.forEach((datares) => {

                const apiCountry = countryettEL.value;

                output = `
                <div class="card1">
                <div class="card"  id="resultName">
                    <div class="card-body">
                    <h5 class="card-title">Den här datumen:</h5>
                    <h2 class="text-center">${datares.dates.day} / ${datares.dates.month}</h2>

                    <p class="card-text">Så har <span class="namn">${datares.namedays[apiCountry]}</span> namnsdag</p>

                    </div>
                    </div>  
              `;
            });
            resultHtml.innerHTML += output;
        })


});



