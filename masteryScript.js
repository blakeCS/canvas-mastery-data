var element = document.createElement("script");
element.src= "https://canderegg.gitlab.io/bantam-js/js/bantam-1.2.min.js";
document.body.appendChild(element);

//Click all the links to generate the graphs
var links = $bt.get('.icon-more');
for(var i=0; i<links.length; i++){
    links[i].click();
}

//Get the titles of each objective and the graphs to correspond.  Titles[0] is the course.
var student = $bt.get(".ic-Action-header__Heading");
var titles = $bt.get(".ui-dialog-title");
var graphs = $bt.get(".outcome-details-dialog");

//Add the styling to the htmlString to replace the current HTML on the page
var htmlString = '<style type="text/css"> body { font-size: 11.25px; font-family: "LatoWeb", "Helvetica Neue", Helvetica, Arial, sans-serif; } .ui-dialog-title { float: left; margin: 0 16px 0 0; font-size: 18px; font-size: 1.125rem; font-weight: normal; } .outcome-details { position: absolute; z-index: 1000; background-color: #fff; border: 1px solid #b0afaf; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6); max-width: 500px; min-width: 250px; padding: 18px 12px; border-radius: 8px; font-weight: bold; color: #4f5f6e } .outcome-details .title, .outcome-details-dialog .title { font-size: 14px; font-size: .875rem; padding-bottom: 10px; border-bottom: 1px solid #b0afaf; margin-bottom: 10px } .outcome-details .chart, .outcome-details-dialog .chart { font-size: 11px; font-size: .6875rem; text-align: center; height: 150px } .outcome-details .line-graph, .outcome-details-dialog .line-graph { font-size: 10px; font-size: .625rem } .outcome-details .line-graph .guides .tick, .outcome-details-dialog .line-graph .guides .tick { stroke: lightgrey; opacity: 0.7 } .outcome-details .line-graph .guides path, .outcome-details-dialog .line-graph .guides path { stroke-width: 0 } .outcome-details .line-graph .date-guides path, .outcome-details-dialog .line-graph .date-guides path { stroke-width: 0 } .outcome-details .line-graph .mastery-percentage-guide .tick, .outcome-details-dialog .line-graph .mastery-percentage-guide .tick { stroke: #00B416; opacity: 0.5 } .outcome-details .line-graph .mastery-percentage-guide path, .outcome-details-dialog .line-graph .mastery-percentage-guide path { stroke-width: 0 } .outcome-details .line-graph .trendline, .outcome-details-dialog .line-graph .trendline { stroke: #9f9f9f } .outcome-details .line-graph svg, .outcome-details-dialog .line-graph svg { background: #f7f7f7 } .outcome-details .line-graph .domain, .outcome-details-dialog .line-graph .domain { fill: none; stroke: black; stroke-width: 1 } .outcome-details .ratings, .outcome-details-dialog .ratings { font-weight: normal; display: inline-block; text-align: left; margin-bottom: 0px; margin-top: 25px } .outcome-details .ratings .rating, .outcome-details-dialog .ratings .rating { list-style-type: none } .outcome-details .ratings .legend-color, .outcome-details-dialog .ratings .legend-color { width: 13px; height: 13px; display: inline-block; margin-right: 3px; vertical-align: sub } .outcome-details .outcome-info, .outcome-details-dialog .outcome-info { clear: both } .outcome-details .outcome-info .description, .outcome-details-dialog .outcome-info .description { font-weight: 200 } .outcome-details .mastery, .outcome-details-dialog .mastery { color: #555 } .outcome-details .last-assessment, .outcome-details-dialog .last-assessment { color: #999; font-size: 11.9px } .outcome-details .mastery-details i:before, .outcome-details-dialog .mastery-details i:before { font-size: 1.5em } .outcome-details .icon-check-plus:before, .outcome-details-dialog .icon-check-plus:before { color: #6a843f } .outcome-details .icon-check:before, .outcome-details-dialog .icon-check:before { color: #8aac53 } .outcome-details .icon-plus, .outcome-details-dialog .icon-plus { color: #e0d773 } .outcome-details .icon-x:before, .outcome-details-dialog .icon-x:before { color: #df5b59 } .outcome-details .method-details, .outcome-details-dialog .method-details { background-color: #e6e6e6; margin-bottom: 0px; margin-top: 10px } .outcome-details .method-details dt, .outcome-details-dialog .method-details dt { width: 140px } .outcome-details .method-details dd, .outcome-details-dialog .method-details dd { margin-left: 160px; padding-bottom: 10px } .outcome-details .method-details span, .outcome-details-dialog .method-details span { display: inline-block; font-style: italic } .outcome-details .method-details .example, .outcome-details-dialog .method-details .example { color: #999; font-size: 11.9px } .outcome-details .method-details .method-description, .outcome-details-dialog .method-details .method-description { width: 320px } .content-box { display: none; }</style>';
//Add a title at the top of the page inc. student name
htmlString += '<div style="text-align:center; font-size:24px; margin: 40px">';
htmlString += student[0].outerHTML;
htmlString += '</div>';

//Add the graphs
htmlString += '<div style= "width:90%; margin:0 auto; overflow: auto; background-color: #f3ffea; border-radius: 8px;" >';
for(var i = 0; i < graphs.length; i++){
  
  //If the outcome has been assessed, include it.
  if(graphs[i].get(".mastery-details")[0].innerText != 'No score yet'){
    //Include the graphs in the string.  Two columns.
    htmlString += '<div style = "float: left; width: 43.5%; padding: 10px 1.5%; margin: 15px 1.5%; border: 1px solid #000; border-radius: 8px; min-height: 370px;">';
    htmlString += titles[i+1].outerHTML;
    htmlString += '<br>';
    htmlString += graphs[i].outerHTML;
    htmlString += '</div>';
  }
}
//Close the div formatting the width
htmlString += '</div>';

//Use the HTML string to make a pretty window
document.body.innerHTML = htmlString;
