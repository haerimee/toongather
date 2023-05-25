import { Helmet } from 'react-helmet-async';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';

// components
// sections

//
import './carouselTest.css';

import HomeCardList from '../sections/@dashboard/app/HomeCardList';

// mock
import REVIEWS from '../_mock/webtoons';

// ----------------------------------------------------------------------
export default function DashboardAppPage() {
    // const theme = useTheme();

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
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <HomeCardList
                            title="최근 리뷰"
                            subheader="최근에 남긴 리뷰 입니다.?"
                            reviews={REVIEWS}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <HomeCardList
                            title="뭐할까"
                            subheader="뭐할까"
                            reviews={REVIEWS}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <HomeCardList
                            title="뭐할까"
                            subheader="뭐할까"
                            reviews={REVIEWS}
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
