const convertButton = document.querySelector(".button-convert")
const convertTo = document.querySelector(".convert-to")
async function diceConvert() {
    const inputCurrency = document.querySelector(".input-value").value;
    const valueConvertion = document.querySelector("#real")
    const valueConvertionDolar = document.querySelector("#dolar")
    
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const realToday = data.USDBRL.high;
    const dolarToday = data.EURBRL.high;
    const euroToday = 5.48
    const libraToday = 6.4003
    const yenToday = 0.033
    const bitToday = data.BTCBRL.high;
    console.log(data)

    valueConvertion.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)



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

    if (convertTo.value == "btc") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrency / bitToday)
    }
}

convertButton.addEventListener("click", diceConvert)


const nameCurrency = document.querySelector("#usa")
const imgCurrency = document.getElementById("currency")
const valueConvertionDolar = document.getElementById("dolar")


convertTo.addEventListener("change", function () {

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
    if (convertTo.value == "btc") {
        nameCurrency.innerHTML = "Bitcoin"
        imgCurrency.src = "./assets/bitcoin.png"
    }

    diceConvert()

})








