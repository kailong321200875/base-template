module.exports = {
  // '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{js,jsx,ts,tsx}': ['prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  // '*.vue': ['prettier --write', 'stylelint --fix'],
  '*.vue': ['prettier --write'],
  // '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write'],
  '*.{scss,less,styl,css,html}': ['prettier --write'],
  '*.md': ['prettier --write'],
  '*.hbs': ['prettier --write']
}
