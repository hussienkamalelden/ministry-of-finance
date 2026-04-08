import { bootstrapApplication } from '@angular/platform-browser';
import { Chart, BarController, LineController, PieController, DoughnutController, PolarAreaController, CategoryScale, LinearScale, RadialLinearScale, BarElement, LineElement, PointElement, ArcElement, Filler, Tooltip, Legend } from 'chart.js';
import { appConfig } from './app/app.config';
import { App } from './app/app';

Chart.register(BarController, LineController, PieController, DoughnutController, PolarAreaController, CategoryScale, LinearScale, RadialLinearScale, BarElement, LineElement, PointElement, ArcElement, Filler, Tooltip, Legend);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
