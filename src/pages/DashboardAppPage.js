import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
//
import "./carouselTest.css";
import { useEffect, useRef, useState } from "react";
import HomeCardList from '../sections/@dashboard/app/HomeCardList';

// mock
import REVIEWS from '../_mock/review';

// ----------------------------------------------------------------------
export default function DashboardAppPage() {
  const theme = useTheme();

  // const container_Carousel = useRef();
  // const [nowX, setNowX] = useState(0);
  // const [nowIndex, setNowIndex] = useState(0);
  // const copySlideCnt = 2;
  // const items = ["/assets/illustrations/illustration_login.png", "/assets/illustrations/illustration_avatar.png", "/assets/illustrations/illustration_404.png", "/assets/illustrations/illustration_login.png"]

  // function setSlides() {
  //   let copyFront = [];
  //   let copyLast = [];
  //   var index = 0;

  //   while (index < copySlideCnt) {
  //     copyLast.push(items[index % items.length]);
  //     copyFront.unshift(items[items.length - 1 - (index % items.length)]);
  //     index++;
  //   }

  //   return [...copyFront, ...items, ...copyLast];
  // }

  // useEffect(() => {
  //   container_Carousel.current.style.transform = `translateX(${nowX}vw)`;
  // }, [nowX]);
  // // useState 말고 useEffect를 이용해야할듯.
  // const clickLeftButton = () => {
  //   // setNowX(nowX + 20);
  //   setNowX((prop) => prop + 20);
  //   console.log(`it's work ${nowX}`);
  // };
  // const clickRightButton = () => {
  //   setNowX(nowX - 20);
  //   console.log(`it's work ${nowX}`);
  // };

  return (
    <>
      <Helmet>
        <title> Toongather </title>
      </Helmet>

      <Container maxWidth="xl">
        {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography> */}

        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <HomeCardList
              title="최근 리뷰"
              subheader="최근 10개 리뷰"
              reviews={REVIEWS}
            // list={[
            //   {
            //     id: '1',
            //     name: 'FaceBook',
            //     value: 323234,
            //     icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
            //   },
            //   {
            //     id: '2',
            //     name: 'Google',
            //     value: 341212,
            //     icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
            //   },
            //   {
            //     id: '3',
            //     name: 'Linkedin',
            //     value: 411213,
            //     icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
            //   },
            //   {
            //     id: '4',
            //     name: 'Twitter',
            //     value: 443232,
            //     icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
            //   },
            // ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
