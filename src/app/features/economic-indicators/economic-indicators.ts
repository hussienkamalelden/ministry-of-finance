import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

const YEARS = ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'];

@Component({
  selector: 'app-economic-indicators',
  standalone: true,
  imports: [RouterLink, BaseChartDirective],
  templateUrl: './economic-indicators.html',
  styleUrls: ['../chart-page.css'],
})
export class EconomicIndicatorsComponent {
  inflationChart: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: YEARS,
      datasets: [
        {
          label: 'معدل التضخم %',
          data: [2.5, -2.1, 3.4, 3.1, 2.5, 1.6, 1.7, 2.0],
          borderColor: '#f5a623',
          backgroundColor: 'rgba(245,166,35,.15)',
          fill: true,
          tension: 0.35,
          pointRadius: 5,
          pointBackgroundColor: '#fff',
        },
        {
          label: 'سعر الفائدة %',
          data: [3.0, 2.5, 1.0, 1.0, 4.5, 5.5, 5.0, 4.5],
          borderColor: '#4dd0a1',
          borderDash: [6, 4],
          fill: false,
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

  unemploymentChart: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: YEARS,
      datasets: [
        { label: 'ذكور', data: [6.6, 4.4, 7.1, 5.2, 4.5, 4.3, 3.7, 3.5], backgroundColor: '#2a7f62' },
        { label: 'إناث', data: [32.5, 30.8, 30.2, 22.5, 20.5, 17.7, 14.2, 13.5], backgroundColor: '#4dd0a1' },
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

  oilPriceChart: ChartConfiguration<'line'> = {
    type: 'line',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
      datasets: [
        {
          label: '2024',
          data: [79, 83, 86, 90, 82, 81, 85, 78, 73, 75, 74, 74],
          borderColor: '#4dd0a1',
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: '#fff',
          fill: false,
        },
        {
          label: '2025',
          data: [76, 75, 72, 68, 70, 73, 78, 80, 77, 79, 81, 82],
          borderColor: '#a0e8cc',
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: '#fff',
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: 'rgba(255,255,255,.6)', maxRotation: 45 }, grid: { color: 'rgba(255,255,255,.08)' } },
        y: { ticks: { color: 'rgba(255,255,255,.6)' }, grid: { color: 'rgba(255,255,255,.08)' } },
      },
    },
  };

  gdpCompositionChart: ChartConfiguration<'polarArea'> = {
    type: 'polarArea',
    data: {
      labels: ['النفط', 'الصناعة', 'الخدمات', 'التجزئة', 'البناء'],
      datasets: [
        {
          data: [42, 15, 22, 12, 9],
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
          labels: { color: 'rgba(255,255,255,.7)', padding: 10, font: { family: 'Cairo' } },
        },
      },
      scales: {
        r: {
          ticks: { color: 'rgba(255,255,255,.5)', backdropColor: 'transparent' },
          grid: { color: 'rgba(255,255,255,.1)' },
        },
      },
    },
  };
}
