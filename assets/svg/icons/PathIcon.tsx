import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const PathIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      d='M16 12.18V4c0-2.21-1.79-4-4-4S8 1.79 8 4v10c0 1.1-.9 2-2 2s-2-.9-2-2V5.82C5.16 5.4 6 4.3 6 3c0-1.66-1.34-3-3-3S0 1.34 0 3c0 1.3.84 2.4 2 2.82V14c0 2.21 1.79 4 4 4s4-1.79 4-4V4c0-1.1.9-2 2-2s2 .9 2 2v8.18A2.996 2.996 0 0 0 15 18c1.66 0 3-1.34 3-3 0-1.3-.84-2.4-2-2.82ZM3 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm12 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z'
      fill='#000'
    />
  </Svg>
);

export { PathIcon };
