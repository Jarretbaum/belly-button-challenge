// Function to update the bar chart
function updateBarChart(selectedSample) {
    // Use D3 to read the JSON file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {
      // Filter the data for the selected sample
      let sampleData = data.samples.find(sample => sample.id == selectedSample);
  
      // Slice the top 10 values
      let topValues = sampleData.sample_values.slice(0, 10).reverse();
      let topIDs = sampleData.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
      let topLabels = sampleData.otu_labels.slice(0, 10).reverse();
  
      // Create the trace
      let trace = {
        x: topValues,
        y: topIDs,
        text: topLabels,
        type: "bar",
        orientation: "h"
      };
  
      // Create the data array for the plot
      let barData = [trace];
  
      // Define the layout
      let layout = {
        title: "Top 10 OTUs",
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU ID" }
      };
  
      // Plot the bar chart
      Plotly.newPlot("bar", barData, layout);
    });
  }
  
  // Function to update the bubble chart
  function updateBubbleChart(selectedSample) {
    // Use D3 to read the JSON file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {
      // Filter the data for the selected sample
      let sampleData = data.samples.find(sample => sample.id == selectedSample);
  
      // Create the trace
      let trace = {
        x: sampleData.otu_ids,
        y: sampleData.sample_values,
        text: sampleData.otu_labels,
        mode: 'markers',
        marker: {
          size: sampleData.sample_values,
          color: sampleData.otu_ids
        }
      };
  
      // Create the data array for the plot
      let bubbleData = [trace];
  
      // Define the layout
      let layout = {
        title: "OTU Bubble Chart",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "Sample Values" }
      };
  
      // Plot the bubble chart
      Plotly.newPlot("bubble", bubbleData, layout);
    });
  }
  
  // Function to update the demographic info
  function updateDemographicInfo(selectedSample) {
    // Use D3 to read the JSON file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {
      // Filter the metadata for the selected sample
      let metadata = data.metadata.find(item => item.id == selectedSample);
  
      // Select the sample-metadata div and clear any existing content
      let metadataPanel = d3.select("#sample-metadata");
      metadataPanel.html("");
  
      // Use Object.entries to add each key and value pair to the panel
      Object.entries(metadata).forEach(([key, value]) => {
        metadataPanel.append("p").text(`${key}: ${value}`);
      });
    });
  }
  
  // Function to initialize the dashboard
  function init() {
    // Use D3 to read the JSON file
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(data => {
      // Populate the dropdown menu with all sample IDs
      let dropdownMenu = d3.select("#selDataset");
      data.names.forEach(sample => {
        dropdownMenu.append("option").property("value", sample).text(sample);
      });
  
      // Initialize the dashboard with the first sample
      let initialSample = data.names[0];
      updateBarChart(initialSample);
      updateBubbleChart(initialSample);
      updateDemographicInfo(initialSample);
    });
  }
  
  // Function to handle changes in the dropdown menu
  function optionChanged(newSample) {
    // Update the dashboard based on the selected sample
    updateBarChart(newSample);
    updateBubbleChart(newSample);
    updateDemographicInfo(newSample);
  }
  
  // Initialize the dashboard
  init();
  
  
  
  
