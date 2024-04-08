#!/usr/bin/env node
import inquirer from "inquirer";
const curRates = {
    USD: 1,
    PKR: 271.68,
    GBP: 0.80,
    EUR: 0.82,
    INR: 99.41
};
let userInput = await inquirer.prompt([
    {
        name: "from",
        message: "Enter which currency to convert from:",
        type: "list",
        choices: ['USD', 'PKR', 'GBP', 'EUR', 'INR']
    },
    {
        name: "to",
        message: "Enter which currency to convert to:",
        type: "list",
        choices: ['USD', 'PKR', 'GBP', 'EUR', 'INR']
    },
    {
        name: "amount",
        message: "Enter the amount you wish to convert:",
        type: "number",
    },
]);
let amountFrom = curRates[userInput.from];
let amountTo = curRates[userInput.to];
let amount = userInput.amount;
let baseCurrency = amount / amountFrom;
let amountCovert = amountTo * baseCurrency;
console.log(amountCovert);
