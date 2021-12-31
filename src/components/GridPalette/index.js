import React from "react";
import ColorElement from "../ColorElement";

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

function GridPalette({ palette }) {
  let firstColorPalette = ConvertRGBtoHex(
    palette[0][0],
    palette[0][1],
    palette[0][2]
  );
  let secondColorPalette = ConvertRGBtoHex(
    palette[1][0],
    palette[1][1],
    palette[1][2]
  );
  let thirdColorPalette = ConvertRGBtoHex(
    palette[2][0],
    palette[2][1],
    palette[2][2]
  );
  let forthColorPalette = ConvertRGBtoHex(
    palette[3][0],
    palette[3][1],
    palette[3][2]
  );
  let fifthColorPalette = ConvertRGBtoHex(
    palette[4][0],
    palette[4][1],
    palette[4][2]
  );

  return (
    <div className="grid grid-cols-5 gap-x-12 gap-y-5 m-auto mb-12 px-20 md:grid-cols-1 xl:gap-x-4 xl:px-10 xs:grid-cols-1">
      <ColorElement colorCode={firstColorPalette}/>
      <ColorElement colorCode={secondColorPalette} />
      <ColorElement colorCode={thirdColorPalette} />
      <ColorElement colorCode={forthColorPalette} />
      <ColorElement colorCode={fifthColorPalette} />
    </div>
  );
}

export default GridPalette;
