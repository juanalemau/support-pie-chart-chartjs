# Project Support Pie Chart

Creation of plugin to be able to alter the configurations of the library js chart

## Prerequisites

You need to have the Chartjs library installed (https://www.chartjs.org/docs/latest/getting-started/installation.html)

```shell
npm install chart.js --save
```

## Installing

To be able to install the plugin you have to install the following library

```shell
npm install support-pie-chartjs-pld --save
```

## How to use?

### Step 1
You have to import with the following code

```javascript
// Import
import { Component } from '@angular/core';
import * as Chart from 'chart.js'
import "support-pie-chartjs-pld";
```
### Step 2

Insert new configuration inside the graph configuration - Pie Chart

```javascript
ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["New", "In Progress", "On Hold"],
          datasets: [{
              label: '# of Votes',
              data: [1,2,3],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: true,
        display:true,
        cutoutPercentage: 85,
        elements: {  //New Configuration
          center: {
            text: '6',   // Text Center
            color: "#252220",  // Color Label
            fontStyle: 'Arial',  // Font Label
            sidePadding: 20,  // Padding Label
            minFontSize: 25, // Size Label
            lineHeight: 25 // Height Label
          }
        },
      }
    });
  }

```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


