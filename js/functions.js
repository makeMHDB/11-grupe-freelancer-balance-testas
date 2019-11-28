
function renderTables (data) {
    let HTML = '';
    let totalIncome = 0;
    let totalExpense = 0;
    let totalBalance = 0;

    for (let i=0; i<data.length; i++) {
        let month = data[i];
        let balance = data[i].income - data[i].expense;

        if(data[i].income === undefined){
            data[i].income = '-';
            balance = 0 - data[i].expense;
            totalIncome += 0;
        } else {
            data[i].income = data[i].income;
            totalIncome += data[i].income
        }
        if(data[i].expense === undefined){
            data[i].expense = '-';
            balance = data[i].income;
            totalExpense += 0;
        } else {
            data[i].expense = data[i].expense;
            totalExpense += data[i].expense;
        }

        HTML += `<div class="table-row">
                    <div class="cell id">${month.month}</div>
                    <div class="cell monthName">${months[month.month-1]}</div>
                    <div class="cell income">${month.income} Eur</div>
                    <div class="cell expense">${month.expense} Eur</div>
                    <div class="cell balance">${balance} Eur</div>
                </div>`;

        totalBalance += balance;
        
    }

    document.querySelector(".cell#totalIncome").innerHTML = totalIncome + ' Eur';
    document.querySelector(".cell#totalExpenses").innerHTML = totalExpense + ' Eur';
    document.querySelector(".cell#totalBalance").innerHTML = totalBalance + ' Eur';
    document.querySelector('.table-content').innerHTML = HTML;
}

function summary(data) {
    let minIncome = Infinity;
    let minIncomeID = '';
    let maxIncome = 0;
    let maxIncomeID = '';
    let minExpenses = Infinity;
    let minExpensesID = '';
    let maxExpenses = 0;
    let maxExpensesID = '';

    for(let l=0; l<data.length; l++){
        let inc = data[l].income;
        let exp = data[l].expense;

        if(inc > maxIncome) {
            maxIncome = inc;
            maxIncomeID = months[data[l].month-1];
        }

        if(exp > maxExpenses){
            maxExpenses = exp;
            maxExpensesID = months[data[l].month-1];
        }

        if(inc < minIncome && inc != 0){
            minIncome = inc;
            minIncomeID = months[data[l].month-1];
        }

        if(exp < minExpenses && exp != 0){
            minExpenses = exp;
            minExpensesID = months[data[l].month-1];
        }

    }

    console.log(maxIncome);
    console.log(maxExpenses);

    document.querySelector("#maxIncome").innerHTML = maxIncomeID;
    document.querySelector("#minIncome").innerHTML = minIncomeID;
    document.querySelector("#maxExpenses").innerHTML = maxExpensesID;
    document.querySelector("#minExpenses").innerHTML = minExpensesID;
}