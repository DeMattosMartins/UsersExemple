export type User = {
  id: number
  name: string
  photo: string
  email: string
  phone: string
  role: string
  location: string
  birthdate: string
  instagram?: string
  linkedin?: string
  github?: string
}

export const users: User[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    photo: 'https://i.pravatar.cc/150?img=1',
    email: 'alice.johnson@email.com',
    phone: '+1 (555) 123-4567',
    role: 'Frontend Developer',
    location: 'New York, USA',
    birthdate: '1995-03-12',
    instagram: 'alicejohnson',
    github: 'alicejohnson',
  },
  {
    id: 2,
    name: 'Bob Smith',
    photo: 'https://i.pravatar.cc/150?img=3',
    email: 'bob.smith@email.com',
    phone: '+1 (555) 234-5678',
    role: 'Backend Developer',
    location: 'San Francisco, USA',
    birthdate: '1990-07-24',
    linkedin: 'bobsmith',
    github: 'bobsmith',
  },
  {
    id: 3,
    name: 'Carol White',
    photo: 'https://i.pravatar.cc/150?img=5',
    email: 'carol.white@email.com',
    phone: '+44 20 7946 0958',
    role: 'UX Designer',
    location: 'London, UK',
    birthdate: '1993-11-05',
    instagram: 'carolwhite',
    linkedin: 'carolwhite',
  },
  {
    id: 4,
    name: 'David Lee',
    photo: 'https://i.pravatar.cc/150?img=7',
    email: 'david.lee@email.com',
    phone: '+81 3-1234-5678',
    role: 'DevOps Engineer',
    location: 'Tokyo, Japan',
    birthdate: '1988-01-30',
    instagram: 'davidlee',
    linkedin: 'davidlee',
    github: 'davidlee',
  },
  {
    id: 5,
    name: 'Eva Martinez',
    photo: 'https://i.pravatar.cc/150?img=9',
    email: 'eva.martinez@email.com',
    phone: '+34 91 123 4567',
    role: 'Product Manager',
    location: 'Madrid, Spain',
    birthdate: '1997-06-18',
    linkedin: 'evamartinez',
  },
]
