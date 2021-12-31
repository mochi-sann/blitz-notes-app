module.exports = {
  extends: ["blitz", "plugin:react/recommended"],
  plugins: ["import"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling"],
          "object",
          "type",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          { pattern: "app/**", group: "internal", position: "before" },
          { pattern: "db", group: "internal", position: "before" },
          { pattern: "./**.module.css", group: "index", position: "before" },
        ],
      },
    ],
  },
}
