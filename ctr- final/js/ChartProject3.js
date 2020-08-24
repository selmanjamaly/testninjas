anychart.onDocumentReady(function() {

  // set the data
  var data = [
  {x: "Pass", value: 30},
  {x: "Failed", value: 60},
  {x: "Skipped", value: 10},
  ];

  // create the chart
  var chart = anychart.pie();
  // set the chart title
  chart.title("Project 3");
// add the data
chart.data(data);

// display the chart in the container
chart.container('chart3');
chart.draw();
chart.labels().position("outside");
})


