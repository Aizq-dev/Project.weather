export function formatHour(num,i,) {
    
    const total = num +(3 * i).toString();
    const hours = total.substring( total.length - 2); 
    const minutes = total.substring(0,total.length - 2); 
  
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  }
  
