/* eslint-disable react/prop-types */
// @mui
import { Grid, Card, CardHeader, CardContent } from '@mui/material';

import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

import HomeCardItem from './HomeCardItem';

// ----------------------------------------------------------------------
// eslint-disable-next-line react/prop-types
export default function HomeCardList({ title, subheader, reviews }) {
    const CaroButton = styled.button`
        all: unset;
        border: 1px solid #6d9dff;
        padding: 0.5em 1em;
        background-color: #6d9dff;
        color: #fff;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        z-index: 1;
        &:hover {
            transition: all 0.3s ease-in-out;
            background-color: #2065d1;
            cursor: pointer;
        }
    `;

    const TOTAL_SLIDES = 5;

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);

    // const handleMouseEnter = () => {
    //     if (currentSlide === 0 || currentSlide === TOTAL_SLIDES) {
    //         slideRef.current.style.transition = 'none';
    //         slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    //     }
    // };

    // const handleMouseLeave = () => {
    //     slideRef.current.style.transition = 'all 0.5s ease-in-out';
    //     slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    // };

    return (
        <Card>
            {/* <CaroButton onClick={prevSlide}>◀</CaroButton> */}
            {/* <CaroButton onClick={nextSlide}>▶</CaroButton> */}
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <CaroButton
                    onClick={prevSlide}
                    style={{
                        left: 0,
                    }}
                >
                    ◀
                </CaroButton>
                <Grid container wrap="nowrap" spacing={3} ref={slideRef}>
                    {reviews.map(review => (
                        <Grid
                            key={review.id}
                            item
                            xs={2.1}
                            style={{ minWidth: '25%' }}
                        >
                            <HomeCardItem review={review} />
                        </Grid>
                    ))}
                </Grid>
                <CaroButton
                    onClick={nextSlide}
                    style={{
                        right: 0,
                    }}
                >
                    ▶
                </CaroButton>
            </CardContent>
        </Card>
    );
}
