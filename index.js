module.exports = {
  extends: [
    './rules/conventions',
    './rules/possible-errors',
    './rules/stylistic-issues',
  ].map(require.resolve),
};
