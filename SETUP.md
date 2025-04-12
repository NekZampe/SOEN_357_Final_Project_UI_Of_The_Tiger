## Getting Started with the React + Vite Project

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16+ recommended)
- npm (comes with Node) or [yarn](https://yarnpkg.com/)

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/NekZampe/SOEN_357_Final_Project_UI_Of_The_Tiger.git
cd your-project-name
```

2. **Install dependencies**

Using **npm**:

```bash
npm install
```

Or using **yarn**:

```bash
yarn
```

---

### Running the Development Server

Start the Vite dev server:

Using **npm**:

```bash
npm run dev
```

Or using **yarn**:

```bash
yarn dev
```

The app should now be running at:  
 `http://localhost:5173`

---

### Build for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

The optimized output will be in the `dist/` folder.

---

### Preview Production Build

To locally preview the build (after running `build`):

```bash
npm run preview
# or
yarn preview
```

---

### Project Structure (Optional)

```
├── public/         # Static assets
├── src/
│   ├── assets/     # Images and styles
│   ├── components/ # Reusable components
│   ├── pages/      # Pages or views
│   └── main.jsx    # App entry point
├── index.html
├── package.json
├── vite.config.js
```
