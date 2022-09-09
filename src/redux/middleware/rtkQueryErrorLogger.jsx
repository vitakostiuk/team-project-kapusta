import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger = api => next => action => {
  if (isRejectedWithValue(action) && action.payload.status === 500) {
    toast.warn(`${action.payload.data.message}`);
  }

  return next(action);
};
