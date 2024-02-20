# Belly Button Challenge - Module 14 Challenge

## Introduction

This repository contains the solution to the Module 14 Challenge, focusing on creating an interactive web visualization using D3.js and Plotly.js. The challenge involves implementing various data visualizations, including horizontal bar charts, bubble charts, and displaying sample metadata on a webpage.

## Changes Made

A minor adjustment was made to the HTML file to align with a specific approach. The reference to `bonus.js` in the starter HTML was removed from the final HTML as it wasn't required for the provided solution.

## Learning Highlights

The JavaScript code provided in `app.js` demonstrates the following key concepts:

- Utilizing the D3 library to manipulate the DOM, select elements, and bind data.
- Initializing the page with default data using an `init` function.
- Populating a dropdown menu with sample names dynamically.
- Updating demographic information based on the selected sample.
- Creating a horizontal bar chart and a bubble chart with specified data.
- Ensuring all plots are updated when a new sample is selected.

## Instructions and Requirements

### Bar Chart (30 points)

- Chart initializes without error (10 points)
- Chart updates when a new sample is selected (5 points)
- Chart uses Top 10 sample values as values (5 points)
- Chart uses otu_ids as the labels (5 points)
- Chart uses otu_labels as the tooltip (5 points)

### Bubble Charts (40 points)

- Chart initializes without error (10 points)
- Chart updates when a new sample is selected (5 points)
- Chart uses otu_ids for the x values (5 points)
- Chart uses otu_ids for marker colors (5 points)
- Chart uses sample_values for the y values (5 points)
- Chart uses sample_values for the marker size (5 points)
- Chart uses otu_labels for text values (5 points)

### Metadata and Deployment (30 points)

- Metadata initializes without error (10 points)
- Metadata updates when a new sample is selected (10 points)
- App Successfully Deployed to Github Pages (10 points)

### Submission

The app is deployed to GitHub Pages, and the repository includes regular commits. The links to the deployment and the GitHub repository are provided for evaluation.

## Execution

To run the application, simply open the deployed GitHub Pages link and explore the interactive visualizations.

**Happy exploring!**

**References:**

1. [D3.js Basics](https://stackoverflow.com/questions/17193578/basics-about-d3-js)
2. [JavaScript Function Initialization](https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname)
3. [Converting HTML String into DOM Elements](https://stackoverflow.com/questions/3103962/converting-html-string-into-dom-elements)
4. [Plotly.js Documentation](https://plotly.com/javascript/) - Specifically, [Gauge Charts](https://plotly.com/javascript/gauge-charts/)
