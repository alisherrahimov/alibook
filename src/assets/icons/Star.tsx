import * as React from 'react';
import Svg, {SvgProps, Rect, G, Path} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 20 20"
    {...props}>
    <Rect x={0} fill="none" width={20} height={20} />
    <G>
      <Path
        fill={props.color || '#000'}
        d="M10 1L7 7l-6 .75 4.13 4.62L4 19l6-3 6 3-1.12-6.63L19 7.75 13 7zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15L10 14.88V3.24z"
      />
    </G>
  </Svg>
);
export default SVGComponent;
