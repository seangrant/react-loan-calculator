'use strict';
(function(){

    var monthlyBreakdown = function(interestRate, years, principal, payment){
        var interest = interestRate;
        var rate = interest/1200;
        var months = years * 12;
        var monthlyPrincipal = rate / (Math.pow(1 + rate, months) - 1) * principal;
        var monthlyInterest = rate > 0 ? (rate  * principal) : principal / months;

        return {
            interest: monthlyInterest,
            principal : monthlyPrincipal,
            payment: payment - monthlyInterest
        }
    };
    var calcMonthly = function(interestRate, years, principal){
        var breakdown = monthlyBreakdown(interestRate, years, principal);
        var monthly = breakdown.interest + breakdown.principal;
        return {
            payment: monthly,
            interest: breakdown.interest
        };
    };

    var ammortize = function(interestRate, years, principal){
        principal = principal * 100;
        var monthly = this.monthlyPayment(interestRate, years, principal);
        console.log(monthly);
        var mortgageTable = this.monthlyTable(interestRate, years, principal, 0,[],  monthly.payment);
        var intterest = 0;
        return mortgageTable.map(function(row){
            return {
                month:  row.month,
                principal: Math.round(row.principal / 100),
                interest: Math.round(row.interest / 100),
                payment: Math.round(monthly.payment / 100),
            }
        });
    };

    var monthlyTable = function(interestRate, years, principal, month, mortgageTable, payment) {
        var totalMonths = (years * 12);
        mortgageTable = mortgageTable || [];
        if(month <= totalMonths){

            var breakdown = monthlyBreakdown(interestRate, years, principal, payment);
            var record = {month: month, principal: principal, interest: breakdown.interest};
            mortgageTable.push(record);
            month += 1;

            var balance = principal - breakdown.payment;
            monthlyTable(interestRate, years, balance , month, mortgageTable, payment);
        }

        return mortgageTable;
    };

    module.exports = {
        monthlyPayment: calcMonthly,
        monthlyTable: monthlyTable,
        ammortize: ammortize
    }

}());
