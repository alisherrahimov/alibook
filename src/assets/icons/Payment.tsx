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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2H18C19.6787 2 21.1158 3.03408 21.7092 4.5H8.29074C8.88413 3.03408 10.3213 2 12 2ZM2 12V16H6C7.10457 16 8 15.1046 8 14C8 12.8954 7.10457 12 6 12H2ZM22 6H6C3.79086 6 2 7.79086 2 10V10.5H6C7.933 10.5 9.5 12.067 9.5 14C9.5 15.933 7.933 17.5 6 17.5H2V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6Z"
      fill={props.color || '#000'}
    />
  </Svg>
);
export default SVGComponent;
