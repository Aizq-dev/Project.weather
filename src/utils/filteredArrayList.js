  import { getDateFromTimestamp } from "./getDataFromTimeStamp";
export const filterList=(cleanData)=>{

    const filteredArrays = {};
    cleanData.forEach((obj) => {
 
    const date = getDateFromTimestamp(obj.date);
    
    if (!filteredArrays[date]) {

      filteredArrays[date] = [obj];
      
      
    } else {
      filteredArrays[date].push(obj);
    }
  });
 
  return filteredArrays
}


