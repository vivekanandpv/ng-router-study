import { CanDeactivate, CanDeactivateFn } from '@angular/router';
import { Savable } from './models/savable.model';

export const warnUnsavedGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (!(component as Savable).isSaved()) {
    return confirm('You have unsaved data! Are you sure you want to leave?');
  } else {
    return true;
  }
};
