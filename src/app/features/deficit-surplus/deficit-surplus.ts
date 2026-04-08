import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

const YEARS = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'];

@Component({
  selector: 'app-deficit-surplus',
  standalone: true,
  imports: [RouterLink, BaseChartDirective],
  templateUrl: './deficit-surplus.html',
  styleUrls: ['../chart-page.css'],
})
export class DeficitSurplusComponent {
  deficitSurplusChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: YEARS,
      datasets: [
        { label: 'إجمالي الإيرادات', data: [906, 927, 782, 930, 1268, 1212, 1259, 1183, 1150, 1180, 1210], backgroundColor: '#4dd0a1', stack: 'a' },
        { label: 'إجمالي النفقات', data: [-1079, -1059, -1076, -1039, -1164, -1193, -1230, -1285, -1220, -1250, -1270], backgroundColor: '#2a7f62', stack: 'a' },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { stacked: true, ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
        y: { stacked: true, ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
      },
    },
  };

  publicDebtChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: YEARS,
      datasets: [
        {
          label: 'الدين العام',
          data: [560, 678, 854, 938, 990, 1028, 1095, 1180, 1240, 1300, 1350],
          backgroundColor: '#2a7f62',
          borderRadius: 3,
          yAxisID: 'y',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
        y: { position: 'right', ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
      },
    },
  };

  debtRatioChart: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: YEARS,
      datasets: [
        {
          label: 'نسبة الدين من الناتج المحلي %',
          data: [19.0, 22.8, 32.4, 30.0, 25.2, 26.2, 26.8, 29.0, 29.5, 29.8, 30.2],
          borderColor: '#4dd0a1',
          backgroundColor: 'rgba(77,208,161,.15)',
          fill: true,
          tension: 0.35,
          pointRadius: 5,
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
        y: { ticks: { color: 'rgba(255,255,255,.6)', callback: (v: any) => v + '%' }, grid: { color: 'rgba(255,255,255,.08)' } },
      },
    },
  };

  borrowingChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      datasets: [
        { label: 'الإصدارات المحلية', data: [78, 85, 118, 92, 68, 82, 90, 95], backgroundColor: '#4dd0a1', borderRadius: 3 },
        { label: 'الإصدارات الخارجية', data: [42, 35, 55, 40, 25, 30, 38, 35], backgroundColor: '#2a7f62', borderRadius: 3 },
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

  reservesChart: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
      datasets: [
        {
          label: 'الاحتياطيات الحكومية',
          data: [489, 499, 453, 406, 425, 395, 387, 380, 370],
          borderColor: '#4dd0a1',
          backgroundColor: 'rgba(77,208,161,.12)',
          fill: true,
          tension: 0.35,
          pointRadius: 5,
          pointBackgroundColor: '#fff',
          yAxisID: 'y',
        },
        {
          label: 'النسبة من الناتج المحلي %',
          data: [17.2, 17.5, 17.2, 13.0, 10.8, 10.1, 9.5, 9.3, 9.0],
          borderColor: '#f5a623',
          borderDash: [6, 4],
          fill: false,
          tension: 0.35,
          pointRadius: 4,
          pointBackgroundColor: '#fff',
          yAxisID: 'y1',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
        y: { position: 'right', ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
        y1: { position: 'left', ticks: { color: 'rgba(255,255,255,.6)', callback: (v: any) => v + '%' }, grid: { drawOnChartArea: false } },
      },
    },
  };
}
