import { NavLink } from '@solidjs/router'

import LogoutIcon from '../icons/logout.svg?component'
import BellIcon from '../icons/bell.svg?component'

import UserIcon from '../icons/user.svg?component'
import CalendarIcon from '../icons/calendar.svg?component'
import ShieldIcon from '../icons/shield.svg?component'
import WalletIcon from '../icons/wallet.svg?component'
import MedicineIcon from '../icons/medicine.svg?component'
import AnalyzesIcon from '../icons/analyzes.svg?component'
import SupportIcon from '../icons/support.svg?component'
import Hamburger from './Hamburger'

const links = [
  {
    Icon: UserIcon,
    name: 'Профиль',
    href: '/profile',
    count: 0
  },
  {
    Icon: CalendarIcon,
    name: 'Мои записи',
    href: '/records',
    count: 1
  },
  {
    Icon: ShieldIcon,
    name: 'Мои услуги',
    href: '/services',
    count: 0
  },
  {
    Icon: WalletIcon,
    name: 'Мои платежи',
    href: '/payments',
    count: 0
  },
  {
    Icon: MedicineIcon,
    name: 'Медкарта',
    href: '/medical',
    count: 0
  },
  {
    Icon: AnalyzesIcon,
    name: 'Результаты анализов',
    href: '/analyzes',
    count: 1
  },
  {
    Icon: CalendarIcon,
    name: 'Записаться на прием',
    href: '/appointment',
    count: 0
  },
  {
    Icon: SupportIcon,
    name: 'Поддержка',
    href: '/support',
    count: 0
  }
]

export default function Account(props) {
  return (
    <section className="account container mt-4 pb-32 md:mt-5">
      <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 md:mb-12">
        <h1 className="mr-auto font-display text-3xl font-bold leading-none -tracking-tighter md:text-5xl">
          Личный кабинет
        </h1>
        <a
          href="#"
          className="mt-2 flex items-center gap-2 transition hover:text-primary-400"
        >
          Выйти <LogoutIcon className="w-5 shrink-0 fill-current" />
        </a>
      </div>

      <div className="lg:flex">
        <div className="mb-10 lg:mr-12 lg:mb-0 lg:w-[290px] lg:shrink-0">
          <div className="flex items-center gap-4 lg:mb-12">
            <div className="grow">
              <div className="mb-1.5 font-display tracking-wider">
                Иванов В.В.
              </div>
              <div className="opacity-50">loginuser</div>
            </div>
            <div className="relative shrink-0 p-1 lg:mr-5">
              <BellIcon className="w-4 fill-current" />
              <span className="absolute left-3.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-500 px-1.5 text-xs leading-none text-white">
                2
              </span>
            </div>
            <Hamburger
              class="ml-5 sm:ml-10 lg:hidden"
              onclick="this.classList.toggle('active'); sideNav.classList.toggle('hidden')"
            />
          </div>

          <nav id="sideNav" className="hidden pt-6 lg:block lg:pt-0">
            <ul className="grid gap-0.5 sm:grid-cols-2 lg:grid-cols-none">
              {links.map(({ href, name, Icon, count }) => (
                <li>
                  <NavLink
                    href={href}
                    className="flex min-h-[50px] items-center rounded px-5 transition hover:bg-primary-50 [&.active]:bg-primary-500 [&.active]:text-white"
                    activeClass="active"
                    inactiveClass=""
                  >
                    <span className="mr-6 flex w-5 shrink-0 items-center justify-center">
                      <Icon className="h-5 fill-current" />
                    </span>
                    <span className="mr-auto">{name}</span>
                    {count > 0 && (
                      <span className="ml-4 flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-primary-500 px-1.5 text-xs leading-none text-white [.active_&]:bg-white [.active_&]:text-primary-500">
                        {count}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="min-w-0 grow">{props.children}</div>
      </div>
    </section>
  )
}
