import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

export const Time = (props: SvgIconProps) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-.808.083-1.596.234-2.359h2.076c-.188.759-.31 1.543-.31 2.359 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10c-2.234 0-4.292.744-5.957 1.989l2.049 2.049-7.012 1.354 1.354-7.013 2.183 2.183c2.036-1.598 4.594-2.562 7.383-2.562 6.627 0 12 5.373 12 12zm-13-6v8h7v-2h-5v-6h-2z" />
    </SvgIcon>
  );
};
