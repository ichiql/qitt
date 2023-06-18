/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["./eslint.cjs"],
  plugins: ["import", "@typescript-eslint", "react", "jsx-a11y"],
};
