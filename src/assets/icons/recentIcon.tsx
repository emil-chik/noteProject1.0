import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RecentIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10 17.76c4.329 0 7.75-3.747 7.75-8.255 0-4.51-3.421-8.255-7.75-8.255-4.329 0-7.75 3.746-7.75 8.255 0 4.508 3.421 8.254 7.75 8.254z"
        stroke="#fff"
        strokeOpacity={0.7}
        strokeWidth={1.5}
      />
      <Path
        d="M13.5 9.505h-3.25a.25.25 0 01-.25-.25V5.752"
        stroke="#fff"
        strokeOpacity={0.7}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default RecentIcon;
