
const submit = document.querySelector("#submit");
const nameEl = document.querySelector("#name");
const countryEL = document.querySelector("#country");

submit.addEventListener('click', async function () {

    const input1 = nameEl.value;
    const input2 = countryEL.value;

    const response = await fetch(`https://api.abalin.net/getdate?name=${input1}&country=${input2}`);
    const info = await response.json()
    console.log(info);

});

