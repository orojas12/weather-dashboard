import React from "react";
import IconProps from "./IconProps";

export default function HomeIcon({ color, style, className }: IconProps) {
  const fill = color || "black";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g clipPath="url(#clip0_127_478)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.469 2.16334C13.0553 0.926668 10.9447 0.926666 9.53099 2.16334L2.87259 7.98785C1.84148 8.88983 1.25 10.1931 1.25 11.563L1.25 20C1.25 22.0711 2.92893 23.75 5 23.75L19 23.75C21.0711 23.75 22.75 22.0711 22.75 20L22.75 11.563C22.75 10.1931 22.1585 8.88983 21.1274 7.98786L14.469 2.16334ZM8.16166 14.8248C7.98381 14.4507 7.53638 14.2916 7.16229 14.4694C6.7882 14.6473 6.62911 15.0947 6.80696 15.4688C7.27394 16.4511 8.00995 17.2808 8.92954 17.8616C9.84913 18.4424 10.9146 18.7504 12.0022 18.75C13.0899 18.7496 14.1551 18.4407 15.0742 17.8592C15.9933 17.2777 16.7287 16.4474 17.1949 15.4648C17.3725 15.0905 17.213 14.6432 16.8388 14.4657C16.4646 14.2881 16.0173 14.4475 15.8397 14.8218C15.4951 15.5481 14.9516 16.1618 14.2722 16.5916C13.5929 17.0214 12.8055 17.2497 12.0016 17.25C11.1977 17.2503 10.4102 17.0226 9.73052 16.5933C9.05083 16.1641 8.50682 15.5508 8.16166 14.8248Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_127_478">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 24) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
