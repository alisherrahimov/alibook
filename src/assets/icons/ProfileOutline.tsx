import * as React from 'react';
import Svg, {SvgProps, Ellipse, Circle} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Ellipse
      cx={12}
      cy={17.5}
      rx={7}
      ry={3.5}
      stroke={props.color || '#000'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
    <Circle
      cx={12}
      cy={7}
      r={4}
      stroke={props.color || '#000'}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
