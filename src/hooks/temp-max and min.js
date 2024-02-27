import { tempCelsius } from "./tempCelsius";
export const getTempMax = (list) =>{ 
    Object.values(list).map(day => {
    let tempMaxima = -Infinity;
    day.forEach(hourInterval => {
      if (hourInterval.temp_max > tempMaxima) {
        tempMaxima = hourInterval.temp_max;
      }
    });
    return { temp: tempCelsius(tempMaxima) };
  })}

  export const getTempMin = (list) =>{ 
    Object.values(list).map(day => {
    let tempMin = -Infinity;
    day.forEach(hourInterval => {
      if (hourInterval.temp_min > tempMin) {
        tempMin = hourInterval.temp_min;
      }
    });
    return { temp: tempCelsius(tempMin) };
  })}

    