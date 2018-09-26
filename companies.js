const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1981, end: 2003},
    {name: "Company Three", category: "Auto", start: 1981, end: 2003},
    {name: "Company Four", category: "Retail", start: 1981, end: 2003},
    {name: "Company Five", category: "Technology", start: 1981, end: 2003},
    {name: "Company Six", category: "Finance", start: 1981, end: 2003},
    {name: "Company Seven", category: "Auto", start: 1981, end: 2003},
    {name: "Company Eight", category: "Technology", start: 1981, end: 2003},
    {name: "Company Nine", category: "Retail", start: 1981, end: 2003}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

companies.forEach(function(company) {
    console.log(company.name);
})

const icanDrink = ages.filter(age => age >= 21)

// console.log(icanDrink);

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies)

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

console.log(testMap);