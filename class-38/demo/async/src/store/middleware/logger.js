const logger = store => next => action => {
  // do work in here
  console.log('__ACTION__', action);
  try {
    const result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  } catch(e) {
    e.action = action;
    console.error('__ERROR__', e);
    return e;
  }
}

export default logger;
