import CaretLeftIcon from '../icons/caret-left.svg?component'
import CaretRightIcon from '../icons/caret-right.svg?component'

export default function Pagination() {
  return (
    <nav
      className="pagination mt-7 flex flex-wrap justify-center gap-0.5 leading-none"
      aria-label="Навигация по страницам"
    >
      <a
        href="#"
        class="disabled mr-3 flex items-center py-1 px-2 [&.disabled]:pointer-events-none [&.disabled]:opacity-50"
        aria-label="Предыдущая страница"
      >
        <CaretLeftIcon className="h-3 fill-current" aria-hidden />
      </a>

      <a
        href="#"
        class="active flex items-center py-1 px-2 [&.active]:font-extrabold"
        aria-current="page"
      >
        1
      </a>

      <a href="#" class="flex items-center py-1 px-2 [&.active]:font-extrabold">
        2
      </a>

      <a href="#" class="flex items-center py-1 px-2 [&.active]:font-extrabold">
        3
      </a>

      <a
        href="#"
        class="ml-3 flex items-center py-1 px-2 [&.disabled]:pointer-events-none [&.disabled]:opacity-50"
        aria-label="Следующая страница"
      >
        <CaretRightIcon className="h-3 fill-current" aria-hidden />
      </a>
    </nav>
  )
}
