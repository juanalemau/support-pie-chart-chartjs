import { Component } from '@angular/core';
import * as Chart from 'chart.js'
import "support-pie-chartjs-pld";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8chartjs';
  canvas: any;
  ctx: any;

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
        elements: {
          center: {
            text: '6',
            color: "#252220",
            fontStyle: 'Arial',
            sidePadding: 20,
            minFontSize: 25,
            lineHeight: 25
          }
        },
      }
    });
  }

}
