import Generic from '../pages/Generic'
import Home from '../components/Home'
// import About from '../components/About'
// import Contact from'..
export const navbar = [ 
    {
        id: 1,
        title: 'Home',
        path: '/home',
        element:<Home/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 2,
        title: 'About',
        path: '/about',
        element:<Generic/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 3,
        title: 'Service',
        path: '/service',
        element:<Generic/>,
        search: '?',
        hidden: false,
        private: true
    },    {
        id: 4,
        title: 'Skill',
        path: '/skill',
        element:<Generic/>,
        search: '?',
        hidden: false,
        private: true
    },    {
        id: 5,
        title: 'Testimonial',
        path: '/testimonial',
        element:<Generic/>,
        search: '?',
        hidden: false,
        private: true
    },    
    {
        id: 6,
        title: 'Team',
        path: '/team',
        element:<Generic/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 7,
        title: 'Contact',
        path: '/contact',
        element:<Generic/>,
        search: '?',
        hidden: false,
        private: true
    },
    {
        id: 8,
        title: 'Blog',
        path: '/blog',
        element:<Generic/>,
        search: '?',
        hidden: false,
        private: true
    },
]