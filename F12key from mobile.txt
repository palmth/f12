// ==UserScript==
// @name         f12key.xyz
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://fw.f12key.xyz/
// @icon         https://www.google.com/s2/favicons?domain=f12key.xyz
// @grant        none
// ==/UserScript==
var DivWAXPTHB = document.createElement("div");
var ContentWAXPTHB = document.createTextNode("");
DivWAXPTHB.appendChild(ContentWAXPTHB);
//DivFarmPlotPrice.innerText = "WAXPTHB   "+FarmPlotPrice+" บาท";
DivWAXPTHB.style.color = "white";
//DivFarmPlotPrice.style.fontSize = "xx-large";
DivWAXPTHB.style.position = "relative";
DivWAXPTHB.style.left = "0px";
DivWAXPTHB.style.top = "0px";
DivWAXPTHB.style.backgroundColor ="#212529";
DivWAXPTHB.setAttribute("id", "DivWAXPTHB");
DivWAXPTHB.setAttribute("class", "badge sm");
document.body.appendChild(DivWAXPTHB);

var WAXPTHB=0;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var obj=JSON.parse(this.responseText);
        WAXPTHB=parseFloat(obj.prices[0][1]);
        console.log(obj.prices[0][1]);
        document.getElementById("DivWAXPTHB").innerText="WAXPTHB "+WAXPTHB.toFixed(2) +" บาท";
    }
};
function getWAXPTHB(){
    xmlhttp.open("GET", "https://api.coingecko.com/api/v3/coins/wax/market_chart?vs_currency=thb&days=0;", true);
    xmlhttp.send();
}

xmlhttp.open("GET", "https://api.coingecko.com/api/v3/coins/wax/market_chart?vs_currency=thb&days=0;", true);
xmlhttp.send();

var DivFarmPlotPrice = document.createElement("div");
var ContentFarmPlotPrice = document.createTextNode("");
DivFarmPlotPrice.appendChild(ContentFarmPlotPrice);
//DivFarmPlotPrice.innerText = "FARM PLOT   "+FarmPlotPrice+" ￦";
DivFarmPlotPrice.style.color = "white";
//DivFarmPlotPrice.style.fontSize = "xx-large";
DivFarmPlotPrice.style.position = "relative";
DivFarmPlotPrice.style.left = "0px";
DivFarmPlotPrice.style.top = "25px";
DivFarmPlotPrice.style.backgroundColor ="#212529";
DivFarmPlotPrice.setAttribute("id", "DivFarmPlotPrice");
DivFarmPlotPrice.setAttribute("class", "badge sm");
document.body.appendChild(DivFarmPlotPrice);

var DivFarmPlotPriceNBuild = document.createElement("div");
var ContentFarmPlotPriceNBuild = document.createTextNode("");
DivFarmPlotPriceNBuild.appendChild(ContentFarmPlotPriceNBuild);
//DivFarmPlotPriceNBuild.innerText = "FARM PLOT+Build   "+FarmPlotR+" ￦";
DivFarmPlotPriceNBuild.style.color = "white";
//DivFarmPlotPrice.style.fontSize = "xx-large";
DivFarmPlotPriceNBuild.style.position = "relative";
DivFarmPlotPriceNBuild.style.left = "0px";
DivFarmPlotPriceNBuild.style.top = "50px";
DivFarmPlotPriceNBuild.style.backgroundColor ="#212529";
DivFarmPlotPriceNBuild.setAttribute("id", "DivFarmPlotPriceNBuild");
DivFarmPlotPriceNBuild.setAttribute("class", "badge sm");
document.body.appendChild(DivFarmPlotPriceNBuild);

