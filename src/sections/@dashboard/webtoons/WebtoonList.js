import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
//import ShopProductCard from '../products/ProductCard';
import WebtoonSearchCard from '../webtoons/WebtoonCard';

// ----------------------------------------------------------------------

WebtoonList.propTypes = {
  webtoons: PropTypes.array.isRequired,
};

export default function WebtoonList({ webtoons, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {webtoons.map((webtoon) => (
        <Grid key={webtoon.id} item xs={12} sm={6} md={3}>
          <WebtoonSearchCard webtoon={webtoon} />
        </Grid>
      ))}
    </Grid>
  );
}
