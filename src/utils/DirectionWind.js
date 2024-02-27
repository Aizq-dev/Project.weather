 export function windDir(degrees) {
    const sectors = ["N", "NE", "E", "SE", "S", "SO", "O", "NO", "N"];

    const index = Math.round((degrees % 360) / 45);
    return sectors[index];
}