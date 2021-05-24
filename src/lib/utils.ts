export const Dates = {
  print: (d: Date | string): string => {
    const options = {
      dateStyle: 'medium'
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const formatter = new Intl.DateTimeFormat('en-GB', options);
    return formatter.format(new Date(d));
  }
};
