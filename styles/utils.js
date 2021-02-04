export const addOpacityColor = (color, dec) => {
  const decToHex = Math.round(dec * 255).toString(16)
  return `${color}${decToHex}`
}
