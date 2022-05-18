import { HeaderOnly } from '~/components/Layout';
import Home from '~/components/pages/Home';
import Following from '~/components/pages/Following';
import Upload from '~/components/pages/Upload';
import Search from '~/components/pages/Search';
import Profile from '~/components/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
