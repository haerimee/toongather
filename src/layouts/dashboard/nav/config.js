// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = name => (
    <SvgColor
        src={`/assets/icons/navbar/${name}.svg`}
        sx={{ width: 1, height: 1 }}
    />
);

const navConfig = [
    {
        // TODO: ICON 바꾸기, 웹툰 페이지 경로추가
        title: '웹툰',
        // path: '/dashboard/app',
        path: '/login',
        icon: icon('ic_analytics'),
    },
    {
        title: '고객센터',
        path: '/dashboard/user',
        icon: icon('ic_user'),
    },
    {
        title: '마이리뷰',
        path: '/dashboard/products',
        icon: icon('ic_cart'),
    },
    {
        title: '관리자',
        path: '/dashboard/blog',
        icon: icon('ic_blog'),
    },
    // {
    //   title: 'login',
    //   path: '/login',
    //   icon: icon('ic_lock'),
    // },
    // {
    //   title: 'Not found',
    //   path: '/404',
    //   icon: icon('ic_disabled'),
    // },
];

export default navConfig;
