const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const getColors = () => {
  let palette = [];

  for (let i = 0; i < 5; i++) {
    let color = [];
    for (let j = 0; j < 3; j++) {
      color.push(getRndInteger(0, 255));
    }
    palette.push(color);
  }
  return palette
};

export default getColors;