import Home from 'src/pages/Home'
import Contact from 'src/pages/Contact'
import Member from 'src/pages/Member'

export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/crew',
    name: 'Crew',
    component: Member,
  }
]