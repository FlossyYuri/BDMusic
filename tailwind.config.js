module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'pop': ["Poppins", "sans-serif"]
            },
            minHeight: {
                '1': '130px'
            }
        },
        container: {
            padding: {
                DEFAULT: '2rem',
                sm: '4rem',
                lg: '8rem',
                xl: '10rem',
                '2xl': '12rem',
            },
        },
        minWidth: {
            'xs': "20rem",
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
        minHeight: {
            '1': "1rem",
        }
    },
    variants: {
        extend: {
            brightness: ['hover', 'focus'],
            cursor: ['disabled'],
            opacity: ['disabled'],
            animation: ['hover'],
        },
    },
    plugins: [],
}
