import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// utils
//import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/label';
//import { ColorPreview } from '../../../components/color-utils';
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

SearchWebtoonCard.propTypes = {
  webtoon: PropTypes.object,
};

export default function SearchWebtoonCard({ webtoon }) {
  const { title, cover, price, colors, status, priceSale } = webtoon;

  return (
    <Card style={{ cursor: 'pointer' }}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <StyledProductImg alt={title} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          <Rating name="read-only" value={2} readOnly />
          {/* <Iconify icon="mdi:heart" color="#ed544a" sx={{ '&:hover': { opacity: 0.48 } }} /> */}
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "#ed544a" }} />} />

          {/* <Iconify icon="mdi:heart" color="#c0c0c0" /> */}

          {/* <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {priceSale && fCurrency(priceSale)}
            </Typography>
            &nbsp;
            {fCurrency(price)}
          </Typography> */}
        </Stack>
      </Stack>
    </Card>
  );
}
