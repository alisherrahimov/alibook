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
      d="M6.37596 5.58397C6.1462 5.92862 6.23933 6.39427 6.58397 6.62404C6.92862 6.8538 7.39427 6.76067 7.62404 6.41603L6.37596 5.58397ZM8.40627 3.8906L9.0303 4.30662L8.40627 3.8906ZM15.5937 3.8906L16.2178 3.47457L15.5937 3.8906ZM16.376 6.41603C16.6057 6.76067 17.0714 6.8538 17.416 6.62404C17.7607 6.39427 17.8538 5.92862 17.624 5.58397L16.376 6.41603ZM14.25 13.5C14.25 14.7426 13.2426 15.75 12 15.75V17.25C14.0711 17.25 15.75 15.5711 15.75 13.5H14.25ZM12 15.75C10.7574 15.75 9.75 14.7426 9.75 13.5H8.25C8.25 15.5711 9.92893 17.25 12 17.25V15.75ZM9.75 13.5C9.75 12.2574 10.7574 11.25 12 11.25V9.75C9.92893 9.75 8.25 11.4289 8.25 13.5H9.75ZM12 11.25C13.2426 11.25 14.25 12.2574 14.25 13.5H15.75C15.75 11.4289 14.0711 9.75 12 9.75V11.25ZM7.62404 6.41603L9.0303 4.30662L7.78223 3.47457L6.37596 5.58397L7.62404 6.41603ZM10.0704 3.75H13.9296V2.25H10.0704V3.75ZM14.9697 4.30662L16.376 6.41603L17.624 5.58397L16.2178 3.47457L14.9697 4.30662ZM13.9296 3.75C14.3476 3.75 14.7379 3.95888 14.9697 4.30662L16.2178 3.47457C15.7077 2.70953 14.8491 2.25 13.9296 2.25V3.75ZM9.0303 4.30662C9.26214 3.95888 9.65243 3.75 10.0704 3.75V2.25C9.1509 2.25 8.29226 2.70953 7.78223 3.47457L9.0303 4.30662ZM6 6.75H18V5.25H6V6.75ZM21.25 10V17H22.75V10H21.25ZM18 20.25H6V21.75H18V20.25ZM2.75 17V10H1.25V17H2.75ZM6 20.25C4.20507 20.25 2.75 18.7949 2.75 17H1.25C1.25 19.6234 3.37665 21.75 6 21.75V20.25ZM21.25 17C21.25 18.7949 19.7949 20.25 18 20.25V21.75C20.6234 21.75 22.75 19.6234 22.75 17H21.25ZM18 6.75C19.7949 6.75 21.25 8.20507 21.25 10H22.75C22.75 7.37665 20.6234 5.25 18 5.25V6.75ZM6 5.25C3.37665 5.25 1.25 7.37665 1.25 10H2.75C2.75 8.20507 4.20507 6.75 6 6.75V5.25Z"
      fill={props.color || '#000'}
    />
  </Svg>
);
export default SVGComponent;
