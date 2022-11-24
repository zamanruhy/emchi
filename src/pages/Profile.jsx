export default function Profile() {
  return (
    <section class="profile md:mt-6 md:ml-9">
      <h2 className="mb-8 font-display text-2xl font-bold leading-none -tracking-tighter md:text-3xl">
        Профиль
      </h2>

      <dl>
        <dt className="mb-2.5 opacity-50">ФИО:</dt>
        <dd className="mb-8">Иванов Владимир Владимирович</dd>

        <dt className="mb-2.5 opacity-50">Дата рождения:</dt>
        <dd className="mb-8">15.10.1982</dd>

        <dt className="mb-2.5 opacity-50">Телефон:</dt>
        <dd className="mb-8">+7 908 123 45 67</dd>

        <dt className="mb-2.5 opacity-50">Номер полиса ОМС:</dt>
        <dd className="mb-8">123 456 789</dd>

        <dt className="mb-2.5 opacity-50">ИНН:</dt>
        <dd className="mb-8">15841316546486</dd>

        <dt className="mb-2.5 opacity-50">СНИЛС:</dt>
        <dd className="mb-8">135435</dd>

        <dt className="mb-2.5 opacity-50">Место работы:</dt>
        <dd className="mb-8">ООО «Друза»</dd>
      </dl>
    </section>
  )
}
