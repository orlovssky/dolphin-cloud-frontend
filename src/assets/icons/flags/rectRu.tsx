import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export default function RectRuIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M0 9.375H24V14.625H0V9.375Z" fill="#1B75BB" />
      <path
        d="M20.25 3.75H3.75C1.26488 3.75 0 5.59688 0 7.875V9.375H24V7.875C24 5.59688 22.7351 3.75 20.25 3.75Z"
        fill="#E6E7E8"
      />
      <path
        d="M0 16.125C0 18.4031 1.26488 20.25 3.75 20.25H20.25C22.7351 20.25 24 18.4031 24 16.125V14.625H0V16.125Z"
        fill="#EC1C24"
      />
    </SvgIcon>
  );
}
