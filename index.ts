#! /usr/bin/env node

import inquirer from "inquirer";
const randomNumber :number = Math.floor(10000 + Math.random() *90000)
console.log(randomNumber);

let myBalance: number = 0;

 let answer = await inquirer.prompt([
  {
    name: "student",
    type: "input",
    message: "Enter a student name:",
    validate: function(value){
      if(value.trim() !== ""){
        return true;
      }
      return "Please enter a  non-empty value.";
    }
  },
  {
    name: "courses",
    type: "list",
    message: "select the course to enrolled",
    choices: ["MS.Office", "HTML", "CSS", "Javascript", "typecript", "python"]
  }
 ]);

 const tutionFee: {[key: string]: number} ={
  "MS.Office": 2000,
  "HTML": 2500,
  "CSS" : 4000,
  "Javascript" : 5000, 
  "typecript":8000,
  "python": 10000
};
console.log(`\n Tution Fees: ${tutionFee[answer.courses]} /-\n`);
console.log(`Balance: ${myBalance}\n`);

let paymentType = await inquirer.prompt([
  {
    name: "payment",
    type: "list",
    message: "Select payment method",
    choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
  },
  {
    name: "amount",
    type: "input",
    message: "Transfer Money:",
    validate: function(value){
      if(value.trim() !== ""){
        return true;
      }
      return "Please enter a non-empty value."
    }
  }
]);
console.log(`\n You select payment method ${paymentType.payment} `);

const tutionFees =tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if (tutionFees === paymentAmount ){
  console.log(`Congratulations, you have successfully enrolled in ${answer.courses} course.\n`)
let ans = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "What would  you like  to do next",
    choices: ["View status", "Exit"]
  }
]) 
if(ans.select === "View status"){
  console.log(`\n********** Status***********\n`);
  console.log(`Student ID: ${randomNumber}`)
  console.log(`Student name: ${answer.student}`);
  console.log(`course: ${answer.courses}`);
  console.log(`Tution fees paid: ${paymentAmount}`);
  console.log(`Balance: ${myBalance += paymentAmount}`);
} else{
  console.log("\n Exiting Student Mangement System")
}

}else{
  console.log(`Invalid amount due to course\n`)
};