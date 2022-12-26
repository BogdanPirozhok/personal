/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            minWidth: {
                10: '2.5rem',
                20: '5rem',
                24: '6rem'
            },
            fontFamily: {
                sans: ['var(--font-ubuntu)']
            },
            screens: {
                xs: '375px'
            },
            colors: {
                primary: {
                    accent: '#ff451b',
                    base: '#ffffff'
                },
                gray: {
                    300: '#494b50',
                    200: '#a7afbd',
                    100: '#d3d7df'
                },
                yellow: {
                    300: '#ffb324'
                }
            },
            backgroundColor: () => ({
                primary: {
                    dark: '#1d1b1b',
                    light: '#494b50',
                    accent: '#ff451b'
                },
                yellow: {
                    300: '#ffb324'
                }
            }),
            boxShadow: {
                marker: '0 0 0 3px #ff451b'
            }
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ]
};
