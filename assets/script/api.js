const api = async (inputName, inputCountry) => {
    //Insert info to the url
    const response = await fetch(`https://api.abalin.net/getdate?name=${inputName}&country=${inputCountry}`);
    const infoName = await response.json()
    console.log(infoName);
    //Return info the function
    return infoName;

};

const api2 = async (input1, input2, input3) => {
     //Insert info to the url
    const response = await fetch(`https://api.abalin.net/namedays?country=${input1}&month=${input2}&day=${input3}`);
    const data = await response.json()
    console.log(data);
    //Return info the function
    return data;
};
 