const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropDown=document.querySelectorAll(".dropDown");
let inputAmt=document.querySelector(".amount");
let options=document.getElementsByTagName("option");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select");
let btn=document.querySelector(".btn");
let msg=document.querySelector(".msg p")

for(let select of dropDown){
  for(let currCode in countryList){
    let option=document.createElement("option");
    option.innerText=currCode;
    option.value=currCode;
    select.append(option);
  }

  for(let option of options){
    if(option.parentElement.name==="from" && option.value==="USD"){
      option.selected="selected";
    }
    else if(option.parentElement.name==="to" && option.value==="INR"){
      option.selected="selected";
    }
    
  }

  select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
  });

}

const updateFlag = (element) => {
  let currCode = element.value;
  let newSrc = `https://flagsapi.com/${countryList[currCode]}/flat/64.png`;
  let img=element.parentElement.querySelector(".flag");
  img.src=newSrc
};

btn.addEventListener("click",(e)=>{
  if(inputAmt.value=="" || inputAmt.value<=0){
    inputAmt.value="1";
  }
  e.preventDefault=true;
 
  getExchangeRate(inputAmt.value);

});

async function getExchangeRate(inputAmt){
  url=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

  let response=await fetch(url);
  let data=await response.json();
  // msg.classList.remove("hidden");

  let rate=data[toCurr.value.toLowerCase()];

  let finalAmt=inputAmt*rate;
  
  msg.innerText=`${inputAmt} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
}









