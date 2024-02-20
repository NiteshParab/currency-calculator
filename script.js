const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let selectCountry=document.querySelectorAll(".country");

for(let select of selectCountry){
    for(let country in countryList){
        // console.log(country,countryList[country]);
        let option=document.createElement("option");
        option.value=countryList[country];
        option.innerText=country;
        select.append(option);  
    }
}