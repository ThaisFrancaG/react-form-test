export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'chore',
      ],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
  parserPreset: {
    parserOpts: {
      // Aceita tipos em minúsculas (a-z), dois pontos opcionais, depois espaço e subject
      headerPattern: /^(\w+)(:)\s(.+)$/,
      headerCorrespondence: ['type', 'separator', 'subject'],
    },
  },
};
