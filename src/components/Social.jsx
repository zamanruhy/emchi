import InIcon from '../icons/in.svg?component'
import TmIcon from '../icons/tm.svg?component'
import WaIcon from '../icons/wa.svg?component'

export default function Social(props) {
  return (
    <ul
      className="social flex gap-5"
      classList={{ [props.className]: Boolean(props.className) }}
    >
      <li>
        <a
          href="#"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary-500 transition hover:scale-105 focus:outline-none focus-visible:scale-105"
          aria-label="Instagram"
        >
          <InIcon className="h-3.5 fill-current" aria-hidden />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary-500 transition hover:scale-105 focus:outline-none focus-visible:scale-105"
          aria-label="Telegram"
        >
          <TmIcon
            className="relative right-px top-px h-3 fill-current"
            aria-hidden
          />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-primary-500 transition hover:scale-105 focus:outline-none focus-visible:scale-105"
          aria-label="Whatsapp"
        >
          <WaIcon className="relative left-px h-3.5 fill-current" aria-hidden />
        </a>
      </li>
    </ul>
  )
}
