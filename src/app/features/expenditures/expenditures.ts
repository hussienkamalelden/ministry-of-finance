import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

const YEARS = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

@Component({
  selector: 'app-expenditures',
  standalone: true,
  imports: [RouterLink, BaseChartDirective],
  templateUrl: './expenditures.html',
  styleUrls: ['../chart-page.css'],
})
export class ExpendituresComponent {
  totalExpenseChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: YEARS,
      datasets: [
        { label: 'ميزانية', data: [978, 1048, 1020, 990, 955, 1114, 1251, 1285], backgroundColor: '#2a7f62', borderRadius: 3 },
        { label: 'فعلي', data: [1079, 1059, 1076, 1039, 1164, 1193, 1230, null], backgroundColor: '#4dd0a1', borderRadius: 3 },
        { label: 'تقديرات', data: [null, null, null, null, null, null, null, 1270], backgroundColor: '#a0e8cc', borderRadius: 3 },
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

  sectorBreakdownChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: ['التعليم', 'الصحة', 'الدفاع', 'الأمن', 'البنية التحتية', 'الموارد', 'الإدارة'],
      datasets: [
        { label: '2024', data: [196, 117, 198, 105, 62, 45, 38], backgroundColor: '#2a7f62' },
        { label: '2025', data: [210, 125, 195, 110, 70, 48, 42], backgroundColor: '#4dd0a1' },
      ],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
        y: { ticks: { color: 'rgba(255,255,255,.6)', font: { family: 'Cairo' } }, grid: { color: 'rgba(255,255,255,.08)' } },
      },
    },
  };

  capitalVsCurrentChart: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: YEARS,
      datasets: [
        {
          label: 'النفقات الجارية',
          data: [820, 810, 830, 800, 880, 910, 950, 980],
          borderColor: '#4dd0a1',
          backgroundColor: 'rgba(77,208,161,.12)',
          fill: true,
          tension: 0.35,
          pointRadius: 4,
          pointBackgroundColor: '#fff',
        },
        {
          label: 'النفقات الرأسمالية',
          data: [259, 249, 246, 239, 284, 283, 280, 305],
          borderColor: '#f5a623',
          backgroundColor: 'rgba(245,166,35,.12)',
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

  expenseShareChart: ChartConfiguration<'doughnut'> = {
    type: 'doughnut',
    data: {
      labels: ['رواتب وأجور', 'سلع وخدمات', 'إعانات', 'مشاريع رأسمالية', 'أخرى'],
      datasets: [
        {
          data: [45, 20, 12, 15, 8],
          backgroundColor: ['#4dd0a1', '#2a7f62', '#1b5e4a', '#f5a623', '#a0e8cc'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '55%',
      plugins: {
        legend: {
          position: 'right',
          labels: { color: 'rgba(255,255,255,.7)', padding: 10, font: { family: 'Cairo' } },
        },
      },
    },
  };
}
