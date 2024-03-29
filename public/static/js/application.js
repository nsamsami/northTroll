// Delete these three lines once you have your environment variables set
// The environment-configured 'keen' variable is set in layout.erb
var client = new Keen({
  projectId: "5368fa5436bf5a5623000000",
  readKey: "3f324dcb5636316d6865ab0ebbbbc725224c7f8f3e8899c7733439965d6d4a2c7f13bf7765458790bd50ec76b4361687f51cf626314585dc246bb51aeb455c0a1dd6ce77a993d9c953c5fc554d1d3530ca5d17bdc6d1333ef3d8146a990c79435bb2c7d936f259a22647a75407921056"
});

Keen.ready(function(){

  // Delete these queries once you're ready to make your own

  // ----------------------------------------
  // Pageviews Area Chart
  // ----------------------------------------
  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "viewed-page",
    timeframe: "this_month",
    interval: "weekly",
    groupBy: "page_url"
  });
  client.draw(pageviews_timeline, document.getElementById("chart-01"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "80%"
      },
      isStacked: true
    }
  });

  var pageviews_timeline = new Keen.Query("count", {
    eventCollection: "viewed-page",
    groupBy: "ip_geo_info.country"
  });
  client.draw(pageviews_timeline, document.getElementById("chart-02"), {
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
        chartArea: {
        height: "85%",
        left: "5%",
        top: "5%",
        width: "100%"
        },
      isStacked: true
    }
  });




  // ----------------------------------------
  // Impressions timeline
  // ----------------------------------------
  var impressions_timeline = new Keen.Query("count", {
    eventCollection: "viewed-page",
    groupBy: "page_url"
  });
  client.draw(impressions_timeline, document.getElementById("chart-03"), {
    chartType: "columnchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Impressions timeline (device)
  // ----------------------------------------
  var impressions_timeline_by_device = new Keen.Query("count", {
    eventCollection: "viewed-page",
    groupBy: "referrer_info.source"
  });
  client.draw(impressions_timeline_by_device, document.getElementById("chart-04"), {
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });


  // ----------------------------------------
  // Impressions timeline (country)
  // ----------------------------------------
  var impressions_timeline_by_country = new Keen.Query("count", {
    eventCollection: "highFive"
  });
  client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
    title: false,
    height: 250,
    width: "auto",
    chartOptions: {
      chartArea: {
        height: "75%",
        left: "10%",
        top: "5%",
        width: "60%"
      },
      bar: {
        groupWidth: "85%"
      },
      isStacked: true
    }
  });

});
