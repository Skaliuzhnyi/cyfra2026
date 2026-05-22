export type ServiceId =
  | 'telefoniv'
  | 'noutbukiv'
  | 'televizoriv'
  | 'planshativ'
  | 'prynteriv'
  | 'konsolei'
  | 'navushnykiv'

export interface ServiceInfo {
  id: ServiceId
  title: string
  titleFull: string
  slug: string
  icon: string
  description: string
  priceFrom: number
  daysMin: number
  daysMax: number
  warrantyDays: number
  seoTitle: string
  seoDescription: string
  features: string[]
  faq: Array<{ q: string; a: string }>
}

export const SERVICES: ServiceInfo[] = [
  {
    id: 'telefoniv',
    title: 'Телефони',
    titleFull: 'Ремонт телефонів',
    slug: '/remont/telefoniv/',
    icon: '📱',
    description: 'iPhone, Samsung, Xiaomi, Huawei та інші марки',
    priceFrom: 299,
    daysMin: 1,
    daysMax: 2,
    warrantyDays: 90,
    seoTitle: 'Ремонт телефонів у Києві — від 299 грн, гарантія 90 днів | Цифра',
    seoDescription:
      'Ремонт iPhone, Samsung, Xiaomi у Києві. Безкоштовна діагностика. Заміна екрану, акумулятора, розʼєму. Ремонт за 1–2 дні. Сервісний центр Цифра, Осокорки.',
    features: [
      'Заміна екрану (тачскрін + матриця)',
      'Заміна акумулятора',
      'Ремонт після заливання водою',
      'Заміна розʼєму зарядки',
      'Заміна камери',
      'Заміна корпусу і кнопок',
      'Прошивка і відновлення',
    ],
    faq: [
      {
        q: 'Скільки коштує заміна екрану на iPhone?',
        a: 'Залежить від моделі: iPhone 12 — від 1200 грн, iPhone 14 — від 2200 грн. Точну ціну скажемо після діагностики.',
      },
      {
        q: 'Скільки часу займає ремонт телефону?',
        a: 'Більшість робіт — 1–2 дні. Заміна екрану або акумулятора — нерідко в день звернення.',
      },
      {
        q: 'Чи використовуєте оригінальні запчастини?',
        a: 'Так, де можливо — тільки оригінальні або High Copy запчастини від перевірених постачальників.',
      },
    ],
  },
  {
    id: 'noutbukiv',
    title: 'Ноутбуки',
    titleFull: 'Ремонт ноутбуків',
    slug: '/remont/noutbukiv/',
    icon: '💻',
    description: 'Apple MacBook, Lenovo, Asus, HP, Dell та інші',
    priceFrom: 399,
    daysMin: 1,
    daysMax: 3,
    warrantyDays: 90,
    seoTitle: 'Ремонт ноутбуків у Києві — від 399 грн, гарантія | Цифра',
    seoDescription:
      'Ремонт ноутбуків MacBook, Lenovo, HP, Asus у Києві. Заміна матриці, клавіатури, акумулятора. Чистка від пилу. Сервісний центр Цифра, метро Осокорки.',
    features: [
      'Заміна матриці (екрану)',
      'Заміна клавіатури',
      'Ремонт материнської плати',
      'Заміна акумулятора',
      'Чистка від пилу + заміна термопасти',
      'Встановлення SSD',
      'Відновлення після заливання',
    ],
    faq: [
      {
        q: 'Чому ноутбук перегрівається і вимикається?',
        a: 'Найчастіше — забитий кулер і висохла термопаста. Чистка + заміна пасти вирішує проблему в 80% випадків.',
      },
      {
        q: 'Скільки коштує заміна матриці ноутбука?',
        a: 'Від 800 грн залежно від розміру і типу матриці. Точна ціна — після діагностики.',
      },
    ],
  },
  {
    id: 'televizoriv',
    title: 'Телевізори',
    titleFull: 'Ремонт телевізорів',
    slug: '/remont/televizoriv/',
    icon: '📺',
    description: 'Samsung, LG, Sony, Philips, Smart TV',
    priceFrom: 499,
    daysMin: 2,
    daysMax: 5,
    warrantyDays: 90,
    seoTitle: 'Ремонт телевізорів у Києві — Samsung, LG, Sony | Цифра',
    seoDescription:
      'Ремонт телевізорів Samsung, LG, Sony у Києві. Не вмикається, темний екран, немає звуку — діагностика безкоштовна. Сервісний центр Цифра.',
    features: [
      'Ремонт блоку живлення',
      'Заміна підсвічування (LED-стрічки)',
      'Ремонт матриці',
      'Ремонт звукової плати',
      'Прошивка Smart TV',
      'Ремонт пульту і розʼємів',
    ],
    faq: [
      {
        q: 'Телевізор не вмикається — що робити?',
        a: 'Принесіть на безкоштовну діагностику. Причин може бути кілька: блок живлення, процесорна плата або інвертор. Майстер визначить за 30–60 хв.',
      },
      {
        q: 'Чи ремонтуєте телевізори великого формату 65"+?',
        a: 'Так, ремонтуємо будь-який діагональ. Великі панелі беремо на виїзд або приймаємо в центрі.',
      },
    ],
  },
  {
    id: 'planshativ',
    title: 'Планшети',
    titleFull: 'Ремонт планшетів',
    slug: '/remont/planshativ/',
    icon: '⬜',
    description: 'Apple iPad, Samsung Galaxy Tab, Huawei',
    priceFrom: 299,
    daysMin: 1,
    daysMax: 3,
    warrantyDays: 90,
    seoTitle: 'Ремонт планшетів iPad та Samsung у Києві | Цифра',
    seoDescription:
      'Ремонт планшетів iPad, Samsung Galaxy Tab у Києві. Заміна тачскріну, матриці, акумулятора. Безкоштовна діагностика. Сервісний центр Цифра.',
    features: [
      'Заміна тачскріну',
      'Заміна матриці',
      'Заміна акумулятора',
      'Ремонт розʼєму',
      'Відновлення після заливання',
    ],
    faq: [
      {
        q: 'Що робити якщо розбили екран iPad?',
        a: 'Принесіть нам — замінимо тачскрін або матрицю. Вартість залежить від моделі iPad, уточнюємо після огляду.',
      },
    ],
  },
  {
    id: 'prynteriv',
    title: 'Принтери',
    titleFull: 'Ремонт принтерів',
    slug: '/remont/prynteriv/',
    icon: '🖨',
    description: 'HP, Canon, Epson, Brother, лазерні та струйні',
    priceFrom: 299,
    daysMin: 1,
    daysMax: 3,
    warrantyDays: 90,
    seoTitle: 'Ремонт принтерів HP, Canon, Epson у Києві | Цифра',
    seoDescription:
      'Ремонт принтерів HP, Canon, Epson, Brother у Києві. Замиска паперу, не друкує, помилка — діагностика безкоштовна. Сервісний центр Цифра.',
    features: [
      'Ремонт механізму подачі паперу',
      'Заміна картриджа і фьюзера',
      'Прочистка друкуючої голівки',
      'Ремонт після замиски',
      'Відновлення чипа картриджа',
    ],
    faq: [
      {
        q: 'Принтер не друкує або замикає папір — що робити?',
        a: 'Принесіть — безкоштовно діагностуємо і скажемо вартість ремонту.',
      },
    ],
  },
  {
    id: 'konsolei',
    title: 'Консолі',
    titleFull: 'Ремонт ігрових консолей',
    slug: '/remont/konsolei/',
    icon: '🎮',
    description: 'PlayStation 4/5, Xbox, Nintendo Switch',
    priceFrom: 399,
    daysMin: 2,
    daysMax: 5,
    warrantyDays: 90,
    seoTitle: 'Ремонт PlayStation, Xbox та Nintendo у Києві | Цифра',
    seoDescription:
      'Ремонт PlayStation 4/5, Xbox One/Series, Nintendo Switch у Києві. Клацання стіків, не читає диски, перегрів — діагностика безкоштовна.',
    features: [
      'Заміна аналогових стіків',
      'Ремонт дисководу',
      'Заміна термопасти (перегрів)',
      'Ремонт HDMI-розʼєму',
      'Ремонт джойстика',
      'Відновлення після заливання',
    ],
    faq: [
      {
        q: 'PS5 перегрівається і вимикається — це лікується?',
        a: 'Так, найчастіше потрібна заміна термопасти і чистка кулера. Після цього консоль працює стабільно.',
      },
    ],
  },
  {
    id: 'navushnykiv',
    title: 'Навушники',
    titleFull: 'Ремонт навушників',
    slug: '/remont/navushnykiv/',
    icon: '🎧',
    description: 'AirPods, Sony, Samsung, провідні та бездротові',
    priceFrom: 199,
    daysMin: 1,
    daysMax: 3,
    warrantyDays: 90,
    seoTitle: 'Ремонт навушників AirPods та Sony у Києві | Цифра',
    seoDescription:
      'Ремонт навушників AirPods, Sony, Samsung у Києві. Не заряджаються, немає звуку, поламана дужка — діагностика безкоштовна. Сервісний центр Цифра.',
    features: [
      'Ремонт акумулятора (AirPods)',
      'Заміна динаміків',
      'Ремонт кейсу AirPods',
      'Ремонт дужки',
      'Заміна кабелю',
      'Ремонт після заливання',
    ],
    faq: [
      {
        q: 'AirPods не заряджаються — що це може бути?',
        a: 'Найчастіше — зношений акумулятор або забруднені контакти в кейсі. Виправляємо обидва варіанти.',
      },
    ],
  },
]
