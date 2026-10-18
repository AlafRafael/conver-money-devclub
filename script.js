const convetButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-para")
const currencySelectOrigem = document.getElementById("select-origem")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".valor-input").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas

   
    const dolarToday = 4.99
    const euroToday = 5.56 
    const libraToday = 5.73
    const bitcoinToday = 412.588


    if(currencySelect.value == "dolar"){
         currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC" 
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

   
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(currencySelect.value == "dolar"){
         currencyName.innerHTML = "Dolar"
         currencyImg.src = "./assets/dolar.png"
    }

    if(currencySelect.value == "euro"){
         currencyName.innerHTML = "Euro"
         currencyImg.src = "./assets/euro.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "libra"
        currencyImg.src = "./assets/libra.png"
    }

   convertValues()
}

currencySelect.addEventListener("change",changeCurrency)
convetButton.addEventListener("click",convertValues)                            