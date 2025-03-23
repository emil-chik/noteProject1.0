import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function ArrowRight(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 2.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L10.586 9 5.293 3.707a1 1 0 010-1.414z"
        fill="url(#paint0_linear_40_335)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_40_335"
          x1={9}
          y1={1.99994}
          x2={9}
          y2={15.9999}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F94695" />
          <Stop offset={1} stopColor="#F13A76" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ArrowRight;
