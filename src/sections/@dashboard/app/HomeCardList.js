// @mui
import { Grid } from '@mui/material';
import { Box, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';
//
import HomeCardItem from './HomeCardItem';

// ----------------------------------------------------------------------
// 필요한 것 .. cardItem (썸네일, 제목, 별점 보여줄..) -> 컴포넌트로 따로 빼야하나?? ... 최적화 할 때 생각?
// 캐러셀 구현
// {...other} 은 몰까 ..?
export default function HomeCardList({ title, subheader, reviews, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Grid container spacing={3} {...other}>
          {reviews.map((review) => (
            <Grid key={reviews.id} item xs={12} sm={6} md={3}>
              <HomeCardItem review={review} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
