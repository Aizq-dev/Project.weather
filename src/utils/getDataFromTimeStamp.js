

export const getDateFromTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    return date.toISOString().slice(0, 10); }