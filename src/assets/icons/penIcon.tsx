import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function PenIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.176 17.081l6.46-6.915c.76-.814 1.22-1.308 1.22-2.09 0-.783-.46-1.265-1.22-2.08l-3.48-3.688C12.396 1.493 11.946 1 11.206 1s-1.18.493-1.94 1.308l-6.45 6.915a2.75 2.75 0 00-.66.911c-.123.364-.174.75-.15 1.136v3.785c0 1.18 0 1.898.49 2.466.244.216.528.375.832.468.305.092.624.115.938.068h.48l3.54-.054a2.57 2.57 0 001-.16c.32-.173.604-.41.84-.697m-1.38-.794a3.577 3.577 0 01-.49 0l-3.53.054c-.408.04-.818.02-1.22-.064a5.454 5.454 0 01-.05-1.298l.05-3.752a3.16 3.16 0 010-.536c.105-.14.218-.273.34-.397l4.1-4.406 5.25 5.618s-4.4 4.76-4.45 4.781zm6.83-7.29l-1.28 1.372-5.25-5.617 1.28-1.373c.258-.318.554-.6.88-.836.33.236.628.517.89.836l3.48 3.731c.296.278.558.595.78.944a4.904 4.904 0 01-.78.943z"
        fill="url(#paint0_linear_40_329)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_40_329"
          x1={20}
          y1={1}
          x2={-0.0828269}
          y2={16.7748}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C724E1" />
          <Stop offset={1} stopColor="#4E22CC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default PenIcon;
