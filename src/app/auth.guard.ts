import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from './data.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const dataService = inject(DataService);
  const router = inject(Router);
  return dataService.score$.pipe(
    map((s) => {
      if (s >= route.data['score']) {
        return true;
      } else {
        router.navigate(['unauthorized']);
        return false;
      }
    })
  );
};
