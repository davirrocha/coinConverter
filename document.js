const convertButton = document.querySelector(".button-convert")

function diceConvert() {
    const inputCurrency = document.querySelector(".input-value").value;
    const valueConvertion = document.querySelector("#real")
    const valueConvertionDolar = document.querySelector("#dolar")
    const realToday = 0.20
    const dolarToday = 5.11
    const euroToday = 5.48
    const libraToday = 6.4003
    const yenToday = 0.033
    const convertFrom = document.querySelector(".convert-from")
    const convertTo = document.querySelector(".convert-to")
    const valueTo = document.querySelector(".covert-from")
    const imgValue = document.querySelector(".eua")


    valueConvertion.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)


    if (convertTo.value == "real") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency / realToday)
    }

    if (convertTo.value == "dolar") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency / dolarToday) //NÃO PODE DEIXAR JUNTOS
    }

    if (convertTo.value == "euro") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("nl-BE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / euroToday)
    }

    if (convertTo.value == "libra") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency / libraToday)
    }

    if (convertTo.value == "yen") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(inputCurrency / yenToday)
    }

}

convertButton.addEventListener("click", diceConvert)

const convertTo = document.querySelector(".convert-to")
const nameCurrency = document.querySelector("#usa")
const imgCurrency = document.getElementById("currency")
const valueConvertionDolar = document.getElementById("dolar")


convertTo.addEventListener("change", function () {

    // if (convertTo.value == "real") {
    //     nameCurrency.innerHTML = "Real"
    //     imgCurrency.src = "./assets/real.png"
    // }

    if (convertTo.value == "dolar") {
        nameCurrency.innerHTML = "Dólar Americano"
        imgCurrency.src = "./assets/dolar.png"

    }

    if (convertTo.value == "euro") {
        nameCurrency.innerHTML = "EURO"
        imgCurrency.src = "./assets/euro.png"

    }

    if (convertTo.value == "libra") {
        nameCurrency.innerHTML = "Libra"
        imgCurrency.src = "./assets/libra.png"

    }



    if (convertTo.value == "yen") {
        nameCurrency.innerHTML = "Yen"
        imgCurrency.src = "./assets/iene.png"

    }
    diceConvert()

})








