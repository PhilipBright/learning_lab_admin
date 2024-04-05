import { Student, Instructor, Courses } from "."


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
export const userData: Student[] = [

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
export const instructorData: Instructor[] = [
    {
        id: "bhqecj4p",
        profile: "https://randomuser.me/api/portraits.jpg",
        username: "Bright Bright",
        email: "Bright@gmail.com",
        registerDate: "2023-08-31",
        role: "Teacher",

      },
      {
        id: "bhqecj4p",
        profile: "https://randomuser.me/api/portraits.jpg",
        username: "Bright Bright",
        email: "Bright@gmail.com",
        registerDate: "2023-08-31",
        role: "Teacher",
      },
]

export const courseData: Courses[] = [
  {
    id: "3u1reuv4",
    title: "Introduction to Programming",
    description: "This course is designed to introduce students to the basics of programming",
    category: "Programming",
    date: "2019-01-30",
    type: "Premium",
    duration: "40",
    level: "Intermediate",

  }
]