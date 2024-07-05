import * as React from 'react';
import Svg, {SvgProps, G, Path, Circle} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    {...props}>
    <G>
      <Path
        fill={props.fill || 'black'}
        d="M50,7.8C26.7,7.8,7.8,26.7,7.8,50S26.7,92.2,50,92.2c23.3,0,42.2-18.9,42.2-42.2S73.3,7.8,50,7.8z M50,86.2   c-19.9,0-36.2-16.2-36.2-36.2S30.1,13.8,50,13.8S86.2,30.1,86.2,50S69.9,86.2,50,86.2z"
      />
      <Circle fill={props.color || '#000'} cx={50} cy={50} r={25} />
    </G>
  </Svg>
);
export default SVGComponent;
