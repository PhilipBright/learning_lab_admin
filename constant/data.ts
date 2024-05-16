import { Student, Instructor, Courses, Subscriptions, Enrollments } from "."


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
    image: "/admin/public/images/course2.jpeg",
    title: "Introduction to Programming",
    description: "This course is designed to introduce students to the basics of programming",
    category: "Programming",
    date: "2019-01-30",
    type: "Premium",
    duration: "40",
    level: "Intermediate",

  }
]

export const subscriptionData: Subscriptions[] = [
  {
    id: "3u1reuv4",
    type: "Free",
    title: "Free",
    price: "0",
    duration: "30",
    benefits:[
      {
      id:1,
      benefit: "Access to free courses"
      },
     
      {
        id:2,
        benefit: "Exportable certificate",
      
      },
      {
        id:3,
        benefit: "Access to high quality videos",
      },
      {
        id:4,
        benefit: "24/7 customer support"
      },
      {
        id:5,
        benefit: "Responsive Design for Mobiles"
      },
      {
        id:6,
        benefit: "Only One Device Access"
      },
    
    ]
  },
  {
    id: "3u1reuv4",
    type: "Premium",
    title: "Premium",
    price: "199",
    duration: "30",
    benefits:[
      {
      id:1,
      benefit: "Access to unlimited courses"
      },
      {
        id:2,
        benefit: "Appointment to instructors",
      
      },
      {
        id:3,
        benefit: "Video call with instructors",
      
      },
      {
        id:4,
        benefit: "Chat with instructors",
      
      },
      {
        id:5,
        benefit: "Exportable certificate",
      
      },
      {
        id:6,
        benefit: "Access to high quality videos",
      },
      {
        id:7,
        benefit: "24/7 customer support"
      },
      {
        id:8,
        benefit: "Responsive Design for Mobiles"
      },
      {
        id:9,
        benefit: "Only One Device Access"
      },

      {
        id:10,
        benefit: "Exclusive Discounts and Offers",
      
      },
     
    
    ]
  },
  {
    id: "3u1reuv5",
    type: "Business",
    title: "Business",
    price: "599",
    duration: "30",
    benefits:[
      {
      id:1,
      benefit: "Access to unlimited courses"
      },
      {
        id:2,
        benefit: "Appointment to instructors",
      
      },
      {
        id:3,
        benefit: "Video call with instructors",
      
      },
      {
        id:4,
        benefit: "Chat with instructors",
      
      },
      {
        id:5,
        benefit: "Exportable certificate",
      
      },
      {
        id:6,
        benefit: "Access to high quality videos",
      },
      {
        id:7,
        benefit: "24/7 customer support"
      },
      {
        id:8,
        benefit: "Responsive Design for Mobiles"
      },
      {
        id:9,
        benefit: "15 Devices Access"
      },
     
      {
        id:10,
        benefit: "Exclusive Discounts and Offers",
      
      },
     
    ]
  }
]
export const enrollmentData: Enrollments[] = [
    {
        id: "3u1reuv4",
        username: "Philip Bright",
        email: "philipbright@gmail.com",
        payment: "Paypal",
        purchaseDate: "2019-01-30",
        total: "199",
        subscription: "Premium",

    },
  ]