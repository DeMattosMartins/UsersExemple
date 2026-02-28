import { IconLinkedIn, IconGitHub } from './SocialIcons'

export const Footer = () => {
  return (
    <footer className="w-full bg-[#808080] border-t border-white/10 mt-auto">
      <div className="w-full px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Mateus de Mattos Martins
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:demattosmartins@gmail.com"
            className="text-white/60 hover:text-white text-sm md:text-base transition-colors">
            demattosmartins@gmail.com
          </a>

          <div className="w-px h-4 bg-white/20" />

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mateus-de-mattos-martins-57b7a6282/"
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity">
              <IconLinkedIn className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>
            <a
              href="https://github.com/DeMattosMartins"
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity">
              <IconGitHub className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
