import { lazy } from 'react';

export const createAsyncView = componentName => {
  return lazy(() => {
    return import(`../pages/${componentName}`)
  });
  };