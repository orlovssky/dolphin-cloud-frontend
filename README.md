# Документация Dolphin{Cloud}
Автоматизация создания рекламных кампаний. Dolphin может создавать десятки кампаний в разных рекламных кабинетах.

### Содержание
1. [Документация Dolphin{Cloud}](#документация-dolphincloud)
2. [Содержание](#содержание)
3. [Файловая структура](#файловая-структура)

## Файловая структура
- :file_folder: src
  - :page_facing_up: main.tsx
  - :page_facing_up: App.tsx
  - :file_folder: pages
  - :file_folder: components
  - :file_folder: services
    - :file_folder: api
    - :file_folder: constants
    - :file_folder: helpers
  - :file_folder: assets
  - :file_folder: styles
  - :file_folder: plugins
  - :file_folder: contexts
  - :file_folder: hooks
  - :file_folder: models
- :page_facing_up: index.html - точка входа. Здесь подключается модуль main.tsx.
- :page_facing_up: package.json - информация о приложении: название, версия, зависимости, скрипты и т.п.
- :page_facing_up: tsconfig.json - настройки TypeScript.
- :page_facing_up: tsconfig.node.json - настройки TypeScript для node среды vite.
- :page_facing_up: vite.config.ts - настройки vite.
- ![myImage](https://img.icons8.com/color/96/000000/json--v1.png)
