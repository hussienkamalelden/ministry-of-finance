import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Wallet, BarChart3, FileText, Scale, CircleDollarSign, LucideIconData } from 'lucide-angular';

interface BudgetCard {
  label: string;
  route: string;
  icon: LucideIconData;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  cards: BudgetCard[] = [
    { label: 'الملخص\nالتنفيذي', route: '/executive-summary', icon: FileText },
    { label: 'المؤشرات\nالاقتصادية', route: '/economic-indicators', icon: BarChart3 },
    { label: 'النفقات', route: '/expenditures', icon: Wallet },
    { label: 'الإيرادات', route: '/revenues', icon: CircleDollarSign },
    { label: 'عجز/فائض\nالميزانية والدين\nالعام', route: '/deficit-surplus', icon: Scale },
  ];
}
