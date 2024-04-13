const convertButton = document.querySelector(".button-convert")

function diceConvert() {
    const inputCurrency = document.querySelector(".input-value").value;
    const valueConvertion = document.querySelector("#real")
    const valueConvertionDolar = document.querySelector("#dolar")
    const realToday = 0.20
    const dolarToday = 4.97
    const euroToday = 5.3928
    const libraToday = 6.36
    const yenToday = 0.034
    const bitcoin = 3
    //const todayDolar = 0.92
    //const todayEuro = 1.08
    const covertFrom = document.querySelector(".convert-from")
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
        //Se o select estiver selecionado o valor de dolar, entre aqui
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

    if (convertTo.value == "bitcoin") {
        valueConvertionDolar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrency * bitcoin)
    }

    if (convertTo.value == "yen") {
        valueConvertion.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
        }).format(inputCurrency / yenToday)
    }

    else if (covertFrom.value == "dolar") {
        valueConvertion.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency * todayDolar)
    }

    else if (covertFrom.value == "euro") {
        valueConvertion.innerHTML = new Intl.NumberFormat("nl-BE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / todayEuro)
    }
    else if (covertFrom.value == "libra") {
        valueConvertion.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency * todayEuro)

    } else if (covertFrom.value == "bitcoin") {
        valueConvertion.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrency * todayEuro)

    } else if (covertFrom.value == "yen") {
        valueConvertion.innerHTML = new Intl.NumberFormat("ja-Jp", {
            style: "currency",
            currency: "JPY",
        }).format(inputCurrency * todayEuro)
    }
}

convertButton.addEventListener("click", diceConvert)

const valorInput = document.querySelector(".convert-to")
const nameCurrency = document.querySelector("#usa")
const imgCurrency = document.getElementById("currency")
const valueConvertionDolar = document.getElementById("dolar")


valorInput.addEventListener("change", function () {

    if (valorInput.value == "real") {
        nameCurrency.innerHTML = "Real"
        imgCurrency.src = "./assets/real.png"

    }

    if (valorInput.value == "dolar") {
        nameCurrency.innerHTML = "Dólar Americano"
        imgCurrency.src = "./assets/dolar.png"

    }

    if (valorInput.value == "euro") {
        nameCurrency.innerHTML = "EURO"
        imgCurrency.src = "./assets/euro.png"

    }

    if (valorInput.value == "libra") {
        nameCurrency.innerHTML = "Libra"
        imgCurrency.src = "./assets/libra.png"

    }

    if (valorInput.value == "bitcoin") {
        nameCurrency.innerHTML = "Bitcoin"
        imgCurrency.src = "./assets/bitcoin.png"

    }

    if (valorInput.value == "yen") {
        nameCurrency.innerHTML = "Yen"
        imgCurrency.src = "./assets/yen.png"

    }
    diceConvert()

})



const covertFrom = document.querySelector(".convert-from")
const currencyName = document.querySelector("#name-moeda")
const currencyImg = document.querySelector(".bra")

covertFrom.addEventListener("change", function () {

    if (covertFrom.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"

    }

    if (covertFrom.value == "dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./assets/dolar.png"

    }

    if (covertFrom.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"

    }
    if (covertFrom.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"

    }

    if (covertFrom.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"

    }

    if (covertFrom.value == "yen") {
        currencyName.innerHTML = "Yen"
        currencyImg.src = "./assets/yen.png"

    }
    diceConvert()
})




