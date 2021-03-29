module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    './pages/**/*.js',
    './components/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    divideColor: theme => ({
      'ojgreen': '#10aab0',
      'ojblack': '#2c2c2c',      
     }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
