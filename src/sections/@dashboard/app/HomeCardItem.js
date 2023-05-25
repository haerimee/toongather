/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
// import Favorite from '@mui/icons-material/Favorite';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
//
// utils
// components

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
    top: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
});

// ----------------------------------------------------------------------
export default function HomeCardItem({ review }) {
    const { cover, title, star } = review;

    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <StyledProductImg alt={title} src={cover} />
            </Box>

            <Stack spacing={2} sx={{ p: 3 }}>
                <Link color="inherit" underline="hover">
                    <Typography variant="subtitle2" noWrap>
                        {title}
                    </Typography>
                </Link>

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Rating name="read-only" value={star} readOnly />
                    {/* <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: '#ed544a' }} />}
                    /> */}
                </Stack>
            </Stack>
        </Card>
    );
}
