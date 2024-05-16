export type Student = {
    id: string
    username: string
    role: string
    subscriptions: string
    email: string,
    password: string
    payment: string
    
    
  }
  export type Instructor = {
    id: string
    profile: string
    username: string
    registerDate: String
    role: string
    email: string
  }
  export type Courses = {
    id: string
    image: string
    title: string
    category: string
    description: string
    date: String
    type: string
    duration: string
    level: string
  }



  export type Subscriptions = {
    id: string
    title: string
    price: string
    duration: string
    type: string
    benefits: {
      id: number;
      benefit: string;
  }[];
   
  }
  export type Enrollments = {
    id: string
    username: string
    subscription: string
    purchaseDate: String
    payment: string
    email: string
    total: string
  }