export const coerceBooleanProperty = (value: any): boolean => {
  return value != null && `${value}` !== 'false';
};
