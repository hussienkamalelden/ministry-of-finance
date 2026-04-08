import { Component } from '@angular/core';

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

interface RecentTransaction {
  id: string;
  description: string;
  department: string;
  amount: string;
  status: 'completed' | 'pending' | 'rejected';
  date: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div class="max-w-7xl mx-auto">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-text-primary">Dashboard</h1>
        <p class="text-text-secondary mt-1">Welcome back. Here's your financial overview.</p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        @for (card of stats; track card.title) {
          <div class="bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-text-secondary">{{ card.title }}</span>
              <span class="w-10 h-10 rounded-lg bg-surface flex items-center justify-center" [innerHTML]="card.icon"></span>
            </div>
            <p class="text-2xl font-bold text-text-primary">{{ card.value }}</p>
            <div class="flex items-center mt-2 text-sm">
              @if (card.trend === 'up') {
                <span class="text-emerald-600 font-medium flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  {{ card.change }}
                </span>
              } @else {
                <span class="text-red-500 font-medium flex items-center gap-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  {{ card.change }}
                </span>
              }
              <span class="text-text-secondary ml-2">vs last quarter</span>
            </div>
          </div>
        }
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Budget Allocation -->
        <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-border p-6">
          <h2 class="text-lg font-semibold text-text-primary mb-4">Budget Allocation</h2>
          <div class="space-y-4">
            @for (item of budgetItems; track item.label) {
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-medium text-text-primary">{{ item.label }}</span>
                  <span class="text-sm text-text-secondary">{{ item.percentage }}%</span>
                </div>
                <div class="w-full bg-surface-alt rounded-full h-2.5">
                  <div
                    class="h-2.5 rounded-full transition-all duration-500"
                    [style.width.%]="item.percentage"
                    [style.backgroundColor]="item.color"
                  ></div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white rounded-xl shadow-sm border border-border p-6">
          <h2 class="text-lg font-semibold text-text-primary mb-4">Quick Actions</h2>
          <div class="space-y-3">
            @for (action of quickActions; track action.label) {
              <button
                class="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-surface transition-colors text-left"
              >
                <span class="w-8 h-8 rounded-md flex items-center justify-center text-white text-sm"
                  [style.backgroundColor]="action.color"
                  [innerHTML]="action.icon">
                </span>
                <span class="text-sm font-medium text-text-primary">{{ action.label }}</span>
              </button>
            }
          </div>
        </div>
      </div>

      <!-- Recent Transactions Table -->
      <div class="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
        <div class="px-6 py-4 border-b border-border">
          <h2 class="text-lg font-semibold text-text-primary">Recent Transactions</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-surface-alt">
              <tr>
                <th class="text-left px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">ID</th>
                <th class="text-left px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Description</th>
                <th class="text-left px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Department</th>
                <th class="text-left px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Amount</th>
                <th class="text-left px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Status</th>
                <th class="text-left px-6 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              @for (tx of transactions; track tx.id) {
                <tr class="hover:bg-surface/50 transition-colors">
                  <td class="px-6 py-4 text-sm font-mono text-text-secondary">{{ tx.id }}</td>
                  <td class="px-6 py-4 text-sm text-text-primary font-medium">{{ tx.description }}</td>
                  <td class="px-6 py-4 text-sm text-text-secondary">{{ tx.department }}</td>
                  <td class="px-6 py-4 text-sm text-text-primary font-medium">{{ tx.amount }}</td>
                  <td class="px-6 py-4">
                    <span
                      class="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium"
                      [class.bg-emerald-100]="tx.status === 'completed'"
                      [class.text-emerald-800]="tx.status === 'completed'"
                      [class.bg-amber-100]="tx.status === 'pending'"
                      [class.text-amber-800]="tx.status === 'pending'"
                      [class.bg-red-100]="tx.status === 'rejected'"
                      [class.text-red-800]="tx.status === 'rejected'"
                    >
                      {{ tx.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-sm text-text-secondary">{{ tx.date }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
})
export class DashboardComponent {
  stats: StatCard[] = [
    {
      title: 'Total Revenue',
      value: '$4.2B',
      change: '+12.5%',
      trend: 'up',
      icon: '<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    },
    {
      title: 'Total Expenditure',
      value: '$3.8B',
      change: '+8.2%',
      trend: 'up',
      icon: '<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
    },
    {
      title: 'Budget Surplus',
      value: '$420M',
      change: '+3.1%',
      trend: 'up',
      icon: '<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>',
    },
    {
      title: 'Pending Approvals',
      value: '47',
      change: '-5.4%',
      trend: 'down',
      icon: '<svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
    },
  ];

  budgetItems = [
    { label: 'Education', percentage: 28, color: '#3b82f6' },
    { label: 'Healthcare', percentage: 22, color: '#10b981' },
    { label: 'Infrastructure', percentage: 18, color: '#f59e0b' },
    { label: 'Defense', percentage: 15, color: '#ef4444' },
    { label: 'Social Welfare', percentage: 12, color: '#8b5cf6' },
    { label: 'Other', percentage: 5, color: '#6b7280' },
  ];

  quickActions = [
    { label: 'New Budget Request', color: '#1e3a5f', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>' },
    { label: 'Generate Report', color: '#10b981', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>' },
    { label: 'Review Transactions', color: '#f59e0b', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>' },
    { label: 'Audit Logs', color: '#8b5cf6', icon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>' },
  ];

  transactions: RecentTransaction[] = [
    { id: 'TXN-001', description: 'Education Fund Disbursement', department: 'Education', amount: '$12,500,000', status: 'completed', date: '2026-04-07' },
    { id: 'TXN-002', description: 'Infrastructure Bond Payment', department: 'Public Works', amount: '$8,750,000', status: 'completed', date: '2026-04-06' },
    { id: 'TXN-003', description: 'Healthcare Equipment Procurement', department: 'Health', amount: '$3,200,000', status: 'pending', date: '2026-04-05' },
    { id: 'TXN-004', description: 'Defense Budget Allocation Q2', department: 'Defense', amount: '$45,000,000', status: 'pending', date: '2026-04-04' },
    { id: 'TXN-005', description: 'Municipal Grant - Rejected Proposal', department: 'Local Gov', amount: '$1,800,000', status: 'rejected', date: '2026-04-03' },
  ];
}
