import { IData, IHeadCell } from "./type";

export const rows: IData[] = [
  { id: 1, name: "کاپ‌کیک", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { id: 2, name: "دونات", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { id: 3, name: "اکلر", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { id: 4, name: "ماست یخی", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { id: 5, name: "نان زنجبیلی", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  { id: 6, name: "لانه زنبور", calories: 408, fat: 3.2, carbs: 87, protein: 6.5 },
  { id: 7, name: "ساندویچ بستنی", calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { id: 8, name: "ژله‌", calories: 375, fat: 0.0, carbs: 94, protein: 0.0 },
  { id: 9, name: "کیت‌کت", calories: 518, fat: 26.0, carbs: 65, protein: 7.0 },
  { id: 10, name: "آب‌نبات چوبی", calories: 392, fat: 0.2, carbs: 98, protein: 0.0 },
  { id: 11, name: "مارشمالو", calories: 318, fat: 0, carbs: 81, protein: 2.0 },
  { id: 12, name: "نوقا", calories: 360, fat: 19.0, carbs: 9, protein: 37.0 },
  { id: 13, name: "اورئو", calories: 437, fat: 18.0, carbs: 63, protein: 4.0 },
];


export const headCells: IHeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "دسر (در هر ۱۰۰ گرم)",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "کالری" },
  { id: "fat", numeric: true, disablePadding: false, label: "چربی (گرم)" },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "کربوهیدرات (گرم)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "پروتئین (گرم)",
  },
];
