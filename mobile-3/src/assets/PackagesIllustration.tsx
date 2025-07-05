import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={81}
    height={80}
    fill="none"
    {...props}
  >
    <Circle cx={40.5} cy={40} r={39.5} fill="#FFF0E7" stroke="#FFCFB5" />
    <Path
      fill="#FFCFB5"
      d="M77.33 55c-5.934 14.659-20.303 25-37.09 25C23.454 80 9.085 69.659 3.15 55h74.18Z"
    />
    <Path
      fill="#D8B788"
      d="M15.5 57.506h48v2.667h-48zM15.5 65.506h48v2.667h-48z"
    />
    <Path
      fill="#A38767"
      d="M17.278 60.173h3.556v5.333h-3.556zM37.722 60.173h3.556v5.333h-3.556zM58.167 60.173h3.556v5.333h-3.556z"
    />
    <Path
      fill="#64523A"
      d="M17.278 60.173h3.556v.889h-3.556zM37.722 60.173h3.556v.889h-3.556zM58.167 60.173h3.556v.889h-3.556z"
    />
    <Path fill="#BF9D73" d="M39.133 14h22v22h-22z" />
    <Path
      fill="#907558"
      d="M47.933 14h4.4v8.067h-4.4zM39.133 14h.733v22h-.733z"
    />
    <Path fill="#907558" d="M61.133 35.266V36h-22v-.733z" />
    <Path fill="#BF9D73" d="M39.133 36h22v22h-22z" />
    <Path
      fill="#907558"
      d="M47.933 36h4.4v8.067h-4.4zM39.133 36h.733v22h-.733z"
    />
    <Path fill="#907558" d="M61.133 57.266V58h-22v-.733z" />
    <Path fill="#BF9D73" d="M39.867 14h-22v22h22z" />
    <Path
      fill="#907558"
      d="M31.067 14h-4.4v8.067h4.4zM39.867 14h-.733v22h.733z"
    />
    <Path fill="#907558" d="M17.867 35.267V36h22v-.733z" />
    <Path fill="#BF9D73" d="M39.867 36h-22v22h22z" />
    <Path
      fill="#907558"
      d="M31.067 36h-4.4v8.067h4.4zM39.867 36h-.733v22h.733z"
    />
    <Path fill="#907558" d="M17.867 57.267V58h22v-.733z" />
  </Svg>
);
export { SvgComponent as PackagesIllustration };
