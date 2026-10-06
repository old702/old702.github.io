# Руководство по редактированию old702.github.io

Это руководство описывает текущую структуру сайта и безопасный способ самостоятельно добавлять проекты, галереи, статьи Devblog и менять основную информацию.

---

## 1. Как устроен проект

Основные файлы:

```text
old702.github.io/
├── .github/workflows/deploy.yml
├── public/
│   └── media/
│       ├── blog/
│       └── projects/
├── src/
│   ├── components/
│   ├── data/
│   │   ├── posts.ts
│   │   ├── projects.ts
│   │   └── site.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── blog/
│   │   └── projects/
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

### Что за что отвечает

- `src/data/site.ts` — имя, роль, описание, GitHub, аватар, Email и ArtStation.
- `src/data/projects.ts` — все плитки страницы **Work** и содержимое project galleries.
- `src/data/posts.ts` — список статей на странице **Devblog**.
- `src/pages/blog/*.mdx` — сами статьи.
- `src/pages/projects/[slug].astro` — общий шаблон всех галерей. Его обычно редактировать не нужно.
- `src/styles/global.css` — весь основной дизайн сайта.
- `public/media/projects/` — изображения проектов.
- `public/media/blog/` — обложки и медиа статей.

---

## 2. Самый безопасный порядок редактирования

Для нового проекта или статьи лучше придерживаться такого порядка:

1. Сначала загрузить изображения/видео в `public/media/...`.
2. Затем добавить запись в `projects.ts` или `posts.ts`.
3. Для статьи создать MDX-файл.
4. Проверить пути и slug.
5. Сделать commit в `main`.
6. Открыть GitHub → **Actions** → дождаться зелёного `Deploy to GitHub Pages`.
7. Проверить сайт.

Не добавляй запись в массив до загрузки соответствующего изображения: иначе build может пройти, но на сайте появится битое media.

---

# 3. Как добавить новый проект с галереей

Допустим, нужен проект:

`Metro Environment`

Slug:

`metro-environment`

## Шаг 1. Создать папку с медиа

Создай:

```text
public/media/projects/metro-environment/
```

Например:

```text
cover.webp
01.webp
02.webp
03.webp
04.webp
```

Рекомендуемые форматы:

- WebP — основной вариант для скриншотов.
- AVIF — можно использовать, если устраивает поддержка.
- PNG — когда важна lossless-графика или alpha.
- JPEG — для тяжёлых фотографических изображений.
- SVG — для схем, графики и временных placeholders.

Для Work и project gallery лучше готовить изображения так, чтобы важная часть композиции хорошо читалась при квадратном `object-fit: cover`.

## Шаг 2. Добавить проект в projects.ts

Открой:

`src/data/projects.ts`

Добавь в массив `projects`:

```ts
{
  slug: 'metro-environment',
  title: 'Metro Environment',
  meta: 'Unreal Engine · Environment Art · Lighting',
  categories: ['game', 'rendering'],
  cover: 'media/projects/metro-environment/cover.webp',
  destination: 'gallery',
  gallery: [
    {
      src: 'media/projects/metro-environment/01.webp',
      title: 'Station Hall',
    },
    {
      src: 'media/projects/metro-environment/02.webp',
      title: 'Platform',
    },
    {
      src: 'media/projects/metro-environment/03.webp',
      title: 'Lighting Study',
    },
  ],
},
```

### Что означает каждое поле

`slug`
: Часть URL. Получится `/projects/metro-environment/`.

Используй только латиницу, цифры и дефисы.

`title`
: Название проекта.

`meta`
: Короткая техническая строка под плиткой Work и в шапке gallery.

`categories`
: Категории фильтра Work.

Сейчас используются:

```ts
'game'
'tool'
'rendering'
'research'
```

`cover`
: Картинка плитки Work.

`destination: 'gallery'`
: Нажатие на плитку открывает project gallery.

`gallery`
: Массив изображений.

`title` у gallery item **не выводится поверх плитки**. Он нужен для `alt`/accessibility и имени изображения внутри логики viewer.

Порядок элементов массива = порядок изображений в галерее и fullscreen viewer.

---

# 4. Как добавить проект, который открывает статью

Если проекту не нужна отдельная gallery, плитка Work может вести прямо в Devblog article.

Пример:

```ts
{
  slug: 'renderer-research',
  title: 'Renderer Research',
  meta: 'Forward+ · GI · AA · GPU',
  categories: ['rendering', 'research'],
  cover: 'media/projects/renderer-research/cover.webp',
  destination: 'article',
  article: 'renderer-research',
},
```

Здесь:

```ts
article: 'renderer-research'
```

должен совпадать с именем:

```text
src/pages/blog/renderer-research.mdx
```

URL будет:

```text
/blog/renderer-research/
```

В интерфейсе раздел называется **Devblog**, но URL `/blog/` оставлен специально для стабильности ссылок.

---

# 5. Как добавить новую статью Devblog

Для статьи требуется **два действия**:

1. создать MDX;
2. добавить metadata в `posts.ts`.

Допустим статья называется:

`Static GI probes in Forward+`

Slug:

`static-gi-probes`

## Шаг 1. Обложка

Добавь:

```text
public/media/blog/static-gi-probes-cover.webp
```

## Шаг 2. Создать MDX

Создай:

```text
src/pages/blog/static-gi-probes.mdx
```

Минимальный шаблон:

```mdx
import ArticleLayout from '../../layouts/ArticleLayout.astro';
import Callout from '../../components/Callout.astro';

<ArticleLayout
  title="Static GI probes in Forward+."
  subtitle="Implementation notes."
  description="Practical notes on static probe GI for a Forward+ renderer."
  date="06 Oct 2026"
  readTime="10 min read"
  articleId="ARTICLE 004"
  project="Subtransit"
  category="Rendering"
  platform="Unreal Engine"
  status="Research"
  tags={["Forward+", "GI", "Probes"]}
  toc={[
    { label: 'Overview', href: '#overview' },
    { label: 'Data', href: '#data' },
    { label: 'Results', href: '#results' },
  ]}
>

<h2 id="overview">Overview</h2>

Обычный текст статьи пишется как Markdown.

<Callout label="Note">
Короткое важное замечание.
</Callout>

<h2 id="data">Data</h2>

Здесь следующий раздел.

<h2 id="results">Results</h2>

Выводы.

</ArticleLayout>
```

### Важное правило TOC

Если указано:

```js
{ label: 'Results', href: '#results' }
```

в статье должен существовать:

```html
<h2 id="results">Results</h2>
```

Иначе ссылка в `On this page` будет вести в пустоту.

## Шаг 3. Добавить статью в posts.ts

Открой:

`src/data/posts.ts`

Добавь запись:

```ts
{
  slug: 'static-gi-probes',
  title: 'Static GI probes in Forward+',
  category: 'Rendering / UE5',
  date: '06 Oct 2026',
  readTime: '10 min read',
  excerpt: 'A short description shown in the Devblog list.',
  thumbnail: 'media/blog/static-gi-probes-cover.webp',
},
```

Порядок объектов в массиве = порядок статей в Devblog.

Чтобы новая статья была первой, добавляй её в начало массива.

---

# 6. Доступные компоненты внутри статьи

## Callout

Импорт:

```mdx
import Callout from '../../components/Callout.astro';
```

Обычный:

```mdx
<Callout label="Note">
Important implementation note.
</Callout>
```

Предупреждение:

```mdx
<Callout label="Caveat" tone="warning">
This result depends on the test conditions.
</Callout>
```

Положительный/рекомендуемый:

```mdx
<Callout label="Recommended" tone="success">
Prefer this implementation for production.
</Callout>
```

---

## Изображение / GIF figure

Импорт:

```mdx
import GifFigure from '../../components/GifFigure.astro';
```

Использование:

```mdx
<GifFigure
  src="media/blog/example.gif"
  alt="Lighting transition"
  label="FIG. 01"
  caption="Lighting transition during the test."
/>
```

Компонент называется `GifFigure`, но `src` может указывать и на обычное изображение.

---

## MP4 / WebM video

Импорт:

```mdx
import LoopVideo from '../../components/LoopVideo.astro';
```

Использование:

```mdx
<LoopVideo
  src="media/blog/example.webm"
  poster="media/blog/example-poster.webp"
  caption="Runtime demonstration."
/>
```

Video автоматически использует:

- autoplay;
- muted;
- loop;
- playsinline;
- controls.

Для длинной анимации WebM/MP4 обычно лучше GIF.

---

## Before / After

Импорт:

```mdx
import BeforeAfter from '../../components/BeforeAfter.astro';
```

Использование:

```mdx
<BeforeAfter
  before="media/blog/before.webp"
  after="media/blog/after.webp"
  beforeLabel="Before"
  afterLabel="After"
/>
```

Divider перетаскивается мышью или pointer input.

---

## Metrics

Импорт:

```mdx
import Metrics from '../../components/Metrics.astro';
```

Использование:

```mdx
<Metrics items={[
  { label: 'GPU frame', value: '6.8 ms', note: '1440p' },
  { label: 'MSAA', value: '4×', note: 'Opaque pass' },
  { label: 'Lights', value: '6', note: 'Worst case' },
]} />
```

---

# 7. Markdown, code и таблицы

## Код

```md
```cpp
void Example()
{
    // code
}
```
```

## Таблица

```md
| Parameter | Value | Notes |
| --- | --- | --- |
| MSAA | 4× | Opaque pass |
| GI | Static probes | Indirect lighting |
```

## Раскрывающийся блок

```mdx
<details>
<summary>Implementation notes</summary>

Detailed information.

</details>
```

---

# 8. Как работает fullscreen gallery

Логика уже находится в:

`src/pages/projects/[slug].astro`

Для каждого проекта она создаётся автоматически.

Поддерживается:

- клик по thumbnail;
- `←` / `→` на экране;
- клавиши Arrow Left / Arrow Right;
- Escape;
- горизонтальный swipe;
- циклическое переключение;
- счётчик `01 / 06`.

Никакого дополнительного JavaScript при добавлении нового проекта писать не нужно.

---

# 9. Как поменять порядок проектов

Открой:

`src/data/projects.ts`

Порядок объектов в:

```ts
export const projects = [
  ...
]
```

полностью определяет порядок плиток Work.

Просто перемести объект выше или ниже.

---

# 10. Как убрать проект

Удалить объект проекта из:

`src/data/projects.ts`

После этого его плитка исчезнет.

Папку:

`public/media/projects/<slug>/`

можно удалить отдельно, если изображения больше нигде не используются.

---

# 11. Как убрать статью

1. Удалить запись из `src/data/posts.ts`.
2. Удалить соответствующий `src/pages/blog/<slug>.mdx`, если URL тоже больше не нужен.
3. При необходимости удалить связанные файлы из `public/media/blog/`.

Если убрать только запись из `posts.ts`, статья перестанет отображаться в списке Devblog, но прямой URL MDX всё ещё будет работать.

---

# 12. Как добавить новую категорию Work

Например:

`environment`

## projects.ts

У проекта:

```ts
categories: ['game', 'environment']
```

## index.astro

В:

`src/pages/index.astro`

добавь кнопку:

```astro
<button data-filter="environment">Environment</button>
```

JavaScript фильтра уже универсален. Больше ничего менять не нужно.

---

# 13. Контакты и профиль

Файл:

`src/data/site.ts`

Текущая логика:

```ts
email: null,
artstation: null,
```

Если значение `null`, ссылка вообще не показывается на сайте.

Чтобы добавить Email:

```ts
email: 'name@example.com',
```

Чтобы добавить ArtStation:

```ts
artstation: 'https://www.artstation.com/username',
```

GitHub:

```ts
github: 'https://github.com/old702',
```

Аватар:

```ts
avatar: 'https://avatars.githubusercontent.com/...',
```

Header и footer используют один и тот же avatar.

---

# 14. Как менять тексты главных страниц

## Work

`src/pages/index.astro`

Основные строки:

```astro
<span class="page-kicker">Portfolio · 2026</span>
<h1>Selected work.</h1>
<p>...</p>
```

## Devblog

`src/pages/blog/index.astro`

## About

`src/pages/about.astro`

---

# 15. Как менять дизайн

Основной файл:

`src/styles/global.css`

После аудита stylesheet консолидирован: больше нет старых override-блоков, накопленных после предыдущих итераций.

Ключевые CSS variables находятся в самом начале:

```css
:root {
  --bg: #0d0e10;
  --panel: #121416;
  --text: #f2f3f4;
  --muted: #979da2;
  --dim: #686f75;
  --page: 860px;
  --article: 690px;
  --article-wide: 900px;
}
```

### Основная ширина сайта

```css
--page: 860px;
```

### Ширина текста статьи

```css
--article: 690px;
```

### Ширина больших media внутри статьи

```css
--article-wide: 900px;
```

### Основной display font

```css
--display: "Inter Tight", Inter, Arial, sans-serif;
```

---

# 16. Как редактировать прямо через GitHub

Для небольших изменений локальная копия вообще не обязательна.

1. Открой репозиторий.
2. Перейди к нужному файлу.
3. Нажми кнопку редактирования.
4. Внеси изменения.
5. Нажми **Commit changes**.
6. Commit в `main`.
7. Открой вкладку **Actions**.
8. Дождись зелёного `Deploy to GitHub Pages`.

После последнего аудита workflow использует concurrency: если сделать несколько commit подряд, устаревший deployment автоматически отменяется в пользу последнего. Это предотвращает конфликт Pages deployments.

---

# 17. Локальное редактирование

После clone:

```bash
npm install
npm run dev
```

Astro выдаст локальный адрес.

Перед push желательно:

```bash
npm run build
```

Если build завершился без ошибки, push:

```bash
git add .
git commit -m "Update portfolio"
git push
```

---

# 18. Правила имён файлов

Рекомендуется:

```text
my-project
my-project-cover.webp
01.webp
02.webp
lighting-before.webp
lighting-after.webp
```

Не рекомендуется:

```text
My Project FINAL new 2.png
```

Используй:

- lowercase;
- дефисы;
- без пробелов;
- короткие slug;
- последовательную нумерацию gallery.

---

# 19. Что автоматически и что вручную

## Автоматически

После добавления gallery project:

- создаётся URL проекта;
- строится квадратная grid;
- работает fullscreen;
- работают стрелки;
- работает swipe;
- работает счётчик.

После создания MDX:

- Astro создаёт страницу статьи.

## Вручную

Нужно самому:

- добавить project в `projects.ts`;
- добавить post в `posts.ts`;
- загрузить media;
- создать MDX article;
- следить, чтобы slug и пути совпадали.

---

# 20. Быстрая памятка

### Новый gallery project

```text
1. public/media/projects/<slug>/
2. загрузить cover + images
3. src/data/projects.ts
4. destination: 'gallery'
5. commit
```

### Новый Devblog article

```text
1. public/media/blog/
2. src/pages/blog/<slug>.mdx
3. src/data/posts.ts
4. при необходимости связать Work project через destination: 'article'
5. commit
```

### Изменить контакт

```text
src/data/site.ts
```

### Изменить дизайн

```text
src/styles/global.css
```

### Проверить публикацию

```text
GitHub → Actions → Deploy to GitHub Pages
```
