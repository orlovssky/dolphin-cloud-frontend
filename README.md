# Документация Dolphin{Cloud}
Автоматизация создания рекламных кампаний. Dolphin может создавать десятки кампаний в разных рекламных кабинетах.

### Содержание
1. [Документация Dolphin{Cloud}](#документация-dolphincloud)
2. [Содержание](#содержание)
3. [Файловая структура](#файловая-структура)

## Файловая структура
- src :file_folder:
  - main.tsx
  - App.tsx
  - pages
  - components
  - services
    - api
    - constants
    - helpers
  - assets
  - styles
  - plugins
  - contexts
  - hooks
  - models
  - index.html - точка входа. Здесь подключается модуль main.tsx.
  - package.json - информация о приложении: название, версия, зависимости, скрипты и т.п.
  - tsconfig.json - настройки TypeScript.
  - tsconfig.node.json - настройки TypeScript для node среды vite.
  - vite.config.ts - настройки vite.