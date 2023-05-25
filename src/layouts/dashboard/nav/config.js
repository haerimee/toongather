// component

// ----------------------------------------------------------------------

// SvgColor: 글자색(메뉴 글자색-회색)에 맞게 아이콘 색깔 변경
// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const icon = name => (
    <img
        alt=""
        src={`/assets/icons/navbar/${name}.svg`}
        sx={{ width: 1, height: 1 }}
    />
);

const navConfig = [
    {
        // TODO: 웹툰 페이지 경로추가
        title: '웹툰',
        path: '/dashboard/webtoons',
        icon: icon('ic_webtoon'),
    },
    {
        title: '마이리뷰',
        path: '/dashboard/products',
        icon: icon('ic_my_review'),
    },
    {
        title: '고객센터',
        path: '/dashboard/user',
        icon: icon('ic_cs_center'),
    },
    {
        title: '관리자',
        path: '/dashboard/blog',
        icon: icon('ic_admin'),
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
