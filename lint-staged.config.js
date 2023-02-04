module.exports = {
  // this will check Typescript files
  // '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': filenames => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': filenames => `npx prettier --write ${filenames.join(' ')}`
};
