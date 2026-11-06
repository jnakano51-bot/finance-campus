export function projectGrowth(initial, monthly, years, annualPercent){
 if (![initial,monthly,years,annualPercent].every(Number.isFinite)||initial<0||monthly<0||years<1||years>60||annualPercent<=-100||annualPercent>100)throw new Error('Use valid amounts, 1–60 years and a return above −100%.');
 const months=Math.round(years*12), rate=Math.pow(1+annualPercent/100,1/12)-1;let balance=initial;const series=[{year:0,balance,contributed:initial}];
 for(let m=1;m<=months;m++){balance=balance*(1+rate)+monthly;if(m%12===0)series.push({year:m/12,balance,contributed:initial+monthly*m})}
 return {balance,contributed:initial+monthly*months,growth:balance-initial-monthly*months,series};
}
export function budgetSummary(income, essentials, flexible, debt, savings){if(![income,essentials,flexible,debt,savings].every(n=>Number.isFinite(n)&&n>=0))throw new Error('Use nonnegative monthly amounts.');return {remaining:income-essentials-flexible-debt-savings,spent:essentials+flexible+debt,savingsRate:income?savings/income*100:0}}
export function matchCareers(careers, choices){return careers.map(c=>({...c,score:c.fit.reduce((sum,x)=>sum+(choices.includes(x)?1:0),0)})).sort((a,b)=>b.score-a.score).slice(0,3)}
export function validSymbol(value){return /^[A-Z][A-Z0-9_]{0,14}:[A-Z0-9][A-Z0-9.\-]{0,19}$/.test(value)}
