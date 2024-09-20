module.exports = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./tailwind.config.ts",
  printWidth: 80,
  endOfLine: "lf",
  trailingComma: "es5",
  tailwindFunctions: ["cn", "cva", "clsx", "twMerge", "tw"],
  importOrder: [
    // server-only marker
    "^server-only$",
    // CSS imports
    "^(.*).css$",
    // Next (including next-auth) and React
    "^((@?next(.*))|(react))$",
    // Third-party modules
    "<THIRD_PARTY_MODULES>",
    // @tk repo modules
    "^@tk/(.*)$",
    // @ paths
    "^@(ui)?/(.*)$",
    // Relative imports
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};
