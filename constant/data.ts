import { Payment } from "."


export const navLink = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        icon: 'HomeIcon'
    },
    {
        name: 'Enrollments',
        href: '/enrollmentTable',
        icon: 'ShoppingCartIcon'
    },
    {
        name: 'Courses',
        href: '/courseTable',
        icon: 'PackageIcon'
    },
    {
        name: 'Subscriptions',
        href: '/subscriptionTable',
        icon: 'RepeatIcon'
    },
    {
        name: 'Users',
        href: '/userTable',
        icon: 'UsersIcon'
    },
    {
        name: 'Teachers',
        href: '/teacherTable',
        icon: 'TeacherIcon'
    }
]
export const data: Payment[] = [

    {
      id: "3u1reuv4",
      username: "Philip Bright",
      email: "Abe45@gmail.com",
      enrollmentId: "3fdsdwe",
      registerDate: "2019-01-30",
      role: "Teacher",
      subscription: "Free",
    },
    {
      id: "derv1ws0",
      username: "Emerald",
      email: "Emerald@gmail.com",
      enrollmentId: "56grdgf",
      registerDate: "2020-12-01",
      role: "Student",
      subscription: "Premium",
    },
    {
      id: "bhqecj4p",
      username: "Bright Bright",
      email: "Bright@gmail.com",
      enrollmentId: "98fefdr",
      registerDate: "2023-08-31",
      role: "Teacher",
      subscription: "Premium",
    },
  ]