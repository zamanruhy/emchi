// import { NavLink } from '@solidjs/router'

import Button from './Button'
import Logo from './Logo'

export default function Header() {
  return (
    <header class="header py-2 md:py-3">
      <div className="container">
        <div className="flex items-center">
          <Logo />
          <span className="grow" />
          <a
            href="tel:+7(3012)37-99-20"
            className="mr-8 hidden transition hover:opacity-70 lg:block"
          >
            +7 (3012) 37-99-20
          </a>
          <a
            href="mailto:hippocrat-info@mail.ru"
            className="mr-8 hidden transition hover:opacity-70 lg:block"
          >
            hippocrat-info@mail.ru
          </a>
          <Button
            as="a"
            href="#"
            variant="primary"
            size="md"
            class="ml-6 hidden md:flex"
          >
            Личный кабинет
          </Button>
        </div>
      </div>
    </header>
  )
}
