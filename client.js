const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//processed employee bonuses by looping through employee objects, 
//and logged employee bonus function.
function processEmployeeBonuses(Employees){
  let string = "" ; 
  let salaryDom = $("#salaries") ; 
  salaryDom.empty() ;
  for (const employee of employees) {
    employeeToPrint = employeeBonuses(employee); 
    string += `<li> Name: ${employeeToPrint.name} Bonus Percentages: ${employeeToPrint.bonusPecentages} Total Compensation: ${employeeToPrint.totalCompensation} </li>` ;
  }
  salaryDom.append(string);
}
//Created new object. 
function employeeBonuses(object){
  let bonusResults = bonusCalulation(object)
  return {name: object.name, 
  bonusPecentages: bonusResults,
  totalCompensation: (Math.round(bonusResults * Number(object.annualSalary))) + Number(object.annualSalary),
  totalBonus: Math.round(bonusResults * Number(object.annualSalary))}
}
function bonusCalulation(object){
  let bonus = 0
  
  if (object.reviewRating <= 2){
    return bonus;
  } else if ( object.reviewRating === 3){
    bonus += .04;
  } else if (object.reviewRating === 4){
    bonus += .06;
  } else if ( object.reviewRating === 5){
    bonus += .10;
  }

  if ( object.employeeNumber.length === 4){
    bonus += .05;
  }

  if (Number(object.annualSalary) > 65000) {
    bonus -= .01 ;
  }

  //if bonus is greater than or equal  13 percent than bonus equal 
  if ( bonus > .13 ){
    bonus = .13
  }

  if (bonus < 0){
    bonus = 0
  }
  return bonus;
}

console.log( employees );

//Used for testing before adding JQuery
//processEmployeeBonuses();

console.log('JS');

$(document).ready(readyNow);
function readyNow() {
  console.log('JQ');
  $('#accessButton').on('click', processEmployeeBonuses );
}
