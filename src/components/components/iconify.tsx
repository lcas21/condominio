/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// icons
import { Icon, type IconifyIcon } from '@iconify/react';
// @mui
import { Box, type BoxProps, type SxProps } from '@mui/material';
import { type ReactElement } from 'react';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  sx?: SxProps;
  icon: IconifyIcon| string;
}

export default function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}