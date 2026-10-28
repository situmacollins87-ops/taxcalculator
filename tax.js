document.getElementById('tax_form').addEventListener('submit', function (event) {
    event.preventDefault()
    let basic_salary = Number(document.getElementById("basic").value)
    let benefits = Number(document.getElementById("benefits").value)
    function calculate_gross(basic, benefits) {
        return basic + benefits;
    }
    let gross_salary = calculate_gross(basic_salary, benefits);
    document.getElementById('gross').innerHTML = gross_salary

    function calculate_nssf(gross_salary) {
        const NSSF_RATE = 0.06;
        const MINIMUM = 18000;
        let nssf_base = gross < MINIMUM ? MINIMUM : gross_salary;

        return nssf_base * NSSF_RATE;
    }
    let nssf = calculate_nssf(gross_salary)
    document.getElementById('nssf').innerHTML = nssf;

    function calculate_nhdf(gross_salary) {
        return gross_salary * 0.015;
    }
    let nhdf = calculate_nhdf(gross_salary);
    document.getElementById('nhdf').innerHTML = nhdf;

    function calculate_taxable_income(gross_salary, nssf, nhdf, nhif) {
        return gross_salary - (nssf + nhdf + nhif);
    }
    let taxable_income = calculate_taxable_income(gross_salary, nssf, nhdf, nhif);
    documebnt.getElementById('taxable_income').innerHTML = taxable_income;

    
});
//TASK 15: Using Python or PHP or Java or Ruby or JavaScript
//Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
//To find the Kenya NHIF Rate using THIS LINK:  
//Write a normal program but use functions if you feel comfortable.


//Continue with the program above, then use  the gross salary to find the NSSF. 
//To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 
//Write a normal program but use functions if you feel comfortable.
function calculate_nssf(gross_salary) {
    const NSSF_RATE = 0.06;
    const MINIMUM = 18000;
    let nssf_base = gross < MINIMUM ? MINIMUM : gross_salary;

    return nssf_base * NSSF_RATE;
}
let nssf = calculate_nssf(gross_salary)
//Task 17: Using Python or PHP or Java or Ruby or JavaScript
//Continue with the same program and calculate an individual’s NHDF using:
//i.e NHDF = gross_salary *  0.015

function calculate_nhdf(gross_salary) {
    return gross_salary * 0.015;
}
let nhdf = calculate_nhdf(gross_salary);
//Task 18: Using Python or PHP or Java or Ruby or JavaScript
//Calculate the taxable income.
//i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 

function calculate_taxable_income(gross_salary, nssf, nhdf, nhif) {
    return gross_salary - (nssf + nhdf + nhif);
}
let taxable_income = calculate_taxable_income(gross_salary, nssf, nhdf, nhif);
//TASK 19: Using Python or PHP or Java or Ruby or JavaScript
//Continue with the same program and find the person's PAYEE using the taxable income above.
//Find the Kenya PAYEE Tax Rate using THIS LINK

function calculate_payee(taxable_pay) {
    let tax = 0;
    let remaining = taxable_pay;
    if (remaining > 24000) {
        tax += 24000 * 0.10;
        remaining -= 24000;
    } else {
        tax += remaining * 0.10;
        return Math.max(0, tax - 24000);
    }
    let payee = calculate_payee(taxable_pay);
}// I am mathematically stuck here and can't proceed comfortably without guidence in as much as the arguments and parameters are provided in the link to question 19. I will be grateful to learn this through revision 




