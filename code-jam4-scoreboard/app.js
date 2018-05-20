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
    if (e.target.tagName=='INPUT'){

        getDataFromJSONfiles(e.target.value);
        setTimeout(function() {let tableResults = new Table (); tableResults.insertTable()}, 60);

    }
}


function getDataFromJSONfiles(session,callback) {

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


    // let request = new XMLHttpRequest();

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



