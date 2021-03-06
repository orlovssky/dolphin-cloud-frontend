# Документация Dolphin{Cloud}
Автоматизация создания рекламных кампаний. Dolphin может создавать десятки кампаний в разных рекламных кабинетах.

### Содержание
1. [Документация Dolphin{Cloud}](#документация-dolphincloud)
2. [Демо](#демо)
3. [Содержание](#содержание)
4. [Файловая структура](#файловая-структура)
5. [Код-стайл](#код-стайл)

## Демо
###### Данные для входа:
- почта - <code>cloud@<area>dolphin.ru.com</code>
- пароль - <code>password</code>

<a href="https://orlovssky.github.io/">
  Ссылка на демо версию Dolphin{Cloud} :dolphin:
</a>

## Файловая структура
- :page_facing_up: <code>index.html</code> - точка входа. Здесь подключается модуль main.tsx.
- :page_facing_up: <code>package.json</code> - информация о приложении: название, версия, зависимости, скрипты и т.п.
- :page_facing_up: <code>tsconfig.json</code> - настройки TypeScript.
- :page_facing_up: <code>tsconfig.node.json</code> - настройки TypeScript для node среды vite.
- :page_facing_up: <code>vite.config.ts</code> - настройки vite.
- :page_facing_up: <code>.eslintrc.json</code> - настройки линтера.
- :file_folder: <code>src</code>
  - :page_facing_up: <code>main.tsx</code> - основной файл c React подключениями и глобальными импортами.
  - :page_facing_up: <code>App.tsx</code> - стартовый файл приложения.
  - :page_facing_up: <code>vite-env.d.ts</code> - автоматически сгенерированные типы для TS.
  - :file_folder: <code>assets</code> - статичные ресурсы.
  - :file_folder: <code>styles</code> - стили приложения.
  - :file_folder: <code>models</code> - типы и интерфейсы Typescript.
  - :file_folder: <code>pages</code> - страницы для роутера.
  - :file_folder: <code>components</code>
    - :file_folder: <code>main</code> - основные, системные компоненты.
    - :file_folder: <code>common</code> - простые, переиспользуемые компоненты.
    - :file_folder: <code>**special*</code> - уникальная компоненты блока.
  - :file_folder: <code>services</code>
    - :file_folder: <code>api</code> - запросы к АПИ.
    - :file_folder: <code>constants</code> - константы.
    - :file_folder: <code>logic</code> - блоки с логикой компонентов, необходимы для декомпозиции.
    - :file_folder: <code>helpers</code> - большие, логические, переиспользуемые сниппеты, могут использовать utils.
    - :file_folder: <code>utils</code> - небольшие, переиспользуемые сниппеты, не могут использовать helpers.
    - :file_folder: <code>validations</code> - функции с валидацией.
  - :file_folder: <code>plugins</code> - подключаемые модули.
    - :file_folder: <code>axios</code> - простой HTTP-клиент для браузера и node.js на основе Promise.
    - :file_folder: <code>i18next</code> - фреймворк для интернационализации.
    - :file_folder: <code>router</code> - client-side routing (React Router v6).
    - :file_folder: <code>store</code> - менеджер состояний (Redux v8).

## Код стайл

#### Пустая строка (blank line) ставится:
- перед return.
- перед и после if, switch, for loop statements.
- перед и после useEffect.

#### Не использовать <code>\<div></code> без надобности.
Для группировки использовать сокращенный React.Fragment: <>... ...</>

#### Не использовать inline-стили со статичными параметрам.
- Вместо inline-стилей использовать классы и писать стили к ним.
- Inline-стили допускаются с динамичными свойствами.

#### Не допускать более *100 строк* в компоненте.
Нужно декомпозировать в более мелкие компоненты.

#### Нейминг.
- Названия компонентов писать в PascalСase => TabPanel.tsx.
- Методы/функции писать в сamelСase => setAppData().
- Константы писать в SCREAMING_SNAKE_CASE => MAIN_URL.
- Роуты писать в кebab-case => /ads-manager.
- Файлы называть односложно => *Sidebar.tsx*.
- Реакт элементы называть полностью начиная с верхнего уровня =>
  - *MainLayoutSidebar*(): JSX.Element
  - import *MainLayoutSidebar* from "components/main/layout/sidebar/Sidebar";
