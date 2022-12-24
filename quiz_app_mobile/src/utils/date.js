export const trMonthName = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

export const toDateString = (date = new Date()) => {
  const year = date.getFullYear();
  const month = trMonthName[date.getMonth()];
  const day = date.getDate();
  return day + '-' + month + '-' + year;
};