var DivBarleySeed = document.createElement("div");
var ContentBarleySeed = document.createTextNode("");
DivBarleySeed.appendChild(ContentBarleySeed);
//DivBarleySeed.innerText = "BARLEY SEED   "+BarleySeedPrice+" ￦";
DivBarleySeed.style.color = "white";
//DivBarleySeed.style.fontSize = "xx-large";
DivBarleySeed.style.position = "relative";
DivBarleySeed.style.left = "0px";
DivBarleySeed.style.top = "75px";
DivBarleySeed.style.backgroundColor ="#212529";
DivBarleySeed.setAttribute("id", "DivBarleySeed");
DivBarleySeed.setAttribute("class", "badge sm");
document.body.appendChild(DivBarleySeed);

var DivCost = document.createElement("div");
var ContentCost = document.createTextNode("");
DivCost.appendChild(ContentCost);
//DivCost.innerText = "Cost   "+BarleySeedPrice+" ￦";
DivCost.style.color = "white";
//DivCost.style.fontSize = "xx-large";
DivCost.style.position = "relative";
DivCost.style.left = "0px";
DivCost.style.top = "100px";
DivCost.style.backgroundColor ="#212529";
DivCost.setAttribute("id", "DivCost");
DivCost.setAttribute("class", "badge sm");
document.body.appendChild(DivCost);

var DivIncome = document.createElement("div");
var ContentIncome = document.createTextNode("");
DivIncome.appendChild(ContentIncome);
//DivCostPerWeekt.innerText = "DivCostPerWeekt   "+CostPerWeekt+" ￦";
DivIncome.style.color = "white";
//DivCostPerWeekt.style.fontSize = "xx-large";
DivIncome.style.position = "relative";
DivIncome.style.left = "0px";
DivIncome.style.top = "125px";
DivIncome.style.backgroundColor ="#212529";
DivIncome.setAttribute("id", "DivIncome");
DivIncome.setAttribute("class", "badge sm");
document.body.appendChild(DivIncome);

var DivCostPerWeek = document.createElement("div");
var ContentCostPerWeek = document.createTextNode("");
DivCostPerWeek.appendChild(ContentCostPerWeek);
//DivCostPerWeek.innerText = "DivCostPerWeek   "+DivCostPerWeek+" ￦";
DivCostPerWeek.style.color = "white";
//DivCostPerWeek.style.fontSize = "xx-large";
DivCostPerWeek.style.position = "relative";
DivCostPerWeek.style.left = "0px";
DivCostPerWeek.style.top = "150px";
DivCostPerWeek.style.backgroundColor ="#212529";
DivCostPerWeek.setAttribute("id", "DivCostPerWeek");
DivCostPerWeek.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPerWeek);

var DivCostPer1Plot1Week = document.createElement("div");
var ContentCostPer1Plot1Week = document.createTextNode("");
DivCostPer1Plot1Week.appendChild(ContentCostPer1Plot1Week);
//DivCostPer1Plot1Week.innerText = "DivCostPer1Plot1Week   "+DivCostPer1Plot1Week+" ￦";
DivCostPer1Plot1Week.style.color = "white";
//DivCostPer1Plot1Week.style.fontSize = "xx-large";
DivCostPer1Plot1Week.style.position = "relative";
DivCostPer1Plot1Week.style.left = "0px";
DivCostPer1Plot1Week.style.top = "175px";
DivCostPer1Plot1Week.style.backgroundColor ="#212529";
DivCostPer1Plot1Week.setAttribute("id", "DivCostPer1Plot1Week");
DivCostPer1Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer1Plot1Week);

var DivCostPer2Plot1Week = document.createElement("div");
var ContentCostPer2Plot1Week = document.createTextNode("");
DivCostPer2Plot1Week.appendChild(ContentCostPer2Plot1Week);
//DivCostPer2Plot1Week.innerText = "DivCostPer2Plot1Week   "+DivCostPer2Plot1Week+" ￦";
DivCostPer2Plot1Week.style.color = "white";
//DivCostPer2Plot1Week.style.fontSize = "xx-large";
DivCostPer2Plot1Week.style.position = "relative";
DivCostPer2Plot1Week.style.left = "0px";
DivCostPer2Plot1Week.style.top = "200px";
DivCostPer2Plot1Week.style.backgroundColor ="#212529";
DivCostPer2Plot1Week.setAttribute("id", "DivCostPer2Plot1Week");
DivCostPer2Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer2Plot1Week);

