# 📚 IRC FSD Library — Interactive Presentation

A high-fidelity, interactive carousel presentation for the **IRC FSD Library** (Islamic Research Center — Faizan-e-Sunnat Department). Built with pure HTML, CSS, and JavaScript — no frameworks required.

> 🌐 **Live Library:** [ircfsdlibrary.web.app](https://ircfsdlibrary.web.app)

---

## ✨ Features

- 🎠 **11-Slide Interactive Carousel** — Smooth navigation with keyboard, buttons, and dot indicators
- 🎨 **Glassmorphic UI** — Frosted glass cards with backdrop blur and soft shadows
- 📱 **Fully Responsive** — Optimized for desktop, tablet, mobile, and landscape orientations
- 🌙 **Animated Background** — Subtle gradient animation throughout the presentation
- 📊 **Progress Bar** — Dynamic slide progress indicator at the top
- 🔢 **Slide Counter** — Shows current slide number (e.g. `03 / 11`)
- ⌨️ **Keyboard Support** — Navigate with left/right arrow keys
- 🔄 **Animated Cycle Diagram** — SVG-based rotating arrows with positioned labels
- 🌿 **Urdu/Arabic Typography** — Custom fonts for beautiful right-to-left text rendering

---

## 📑 Slides Overview

| #   | Slide                   | Description                                                |
| --- | ----------------------- | ---------------------------------------------------------- |
| 1   | **Welcome**             | Opening with Arabic dua and project title                  |
| 2   | **Features**            | 9-card grid showcasing website capabilities                |
| 3   | **Tracking Cycle**      | Animated SVG pie chart showing the book tracking workflow  |
| 4   | **Access Steps**        | 4-step horizontal stepper for website registration process |
| 5   | **Search Methods**      | 5 different book search options displayed in cards         |
| 6   | **Librarian Dashboard** | 7-card grid of admin panel features                        |
| 7   | **Security**            | 8-card grid covering authentication and data protection    |
| 8   | **Costs**               | Line-item breakdown of project expenses (mostly free!)     |
| 9   | **Database Capacity**   | 4 metric cards showing Firebase limits                     |
| 10  | **Upcoming Features**   | Roadmap with "Coming Soon" badges                          |
| 11  | **Thank You**           | Split card with developer profile and contact links        |

---

## 🛠️ Tech Stack

| Technology             | Usage                                                 |
| ---------------------- | ----------------------------------------------------- |
| **HTML5**              | Semantic structure and content                        |
| **CSS3**               | Styling, animations, glassmorphism, responsive design |
| **Vanilla JavaScript** | Carousel logic, navigation, keyboard events           |
| **Font Awesome 6**     | Icons throughout the presentation                     |
| **Google Fonts**       | Poppins, Noto Nastaliq Urdu, Amiri Quran              |

---

## 📂 Project Structure

```
irc-website-ppt/
├── index.html          # Main HTML — all 11 slides
├── styles.css          # All styling + responsive media queries
├── script.js           # Carousel logic & navigation
├── assets/
│   └── umarsPic.png    # Developer profile image (Slide 11)
└── README.md           # This file
```

---

## 🚀 Getting Started

### Option 1: Open Directly

Simply open `index.html` in any modern browser:

```
Just double-click index.html
```

### Option 2: Local Server (Recommended)

```bash
# Using Node.js http-server
npx http-server . -p 8080

# Or using Python
python -m http.server 8080
```

Then visit `http://localhost:8080`

---

## 🎮 Controls

| Action         | Control                                 |
| -------------- | --------------------------------------- |
| Next Slide     | Click `›` button or press `→` arrow key |
| Previous Slide | Click `‹` button or press `←` arrow key |
| Jump to Slide  | Click any dot indicator                 |

---

## 📱 Responsive Design

The presentation is fully responsive across **4 breakpoints**:

| Breakpoint    | Target Devices | Key Adaptations                                    |
| ------------- | -------------- | -------------------------------------------------- |
| **≤ 768px**   | Tablets        | Grids → 2-3 columns, stepper → vertical layout     |
| **≤ 480px**   | Mobile phones  | Compact cards, 1-2 column grids, stacked cost rows |
| **≤ 360px**   | Small phones   | Minimum font sizes, tiny icons, compact controls   |
| **Landscape** | Rotated phones | Optimized height usage, compact spacing            |

### Key Responsive Features:

- Slides scroll vertically when content overflows on small screens
- The cycle diagram (Slide 3) scales proportionally with repositioned labels
- The horizontal stepper (Slide 4) becomes a vertical timeline on mobile
- The thank-you card (Slide 11) stacks to a column layout
- Navigation dots, buttons, and counter all scale down gracefully

---

## 🔧 Customization

### Adding a New Slide

1. Add a new `<div class="slide">` inside the `#track` div in `index.html`
2. Add a new dot in the `.dots-container`
3. Update the total slide count in `script.js` (currently `11`)
4. Update the progress bar width calculation (`100 / totalSlides`)

### Changing Colors

The main color palette used throughout:

```css
#1a2630  /* Darkest background */
#2b3e4c  /* Primary dark */
#49677d  /* Secondary / body text */
#354f60  /* Medium accent */
#ff416c  /* Accent pink (step titles, roadmap badges) */
#edfbff  /* Slide background light */
#d5eef5  /* Slide background dark */
```

### Changing Fonts

Font imports are at the top of `styles.css`. The main fonts used:

- **Poppins** — English headings and UI text
- **Noto Nastaliq Urdu** — Urdu body text
- **Amiri Quran** — Arabic religious text (Slide 1)

---

## 👤 Author

**Muhammad Umar**

- 💼 Developer & Designer
- 📧 umardev92@gmail.com
- 🌐 [Portfolio](https://mu-portfolio.web.app/)
- 🐙 [GitHub](https://github.com/Umar-Raza)

---

## 📄 License

This project is created for the **Islamic Research Center (IRC)** — Faizan-e-Sunnat Department, Faisalabad.

---

> _Built with ❤️ for the IRC FSD Library_
