const formatTime = (mills: number) => {
  const date = new Date(mills * 1000);
  return date.toDateString();
};
const formatPrice = (arg: string) => {
  return `${Math.round(parseFloat(arg))}`;
};

export { formatTime, formatPrice };