var DivCostPer3Plot1Week = document.createElement("div");
var ContentCostPer3Plot1Week = document.createTextNode("");
DivCostPer3Plot1Week.appendChild(ContentCostPer3Plot1Week);
//DivCostPer3Plot1Week.innerText = "DivCostPer3Plot1Week   "+DivCostPer3Plot1Week+" ￦";
DivCostPer3Plot1Week.style.color = "white";
//DivCostPer3Plot1Week.style.fontSize = "xx-large";
DivCostPer3Plot1Week.style.position = "relative";
DivCostPer3Plot1Week.style.left = "0px";
DivCostPer3Plot1Week.style.top = "225px";
DivCostPer3Plot1Week.style.backgroundColor ="#212529";
DivCostPer3Plot1Week.setAttribute("id", "DivCostPer3Plot1Week");
DivCostPer3Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer3Plot1Week);

var DivCostPer4Plot1Week = document.createElement("div");
var ContentCostPer4Plot1Week = document.createTextNode("");
DivCostPer4Plot1Week.appendChild(ContentCostPer4Plot1Week);
//DivCostPer4Plot1Week.innerText = "DivCostPer4Plot1Week   "+DivCostPer4Plot1Week+" ￦";
DivCostPer4Plot1Week.style.color = "white";
//DivCostPer3Plot1Week.style.fontSize = "xx-large";
DivCostPer4Plot1Week.style.position = "relative";
DivCostPer4Plot1Week.style.left = "0px";
DivCostPer4Plot1Week.style.top = "250px";
DivCostPer4Plot1Week.style.backgroundColor ="#212529";
DivCostPer4Plot1Week.setAttribute("id", "DivCostPer4Plot1Week");
DivCostPer4Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer4Plot1Week);

var DivCostPer5Plot1Week = document.createElement("div");
var ContentCostPer5Plot1Week = document.createTextNode("");
DivCostPer5Plot1Week.appendChild(ContentCostPer5Plot1Week);
//DivCostPer5Plot1Week.innerText = "DivCostPer5Plot1Week   "+DivCostPer5Plot1Week+" ￦";
DivCostPer5Plot1Week.style.color = "white";
//DivCostPer5Plot1Week.style.fontSize = "xx-large";
DivCostPer5Plot1Week.style.position = "relative";
DivCostPer5Plot1Week.style.left = "0px";
DivCostPer5Plot1Week.style.top = "275px";
DivCostPer5Plot1Week.style.backgroundColor ="#212529";
DivCostPer5Plot1Week.setAttribute("id", "DivCostPer5Plot1Week");
DivCostPer5Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer5Plot1Week);

var DivCostPer6Plot1Week = document.createElement("div");
var ContentCostPer6Plot1Week = document.createTextNode("");
DivCostPer6Plot1Week.appendChild(ContentCostPer6Plot1Week);
//DivCostPer6Plot1Week.innerText = "DivCostPer6Plot1Week   "+DivCostPer6Plot1Week+" ￦";
DivCostPer6Plot1Week.style.color = "white";
//DivCostPer6Plot1Week.style.fontSize = "xx-large";
DivCostPer6Plot1Week.style.position = "relative";
DivCostPer6Plot1Week.style.left = "0px";
DivCostPer6Plot1Week.style.top = "300px";
DivCostPer6Plot1Week.style.backgroundColor ="#212529";
DivCostPer6Plot1Week.setAttribute("id", "DivCostPer6Plot1Week");
DivCostPer6Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer6Plot1Week);

