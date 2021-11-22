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

/*var imgHammer = document.createElement("img");
imgHammer.setAttribute("id", "imgHammer");
imgHammer.setAttribute("src", "data:image/png;base64,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");
imgHammer.setAttribute("width", "12");
imgHammer.setAttribute("height", "12");*/

var DivFarmPlotPrice = document.createElement("div");
var ContentFarmPlotPrice = document.createTextNode("");
DivFarmPlotPrice.appendChild(ContentFarmPlotPrice);
//DivFarmPlotPrice.innerText = "FARM PLOT   "+FarmPlotPrice+" ￦";
DivFarmPlotPrice.style.color = "white";
//DivFarmPlotPrice.style.fontSize = "xx-large";
DivFarmPlotPrice.style.position = "relative";
DivFarmPlotPrice.style.left = "10px";
DivFarmPlotPrice.style.top = "5px";
DivFarmPlotPrice.style.backgroundColor ="#212529";
DivFarmPlotPrice.setAttribute("id", "DivFarmPlotPrice");
DivFarmPlotPrice.setAttribute("class", "badge sm");
document.body.appendChild(DivFarmPlotPrice);

/*var DivFarmPlotPrice = document.createElement("div");
var SpanFarmPlotPrice = document.createElement("span");
var ContentFarmPlotPrice = document.createTextNode("Test");
SpanFarmPlotPrice.setAttribute("id", "SpanFarmPlotPrice");
SpanFarmPlotPrice.appendChild(ContentFarmPlotPrice);
DivFarmPlotPrice.appendChild(SpanFarmPlotPrice);
//DivFarmPlotPrice.insertBefore(imgHammer, DivFarmPlotPrice.childNodes[0]);
DivFarmPlotPrice.style.position = "absolute";
DivFarmPlotPrice.style.left = "170px";
DivFarmPlotPrice.style.top = targetTop+40+"px";
DivFarmPlotPrice.style.backgroundColor ="#212529";
DivFarmPlotPrice.setAttribute("class", "badge sm");
DivFarmPlotPrice.setAttribute("id", "DivFarmPlotPrice");
document.body.appendChild(DivFarmPlotPrice);*/

var DivBuild = document.createElement("div");
var ContentBuild = document.createTextNode("");
DivBuild.appendChild(ContentBuild);
//DivBuild.innerText = "Build "+FarmPlotR+" ￦";
DivBuild.style.color = "white";
//DivBuild.style.fontSize = "xx-large";
DivBuild.style.position = "relative";
DivBuild.style.left = "0px";
DivBuild.style.top = "10px";
DivBuild.style.backgroundColor ="#212529";
DivBuild.setAttribute("id", "DivBuild");
DivBuild.setAttribute("class", "badge sm");
document.body.appendChild(DivBuild);

var DivFarmPlotPriceNBuild = document.createElement("div");
var ContentFarmPlotPriceNBuild = document.createTextNode("");
DivFarmPlotPriceNBuild.appendChild(ContentFarmPlotPriceNBuild);
//DivFarmPlotPriceNBuild.innerText = "FARM PLOT+Build   "+FarmPlotR+" ￦";
DivFarmPlotPriceNBuild.style.color = "white";
//DivFarmPlotPrice.style.fontSize = "xx-large";
DivFarmPlotPriceNBuild.style.position = "relative";
DivFarmPlotPriceNBuild.style.left = "10px";
DivFarmPlotPriceNBuild.style.top = "15px";
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
DivBarleySeed.style.top = "20px";
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
DivCost.style.left = "10px";
DivCost.style.top = "25px";
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
DivIncome.style.top = "30px";
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
DivCostPerWeek.style.left = "10px";
DivCostPerWeek.style.top = "35px";
DivCostPerWeek.style.backgroundColor ="#212529";
DivCostPerWeek.setAttribute("id", "DivCostPerWeek");
DivCostPerWeek.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPerWeek);

