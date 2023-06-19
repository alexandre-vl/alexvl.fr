/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#837AFE",
                "foreground": "#E1E7EF",
                "background": "#030711",
                "muted-foreground": "#7F8EA3",
                "card": "#0D1325",
                "pink": "#B468D5",
                "secondary": "#6364C8",
                "input" : "#1D283A"
            }
        },
    },
    plugins: [],
}

