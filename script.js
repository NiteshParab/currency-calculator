const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropDown=document.querySelectorAll(".dropDown");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let options=document.getElementsByTagName("option");

for(let select of dropDown){
  for(let currCode in countryList){
    let option=document.createElement("option");
    option.innerText=currCode;
    option.value=countryList[currCode];
    select.append(option);
  }

  for(let option of options){
    if(option.parentElement.name==="from" && option.value==="US"){
      option.selected="selected";
    }
    else if(option.parentElement.name==="to" && option.value==="IN"){
      option.selected="selected";
    }
    
  }

  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  });

}

const updateFlag = (element) => {
  let currCode = element.value;
  let newSrc = `https://flagsapi.com/${currCode}/flat/64.png`;
  let img=element.parentElement.querySelector(".flag");
  img.src=newSrc
};





