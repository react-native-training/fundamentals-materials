module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0,
        "react/no-multi-comp": 0,
        "react/prefer-stateless-function": 0,
    },
    "parser": "babel-eslint",
};