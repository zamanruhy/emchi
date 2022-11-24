import Analysis from '@/components/Analysis'
import Dropdown from '@/components/Dropdown'
import Pagination from '@/components/Pagination'
import Record from '@/components/Record'
import Search from '@/components/Search'
import BellIcon from '../icons/bell.svg?component'

export default function Analyzes() {
  return (
    <section class="analyzes rounded-lg md:bg-zinc-50 md:px-7 md:pt-7 md:pb-7 md:shadow-shifted">
      <div className="mb-7 flex flex-wrap gap-x-7 gap-y-7 md:flex-nowrap">
        <h2 className="mr-auto font-display text-2xl font-bold leading-none -tracking-tighter md:text-3xl">
          Результаты анализов
        </h2>
        <div className="-mt-2 flex w-full items-center rounded bg-success-500 py-4 px-6 text-white sm:max-w-[370px]">
          <BellIcon className="mr-3.5 w-4 shrink-0 fill-current" />
          Сегодня у вас готов один результат анализов
        </div>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-5 sm:flex-nowrap">
        <div className="w-full grow sm:min-w-80">
          <Search />
        </div>
        <Dropdown
          className="ml-auto"
          summary={'Сортировка по дате'}
          items={['Сначала новые записи', 'Сначала старые записи']}
        />
      </div>

      <div className="grid gap-8">
        <Analysis />
        <Analysis />
        <Analysis />
        <Analysis />
        <Analysis />
        <Analysis />
      </div>
      <Pagination />
    </section>
  )
}
