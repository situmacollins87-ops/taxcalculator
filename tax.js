document.getElementById('tax_form').addEventListener('submit', function (event) {
    event.preventDefault()
    let basic_salary = Number(document.getElementById("basic").value)
    let benefits = Number(document.getElementById("benefits").value)
    function calculate_gross(basic, benefits) {
        return basic + benefits;
    }
    let gross_salary = calculate_gross(basic_salary, benefits);
    document.getElementById('gross').innerHTML = gross_salary

    function calculateNHIF(grossSalary) {
        if (grossSalary < 6000) return 150;
        else if (grossSalary < 8000) return 300;
        else if (grossSalary < 12000) return 400;
        else if (grossSalary < 15000) return 500;
        else if (grossSalary < 20000) return 600;
        else if (grossSalary < 25000) return 750;
        else if (grossSalary < 30000) return 850;
        else if (grossSalary < 35000) return 900;
        else if (grossSalary < 40000) return 950;
        else if (grossSalary < 45000) return 1000;
        else if (grossSalary < 50000) return 1100;
        else if (grossSalary < 60000) return 1200;
        else if (grossSalary < 70000) return 1300;
        else if (grossSalary < 80000) return 1400;
        else if (grossSalary < 90000) return 1500;
        else if (grossSalary < 100000) return 1600;
        else return 1700;
    }
    let nhif = calculateNHIF(gross_salary)
    document.getElementById('nhif').innerHTML = nhif;


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
    document.getElementById('taxable_income').innerHTML = taxable_income;

    function calculatePAYEE(taxableIncome) {
    let payee = 0;

    if (taxableIncome > 0) {
        payee += Math.min(taxableIncome, 24000) * 0.10;
    }

    if (taxableIncome > 24000) {
        payee += Math.min(taxableIncome - 24000, 8333) * 0.25;
    }

    if (taxableIncome > 32333) {
        payee += Math.min(taxableIncome - 32333, 467667) * 0.30;
    }

    if (taxableIncome > 500000) {
        payee += Math.min(taxableIncome - 500000, 300000) * 0.325;
    }

    if (taxableIncome > 800000) {
        payee += (taxableIncome - 800000) * 0.35;
    }

     if (payee < 2400) {
        return 0;
    } else {
        return payee - 2400;
    }

}
let payee = calculatePAYEE('taxableIncome');
document.getElementById('payee').innerHTML = payee;



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

function calculatePAYEE(taxableIncome) {
    let payee = 0;

    if (taxableIncome > 0) {
        payee += Math.min(taxableIncome, 24000) * 0.10;
    }

    if (taxableIncome > 24000) {
        payee += Math.min(taxableIncome - 24000, 8333) * 0.25;
    }

    if (taxableIncome > 32333) {
        payee += Math.min(taxableIncome - 32333, 467667) * 0.30;
    }

    if (taxableIncome > 500000) {
        payee += Math.min(taxableIncome - 500000, 300000) * 0.325;
    }

    if (taxableIncome > 800000) {
        payee += (taxableIncome - 800000) * 0.35;
    }

     if (payee < 2400) {
        return 0;
    } else {
        return payee - 2400;
    }
}

// I am mathematically stuck here and can't proceed comfortably without guidence in as much as the arguments and parameters are provided in the link to question 19. I will be grateful to learn this through revision 




