import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

const YEARS = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

@Component({
  selector: 'app-executive-summary',
  standalone: true,
  imports: [RouterLink, BaseChartDirective],
  templateUrl: './executive-summary.html',
  styleUrls: ['../chart-page.css'],
})
export class ExecutiveSummaryComponent {
  revenueExpenseChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: YEARS,
      datasets: [
        { label: 'الإيرادات', data: [906, 927, 782, 930, 1268, 1212, 1259, 1183], backgroundColor: '#4dd0a1' },
        { label: 'النفقات', data: [1079, 1059, 1076, 1039, 1164, 1193, 1251, 1285], backgroundColor: '#2a7f62' },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
        y: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
      },
    },
  };

  gdpGrowthChart: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: YEARS,
      datasets: [
        {
          label: 'نمو الناتج المحلي %',
          data: [2.4, 0.3, -4.1, 3.2, 8.7, -0.8, 1.3, 3.0],
          borderColor: '#4dd0a1',
          backgroundColor: 'rgba(77,208,161,.15)',
          fill: true,
          tension: 0.35,
          pointRadius: 4,
          pointBackgroundColor: '#fff',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
        y: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
      },
    },
  };

  deficitChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: YEARS,
      datasets: [
        {
          label: 'العجز/الفائض',
          data: [-173, -133, -294, -109, 104, 19, 8, -102],
          backgroundColor: (ctx: any) => ctx.raw >= 0 ? '#4dd0a1' : '#e74c5e',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
        y: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
      },
    },
  };

  sectorChart: ChartConfiguration<'doughnut'> = {
    type: 'doughnut',
    data: {
      labels: ['التعليم', 'الصحة', 'الدفاع', 'البنية التحتية', 'أخرى'],
      datasets: [
        {
          data: [185, 117, 198, 62, 95],
          backgroundColor: ['#4dd0a1', '#2a7f62', '#1b5e4a', '#a0e8cc', '#146b4a'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { color: 'rgba(255,255,255,.7)', padding: 12, font: { family: 'Cairo' } },
        },
      },
    },
  };
}
