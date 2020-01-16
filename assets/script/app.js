const nameEl = document.querySelector("#name");
const countryEL = document.querySelector("#country");
const submit = document.querySelector("#submit1");



submit.addEventListener('click', async function () {

    const input1 = nameEl.value;
    const input2 = countryEL.value;

    const response = await fetch(`https://api.abalin.net/getdate?name=${input1}&country=${input2}`);
    const info = await response.json()
    console.log(info);

});


const monthEL = document.querySelector("#month");
const dayEL = document.querySelector("#day");
const countryettEL = document.querySelector("#countries");
const sEL = document.querySelector("#s");

sEL.addEventListener('click', async function () {

    const input4 = countryettEL.value;
    const input5 = monthEL.value;
    const input6 = dayEL.value;

    const response = await fetch(`https://api.abalin.net/namedays?country=${input4}&month=${input5}&day=${input6}`);
    const info = await response.json()
    console.log(info);

});



