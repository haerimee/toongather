import PropTypes from 'prop-types';
// @mui
import {
    Box,
    Stack,
    Button,
    Drawer,
    Divider,
    Checkbox,
    FormGroup,
    IconButton,
    Typography,
    FormControlLabel,
} from '@mui/material';
// components
import { useState } from 'react';
import Iconify from '../../../components/iconify';
import WebtoonFilterModal from './WebtoonFilterModal';
// import { ColorMultiPicker } from '../../../components/color-utils';
// import { display } from '@mui/system';

// ----------------------------------------------------------------------

export const FILTER_GENRE_OPTIONS = [
    {
        id: 'g_drama',
        title: '드라마',
    },
    {
        id: 'g_comedy',
        title: '개그',
    },
    {
        id: 'g_wuxia',
        title: '무협',
    },
    {
        id: 'g_thriller',
        title: '스릴러',
    },
    {
        id: 'g_sports',
        title: '스포츠',
    },
    {
        id: 'g_period',
        title: '시대물',
    },
    {
        id: 'g_action',
        title: '액션',
    },
    {
        id: 'g_life',
        title: '일상',
    },
    {
        id: 'g_fantasy',
        title: '판타치',
    },
    {
        id: 'g_healing',
        title: '치유',
    },
    {
        id: 'g_mystery',
        title: '미스터리',
    },
];
export const FILTER_PLATFORM_OPTIONS = [
    {
        id: 'naverWebtoon',
        title: '네이버웹툰',
    },
    {
        id: 'kakaoWebtoon',
        title: '카카오웹툰',
    },
    {
        id: 'lezhinComics',
        title: '레진코믹스',
    },
    {
        id: 'ridiBooks',
        title: '리디북스',
    },
];
export const FILTER_KEYWORD_OPTIONS = [
    {
        id: 'k_romance',
        title: '로맨스',
    },
    {
        id: 'k_romanceFantasy',
        title: '로맨스판타지',
    },
    {
        id: 'k_fantasySF',
        title: '판타지/SF',
    },
    {
        id: 'k_period',
        title: '시대/역사물',
    },
    {
        id: 'k_mysteryThriller',
        title: '미스터리/스릴러물',
    },
    {
        id: 'k_loveTriangle',
        title: '삼각로맨스',
    },
    {
        id: 'k_reincarnation',
        title: '환생/회귀',
    },
    {
        id: 'k_soul',
        title: '빙의/영혼체인지',
    },
    {
        id: 'k_timeSlip',
        title: '차원이동/타임슬립',
    },
    {
        id: 'k_revenge',
        title: '복수/배신',
    },
    {
        id: 'k_youngerMale',
        title: '연하남주',
    },
    {
        id: 'k_badMale',
        title: '나쁜남자',
    },
    {
        id: 'k_regretMale',
        title: '후회남주',
    },
    {
        id: 'k_obsessedMale',
        title: '집착남주',
    },
    {
        id: 'k_abliltyFemale',
        title: '능력여주',
    },
    {
        id: 'k_indefferentFemale',
        title: '무심여주',
    },
    {
        id: 'k_hardWittedFemale',
        title: '철벽여주',
    },
    {
        id: 'k_sweet',
        title: '달달함',
    },
    {
        id: 'k_serious',
        title: '진지함',
    },
    {
        id: 'k_healing',
        title: '감동/힐링',
    },
    {
        id: 'k_horror',
        title: '공포',
    },
    {
        id: 'k_originalNovel',
        title: '원작소설有',
    },
];

export const MODAL_OPTION = {
    title: '',
    width: '',
    items: [],
};

// ----------------------------------------------------------------------

