import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const BikeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill='none' {...props}>
    <G clipPath='url(#a)'>
      <Path
        d='M16.166 5.75c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm-10.5 6.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5Zm5.8-10 2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1v-2c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6-.6 0-1.1.2-1.4.6l-2.8 2.8c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4l3.2 2.8v5h2v-6.2l-2.2-2.3Zm8.2 1.5c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5Z'
        fill='#000'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' transform='translate(.667)' d='M0 0h24v24H0z' />
      </ClipPath>
    </Defs>
  </Svg>
);

export { BikeIcon };
