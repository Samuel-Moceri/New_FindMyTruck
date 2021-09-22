// Create the case to export it to the middleware
export const LOG_USER = 'LOG_USER';
export const logUser = () => ({
  type: LOG_USER,
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key: key,
  value: value
});
