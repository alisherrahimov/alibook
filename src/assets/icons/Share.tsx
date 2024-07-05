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
      d="M9.20976 13.3961L5.50729 12.1619C3.49757 11.492 3.49757 8.64932 5.50729 7.97942L17.0947 4.11693C18.818 3.5425 20.4575 5.18198 19.8831 6.90526L16.0206 18.4927C15.3507 20.5024 12.508 20.5024 11.8381 18.4927L10.6039 14.7902C10.3845 14.132 9.868 13.6155 9.20976 13.3961Z"
      stroke={props.color || '#000'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
