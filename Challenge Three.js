//NHIF
const basicSalaryNode = document.querySelector("#basic-salary");
const benefitsNode = document.querySelector("#benefits");
const calculateTaxButtonNode = document.querySelector("#calculate-tax");

const grossSalaryNode = document.querySelector("#gross-salary");
const nhifDeductionsNode = document.querySelector("#nhif-deductions");
const nssfDeductionsNode = document.querySelector("#nssf-deductions");
const netSalaryNode = document.querySelector("#net-salary");
const payeAmountNode = document.querySelector("#paye-amount");

const personalTaxRelief = 2400 

function calculateGrossSalary(basicSalary,benefits){
  return basicSalary + benefits;
}

 function calculateNetSalary(grossSalary, deductions, paye){
  return grossSalary - (deductions + paye);
 }

// NHIF

function calculateNhifDeductions(grossSalary) {

  let nhifDeductionsAmount = 0;



  if (grossSalary >= 6000 && grossSalary <= 7999) {

    nhifDeductionsAmount = 300;

  } else if (grossSalary >= 8000 && grossSalary<= 11999) {

    nhifDeductionsAmount = 400;

  } else if (grossSalary >= 12000 && grossSalary <= 14999) {

    nhifDeductionsAmount = 500;

  } else if (grossSalary >= 15000 && grossSalary <= 19999) {

   nhifDeductionsAmount = 600;

  } else if (grossSalary >= 20000 && grossSalary <= 24999) {

    nhifDeductionsAmount = 750;

  } else if (grossSalary >= 25000 && grossSalary <= 29999) {

    nhifDeductionsAmount = 850;

  } else if (grossSalary >= 30000 && grossSalary <= 34999) {

    nhifDeductionsAmount = 900;

  } else if (grossSalary >= 35000 && grossSalary <= 39999) {

    nhifDeductionsAmount = 950;

  } else if (grossSalary >= 40000 && grossSalary <= 44999) {

    nhifDeductionsAmount = 1000;

  } else if (grossSalary >= 45000 && grossSalary <= 49999) {

    nhifDeductionsAmount= 1100;

  } else if (grossSalary >= 50000 && grossSalary <= 59999) {

   nhifDeductionsAmount = 1200;

  } else if (grossSalary >= 60000 && grossSalary <= 69999) {

    nhifDeductionsAmount= 1300;

  } else if (grossSalary >= 70000 && grossSalary<= 79999) {

    nhifDeductionsAmount = 1400;

  } else if (grossSalary >= 80000 && grossSalary <= 89999) {

    nhifDeductionsAmount = 1500;

  } else if (grossSalary >= 90000 && grossSalary <= 99999) {

    nhifDeductionsAmount = 1600;

  } else if (grossSalary >= 100000) {

    nhifDeductionsAmount = 1700;

  }



  return nhifDeductionsAmount;

}



//   //NSSF

function calculateNssfDeductions(grossSalary) {

  return grossSalary * 0.06

}



//  //PAYE Amount

function calculatePayeAmount(taxableAmount) {

  let payeAmount = 0;



  if (taxableAmount <= 24000) {

    payeAmount = taxableAmount * 0.1;

  } else if (taxableAmount >= 24001 && taxableAmount <= 32333) {

    payeAmount = taxableAmount * 0.25;

  } else if (taxableAmount > 32333) {

    payeAmount = taxableAmount * 0.30;

  }



  return payeAmount;

}
  
// Taxable Income
function calculateTaxableAmount(grossSalaryAmount, deductionAmount){
 const taxableAmount = grossSalaryAmount - deductionAmount;
 return taxableAmount;
}


function calculateTax(){
  const basicSalaryAmount = Number.parseInt(basicSalaryNode.value);
  const benefitsAmount = Number.parseInt(benefitsNode.value);
  const grossSalaryAmount = calculateGrossSalary(basicSalaryAmount, benefitsAmount);
  const nhifDeductionsAmount = calculateNhifDeductions(grossSalaryAmount)
  const nssfDeductionsAmount = calculateNssfDeductions(grossSalaryAmount);
  const taxableAmount = calculateTaxableAmount(grossSalaryAmount);
  const payeAmount = calculatePayeAmount(taxableAmount);
  const deductionAmount = nhifDeductionsAmount + nssfDeductionsAmount;
  const netSalaryAmount = calculateNetSalary(grossSalaryAmount, deductionAmount, payeAmount);
  
grossSalaryNode.querySelector("span").textContent = grossSalaryAmount;
nhifDeductionsNode.querySelector("span").textContent = nhifDeductionsAmount;
nssfDeductionsNode.querySelector("span").textContent = nssfDeductionsAmount;
netSalaryNode.querySelector("span").textContent = netSalaryAmount;
payeAmountNode.querySelector("span").textContent = payeAmount;

}

calculateTaxButtonNode.addEventListener("click", calculateTax)

