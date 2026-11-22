KIDS FUN PAINT - hosting folder
================================
Files: index.html (the app), manifest.webmanifest + sw.js + icons/ (make it installable and work offline), favicon.ico.
Keep all files together in this folder. No build step and nothing to install.

TRY IT FIRST (optional)
  Double-click index.html to use it offline. Installing as an app needs the online version below.

OPTION 1: NETLIFY (quickest, about 2 minutes)
  1. Go to https://app.netlify.com/drop and sign up / log in (free).
  2. Drag this whole "site" folder onto the page.
  3. You get a link like https://random-name.netlify.app. Open it.
  4. Rename it: Site configuration > Change site name (e.g. kids-fun-paint).

OPTION 2: GITHUB PAGES
  1. On github.com create a new PUBLIC repository named kids-fun-paint.
  2. Add file > Upload files, drag in everything INSIDE this folder (index.html at the top level, not inside another folder). Commit.
  3. Settings > Pages > Build and deployment: Source "Deploy from a branch", Branch "main", folder "/ (root)", Save.
  4. After a minute it is live at https://YOURNAME.github.io/kids-fun-paint/

INSTALL IT AS AN APP
  Open the hosted link in Chrome or Edge on the laptop, then click the install icon at the right of the address bar
  (or menu > "Install Kids Fun Paint"). It gets its own window, icon and taskbar entry, and works offline.
  Phone/tablet: Share or menu > "Add to Home Screen".

UPDATING LATER
  Upload the new files again (Netlify: Deploys > drag the folder; GitHub: upload and commit).
  Also change CACHE='kids-fun-paint-v1' to v2, v3... in sw.js so installed copies refresh.

Saving pictures (Save button) and opening pictures (Open button, drag and drop, paste) work on the hosted version.
