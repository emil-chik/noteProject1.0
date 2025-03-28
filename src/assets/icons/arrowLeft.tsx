import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowLeft(props) {
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
        d="M15.707 18.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L10.414 12l5.293 5.293a1 1 0 010 1.414z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ArrowLeft;
