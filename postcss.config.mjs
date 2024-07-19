/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
        "tailwindcss/nesting": {},
    },
};

export default config;
