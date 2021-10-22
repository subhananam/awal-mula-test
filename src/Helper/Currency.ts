export const priceHelper = (value : number) => value.toString().replace(/[^0-9.\-]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