var DivCostPer7Plot1Week = document.createElement("div");
var ContentCostPer7Plot1Week = document.createTextNode("");
DivCostPer7Plot1Week.appendChild(ContentCostPer7Plot1Week);
//DivCostPer7Plot1Week.innerText = "DivCostPer7Plot1Week   "+DivCostPer7Plot1Week+" ￦";
DivCostPer7Plot1Week.style.color = "white";
//DivCostPer7Plot1Week.style.fontSize = "xx-large";
DivCostPer7Plot1Week.style.position = "relative";
DivCostPer7Plot1Week.style.left = "0px";
DivCostPer7Plot1Week.style.top = "325px";
DivCostPer7Plot1Week.style.backgroundColor ="#212529";
DivCostPer7Plot1Week.setAttribute("id", "DivCostPer7Plot1Week");
DivCostPer7Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer7Plot1Week);

var DivCostPer8Plot1Week = document.createElement("div");
var ContentCostPer8Plot1Week = document.createTextNode("");
DivCostPer8Plot1Week.appendChild(ContentCostPer8Plot1Week);
//DivCostPer8Plot1Week.innerText = "DivCostPer8Plot1Week   "+DivCostPer8Plot1Week+" ￦";
DivCostPer8Plot1Week.style.color = "white";
//DivCostPer8Plot1Week.style.fontSize = "xx-large";
DivCostPer8Plot1Week.style.position = "relative";
DivCostPer8Plot1Week.style.left = "0px";
DivCostPer8Plot1Week.style.top = "350px";
DivCostPer8Plot1Week.style.backgroundColor ="#212529";
DivCostPer8Plot1Week.setAttribute("id", "DivCostPer8Plot1Week");
DivCostPer8Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer8Plot1Week);

