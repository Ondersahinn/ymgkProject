import LandingPage from './component/layout/'
import Istasyon from './Views/istasyon'
import Hava from './Views/havaKalite'

import { Progress } from 'antd';

export const accountRoutes = [
    {
        path: '/',
        name: 'Home',
        icon: Progress,
        component: LandingPage,
        layout: '/home',
    },
    {
        path: '/istastonBilgileri',
        name: 'istasyon',
        icon: Progress,
        component: Istasyon,
        layout: '/home',
    },
    {
        path: '/havaKalite',
        name: 'hava',
        icon: Progress,
        component: Hava,
        layout: '/home',
    },
]


