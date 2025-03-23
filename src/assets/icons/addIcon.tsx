import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function AddIcon(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={0.5}
        y={0.5}
        width={35}
        height={35}
        rx={6.5}
        fill="#918DAC"
        stroke="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.529 11.29a3.29 3.29 0 00-6.582 0v3.657h-3.656a3.29 3.29 0 100 6.582h3.656v3.656a3.29 3.29 0 006.582 0V21.53h3.656a3.29 3.29 0 000-6.582H21.53v-3.656z"
        fill="#220C3A"
      />
    </Svg>
  );
}

export default AddIcon;
