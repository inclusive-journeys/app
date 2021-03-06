import {bookmark, comments, home, userCog} from 'config/icons'

export const userDashboardMenu = [
    {
        url: '/dashboard',
        icon: home,
        title: 'Dashboard'
    },
    {
        url: '/dashboard/profile',
        icon: userCog,
        title: 'Profile'
    },
    {
        url: '/dashboard/reviews',
        icon: comments,
        title: 'My Reviews'
    },
    {
        url: '/dashboard/places',
        icon: bookmark,
        title: 'My Places'
    }
]