WebtoonFilterSidebar.propTypes = {
    openFilter: PropTypes.bool,
    onOpenFilter: PropTypes.func,
    onCloseFilter: PropTypes.func,
    onSaveTags: PropTypes.func,
    tagList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function WebtoonFilterSidebar({
    openFilter,
    onOpenFilter,
    onCloseFilter,
    onSaveTags,
    tagList,
}) {
    const [openModal, setOpenModal] = useState(false);
    const [modalOption, setModalOption] = useState(MODAL_OPTION);

    const handleOpenModal = option => {
        let title = '';
        let items = [];
        const width = '';

        if (option === 'genre') {
            title = '장르 전체';
            items = FILTER_GENRE_OPTIONS;
        } else if (option === 'platform') {
            title = '플랫폼 전체';
            items = FILTER_PLATFORM_OPTIONS;
        } else if (option === 'keyword') {
            title = '키워드 전체';
            items = FILTER_KEYWORD_OPTIONS;
        }

        setModalOption({ title, width, items });
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleChkBoxClick = event => {
        const isChecked = event.target.checked;
        const obj = { id: event.target.id, title: event.target.name };
        let itemList = [];

        if (isChecked) {
            itemList = [...tagList, obj];
            onSaveTags(itemList);
        } else {
            itemList = tagList.filter(tag => tag.id !== obj.id);
            onSaveTags(itemList);
        }
    };

    const handleResetBtnClick = targetList => {
        if (targetList.length > 0) {
            const filteredArray = tagList.filter(
                tag => !targetList.find(target => target.id === tag.id),
            );
            onSaveTags(filteredArray);
        } else {
            onSaveTags(targetList);
        }
    };

    return (
        <>
            <Button
                disableRipple
                color="inherit"
                endIcon={<Iconify icon="ic:round-filter-list" />}
                onClick={onOpenFilter}
            >
                필터&nbsp;
            </Button>

            <Drawer
                anchor="right"
                open={openFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: { width: 280, border: 'none', overflow: 'hidden' },
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ px: 1, py: 2 }}
                >
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                        필터
                    </Typography>
                    <IconButton onClick={onCloseFilter}>
                        <Iconify icon="eva:close-fill" />
                    </IconButton>
                </Stack>
                <Divider />
                <Box sx={{ overflowY: 'scroll', overflowX: 'hidden' }}>
                    <Stack spacing={3} sx={{ p: 3 }}>
                        <div>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="관심 작품만 보기"
                                />
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="리뷰한 작품만 보기"
                                />
                            </FormGroup>
                        </div>
                    </Stack>
                    <Divider />
                    <Stack spacing={3} sx={{ p: 3 }}>
                        <div>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                장르
                                {FILTER_GENRE_OPTIONS.length >= 10 && (
                                    <button
                                        type="button"
                                        style={{
                                            display: 'flex',
                                            cursor: 'pointer',
                                            border: 'none',
                                            backgroundColor: 'transparent',
                                        }}
                                        onClick={() => handleOpenModal('genre')}
                                    >
                                        <Typography
                                            variant="caption"
                                            gutterBottom
                                        >
                                            더보기
                                        </Typography>
                                        <Iconify
                                            icon="ic:baseline-keyboard-arrow-right"
                                            sx={{ mt: -0.2 }}
                                        />
                                    </button>
                                )}
                            </Typography>
                            <FormGroup>
                                {FILTER_GENRE_OPTIONS.map(
                                    (item, index) =>
                                        index < 10 && (
                                            <FormControlLabel
                                                key={item.id}
                                                control={
                                                    <Checkbox
                                                        id={item.id}
                                                        name={item.title}
                                                        checked={tagList.some(
                                                            e =>
                                                                e.id ===
                                                                item.id,
                                                        )}
                                                    />
                                                }
                                                label={item.title}
                                                onChange={handleChkBoxClick}
                                            />
                                        ),
                                )}
                            </FormGroup>
                        </div>
                        <Divider />
                        <div>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                플랫폼
                                {FILTER_PLATFORM_OPTIONS.length >= 10 && (
                                    <button
                                        type="button"
                                        style={{
                                            display: 'flex',
                                            cursor: 'pointer',
                                            border: 'none',
                                            backgroundColor: 'transparent',
                                        }}
                                        onClick={() =>
                                            handleOpenModal('platform')
                                        }
                                    >
                                        <Typography
                                            variant="caption"
                                            gutterBottom
                                        >
                                            더보기
                                        </Typography>
                                        <Iconify
                                            icon="ic:baseline-keyboard-arrow-right"
                                            sx={{ mt: -0.2 }}
                                        />
                                    </button>
                                )}
                            </Typography>
                            <FormGroup>
                                {FILTER_PLATFORM_OPTIONS.map(
                                    (item, index) =>
                                        index < 10 && (
                                            <FormControlLabel
                                                key={item.id}
                                                control={
                                                    <Checkbox
                                                        id={item.id}
                                                        name={item.title}
                                                        checked={tagList.some(
                                                            e =>
                                                                e.id ===
                                                                item.id,
                                                        )}
                                                    />
                                                }
                                                label={item.title}
                                                onChange={handleChkBoxClick}
                                            />
                                        ),
                                )}
                            </FormGroup>
                        </div>
                        <Divider />
                        <div>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                키워드
                                {FILTER_KEYWORD_OPTIONS.length >= 10 && (
                                    <button
                                        type="button"
                                        style={{
                                            display: 'flex',
                                            cursor: 'pointer',
                                            border: 'none',
                                            backgroundColor: 'transparent',
                                        }}
                                        onClick={() =>
                                            handleOpenModal('keyword')
                                        }
                                    >
                                        <Typography
                                            variant="caption"
                                            gutterBottom
                                        >
                                            더보기
                                        </Typography>
                                        <Iconify
                                            icon="ic:baseline-keyboard-arrow-right"
                                            sx={{ mt: -0.2 }}
                                        />
                                    </button>
                                )}
                            </Typography>
                            <FormGroup>
                                {FILTER_KEYWORD_OPTIONS.map(
                                    (item, index) =>
                                        index < 10 && (
                                            <FormControlLabel
                                                key={item.id}
                                                control={
                                                    <Checkbox
                                                        id={item.id}
                                                        name={item.title}
                                                        checked={tagList.some(
                                                            e =>
                                                                e.id ===
                                                                item.id,
                                                        )}
                                                    />
                                                }
                                                label={item.title}
                                                onChange={handleChkBoxClick}
                                            />
                                        ),
                                )}
                            </FormGroup>
                        </div>
                    </Stack>
                </Box>

                <Box sx={{ p: 3 }}>
                    <Button
                        fullWidth
                        size="large"
                        type="submit"
                        color="inherit"
                        variant="outlined"
                        startIcon={<Iconify icon="ic:round-clear-all" />}
                        onClick={() => {
                            handleResetBtnClick([]);
                        }}
                    >
                        전체 초기화
                    </Button>
                </Box>
            </Drawer>

            <WebtoonFilterModal
                openModal={openModal}
                onCloseModal={handleCloseModal}
                modalOption={modalOption}
                onChkBoxClick={handleChkBoxClick}
                onResetBtnClick={handleResetBtnClick}
                tagList={tagList}
            />
        </>
    );
}
