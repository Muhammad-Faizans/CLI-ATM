#! /usr/bin/env node
// import inquirer
import inquirer from "inquirer";
    //  balance in dollar
    let balance = 500000; //DOLLAR
    let mypin = 1234; 
    //  welcome message
    console.log("Welcome to ATM");

   let pinanswer=await inquirer.prompt([{
    //  for pin
        name: "pin",
        type: "number",
        message: "Enter your pin"
    }])

    console.log(balance)
    
    if(pinanswer.pin === mypin){
        console.log("Pin is correct");

        let operationanswer = await inquirer.prompt([{
            name: "operation",
            type: "list",
            choices: ["Cash Withdrawal","Check Balance","Transaction History","Exit"],
            message: "Select option you want"
        }])
        //           for cash withdrawal
        if(operationanswer.operation === "Cash Withdrawal"){
            let amount = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "Enter amount you want to withdraw"
            }])

            if(amount.amount <= balance){
                balance = balance - amount.amount;
                console.log("Amount withdrawn successfully");
                console.log("Remaining balance is",balance);
            }
            else{
                console.log("Insufficient balance");
            }
        }
        //           for check balance
        else if(operationanswer.operation === "Check Balance"){
            console.log("Your balance is", balance);
        }
       
        //           for transaction history
        else if(operationanswer.operation === "Transaction History"){
            console.log("No transaction history available");
        }
        //           for  exit option
        else if(operationanswer.operation === "Exit"){
            console.log("Thank you for using our ATM");
        }
    }
    else{
        console.log("Pin is incorrect")
    }
