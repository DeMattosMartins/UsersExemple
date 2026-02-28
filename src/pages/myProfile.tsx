import { useRef, useState } from 'react'
import { useProfile } from '../hooks/useProfile'
import { IconInstagram, IconLinkedIn, IconGitHub } from '../components/SocialIcons'

const inputClass =
  'w-full bg-[#6a6a6a] text-white placeholder-[#b0b0b0] border border-[#5a5a5a] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-white transition-colors'

const labelClass = 'block text-[#d0d0d0] text-xs font-medium mb-1'

export const MyProfile = () => {
  const { profile, updateField, handlePhotoChange, save, saved } = useProfile()
  const fileRef = useRef<HTMLInputElement>(null)
  const [socialOpen, setSocialOpen] = useState(false)

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-xl mx-auto flex flex-col gap-6">

        {/* Foto */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-24 h-24 rounded-full bg-[#6a6a6a] border-2 border-[#5a5a5a] flex items-center justify-center overflow-hidden cursor-pointer hover:border-white transition-colors"
            onClick={() => fileRef.current?.click()}
          >
            {profile.photo ? (
              <img src={profile.photo} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-10 h-10 text-[#b0b0b0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </div>
          <button
            onClick={() => fileRef.current?.click()}
            className="text-xs text-[#d0d0d0] hover:text-white transition-colors border border-[#5a5a5a] hover:border-white rounded-full px-4 py-1"
          >
            Upload photo
          </button>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
        </div>

        {/* Campos */}
        <div className="flex flex-col gap-4">
          <div>
            <label className={labelClass}>Name</label>
            <input className={inputClass} placeholder="Your full name" value={profile.name} onChange={(e) => updateField('name', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input className={inputClass} type="email" placeholder="your@email.com" value={profile.email} onChange={(e) => updateField('email', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input className={inputClass} placeholder="+1 (555) 000-0000" value={profile.phone} onChange={(e) => updateField('phone', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Role</label>
            <input className={inputClass} placeholder="e.g. Frontend Developer" value={profile.role} onChange={(e) => updateField('role', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Location</label>
            <input className={inputClass} placeholder="e.g. New York, USA" value={profile.location} onChange={(e) => updateField('location', e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Birthdate</label>
            <input className={inputClass} type="date" value={profile.birthdate} onChange={(e) => updateField('birthdate', e.target.value)} />
          </div>

          {/* Redes sociais — colapsável */}
          <div className="border-t border-[#5a5a5a] pt-4">
            <button
              onClick={() => setSocialOpen(!socialOpen)}
              className="w-full flex items-center justify-between text-[#d0d0d0] hover:text-white transition-colors"
            >
              <span className="text-xs font-medium uppercase tracking-wider">Social Networks</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${socialOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {socialOpen && (
              <div className="flex flex-col gap-4 mt-4">
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <IconInstagram className="w-4 h-4" /> Instagram
                    </span>
                  </label>
                  <input className={inputClass} placeholder="@username" value={profile.instagram} onChange={(e) => updateField('instagram', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <IconLinkedIn className="w-4 h-4" /> LinkedIn
                    </span>
                  </label>
                  <input className={inputClass} placeholder="linkedin.com/in/username" value={profile.linkedin} onChange={(e) => updateField('linkedin', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <IconGitHub className="w-4 h-4" /> GitHub
                    </span>
                  </label>
                  <input className={inputClass} placeholder="github.com/username" value={profile.github} onChange={(e) => updateField('github', e.target.value)} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Botão salvar */}
        <button
          onClick={save}
          className="w-full py-2.5 rounded-lg bg-[#6a6a6a] border border-[#5a5a5a] text-white font-medium text-sm hover:border-white transition-colors"
        >
          {saved ? 'Saved!' : 'Save profile'}
        </button>

      </div>
    </div>
  )
}
