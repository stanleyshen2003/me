# 🚀 ME

🌐 **Live Demo**: [stanleyshen2003.github.io/me](https://stanleyshen2003.github.io/me)

💻 **Original Repository**: [truethari/reactfolio](https://github.com/truethari/reactfolio)

---

## 🧭 Table of Contents

- [✨ Features Added](#-features-added)
- [⚡ Run Locally](#-run-locally)
- [📝 Add a New Article](#-add-a-new-article)
- [🏞️ Add a New Album](#-add-a-new-album)
- [🤝 Contributing](#-contributing)

---

## ✨ Features Added

- 📦 **CD Integration** – GitHub Pages deploys on every push
- 🎨 **Responsive Layout Fixes** – Smoother and cleaner CSS styling
- 📱 **Article Categories** – Articles now support categorization
- 🧩 **Notion Integration** – Add notion.css for articles written in Notion
- 🖼️ **Album Gallery** – Added photo album displayed with styling and navigation



---

## ⚡ Run Locally

```bash
npm install
npm run dev
```

---

## 📝 Add a New Article

To add a new article:

1. Create your component in `src/data/myArticles` (e.g., `computerAssembly.js`)
2. Register it in `src/data/articles.js`  


---

## 🏞️ Add a New Album

To add a new album:

1. Add your photos into `public/album/#NAME`
2. (Optional) Run `bash public/album/rename.sh #NAME`
3. Create your component in `src/data/myAlbums` (e.g., `dragon.js`)
4. Add all your photos by running and copying the result of `src/data/myAlbums/util.mjs`
5. Register it in `src/data/albums.js` 
6. Add representation image into `public/album/representative`

---

## 🤝 Contributing

Have cool ideas or spotted something to improve?  
Feel free to [open an issue](https://github.com/stanleyshen2003/me/issues) or fork the project and make it your own!

> Let’s build something awesome together 💡
