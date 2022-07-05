import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function CircleRuIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        d="M11.9625 0.75C7.0875 0.75 2.925 3.9 1.3875 8.25H22.6125C21.0375 3.9 16.875 0.75 11.9625 0.75Z"
        fill="#F9F9F9"
      />
      <path
        d="M11.9625 23.25C16.875 23.25 21.0375 20.1 22.575 15.75H1.3875C2.925 20.1375 7.0875 23.25 11.9625 23.25Z"
        fill="#ED4C5C"
      />
      <path
        d="M1.3875 8.25C0.975 9.4125 0.75 10.6875 0.75 12C0.75 13.3125 0.975 14.5875 1.3875 15.75H22.6125C23.025 14.5875 23.25 13.3125 23.25 12C23.25 10.6875 23.025 9.4125 22.6125 8.25H1.3875Z"
        fill="#428BC1"
      />
    </SvgIcon>
  );
}
