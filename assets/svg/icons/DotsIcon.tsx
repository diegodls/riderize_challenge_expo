import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const DotsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      d='M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2Zm0 16H2V2h14v14ZM9 3C7.34 3 6 4.34 6 6s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3ZM8 6.5H7v-1h1v1Zm1.5 0h-1v-1h1v1Zm1.5 0h-1v-1h1v1Z'
      fill='#000'
    />
  </Svg>
);

export { DotsIcon };
