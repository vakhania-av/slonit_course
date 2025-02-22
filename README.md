# slonit_course
Учебный курс в рамках обучения в slonit

## Домашнее задание №3 (Git - изучаем основы)
### *Настройки Git*
1) Инициализация репозитория выполняется командой `git init`
    - Просмотреть древовидную структуру инициализированного репозитория можно используя команду `tree -a`
2) Настройки пользователя в Git включают в себя заполнение имени пользователя и его email, их рекомендуется устанавливать глобально, используя следующие команды:
    - `git config --global user.name '<USERNAME>'`
    - `git config --global user.email <USER_EMAIL>`
3) Настройка редактора текста для Git выполняется командой: 
    - `git config --global core.editor '<PATH>'`
4) Git предоставляет пользователям возможность задания псевдонимов (алиасов) для наиболее часто используемых команд. Например, чтобы каждый раз не прописывать `git config --global`, можно сформировать алиас данной команды: `git config --global alias.c config`
5) Git включает в себя встроенную справку по всем существующим командам. Для вызова справки, в терминале достаточно ввести `git help`  :blush:
6) При работе в UNIX-системах, Git различает файлы по двум  типам - ___исполняемые (755)___ и ___неисполняемые (644).___ Сделать файл исполняемым можно по команде `chmod + x <FILENAME>`.
Для создания прав на выполнение файла под Linux, можно также воспользоваться командой, добавляющей исполнительный бит в индексе: `git update-index --chmod=+x <FILENAME>`
7) Просмотр коммитов в Git осуществляется через команду: `git show <COMMIT_ID> --pretty=fuller`
8) Добавление к отслеживанию всего каталога (директории) можно реализовать посредством команды `git add .`, однако у данной команды присутствуют "побочные" эффекты, например, в индекс могут попадать служебные или нежелательные файлы. Для предотвращения подобного случая рекомендуется заранее формировать файл __.gitignore__, в котором указываются все директории и файлы, которые не должны попадать в репозиторий при коммитах
9) Отмена изменений производится командой `git reset HEAD`
> Также стоит помнить о правиле хорошего коммита.
>> Коммит должен выполнять только одну конкретную вещь, т.е., иными словами - быть атомарным.
>>> В англоязычной среде разработчиков есть хорошая рекомендация в двух предложениях: Commit early. Commit often.
10) Git поддерживает возможность частичного добавления фрагментов *(hunks)* файла в индекс. То есть, в Working Directory присутствуют как проиндексированные, так и не проиндексированные изменения, а в индекс попадают только утверждённые самим пользователем изменения. Сделать подобное можно через команду `git add -p <FILENAME>`
11) Иногда пользователям удобнее выполнять коммиты напрямую, без добавления изменений в индекс. Такая операция возможна при условии, если включаемые в коммит файлы ранее были проиндексированы. Сделать это можно несколькими способами:
    - `git add -A` - производится индексация всех изменений начиная с корня проекта
    - `git commmit -a` - в коммит отравляются изменения ранее проиндексированных файлов
    - `git commit -m "Some message" <FILENAME>` - в коммит попадает изменение конкретного файла, при условии, что ранее он был проиндексирован
    - `git config --global alias.commitall '!git add .; git commit'` - алиас для автоматического коммита всех проиндексированных файлов
    - `git config --global alias.commitall '!git add -A; git commit'` - алиас для автоматического коммита всех файлов проекта
12) Удаление из индекса файлов производится командой `git rm <FILENAME>`. Также возможно удаление файла или директории из индекса, с сохранением последних в Working Directory. Выполнить подобную операцию можно командой `git rm -m --cached <FILENAME | DIRECTORY>`. 
Команда `git rm` объединяет в себе 2 команды: `rm` и `git add .`, то есть удаляет файл (директорию) из рабочего каталога и добавляет изменения в индекс.
13) Переименование файла и добавление его в индекс осуществляется командой 
`git mv <old_filename> <new_filename>`
---
