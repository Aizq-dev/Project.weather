import { getDateFromTimestamp } from "./getDataFromTimeStamp";

export const getDateFormat =(timestamp)=>{

    const date = getDateFromTimestamp(timestamp)
    const dateToFormat = new Date(date)

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthIndex = dateToFormat.getMonth();
const monthName = monthNames[monthIndex];
const day = date.slice(8.0)
 return `${day} ${monthName} `
}
