
const submit = document.querySelector("#submit");
const nameEl = document.querySelector("#name")

submit.addEventListener('click', async function () {

    const input1 = nameEl.value;

    const response = await fetch(`https://api.abalin.net/getdate?name=${input1}&country=se`);
    const info = await response.json()
    console.log(info);

});

