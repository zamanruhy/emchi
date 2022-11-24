import Logo from './Logo'
import Social from './Social'

export default function Footer() {
  return (
    <footer class="footer bg-primary-500 pt-5 pb-11 text-white">
      <div class="container">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="self-start md:mr-20 lg:mr-40">
            <Logo />
            <div className="mt-3 text-xs">
              © АНО «МПЦ «ЭМЧИ». Все права защищены 2022.
            </div>
          </div>
          <div className="mt-9 md:mt-0 md:grow">
            <Social />
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4 md:mt-8">
              <a
                href="tel:+7(3012)37-99-20"
                className="transition hover:opacity-70"
              >
                +7 (3012) 37-99-20
              </a>
              <a
                href="mailto:hippocrat-info@mail.ru"
                className="transition hover:opacity-70"
              >
                hippocrat-info@mail.ru
              </a>
              <span>something</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
