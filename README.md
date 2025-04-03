
# BarterNet Landing Page

A modern Next.js landing page for BarterNet, an AI-powered platform for trading skills, services, and products.

## Features

- Responsive design for all devices
- Multilingual support (English, Georgian, German, Italian, French)
- Modern animations and interactions using Framer Motion
- Sleek, futuristic design inspired by Grok's landing page
- Optimized performance and accessibility

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- next-intl for internationalization

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/barternet-landing.git
cd barternet-landing
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Internationalization

The landing page supports 5 languages:
- English (default)
- Georgian (ქართული)
- German (Deutsch)
- Italian (Italiano)
- French (Français)

Language selection is persisted in local storage for returning visitors. The language can be changed using the language switcher in the footer.

## Project Structure

```
/
├── components/        # React components
├── pages/             # Next.js pages
├── public/            # Static assets
├── styles/            # CSS styles
└── translations/      # Localization files
```

## Deployment

This project can be deployed on any platform that supports Next.js applications, such as Vercel, Netlify, or a traditional server setup.

### Build for Production

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License.
