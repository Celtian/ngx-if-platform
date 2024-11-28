// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const coerceBooleanProperty = (value: any): boolean => {
  return value != null && `${value}` !== 'false';
};
