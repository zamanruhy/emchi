import MagFilledIcon from '../icons/mag-filled.svg?component'

export default function Search() {
  return (
    <form className="search relative">
      <input
        className="block min-h-[45px] w-full rounded border border-primary-500/10
        bg-white py-1 pl-4 pr-12 transition placeholder:text-right
        placeholder:text-primary-500 placeholder:opacity-50 focus:border-primary-500
        focus:outline-none md:border-transparent
        "
        type="text"
        placeholder="Поиск"
        required
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center rounded pt-0.5 pr-5 pl-2 opacity-50"
      >
        <MagFilledIcon className="h-5 fill-current" />
      </button>
    </form>
  )
}
