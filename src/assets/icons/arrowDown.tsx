import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowDown(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.707 8.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 011.414-1.414L12 13.586l5.293-5.293a1 1 0 011.414 0z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ArrowDown;
