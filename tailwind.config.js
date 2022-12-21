module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            'mobile': {'min': '0px', 'max': '768px'},
            'desktop': '769px'
        },
        extend: {
            colors: {
                'primary-base': 'var(--ion-color-primary)',
                'primary-shade': 'var(--ion-color-primary-shade)',
                'primary-tint': 'var(--primary-tint)',

                'secondary-base': 'var(--secondary-base)',
                'secondary-shade': 'var(--secondary-shade)',
                'secondary-tint': 'var(--secondary-tint)',

                'success-base': 'var(--success-base)',
                'success-shade': 'var(--success-shade)',
                'success-tint': 'var(--success-tint)',

                'warning-base': 'var(--warning-base)',
                'warning-shade': 'var(--warning-shade)',
                'warning-tint': 'var(--warning-tint)',

                'danger-base': 'var(--danger-base)',
                'danger-shade': 'var(--danger-shade)',
                'danger-tint': 'var(--danger-tint)',

                'dark-base': 'var(--dark-base)',
                'dark-shade': 'var(--dark-shade)',
                'dark-tint': 'var(--dark-tint)',

                'medium-base': 'var(--medium-base)',
                'medium-shade': 'var(--medium-shade)',
                'medium-tint': 'var(--medium-tint)',

                'light-base': 'var(--light-base)',
                'light-shade': 'var(--light-shade)',
                'light-tint': 'var(--light-tint)',
            },
            boxShadow: {
                'default': 'var(--shadow-default)'
            }
        }
    },
    daisyui: {
        themes: false
    },
    plugins: [require("daisyui")],
}
