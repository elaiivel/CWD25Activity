window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Simple Line Chart"
        },
        data: [{        
            type: "line",
              indexLabelFontSize: 16,
            dataPoints: [
                { y: 450 },
                { y: 414},
                { y: 520, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
                { y: 460 },
                { y: 450 },
                { y: 500 },
                { y: 480 },
                { y: 480 },
                { y: 410 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { y: 500 },
                { y: 480 },
                { y: 510 }
            ]
        }]
    });
    chart.render();
    
    }

    var chart = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        title:{
            text: "Composition of Internet Traffic in North America"
        },
        axisX: {
            interval: 1,
            intervalType: "year",
            valueFormatString: "YYYY"
        },
        axisY: {
            suffix: "%"
        },
        toolTip: {
            shared: true
        },
        legend: {
            reversed: true,
            verticalAlign: "center",
            horizontalAlign: "right"
        },
        data: [{
            type: "stackedColumn100",
            name: "Real-Time",
            showInLegend: true,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { x: new Date(2010,0), y: 40 },
                { x: new Date(2011,0), y: 50 },
                { x: new Date(2012,0), y: 60 },
                { x: new Date(2013,0), y: 61 },
                { x: new Date(2014,0), y: 63 },
                { x: new Date(2015,0), y: 65 },
                { x: new Date(2016,0), y: 67 }
            ]
        }, 
        {
            type: "stackedColumn100",
            name: "Web Browsing",
            showInLegend: true,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { x: new Date(2010,0), y: 28 },
                { x: new Date(2011,0), y: 18 },
                { x: new Date(2012,0), y: 12 },
                { x: new Date(2013,0), y: 10 },
                { x: new Date(2014,0), y: 10 },
                { x: new Date(2015,0), y: 7 },
                { x: new Date(2016,0), y: 5 }
            ]
        }, 
        {
            type: "stackedColumn100",
            name: "File Sharing",
            showInLegend: true,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { x: new Date(2010,0), y: 15 },
                { x: new Date(2011,0), y: 12 },
                { x: new Date(2012,0), y: 10 },
                { x: new Date(2013,0), y: 9 },
                { x: new Date(2014,0), y: 7 },
                { x: new Date(2015,0), y: 5 },
                { x: new Date(2016,0), y: 1 }
            ]
        },
        {
            type: "stackedColumn100",
            name: "Others",
            showInLegend: true,
            xValueFormatString: "YYYY",
            yValueFormatString: "#,##0\"%\"",
            dataPoints: [
                { x: new Date(2010,0), y: 17 },
                { x: new Date(2011,0), y: 20 },
                { x: new Date(2012,0), y: 18 },
                { x: new Date(2013,0), y: 20 },
                { x: new Date(2014,0), y: 20 },
                { x: new Date(2015,0), y: 23 },
                { x: new Date(2016,0), y: 27 }
            ]
        }]
    });
    chart.render();
    
    var chart = new CanvasJS.Chart("chartContainer3", {
        
        animationEnabled: true, 
        backgroundColor: "#3566d0",
        
        title:{
            text: "Music Album Sales by Year",
            fontColor: "white"
        },
        axisY: {
            title: "Units Sold",
            titleFontColor: "white",
            labelFontColor: "white",
            valueFormatString: "#0,,.",
            suffix: "mn",
            stripLines: [{
                value: 3366500,
                label: "Average",
                labelFontColor: "yellow",
                color: "yellow",
            }]
        },

        axisX:{          
            titleFontColor: "white",
            labelFontColor: "white",
        },

        data: [{
            color: "white",
            lineColor: "white",
            yValueFormatString: "#,### Units",
            xValueFormatString: "YYYY",
            type: "spline",
            dataPoints: [
                {x: new Date(2002, 0), y: 2506000},
                {x: new Date(2003, 0), y: 2798000},
                {x: new Date(2004, 0), y: 3386000},
                {x: new Date(2005, 0), y: 6944000},
                {x: new Date(2006, 0), y: 6026000},
                {x: new Date(2007, 0), y: 2394000},
                {x: new Date(2008, 0), y: 1872000},
                {x: new Date(2009, 0), y: 2140000},
                {x: new Date(2010, 0), y: 7289000},
                {x: new Date(2011, 0), y: 4830000},
                {x: new Date(2012, 0), y: 2009000},
                {x: new Date(2013, 0), y: 2840000},
                {x: new Date(2014, 0), y: 2396000},
                {x: new Date(2015, 0), y: 1613000},
                {x: new Date(2016, 0), y: 2821000},
                {x: new Date(2017, 0), y: 2000000}
            ]
            
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainer4", {
        animationEnabled: true,
        title:{
            text: "Email Categories",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 67, label: "Inbox" },
                { y: 28, label: "Archives" },
                { y: 10, label: "Labels" },
                { y: 7, label: "Drafts"},
                { y: 15, label: "Trash"},
                { y: 6, label: "Spam"}
            ]
        }]
    });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainerA", {
  
  	
        animationEnabled: true,  
        title:{
            text: ""
        },
        axisY: {
            title: "",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$",
              labelFontColor:"white",
              gridColor: "white",
              lineColor: "white",
              tickColor: "white",
        },
      
          axisX:{          
                titleFontColor: "white",
                labelFontColor: "white",
                  gridColor: "white",
                  lineColor: "white",
                  tickColor: "white",
            },
      
        data: [{
              
            type: "splineArea",
            color: "#28acf3",
            markerSize: 1,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: 3289000 },
                { x: new Date(2001, 0), y: 3830000 },
                { x: new Date(2002, 0), y: 2009000 },
                { x: new Date(2003, 0), y: 2840000 },
                { x: new Date(2004, 0), y: 2396000 },
                { x: new Date(2005, 0), y: 1613000 },
                { x: new Date(2006, 0), y: 2821000 },
                { x: new Date(2007, 0), y: 2000000 },
                { x: new Date(2008, 0), y: 1397000 },
                { x: new Date(2009, 0), y: 2506000 },
                { x: new Date(2010, 0), y: 2798000 },
                { x: new Date(2011, 0), y: 3386000 },
                { x: new Date(2012, 0), y: 6704000},
                { x: new Date(2013, 0), y: 6026000 },
                { x: new Date(2014, 0), y: 2394000 },
                { x: new Date(2015, 0), y: 1872000 },
                { x: new Date(2016, 0), y: 2140000 }
            ]
        }]
        });
    chart.render();    

    var chart = new CanvasJS.Chart("chartContainerB", {
  
  	
        animationEnabled: true,  
        title:{
            text: ""
        },
        axisY: {
            title: "",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$",
              labelFontColor:"white",
              gridColor: "white",
              lineColor: "white",
              tickColor: "white",
        },
      
          axisX:{          
                titleFontColor: "white",
                labelFontColor: "white",
                  gridColor: "white",
                  lineColor: "white",
                  tickColor: "white",
            },
      
        data: [{
              
            type: "splineArea",
            color: "yellow",
            markerSize: 1,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: 3289000 },
                { x: new Date(2001, 0), y: 3830000 },
                { x: new Date(2009, 0), y: 2506000 },
                { x: new Date(2010, 0), y: 2798000 },
                { x: new Date(2011, 0), y: 3386000 },
                { x: new Date(2012, 0), y: 6704000},
                { x: new Date(2013, 0), y: 6026000 },
                { x: new Date(2014, 0), y: 2394000 },
                { x: new Date(2015, 0), y: 1872000 },
                { x: new Date(2002, 0), y: 2009000 },
                { x: new Date(2003, 0), y: 2840000 },
                { x: new Date(2004, 0), y: 2396000 },
                { x: new Date(2005, 0), y: 1613000 },
                { x: new Date(2006, 0), y: 2821000 },
                { x: new Date(2007, 0), y: 2000000 },
                { x: new Date(2008, 0), y: 1397000 },
                { x: new Date(2016, 0), y: 2140000 }
            ]
        }]
        });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainerC", {
  
  	
        animationEnabled: true,  
        title:{
            text: ""
        },
        axisY: {
            title: "",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$",
              labelFontColor:"white",
              gridColor: "white",
              lineColor: "white",
              tickColor: "white",
        },
      
          axisX:{          
                titleFontColor: "white",
                labelFontColor: "white",
                  gridColor: "white",
                  lineColor: "white",
                  tickColor: "white",
            },
      
        data: [{
              
            type: "splineArea",
            color: "pink",
            markerSize: 1,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: 3289000 },
                { x: new Date(2001, 0), y: 3830000 },
                { x: new Date(2002, 0), y: 2009000 },
                { x: new Date(2003, 0), y: 2840000 },
                { x: new Date(2004, 0), y: 2396000 },
                { x: new Date(2005, 0), y: 1613000 },
                { x: new Date(2006, 0), y: 2821000 },
                { x: new Date(2007, 0), y: 2000000 },
                { x: new Date(2008, 0), y: 1397000 },
                { x: new Date(2009, 0), y: 2506000 },
                { x: new Date(2010, 0), y: 2798000 },
                { x: new Date(2011, 0), y: 3386000 },
                { x: new Date(2012, 0), y: 6704000},
                { x: new Date(2013, 0), y: 6026000 },
                { x: new Date(2014, 0), y: 2394000 },
                { x: new Date(2015, 0), y: 1872000 },
                { x: new Date(2016, 0), y: 2140000 }
            ]
        }]
        });
    chart.render();

    var chart = new CanvasJS.Chart("chartContainerD", {
  
  	
        animationEnabled: true,  
        title:{
            text: ""
        },
        axisY: {
            title: "",
            valueFormatString: "#0,,.",
            suffix: "mn",
            prefix: "$",
              labelFontColor:"white",
              gridColor: "white",
              lineColor: "white",
              tickColor: "white",
        },
      
          axisX:{          
                titleFontColor: "white",
                labelFontColor: "white",
                  gridColor: "white",
                  lineColor: "white",
                  tickColor: "white",
            },
      
        data: [{
              
            type: "splineArea",
            color: "green",
            markerSize: 1,
            xValueFormatString: "YYYY",
            yValueFormatString: "$#,##0.##",
            dataPoints: [
                { x: new Date(2000, 0), y: 3289000 },
                { x: new Date(2001, 0), y: 3830000 },
                { x: new Date(2002, 0), y: 2009000 },
                { x: new Date(2003, 0), y: 2840000 },
                { x: new Date(2004, 0), y: 2396000 },
                { x: new Date(2005, 0), y: 1613000 },
                { x: new Date(2006, 0), y: 2821000 },
                { x: new Date(2007, 0), y: 2000000 },
                { x: new Date(2008, 0), y: 1397000 },
                { x: new Date(2009, 0), y: 2506000 },
                { x: new Date(2010, 0), y: 2798000 },
                { x: new Date(2011, 0), y: 3386000 },
                { x: new Date(2012, 0), y: 6704000},
                { x: new Date(2013, 0), y: 6026000 },
                { x: new Date(2014, 0), y: 2394000 },
                { x: new Date(2015, 0), y: 1872000 },
                { x: new Date(2016, 0), y: 2140000 }
            ]
        }]
        });
    chart.render();