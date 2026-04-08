import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

const YEARS = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

@Component({
  selector: 'app-revenues',
  standalone: true,
  imports: [RouterLink, BaseChartDirective],
  templateUrl: './revenues.html',
  styleUrls: ['../chart-page.css'],
})
export class RevenuesComponent {
  totalRevenueChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: YEARS,
      datasets: [
        { label: 'ميزانية', data: [783, 917, 833, 849, 1045, 1130, 1172, 1183], backgroundColor: '#2a7f62', borderRadius: 3 },
        { label: 'فعلي', data: [906, 927, 782, 930, 1268, 1212, 1259, null], backgroundColor: '#4dd0a1', borderRadius: 3 },
        { label: 'توقعات', data: [null, null, null, null, null, null, null, 1200], backgroundColor: '#a0e8cc', borderRadius: 3 },
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

  oilVsNonOilChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: YEARS,
      datasets: [
        { label: 'إيرادات نفطية', data: [611, 594, 413, 562, 868, 756, 752, 710], backgroundColor: '#2a7f62', stack: 'a' },
        { label: 'إيرادات غير نفطية', data: [295, 333, 369, 368, 400, 456, 507, 473], backgroundColor: '#4dd0a1', stack: 'a' },
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

  nonOilGrowthChart: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: YEARS,
      datasets: [
        {
          label: 'القيمة',
          data: [295, 333, 369, 368, 400, 456, 507, 473],
          borderColor: '#4dd0a1',
          backgroundColor: 'rgba(77,208,161,.15)',
          fill: true,
          tension: 0.35,
          pointRadius: 5,
          pointBackgroundColor: '#fff',
          yAxisID: 'y',
        },
        {
          label: 'النسبة من الناتج المحلي %',
          data: [10.5, 11.8, 13.6, 11.9, 10.1, 11.6, 12.3, 11.5],
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
        y1: { position: 'left', ticks: { color: 'rgba(255,255,255,.6)' }, grid: { drawOnChartArea: false } },
      },
    },
  };

  revenueSourceChart: ChartConfiguration<'pie'> = {
    type: 'pie',
    data: {
      labels: ['النفط', 'الضرائب', 'الرسوم', 'الاستثمارات', 'أخرى'],
      datasets: [
        {
          data: [60, 16, 10, 8, 6],
          backgroundColor: ['#4dd0a1', '#2a7f62', '#1b5e4a', '#f5a623', '#a0e8cc'],
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
          labels: { color: 'rgba(255,255,255,.7)', padding: 10, font: { family: 'Cairo' } },
        },
      },
    },
  };
}
