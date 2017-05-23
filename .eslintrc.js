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
        "react/no-array-index-key": 0,
        "arrow-body-style": 0,
        "no-param-reassign": 0,
        "import/no-extraneous-dependencies": 0,
        "object-shorthand": 0,
        "arrow-parens": 0,
        "no-use-before-define": 0
    },
    "parser": "babel-eslint",
    "globals": {
        "navigator": true,
        "alert": true,
        "fetch": true
    }
};