import { getIconData } from '@/lib/utils'

export default [
    {
        iconText: getIconData('day'),
        tabText: '当天',
        path: '/'
    },
    {
        iconText: getIconData('month'),
        tabText: '近期',
        path: '/month'
    },
    {
        iconText: getIconData('year'),
        tabText: '近年',
        path: '/year'
    },
]