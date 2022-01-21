import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const LayersIcon = (props: SvgProps) => (
  <Svg width={18} height={20} fill='none' {...props}>
    <Path
      d='m8.99 17.005-7.37-5.73L0 12.535l9 7 9-7-1.63-1.27-7.38 5.74Zm.01-2.54 7.36-5.73L18 7.465l-9-7-9 7 1.63 1.27L9 14.465Zm0-11.47 5.74 4.47L9 11.935l-5.74-4.47L9 2.995Z'
      fill='#000'
    />
  </Svg>
);

export { LayersIcon };
