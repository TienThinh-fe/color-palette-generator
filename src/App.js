import { useState } from "react";
import CopyGuide from "./components/CopyGuide";
import GridPalette from "./components/GridPalette";
import ButtonGenerate from "./components/ButtonGenerate"
import Title from "./components/Title";
import getColors from "./utils";

function App() {
  const [palette, setPalette] = useState([
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255],
  ]);

  const handleSetPalette = () => {
    setPalette(getColors());
    console.log('Palette: ', palette)
  }

  return (
    <div>
      <Title />
      <GridPalette palette={palette} />
      <ButtonGenerate handleOnClick={handleSetPalette} />
      <CopyGuide />
    </div>
  );
}

export default App;
