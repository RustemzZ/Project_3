// javascript
var data = [
  {"platform": "Portugal", "percentage": 40.11}, 
  {"platform": "England", "percentage": 36.69},
  {"platform": "Sweden", "percentage": 13.06}
];

var svgWidth = 500, svgHeight = 300, radius =  Math.min(svgWidth, svgHeight) / 2;
var svg = d3.select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

//Create group element to hold pie chart    
var g = svg.append("g")
  .attr("transform", "translate(" + radius + "," + radius + ")") ;

var color = d3.scaleOrdinal(d3.schemeCategory10);

var pie = d3.pie().value(function(d) { 
   return d.percentage; 
});

var path = d3.arc()
  .outerRadius(radius)
  .innerRadius(0);

var arc = g.selectAll("arc")
  .data(pie(data))
  .enter()
  .append("g");

arc.append("path")
  .attr("d", path)
  .attr("fill", function(d) { return color(d.data.percentage); });
      
var label = d3.arc()
  .outerRadius(radius)
  .innerRadius(0);
          
arc.append("text")
  .attr("transform", function(d) { 
      return "translate(" + label.centroid(d) + ")"; 
  })
  .attr("text-anchor", "middle")
  .text(function(d) { return d.data.platform+":"+d.data.percentage+"%"; });



   // javascript
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidthbar = 500, svgHeightbar = 300, barPadding = 5;
var barWidth = (svgWidthbar / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidthbar)
    .attr("height", svgHeightbar);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeightbar - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });