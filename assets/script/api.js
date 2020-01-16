const api = async (inputName, inputCountry) => {
    const response = await fetch(`https://api.abalin.net/getdate?name=${inputName}&country=${inputCountry}`);
    const infoName = await response.json()
    console.log(infoName);
    return infoName;

};

const api2 = async (input1, input2, input3) => {
    const response = await fetch(`https://api.abalin.net/namedays?country=${input1}&month=${input2}&day=${input3}`);
    const data = await response.json()
    console.log(data);
    return data;
};
 