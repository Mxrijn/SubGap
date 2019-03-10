var key = "AIzaSyA3Jnlxq0rGzzn7ZxdCNWKPwg75jvGizfY";

var Pewds = "https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=" + "PewDiePie" + "&key=" + key;
var Tgay = "https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=" + "tseries" + "&key=" + key;

var LivePSubs = 0;
var LiveTSubs = 0;
var CalSubGap = 69;

function GetPSubs() {
  //Pewdiepie Subcount
  var PSubs = $.getJSON(Pewds, function(data) {

    // var text = responseJSON.items[0].statistics.subscriberCount;
    LivePSubs = PSubs.responseJSON.items[0].statistics.subscriberCount;

    console.log(LivePSubs);
    $("#SubsPewds").text(LivePSubs);
    console.log("1");


  });
};


function GetTSubs() {
  //T-Gay Subcount
  var TSubs = $.getJSON(Tgay, function(data) {

    // var text = responseJSON.items[0].statistics.subscriberCount;
    LiveTSubs = TSubs.responseJSON.items[0].statistics.subscriberCount;

    console.log(LiveTSubs);
    $("#TSubs").text(LiveTSubs);
    console.log("2");

    CalSubGap = LivePSubs - LiveTSubs;


    console.log(CalSubGap);
    $("#SubGap").text(CalSubGap);
      console.log("4");

  });
};

GetPSubs();
GetTSubs();
GetSubGap();
var schijt = LivePSubs - LiveTSubs;

$(document).ready(GetPSubs(),
GetTSubs(),
GetSubGap());

console.log("finish");

function GetSubGap() {
  CalSubGap = LivePSubs - LiveTSubs;


  console.log(CalSubGap);
  $("#SubGap").text(CalSubGap);
    console.log("4");
};

//
// function GetPSubs() {
// //Pewdiepie Subcount
// var PSubs = $.getJSON(Pewds, function(data) {
//
//     // var text = responseJSON.items[0].statistics.subscriberCount;
//     var LivePSubs = PSubs.responseJSON.items[0].statistics.subscriberCount;
//
//     console.log(LivePSubs);
//     $("#SubsPewds").text(LivePSubs);
//
// })};
//
//
// function GetTSubs() {
// //T-Gay Subcount
// var TSubs = $.getJSON(Tgay, function(data) {
//
//     // var text = responseJSON.items[0].statistics.subscriberCount;
//     var LiveTSubs = TSubs.responseJSON.items[0].statistics.subscriberCount;
//
//     console.log(LiveTSubs);
//     $("#TSubs").text(LiveTSubs);
//
// })};
//
// GetPSubs()
// GetTSubs()




// // var Pewds = 1000;
// // var Tgay = 10;
// //
// // var subgap = Pewds - Tgay;
// //
// // // document.write(subgap)
// //
// //
// // API_KEY = "AIzaSyBiqvd1jUAoVnDG-bkeHXlmmVaH98NNuk8";
// //
// //
// //
// // channel_id = "PewDiePie";
// // api_key = API_KEY;
// // link = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + channel_id + '&fields=items/statistics/subscriberCount&key=' + api_key;
// // var obj = JSON.parse("items")
// // // api_response = file_get_contents();
// // // api_response_decoded = json_decode($api_response, true);
// // // api_response_decoded['items'][0]['statistics']['subscriberCount'];
// //
// // document.write(obj)
//
// //
// // var Pewds = 1000;
// // var Tgay = 10;
// //
// // var subgap = Pewds - Tgay;
// //
// //
// // var mijnHoofding = document.querySelector('h1');
// // mijnHoofding.textContent = 'Hallo wereld!';
// //
// // var sc = "schijt";
// //
// // document.write(subgap)
//
//
// // $(window).on('load', function() {
// //   var subscribers         = 0,
// //       views               = 0,
// //       $subscriber_counter = $('#subscriber-counter');
// //
// //   function get_user_views_subscribers() {
// //     var api_key = "AIzaSyBiqvd1jUAoVnDG-bkeHXlmmVaH98NNuk8";
// //     var channel_id = "UCskG7xk7hK7n8wSZsblz2vQ";
// //     var data_url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + channel_id + "&key=" + api_key;
// //
// //     $.ajax({
// //         url : data_url,
// //         type : 'GET',
// //         success : function (json) {
// //           var statistics = json.items[0].statistics;
// //           subscribers = statistics.subscriberCount;
// //
// //           var subscriberString = subscribers.toString(subscribers);
// //
// //           subscriber_string = '';
// //           for (i=0; i<subscriberString.length; i++) {
// //             subscriber_string += '<div class="time flip"><span class="count top">' + subscriberString[i] + '</span></div>';
// //           }
// //
// //           $subscriber_counter.html(subscriber_string);
// //         }
// //     });
// //   }
// //   get_user_views_subscribers()
// //   setInterval(get_user_views_subscribers, 5000);
// // });
//
// //
// // var api_key = "AIzaSyBiqvd1jUAoVnDG-bkeHXlmmVaH98NNuk8";
// //     var channel_id = "UCskG7xk7hK7n8wSZsblz2vQ";
// //     var data_url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + channel_id + "&key=" + api_key;
// //
// //
// //
// // document.write(Math.random())
//
// function result(){
// 	var channel_name = "";
// 	var sub_count = "";
// 	var channel_id = document.getElementById("PewDiePie").value;
// 	var xhttp = new XMLHttpRequest();
//
// 	xhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 				var output = this.responseText;
// 				output = JSON.parse(output);
// 				channel_name = output.items[0].snippet["title"];
// 				sub_count = output.items[0].statistics["subscriberCount"];
// 				document.getElementById("channel_name").innerHTML = channel_name;
// 				document.getElementById("sub_count").innerHTML = sub_count;
// 			}
// 		};
// 	xhttp.open("GET", "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id="+channel_id+"&key=AIzaSyBiqvd1jUAoVnDG-bkeHXlmmVaH98NNuk8", true);
// 	xhttp.send();
// 	setTimeout(result,1000);
// }
//
// console.log(result())
//
// https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=PewDiePie&key=AIzaSyBiqvd1jUAoVnDG-bkeHXlmmVaH98NNuk8
//
// https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id="+channel_id+"&key=AIzaSyBiqvd1jUAoVnDG-bkeHXlmmVaH98NNuk8
