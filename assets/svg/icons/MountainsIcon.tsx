import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const MountainsIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <Path
      d='m13.334 0-4.22 5.63 1.25 1.67 2.97-3.97 5 6.67h-8.46l-4.01-5.37L.333 12h22l-9-12Zm-9 10 1.52-2.03L7.373 10h-3.04Z'
      fill='#000'
    />
  </Svg>
);

export { MountainsIcon };
