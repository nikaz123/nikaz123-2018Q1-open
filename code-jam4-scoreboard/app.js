let divResults = document.getElementById("resultsDiv");

let divCharts = document.getElementById("charts");

let results = {};

let users = {};



getDataFromJSONfiles();
setTimeout(function() {console.log(results)}, 1000);
setTimeout(function() {console.log(users)}, 1000);


document.getElementsByClassName('radio-session')[0].onclick=radio_handler;

function radio_handler(e) {
    console.log (e.target.tagName)
    console.log (e.target.value)
    console.log (e.target.type)

    if (e.target.tagName=='INPUT'&& e.target.type=='radio'){

        getDataFromJSONfiles(e.target.value);
        setTimeout(function() {let tableResults = new Table (); tableResults.insertTable()}, 60);

    }
}


function getDataFromJSONfiles(session, callback) {

    let fileName = "data/sessions.json";

    if (session == "rss-school-demo") fileName = "data/sessions-demo.json";


    let request = new XMLHttpRequest();

    request.open('GET', fileName);


    request.onreadystatechange = function (e) {

        if (this.readyState == 4) {

            if (this.status == "200") {

                let response = JSON.parse(this.responseText);

                results = response;
            }

            else {

                console.log("error downloading json files");

            }
        }
    }

    request.send(null);

    let request2 = new XMLHttpRequest();




    request2.open('GET', "data/users.json");

    request2.onreadystatechange = function (e) {

        if (this.readyState == 4) {


            if (this.status == "200") {

                let response = JSON.parse(this.responseText);

                users = response.users;

            }
            else {
                console.log("error downloading json files");
            }
        }
    }

    request2.send(null);


}


setTimeout(function() {let tableResults = new Table (); tableResults.insertTable()}, 60);

/////////visualization

divResults.onclick=checkbox_handler;

function checkbox_handler(e) {

    if (e.target.tagName=='INPUT' && e.target.type=='checkbox'){

        groupChartData.splice(0,groupChartData.length);

        for (var member in columnsInfo) delete columnsInfo[member];



        let all_checkboxes= document.querySelectorAll("tr td input");



        if (Array.from(all_checkboxes).filter(function (p) {return p.checked}).length>10){
            e.target.checked=false;
            e.preventDefault();
            alert ('Limit of 10 reached');
            return
        }

        for (let i = 0; i < all_checkboxes.length; i++) {
            if (all_checkboxes[i].checked)
            {columnsInfo[all_checkboxes[i].value]=find_user_by_uid(all_checkboxes[i].value)}

        }


        results.rounds.forEach(function (round,i){
            round_data = {};
            round_data["over"]=i;
            Object.entries(columnsInfo).forEach(function (user){
                let time=150;
                if (round.solutions[user[0]]) time = round.solutions[user[0]].time.$numberLong;
                round_data[user[0]]=time;
            })


            groupChartData.push(round_data)

        })




        charts.innerHTML="";
         muliSeriesChart = new multiSeriesLineChart(muliSeriesChartConfig);



    }
}



let groupChartData = [];
let columnsInfo ={};

charts.innerHTML="";

let muliSeriesChartConfig = {
    mainDiv: "#charts",
    colorRange: ["#2ccd4d", "#df4f60","#2b9bcd", "#dfc247","#2ac8cd", "#dfd247","#cd32b4", "#dfe2e7","#2af8cf", "#df1217","#22982d", "#3f7347" ],
    data: groupChartData,
    columnsInfo: columnsInfo,
    xAxis: "over",
    yAxis: "runs",
    label: {
        xAxis: "Puzzle",
        yAxis: "Time"
    },
    requireCircle: true,
    requireLegend: true
};
let muliSeriesChart = new multiSeriesLineChart(muliSeriesChartConfig);

function find_user_by_uid(puid){
    for (i=0; i<users.length;i++)
    {
        if(users[i].uid==puid) return users[i].displayName
    }
}
