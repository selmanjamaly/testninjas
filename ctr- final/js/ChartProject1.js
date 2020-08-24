anychart.onDocumentReady(function() {

  // set the data
  var data = [
  {x: "Pass", value: 40},
  {x: "Failed", value: 40},
  {x: "Skipped", value: 20},
  ];

  // create the chart
  var chart = anychart.pie();
  // set the chart title

chart.title("Project 1");
  //chart.title.set("url", “google” );
    //var title1= document.getElementById("chart1").header;
  //window.alert(title1);
// add the data
chart.data(data);

// display the chart in the container
chart.container('chart1');
chart.draw();
chart.labels().position("outside");
})

