# WordWise — Minimal Dictionary App

**Turn any word into wisdom.**

WordWise is a minimal, modern web app that lets you search the meaning of any English word using the [Free Dictionary API](https://dictionaryapi.dev/). Built with clean design and focus on simplicity, it returns definitions, examples, phonetics, and audio pronunciation.


---

## Features

-  **Search any English word**
-  **See definitions with examples**
-  **Listen to pronunciation** (if available)
-  **See parts of speech and phonetics**
-  **Minimalist, responsive, and fast**

---

##  Tech Stack

- **HTML5**
- **TailwindCSS**
- **Vanilla JavaScript (Fetch API)**
- **Free Dictionary API** – [https://dictionaryapi.dev](https://dictionaryapi.dev)

---

##  Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/thanavreddy/wordwise.git
cd wordwise
```

### 2. Open index.html
You can directly open the `index.html` in your browser:
```bash
open index.html
```

Or use a simple live server:
```bash
npx live-server
```

---

## Project Structure

```
wordwise/
├── index.html       # Main HTML structure
├── script.js        # Fetch logic & DOM rendering
└── README.md        # Project documentation
```

---

##  How It Works

1. The user inputs a word
2. A `fetch()` call is made to: `https://api.dictionaryapi.dev/api/v2/entries/en/<word>`
3. Results (meanings, phonetics, audio) are parsed and displayed

---

##  Screenshot
![image](https://github.com/user-attachments/assets/0516d28a-e3a2-47d9-8f2a-679deeb5a3b5)


---
