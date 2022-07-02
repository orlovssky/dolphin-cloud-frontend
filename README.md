# Документация Dolphin{Cloud}
Автоматизация создания рекламных кампаний. Dolphin может создавать десятки кампаний в разных рекламных кабинетах.

### Содержание
1. [Документация Dolphin{Cloud}](#документация-dolphincloud)
2. [Содержание](#содержание)
3. [Файловая структура](#файловая-структура)

## Файловая структура
:file_folder: src<br/>
    >:page_facing_up: main.tsx<br/>
    :page_facing_up: App.tsx<br/>
    :file_folder: pages<br/>
    :file_folder: components<br/>
    :file_folder: services<br/>
        :file_folder: api<br/>
        :file_folder: constants<br/>
        :file_folder: helpers<br/>
    :file_folder: assets<br/>
    :file_folder: styles<br/>
    :file_folder: plugins<br/>
    :file_folder: contexts<br/>
    :file_folder: hooks<br/>
    :file_folder: models<br/>
:page_facing_up: index.html - точка входа. Здесь подключается модуль main.tsx.<br/>
:page_facing_up: package.json - информация о приложении: название, версия, зависимости, скрипты и т.п.<br/>
:page_facing_up: tsconfig.json - настройки TypeScript.<br/>
:page_facing_up: tsconfig.node.json - настройки TypeScript для node среды vite.<br/>
:page_facing_up: vite.config.ts - настройки vite.<br/>
