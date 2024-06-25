import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
import {Colors} from '@constants';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Circle
      cx={12}
      cy={12}
      r={5}
      stroke={props.color || Colors.black}
      strokeWidth={1.5}
    />
    <Path
      d="M12 2V4"
      stroke={props.color || Colors.black}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 20V22"
      stroke={props.color || Colors.black}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20.6602 7L18.9281 8"
      stroke={props.color || Colors.black}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5.07178 16L3.33973 17"
      stroke={props.color || Colors.black}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3.33984 7L5.07189 8"
      stroke={props.color || Colors.black}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18.9282 16L20.6603 17"
      stroke={props.color || Colors.black}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SVGComponent;
