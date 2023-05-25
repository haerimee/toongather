import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import {
    Container,
    Stack,
    Typography,
    OutlinedInput,
    Chip,
    Paper,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

// components
import {
    WebtoonSort,
    WebtoonList,
    WebtoonFilterSidebar,
} from '../sections/@dashboard/webtoons';

// mock
import WEBTOONS from '../_mock/webtoons';

// ----------------------------------------------------------------------

// eslint-disable-next-line no-unused-vars
const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': {
        width: 320,
        boxShadow: theme.customShadows.z8,
    },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
}));

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

// ----------------------------------------------------------------------

export default function WebtoonsPage() {
    const [openFilter, setOpenFilter] = useState(false);
    const [tags, setTags] = useState([]);

    const handleOpenFilter = () => {
        setOpenFilter(true);
    };

    const handleCloseFilter = () => {
        setOpenFilter(false);
    };

    const handleSaveTags = data => {
        setTags(data);
    };

    const handleTagDelete = chipToDelete => () => {
        setTags(chips => chips.filter(chip => chip.id !== chipToDelete.id));
    };

    // ----------------------------------------------------------------------

    return (
        <>
            <Helmet>
                <title> Dashboard: Products | Minimal UI </title>
            </Helmet>

            <Container>
                {/* <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography> */}

                <Stack
                    direction="row"
                    flexWrap="wrap-reverse"
                    alignItems="center"
                    justifyContent="flex-end"
                    sx={{ mb: 5 }}
                >
                    {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}> */}
                    {/* <StyledSearch
            //value={filterName}
            //onChange={onFilterName}
            placeholder="웹툰 검색"
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
              </InputAdornment>
            }
          /> */}
                    <Stack
                        direction="row"
                        spacing={1}
                        flexShrink={0}
                        sx={{ my: 1 }}
                    >
                        <WebtoonFilterSidebar
                            openFilter={openFilter}
                            onOpenFilter={handleOpenFilter}
                            onCloseFilter={handleCloseFilter}
                            onSaveTags={handleSaveTags}
                            tagList={tags}
                        />
                        <WebtoonSort />
                    </Stack>
                </Stack>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    mt={-6}
                    pb={2.5}
                    pl={0.5}
                >
                    총 2,222개의 작품이 검색되었습니다.
                </Typography>
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        p: 0.5,
                        m: 0,
                        background: 'none',
                    }}
                    component="ul"
                >
                    {tags.map(data => (
                        <ListItem key={data.id}>
                            <Chip
                                label={data.title}
                                onDelete={handleTagDelete(data)}
                            />
                        </ListItem>
                    ))}
                </Paper>
                <WebtoonList webtoons={WEBTOONS} />
                {/* <ProductCartWidget /> */}
            </Container>
        </>
    );
}
