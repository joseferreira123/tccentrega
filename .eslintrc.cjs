{
  "root": true,
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "requireConfigFile": false
  },
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-console": "warn",
    "import/order": ["error", {
      "groups": ["builtin", "external", "internal"],
      "pathGroups": [
        {
          "pattern": "react",
          "group": "external",
          "position": "before"
        }
      ],
      "pathGroupsExcludedImportTypes": ["react"],
      "alphabetize": { "order": "asc", "caseInsensitive": true },
      "newlines-between": "always"
    }],
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/export": "error",
    "jsx-a11y/anchor-is-valid": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
