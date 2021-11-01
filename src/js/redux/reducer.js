import { getStore } from './../redux/store';

const reducers = function ({ action, payload, ...rest }) {
  switch (action.type) {
    case 'edit':
      return 'edit a todo';
    case 'delete':
      return 'remove a todo';
    case 'add':
      return 'add a todo';
    default:
      return getStore();
  }
};

export { reducers };
