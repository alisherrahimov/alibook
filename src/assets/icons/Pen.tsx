import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Path
      d="M14.3865 5.83114L18.169 9.61364M3 21L6.67278 20.3008C7.45152 20.1526 8.16769 19.7736 8.72823 19.213L20.1837 7.75754C21.2721 6.66918 21.2721 4.90462 20.1837 3.81626C19.0954 2.72791 17.3308 2.72791 16.2425 3.81627L4.78696 15.2718C4.22642 15.8323 3.8474 16.5485 3.69916 17.3272L3 21Z"
      stroke={props.color || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
