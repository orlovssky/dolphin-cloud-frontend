import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function AntyIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        d="M0 12C0 0 0 0 12 0C24 0 24 0 24 12C24 24 24 24 12 24C0 24 0 24 0 12Z"
        fill="url(#paint0_linear_892_3563)"
      />
      <path
        d="M16.9313 11.4928V12.5147C16.9313 14.3613 16.4091 15.7994 15.3648 16.8285C14.3278 17.8504 12.8218 18.3578 10.8463 18.3578H7.50867C8.38635 17.9793 8.82531 17.1619 8.82531 15.9055V13.9982C8.82531 13.4759 8.93883 13.1049 9.16611 12.8707C9.40083 12.6434 9.67323 12.5071 9.99843 12.4543V11.5463C9.67323 11.4931 9.40083 11.3572 9.16611 11.1299C8.93883 10.8952 8.82531 10.5247 8.82531 10.0024V8.09466C8.82531 6.8385 8.38635 6.02106 7.50867 5.64258H10.8461C12.8443 5.64258 14.358 6.1497 15.3871 7.16394C16.417 8.17002 16.9313 9.61578 16.9313 11.4928Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_892_3563"
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0056" stopColor="#B645EE" />
          <stop offset="1" stopColor="#9B26B6" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