var DivProfitPerWeek = document.createElement("div");
var ContentProfitPerWeek = document.createTextNode("");
DivProfitPerWeek.appendChild(ContentProfitPerWeek);
//DivProfitPerWeek.innerText = "DivProfitPerWeek   "+DivProfitPerWeek+" ￦";
DivProfitPerWeek.style.color = "white";
//DivProfitPerWeek.style.fontSize = "xx-large";
DivProfitPerWeek.style.position = "relative";
DivProfitPerWeek.style.left = "0px";
DivProfitPerWeek.style.top = "40px";
DivProfitPerWeek.style.backgroundColor ="#212529";
DivProfitPerWeek.setAttribute("id", "DivProfitPerWeek");
DivProfitPerWeek.setAttribute("class", "badge sm");
document.body.appendChild(DivProfitPerWeek);

var DivCostPer1Plot1Week = document.createElement("div");
var ContentCostPer1Plot1Week = document.createTextNode("");
DivCostPer1Plot1Week.appendChild(ContentCostPer1Plot1Week);
//DivCostPer1Plot1Week.innerText = "DivCostPer1Plot1Week   "+DivCostPer1Plot1Week+" ￦";
DivCostPer1Plot1Week.style.color = "white";
//DivCostPer1Plot1Week.style.fontSize = "xx-large";
DivCostPer1Plot1Week.style.position = "relative";
DivCostPer1Plot1Week.style.left = "0px";
DivCostPer1Plot1Week.style.top = "45px";
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
DivCostPer2Plot1Week.style.top = "50px";
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
DivCostPer3Plot1Week.style.top = "55px";
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
DivCostPer4Plot1Week.style.top = "60px";
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
DivCostPer5Plot1Week.style.top = "65px";
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
DivCostPer6Plot1Week.style.top = "70px";
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
DivCostPer7Plot1Week.style.top = "75px";
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
DivCostPer8Plot1Week.style.top = "80px";
DivCostPer8Plot1Week.style.backgroundColor ="#212529";
DivCostPer8Plot1Week.setAttribute("id", "DivCostPer8Plot1Week");
DivCostPer8Plot1Week.setAttribute("class", "badge sm");
document.body.appendChild(DivCostPer8Plot1Week);

function chgList(){
    getWAXPTHB();
    //if(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div.d-inline-block.w-50.b-atomic > div.d-inline-block.w-75.flex-right.vtop > a > span:nth-child(2)").innerText=="?"){ setTimeout(chgList, 3000);return;}
    var FarmPlotAtomic=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div.d-inline-block.w-50.b-atomic > div.d-inline-block.w-75.flex-right.vtop > a > span:nth-child(2)").innerText);
    var FarmPlotCraftCost=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div.d-inline-block.w-50.b-alcor > div:nth-child(3) > div:nth-child(2) > span").innerText);
    var FarmPlotBuild=parseInt(document.querySelector("#listFarmingRaising > div:nth-child(1) > div > div > div > div.d-block.text-right > div > div.d-inline-block.w-50.text-right.ssm.c-white > div:nth-child(2) > span").innerText);
    if(!isNaN(FarmPlotAtomic) &&(FarmPlotAtomic>FarmPlotCraftCost)){
        var FarmPlotPrice=FarmPlotCraftCost;
        //DivFarmPlotPrice.insertBefore(imgHammer, DivFarmPlotPrice.childNodes[0]);
    }else if(FarmPlotCraftCost>FarmPlotAtomic){
        FarmPlotPrice=FarmPlotAtomic;
        //document.querySelector("#imgHammer").style.visibility="hidden";
    }else{
        FarmPlotPrice=FarmPlotCraftCost;
        //DivFarmPlotPrice.insertBefore(imgHammer, DivFarmPlotPrice.childNodes[0]);
    }
    document.getElementById("DivFarmPlotPrice").innerText="FARM PLOT   "+FarmPlotPrice+" ￦ "+(FarmPlotPrice*WAXPTHB).toFixed(0) +" บาท";
    
    document.getElementById("DivBuild").innerText="Build "+FarmPlotBuild+" ￦ "+(FarmPlotBuild*WAXPTHB).toFixed(0) +" บาท";

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
    document.getElementById("DivProfitPerWeek").innerText="ProfitPerWeek "+Profit+" ￦ "+(Profit*WAXPTHB).toFixed(0) +" บาท "+((Profit/CostPerWeek)*100).toFixed(2)+"% ";

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
btn1.style.top="110px";
btn1.style.left="0px";
btn1.addEventListener("click", chgList);
document.body.appendChild(btn1);
document.addEventListener('keypress', chgList);
