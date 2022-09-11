import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const customId = 'custom-id-error';

const notifyWarn = message => {
  toast.warn(message, {
    toastId: customId,
    icon: '🤕',
  });
};

export const rtkQueryErrorLogger = api => next => action => {
  if (isRejectedWithValue(action) && action.payload.status === 500) {
    const message = `${action.payload.data.message}`;
    notifyWarn(message);
  }

  return next(action);
};
