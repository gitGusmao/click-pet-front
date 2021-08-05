import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  salesChartBar: EChartsOption;
  salesChartPie: EChartsOption;

  constructor() {}

  ngOnInit(): void {
    this.salesChartBar = {
      legend: {
        borderRadius: 0,
        orient: 'horizontal',
        data: ['Online', 'Offline'],
      },
      grid: {
        left: '8px',
        right: '8px',
        bottom: '0',
        containLabel: true,
      },
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)',
      },
      xAxis: [
        {
          type: 'category',
          data: [
            'Jan',
            'Feb',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
          ],
          axisTick: {
            alignWithLabel: true,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: 'R${value}',
          },
          min: 0,
          max: 20000,
          interval: 5000,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            interval: 'auto',
          },
        },
      ],

      series: [
        {
          name: 'Online',
          data: [200, 5000, 3000, 2000, 2500, 200, 1577],
          label: { show: false, color: '#0168c1' },
          type: 'bar',
          barGap: 0,
          color: '#bcbbdd',
        },
        {
          name: 'Offline',
          data: [1200, 200, 3000, 100, 200, 200, 2000],
          label: { show: false, color: '#639' },
          type: 'bar',
          color: '#7569b3',
        },
      ],
    };

    this.salesChartPie = {
      color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)',
      },

      xAxis: [
        {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: 'Vendas por Cidade',
          type: 'pie',
          radius: '75%',
          center: ['50%', '50%'],
          data: [
            { value: 535, name: 'Araraquara' },
            { value: 310, name: 'São Carlos' },
            { value: 234, name: 'Ribeirão Preto' },
            { value: 155, name: 'Rio de Janeiro' },
          ],
        },
      ],
    };
  }
}
