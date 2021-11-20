module.exports = {
    '*.ts?(x)': [() => 'tsc --noEmit', 'eslint --fix --quiet'],
    '*.js?(x)': ['eslint --fix --quiet'],
    '*.{js,ts,jsx,tsx,json,md,*rc}': ['prettier --write'],
}