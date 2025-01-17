/* eslint-disable no-constant-binary-expression */
import { type ReactElement, type ReactNode } from 'react';
// @mui
import { Box, Typography, Link } from '@mui/material';
//
import Breadcrumbs, { type Props as BreadcrumbsProps } from './breadcrumbs';

// ----------------------------------------------------------------------

interface Props extends BreadcrumbsProps {
  action?: ReactNode;
  heading: string;
  moreLink?: string | string[];
}

export default function HeaderBreadcrumbs({
  links,
  action,
  heading,
  moreLink = '' || [],
  sx,
  ...other
}: Props):ReactElement  {
  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
          <Breadcrumbs links={links} {...other} />
        </Box>

        {action ? <Box sx={{ flexShrink: 0 }}>{action}</Box> : null}
      </Box>

      <Box sx={{ mt: 2 }}>
        {typeof moreLink === 'string' ? (
          <Link href={moreLink} target="_blank" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink.map((href) => (
            <Link
              noWrap
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
}