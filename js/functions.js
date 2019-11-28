
function renderTables (data) {
    let HTML = '';

    for (let i=0; i<data.length; i++) {
        let month = data[i];
        let balance = data[i].income - data[i].expense;

        if(data[i].income === undefined){
            data[i].income = '-';
            balance = 0 - data[i].expense + ' Eur';
        } else {
            data[i].income = data[i].income + ' Eur';
        }
        if(data[i].expense === undefined){
            data[i].expense = '-';
            balance = data[i].income;
        } else {
            data[i].expense = data[i].expense + ' Eur';
        }

        HTML += `<div class="table-row">
                    <div class="cell">${month.month}</div>
                    <div class="cell">${months[month.month-1]}</div>
                    <div class="cell">${month.income}</div>
                    <div class="cell">${month.expense}</div>
                    <div class="cell">${balance}</div>
                </div>`;
    }

    return document.querySelector('.table-content').innerHTML = HTML;
}