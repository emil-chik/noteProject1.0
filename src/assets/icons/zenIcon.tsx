import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function ZenIcon(props) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.7 0C4.4 0 0 4.717 0 10.506c0 5.468 3.9 9.864 8.8 10.4h.9c5.4 0 9.7-4.718 9.7-10.4C19.5 4.717 15.1 0 9.7 0zM1.5 10.506c0-4.824 3.7-8.79 8.2-8.79.9 0 1.7.107 2.5.428.8 1.287 1.2 2.895 1 4.396-.2 2.144-1.2 2.894-4 3.216-1.1.107-2.2.643-3 1.5-.8.858-1.3 1.93-1.5 3.11-.2 1.394.1 2.68.6 3.645-2.3-1.608-3.8-4.396-3.8-7.505zm8.2 8.791h-.6c-.8-.321-3.4-1.715-2.9-4.717.1-.857.5-1.608 1-2.251.6-.643 1.3-.965 2.1-1.072 2.9-.322 5-1.18 5.5-4.61.1-1.18 0-2.359-.3-3.43 2.1 1.715 3.5 4.288 3.5 7.29 0 4.824-3.7 8.79-8.3 8.79z"
        fill="url(#paint0_linear_40_362)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_40_362"
          x1={22.0252}
          y1={6.59629e-7}
          x2={-2.55332}
          y2={19.3012}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C724E1" />
          <Stop offset={1} stopColor="#4E22CC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default ZenIcon;
