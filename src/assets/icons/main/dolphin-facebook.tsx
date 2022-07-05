import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function DolphinFacebookIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        d="M0 12C0 0 0 0 12 0C24 0 24 0 24 12C24 24 24 24 12 24C0 24 0 24 0 12Z"
        fill="url(#paint0_linear_892_3560)"
      />
      <path
        d="M16.9314 11.4928V12.5147C16.9314 14.3613 16.4092 15.7994 15.3649 16.8285C14.3279 17.8504 12.8219 18.3578 10.8465 18.3578H7.50879C8.38647 17.9793 8.82543 17.1619 8.82543 15.9055V13.9982C8.82543 13.4759 8.93895 13.1049 9.16623 12.8707C9.40095 12.6434 9.67335 12.5071 9.99855 12.4543V11.5463C9.67335 11.4931 9.40095 11.3572 9.16623 11.1299C8.93895 10.8952 8.82543 10.5247 8.82543 10.0024V8.09466C8.82543 6.8385 8.38647 6.02106 7.50879 5.64258H10.8462C12.8445 5.64258 14.3581 6.1497 15.3873 7.16394C16.4171 8.17002 16.9314 9.61578 16.9314 11.4928Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_892_3560"
          x1="12"
          y1="24.1959"
          x2="12"
          y2="0.0847452"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0062E0" />
          <stop offset="1" stopColor="#19AFFF" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
