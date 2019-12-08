let budgetPerMonth = prompt('Ваш бюджет на месяц?');
let date = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: budgetPerMonth,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let mandatoryExpenseItem1 = prompt('Введите обязательную статью расходов в этом месяце');
let howMuch1              = prompt('Во сколько обойдется?');
let mandatoryExpenseItem2 = prompt('Введите обязательную статью расходов в этом месяце');
let howMuch2              = prompt('Во сколько обойдется?');

appData.expenses.mandatoryExpenseItem1 = howMuch1;
appData.expenses.mandatoryExpenseItem2 = howMuch2;

alert(appData.budget / 30);

