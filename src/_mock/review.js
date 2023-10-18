import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const REVIEW_TITLE = [
    'Nike Air Force 1 NDESTRUKT',
    'Nike Space Hippie 04',
    'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
    'Nike Blazer Low 77 Vintage',
    'Nike ZoomX SuperRep Surge',
    'Zoom Freak 2',
    'Nike Air Max Zephyr',
    'Jordan Delta',
];

// ----------------------------------------------------------------------

const reviews = [...Array(8)].map((_, index) => {
    const setIndex = index + 1;

    return {
        id: faker.datatype.uuid(),
        cover: `/assets/images/products/product_${setIndex}.jpg`,
        title: REVIEW_TITLE[index],
        star: faker.datatype.number({ min: 1, max: 5 }),
    };
});

export default reviews;
