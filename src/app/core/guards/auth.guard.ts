import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const isAuthenticated = true; // Replace with actual auth check
  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
