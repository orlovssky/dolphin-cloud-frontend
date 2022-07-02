# Документация Dolphin{Cloud}
Автоматизация создания рекламных кампаний. Dolphin может создавать десятки кампаний в разных рекламных кабинетах.

### Содержание
1. [Документация Dolphin{Cloud}](#документация-dolphincloud)
2. [Содержание](#содержание)
3. [Файловая структура](#файловая-структура)

## Файловая структура
- :file_folder: <code>src</code>
  - :page_facing_up: <code>main.tsx</code>
  - :page_facing_up: <code>App.tsx</code>
  - :file_folder: <code>pages</code>
  - :file_folder: <code>components</code>
  - :file_folder: <code>services</code>
    - :file_folder: <code>api</code>
    - :file_folder: <code>constants</code>
    - :file_folder: <code>helpers</code>
  - :file_folder: <code>assets</code>
  - :file_folder: <code>styles</code>
  - :file_folder: <code>plugins</code>
  - :file_folder: <code>contexts</code>
  - :file_folder: <code>hooks</code>
  - :file_folder: <code>models</code>
- :page_facing_up: <code>index.html</code> - точка входа. Здесь подключается модуль main.tsx.
- :page_facing_up: <code>package.json</code> - информация о приложении: название, версия, зависимости, скрипты и т.п. 
- :page_facing_up: <code>tsconfig.json</code> - настройки TypeScript. 
- :page_facing_up: <code>tsconfig.node.json</code> - настройки TypeScript для node среды vite. 
- :page_facing_up: <code>vite.config.ts</code> - настройки vite.
