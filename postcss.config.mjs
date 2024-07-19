/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        "postcss-import": {},
        tailwindcss: {},
        autoprefixer: {},
        "tailwindcss/nesting": {},
        ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
};

export default config;
