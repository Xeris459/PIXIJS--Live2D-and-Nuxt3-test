module.exports = {
    theme: {
        extend: {
            'animation': {
                'text': 'text 5s ease infinite',
                'rolltext': 'slide-mob 5s infinite',
            },
            'keyframes': {
                'text': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                'slide-mob': {
                    '0%, 100%': {
                        'top': '0'
                    },
                    '25%': {
                        'top': '-2.1rem'
                    },
                    '50%': {
                        'top': '-4.2rem'
                    },
                    '75%': {
                        'top': '-6.3rem'
                    },
                },
            }
        },
    }
}