function chgList(){
    getWAXPTHB();
    if(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div.d-inline-block.w-50.b-atomic > div.d-inline-block.w-75.flex-right.vtop > a > span:nth-child(2)").innerText=="?"){ setTimeout(chgList, 3000);return;}
    var FarmPlotAtomic=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div.d-inline-block.w-50.b-atomic > div.d-inline-block.w-75.flex-right.vtop > a > span:nth-child(2)").innerText);
    var FarmPlotCraftCost=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div.d-inline-block.w-50.b-alcor > div:nth-child(3) > div:nth-child(2) > span").innerText);
    var FarmPlotBuild=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div.d-block.text-right > div > div.d-inline-block.w-50.text-right.ssm.c-white > div:nth-child(2) > span").innerText);
    if(FarmPlotAtomic>FarmPlotCraftCost){
        var FarmPlotPrice=FarmPlotCraftCost;
    }else if(FarmPlotCraftCost>FarmPlotAtomic){
        FarmPlotPrice=FarmPlotAtomic;
    }
    document.getElementById("DivFarmPlotPrice").innerText="FARM PLOT "+FarmPlotPrice+" ￦ "+(FarmPlotPrice*WAXPTHB).toFixed(0) +" บาท";

    var FarmPlotR=FarmPlotPrice+FarmPlotBuild;
    document.getElementById("DivFarmPlotPriceNBuild").innerText="FARM PLOT+Build   "+FarmPlotR+"￦ "+(FarmPlotR*WAXPTHB).toFixed(0) +" บาท";

    var BarleySeedAtomic=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div:nth-child(6) > div:nth-child(1) > div > div.d-inline-block.w-40.b-atomic > div:nth-child(2) > a > span:nth-child(2)").innerText);
    var BarleySeedIngame=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div:nth-child(6) > div:nth-child(1) > div > div.d-inline-block.w-40.fw_craft.b-fw > div:nth-child(4) > span").innerText);
    if(BarleySeedAtomic>BarleySeedIngame){
        var BarleySeedPrice=BarleySeedIngame;
    }else if(BarleySeedIngame>BarleySeedAtomic){
        BarleySeedPrice=BarleySeedAtomic;
    }
    document.getElementById("DivBarleySeed").innerText="BARLEY SEED "+BarleySeedPrice+" ￦ "+(BarleySeedPrice*WAXPTHB).toFixed(0) +" บาท";

    var Cost=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div:nth-child(6) > div:nth-child(1) > div > div.d-inline-block.w-66.fw_craft.text-center > div:nth-child(3) > span").innerText);
    document.getElementById("DivCost").innerText="Cost   "+Cost+" ￦ "+(Cost*WAXPTHB).toFixed(0) +" บาท";

    var IncomeAtomic=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div:nth-child(6) > div:nth-child(1) > div > div.d-inline-block.w-66.fw_craft.text-center > div:nth-child(11) > span").innerText);
    var IncomeExchange=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div:nth-child(6) > div:nth-child(1) > div > div.d-inline-block.w-66.fw_craft.text-center > div:nth-child(15) > span").innerText);
    if(IncomeAtomic>IncomeExchange){
        var Income=IncomeAtomic;
    }else{
        Income=IncomeExchange;
    }
    document.getElementById("DivIncome").innerText="Income "+Income+" ￦ "+(Income*WAXPTHB).toFixed(0) +" บาท";

    var CostPerWeek=BarleySeedPrice+Cost;
    document.getElementById("DivCostPerWeek").innerText="CostPerWeek "+CostPerWeek+" ￦ "+(CostPerWeek*WAXPTHB).toFixed(0) +" บาท";

    var Profit;
    Profit=Income-CostPerWeek;

    var CostPer1Plot1Week;
    CostPer1Plot1Week=FarmPlotR+CostPerWeek;
    var Profit1Plot1W;
    Profit1Plot1W=Profit-FarmPlotBuild;
    var PercentProfit1Plot1W;
    PercentProfit1Plot1W=((Profit1Plot1W/CostPer1Plot1Week)*100).toFixed(2);
    document.getElementById("DivCostPer1Plot1Week").innerText="1Plot1W "+CostPer1Plot1Week+" ￦ "+(CostPer1Plot1Week*WAXPTHB).toFixed(0) +" บาท PF "+Profit1Plot1W+" ￦ "+(Profit1Plot1W*WAXPTHB).toFixed(0)+" บาท "+PercentProfit1Plot1W+"%";

    var CostPer2Plot1Week;
    CostPer2Plot1Week=FarmPlotR+(CostPerWeek*2);
    var Profit2Plot1W;
    Profit2Plot1W=(Profit*2)-FarmPlotBuild;
    var PercentProfit2Plot1W;
    PercentProfit2Plot1W=((Profit2Plot1W/CostPer2Plot1Week)*100).toFixed(2);
    document.getElementById("DivCostPer2Plot1Week").innerText="2Plot1W "+CostPer2Plot1Week+" ￦ "+(CostPer2Plot1Week*WAXPTHB).toFixed(0) +" บาท PF "+Profit2Plot1W+" ￦ "+(Profit2Plot1W*WAXPTHB).toFixed(0)+" บาท "+PercentProfit2Plot1W+"%";

    var CostPer3Plot1Week;
    CostPer3Plot1Week=FarmPlotR+(CostPerWeek*3);
    var Profit3Plot1W;
    Profit3Plot1W=(Profit*3)-FarmPlotBuild;
    var PercentProfit3Plot1W;
    PercentProfit3Plot1W=((Profit3Plot1W/CostPer3Plot1Week)*100).toFixed(2);
    document.getElementById("DivCostPer3Plot1Week").innerText="3Plot1W "+CostPer3Plot1Week+" ￦ "+(CostPer3Plot1Week*WAXPTHB).toFixed(0) +" บาท PF "+Profit3Plot1W+" ￦ "+(Profit3Plot1W*WAXPTHB).toFixed(0)+" บาท "+PercentProfit3Plot1W+"%";

    var CostPer4Plot1Week;
    CostPer4Plot1Week=FarmPlotR+(CostPerWeek*4);
    var Profit4Plot1W;
    Profit4Plot1W=(Profit*4)-FarmPlotBuild;
    var PercentProfit4Plot1W;
    PercentProfit4Plot1W=((Profit4Plot1W/CostPer4Plot1Week)*100).toFixed(2);
    document.getElementById("DivCostPer4Plot1Week").innerText="4Plot1W "+CostPer4Plot1Week+" ￦ "+(CostPer4Plot1Week*WAXPTHB).toFixed(0) +" บาท PF "+Profit4Plot1W+" ￦ "+(Profit4Plot1W*WAXPTHB).toFixed(0)+" บาท "+PercentProfit4Plot1W+"%";

    var CostPer5Plot1Week;
    CostPer5Plot1Week=FarmPlotR+(CostPerWeek*5);
    var Profit5Plot1W;
    Profit5Plot1W=(Profit*5)-FarmPlotBuild;
    var PercentProfit5Plot1W;
    PercentProfit5Plot1W=((Profit5Plot1W/CostPer5Plot1Week)*100).toFixed(2);
    document.getElementById("DivCostPer5Plot1Week").innerText="5Plot1W "+CostPer5Plot1Week+" ￦ "+(CostPer5Plot1Week*WAXPTHB).toFixed(0) +" บาท PF "+Profit5Plot1W+" ￦ "+(Profit5Plot1W*WAXPTHB).toFixed(0)+" บาท "+PercentProfit5Plot1W+"%";

    var CostPer6Plot1Week;
    CostPer6Plot1Week=FarmPlotR+(CostPerWeek*6);
    var Profit6Plot1W;
    Profit6Plot1W=(Profit*6)-FarmPlotBuild;
    var PercentProfit6Plot1W;
    PercentProfit6Plot1W=((Profit6Plot1W/CostPer6Plot1Week)*100).toFixed(2);
    document.getElementById("DivCostPer6Plot1Week").innerText="6Plot1W "+CostPer6Plot1Week+" ￦ "+(CostPer6Plot1Week*WAXPTHB).toFixed(0) +" บาท PF "+Profit6Plot1W+" ￦ "+(Profit6Plot1W*WAXPTHB).toFixed(0)+" บาท "+PercentProfit6Plot1W+"%";

    var CostPer7Plot1Week;
    CostPer7Plot1Week=FarmPlotR+(CostPerWeek*7);
    var Profit7Plot1W;
    Profit7Plot1W=(Profit*7)-FarmPlotBuild;
    var PercentProfit7Plot1W;
    PercentProfit7Plot1W=((Profit7Plot1W/CostPer7Plot1Week)*100).toFixed(2);
    document.getElementById("DivCostPer7Plot1Week").innerText="7Plot1W "+CostPer7Plot1Week+" ￦ "+(CostPer7Plot1Week*WAXPTHB).toFixed(0) +" บาท PF "+Profit7Plot1W+" ￦ "+(Profit7Plot1W*WAXPTHB).toFixed(0)+" บาท "+PercentProfit7Plot1W+"%";

    var CostPer8Plot1Week;
    CostPer8Plot1Week=FarmPlotR+(CostPerWeek*8);
    var Profit8Plot1W;
    Profit8Plot1W=(Profit*8)-FarmPlotBuild;
    var PercentProfit8Plot1W;
    PercentProfit8Plot1W=((Profit8Plot1W/CostPer8Plot1Week)*100).toFixed(2);
    document.getElementById("DivCostPer8Plot1Week").innerText="8Plot1W "+CostPer8Plot1Week+" ￦ "+(CostPer8Plot1Week*WAXPTHB).toFixed(0) +" บาท PF "+Profit8Plot1W+" ￦ "+(Profit8Plot1W*WAXPTHB).toFixed(0)+" บาท "+PercentProfit8Plot1W+"%";

    console.log("success")
}
chgList();

var btn1 = document.createElement("BUTTON");
btn1.innerHTML = "reload";
btn1.style.position = "relative";
btn1.style.top="-50px";
btn1.style.left="-50px";
btn1.addEventListener("click", chgList);
document.body.appendChild(btn1);

document.addEventListener('keypress', chgList);