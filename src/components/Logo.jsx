import LogoImg from '../images/logo.jpg?jpg&metadata'

export default function Logo(props) {
  return (
    <a
      href="."
      className="logo flex items-center"
      classList={{ [props.className]: Boolean(props.className) }}
    >
      <img
        class="mr-4 w-16 shrink-0 rounded-full md:w-20"
        {...LogoImg}
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
