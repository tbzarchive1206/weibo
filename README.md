# WEIBO MEDIA ARCHIVE

Samodzielne archiwum GitHub Pages mediów THE BOYZ z Weibo. Motyw, kolorystyka, fonty, układ i galerie bazują bezpośrednio na repozytorium `INSTA POSTS ARCHIVE`.

## Funkcje

- osobne kafelki profili zgodne z głównymi folderami Google Drive,
- automatyczne tworzenie kolejnych kafelków po dodaniu nowych folderów głównych,
- poziomy kafelek `Weibo Updates Related to THE BOYZ`,
- filtrowanie każdej kolekcji według roku, a następnie miesiąca,
- domyślne otwieranie najnowszego dostępnego miesiąca i sortowanie od najnowszej daty `YYMMDD`,
- zdjęcia, filmy, audio oraz linki `View` i `Download`,
- nazwy plików widoczne w kolekcji ogólnych aktualizacji Weibo,
- automatyczna synchronizacja dwa razy dziennie.

## Uruchomienie lokalne

Wymagany jest Node.js 22 oraz pnpm.

```bash
pnpm install
pnpm dev
```

Test i kompilacja:

```bash
pnpm test
```

## Publikacja na GitHub Pages

1. Utwórz puste repozytorium GitHub, np. `weibo-media-archive`.
2. Rozpakuj ZIP i w jego folderze wykonaj:

   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TWOJ_LOGIN/weibo-media-archive.git
   git push -u origin main
   ```

3. Otwórz `Settings → Pages`.
4. W `Build and deployment` wybierz `Source → GitHub Actions`.
5. Workflow `Deploy GitHub Pages` opublikuje stronę.

## Automatyczna synchronizacja

1. Udostępnij główny folder jako `Każda osoba mająca link → Wyświetlający`.
2. W projekcie Google Cloud włącz `Google Drive API`.
3. Utwórz klucz API ograniczony do Google Drive API.
4. W GitHub przejdź do `Settings → Secrets and variables → Actions`.
5. Dodaj sekret:

   ```text
   GOOGLE_DRIVE_API_KEY
   ```

6. Uruchom `Actions → Sync Weibo Media → Run workflow`.

Synchronizacja działa codziennie o `05:17` i `17:17` UTC. Skanuje całe drzewo folderów rekurencyjnie.

## Źródło

- [Folder Google Drive](https://drive.google.com/drive/folders/1aLz7FnwaQcrFv926AOrBxic67qvAcUdk)
