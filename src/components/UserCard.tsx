import { useState } from 'react'
import type { User } from '../data/users'
import { IconInstagram, IconLinkedIn, IconGitHub } from './SocialIcons'

type UserCardProps = {
  user: User
}

export const UserCard = ({ user }: UserCardProps) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="bg-[#6a6a6a] border border-[#5a5a5a] rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:border-white"
      onClick={() => setOpen(!open)}
    >
      {/* Header — sempre visível */}
      <div className="flex items-center gap-5 px-5 py-4">
        <img
          src={user.photo}
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />
        <span className="text-white font-medium text-base flex-1">{user.name}</span>

        {/* Ícones de redes sociais — visíveis apenas quando fechado */}
        {!open && (
          <div className="flex items-center gap-2 mr-2">
            {user.instagram && <IconInstagram className="w-4 h-4 text-[#d0d0d0]" />}
            {user.linkedin && <IconLinkedIn className="w-4 h-4 text-[#d0d0d0]" />}
            {user.github && <IconGitHub className="w-4 h-4 text-[#d0d0d0]" />}
          </div>
        )}

        <svg
          className={`w-5 h-5 text-[#d0d0d0] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Detalhes — visível apenas quando aberto */}
      {open && (
        <div className="border-t border-[#5a5a5a] px-5 py-5 flex flex-col gap-3 text-base text-white">
          <div className="flex gap-2">
            <span className="text-[#d0d0d0] w-28 shrink-0">Email</span>
            <span>{user.email}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#d0d0d0] w-28 shrink-0">Phone</span>
            <span>{user.phone}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#d0d0d0] w-28 shrink-0">Role</span>
            <span>{user.role}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#d0d0d0] w-28 shrink-0">Location</span>
            <span>{user.location}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#d0d0d0] w-28 shrink-0">Birthdate</span>
            <span>{new Date(user.birthdate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      )}
    </div>
  )
}
