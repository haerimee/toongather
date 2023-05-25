// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const WEBTOON_TITLE = [
    '집이 없어',
    '대학원 탈출일지',
    '마루는 강쥐',
    '작전명 순정',
    '똑 닮은 딸',
    '가짜 동맹',
    '순정빌런',
    '세기말 풋사과 보습학원',
    '어글리후드',
    '시월드가 내게 집착한다',
    '마른 가지에 바람처럼',
    '푸쉬오프',
    '살아남은 로맨스',
    '물위의 우리',
    '전지적 독자 시점',
    '신의 탑',
    '약한영웅',
    '꼬리잡기',
    '모죠의 일지',
    '일타강사 백사부',
    '삼국지톡',
    '재벌집 막내아들',
    '가비지타임',
    '격기3반',
];

// ----------------------------------------------------------------------

const webtoons = [...Array(24)].map((_, index) => {
    const setIndex = index + 1;

    return {
        id: faker.datatype.uuid(),
        cover: `/assets/images/webtoons/product_${setIndex}.jpg`,
        title: WEBTOON_TITLE[index],
        star: faker.datatype.number({ min: 1, max: 5 }),
        status: sample(['sale2', 'new', '', '']),
        // like: sample([]),
    };
});

export default webtoons;
