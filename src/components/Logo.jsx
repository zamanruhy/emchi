import logoImg from '../images/logo.jpg?jpg&metadata'
import Image from './Image'

export default function Logo(props) {
  return (
    <a
      href="."
      className="logo flex items-center"
      classList={{ [props.className]: Boolean(props.className) }}
    >
      <Image
        class="mr-4 w-16 shrink-0 rounded-full md:w-20"
        src={logoImg}
        alt=""
      />
      <div>
        <b className="mb-0.5 block font-display text-lg font-bold leading-none md:text-2xl">
          ЭМЧИ
        </b>
        <span className="block text-xs font-light">
          медицинский профилактический центр
        </span>
      </div>
    </a>
  )
}
