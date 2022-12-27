import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  months: [
    "",
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  // создание массива лет, доступных для нахождения курса
  // не брать > 2000-го года, там данных нет(~ с 1995-го = [])
  years: Array(new Date().getFullYear() - 2008 + 1)
    .fill(0)
    .map((_, id) => 2008 + id),
}

const dateSlice = createSlice({
  name: "dateParams",
  initialState,
  reducers: {},
})

export default dateSlice.reducer
