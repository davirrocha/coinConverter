
//Código para fazer as conversões
async function diceConvert() {
    const inputCurrency = document.querySelector(".input-value").value;
    const conversionValue = document.querySelector("#conversion")
    const convertedValue = document.querySelector("#converted")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high;
    const euroToday = data.EURBRL.high;
    const libraToday = data.GBPBRL.high;


    conversionValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)



    if (convertTo.value == "dolar") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency / dolarToday) //NÃO PODE DEIXAR JUNTOS
    }

    if (convertTo.value == "euro") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / euroToday)
    }

    if (convertTo.value == "libra") {
        convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency / libraToday)
    }
}



//Codigo para mudar o estilo
const convertTo = document.querySelector(".convert-to")
const imgCurrency = document.getElementById("currency")
const nameCurrency = document.querySelector("#curencyName")

convertTo.addEventListener("change", function () {

    if (convertTo.value == "dolar") {
        nameCurrency.innerHTML = "Dólar Americano"
        imgCurrency.src = "./assets/dolar.png"
    }

    if (convertTo.value == "euro") {
        nameCurrency.innerHTML = "Euro"
        imgCurrency.src = "./assets/euro.png"
    }

    if (convertTo.value == "libra") {
        nameCurrency.innerHTML = "Libra"
        imgCurrency.src = "./assets/libra.png"
    }

    diceConvert()
})








