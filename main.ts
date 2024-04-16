#!/usr/bin/env node

// Currency Converter using Typescript

import inquirer from "inquirer";

let currency : any = {

    usd : 1, // Base Currency
    pkr : 278,
    euro : 0.94,
    ary : 32.49

}

let CurrConverter = await inquirer.prompt([
    
    {
        name : "fromCurrency",
        type : "list",
        choices : ["usd", "pkr", "euro", "ary"],
        message : "Enter a currency from which you want to convert."
    },

    {
        name : "toCurrency",
        type : "list",
        choices : ["usd", "pkr", "euro", "ary"],
        message : "Enter a currency in which you want to get converted."
    },

    {
        name : "amount",
        type : "number",
        message : "Enter an amount :"
    }

]);

let userFromCurrency = currency[CurrConverter.fromCurrency];
let userToCurrency = currency[CurrConverter.toCurrency];
let amount = CurrConverter.amount;
let baseAmount = amount / userFromCurrency;
let convertAmount = baseAmount * userToCurrency;

console.log(convertAmount);