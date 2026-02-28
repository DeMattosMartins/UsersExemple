import { useState } from 'react'

export type Profile = {
  name: string
  email: string
  phone: string
  role: string
  location: string
  birthdate: string
  photo: string
  instagram: string
  linkedin: string
  github: string
}

const emptyProfile: Profile = {
  name: '',
  email: '',
  phone: '',
  role: '',
  location: '',
  birthdate: '',
  photo: '',
  instagram: '',
  linkedin: '',
  github: '',
}

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile>(emptyProfile)
  const [saved, setSaved] = useState(false)

  const updateField = (field: keyof Profile, value: string) => {
    setSaved(false)
    setProfile((prev) => ({ ...prev, [field]: value }))
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setProfile((prev) => ({ ...prev, photo: reader.result as string }))
    reader.readAsDataURL(file)
  }

  const save = () => setSaved(true)

  return { profile, updateField, handlePhotoChange, save, saved }
}
