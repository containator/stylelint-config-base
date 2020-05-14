const fixableRules = {

  /**
   * https://stylelint.io/user-guide/rules/at-rule-empty-line-before
   * Require or disallow an empty line before at-rules.
   * Fixable
   */
  'at-rule-empty-line-before': null,

  /**
   * https://stylelint.io/user-guide/rules/at-rule-name-case
   * Specify lowercase or uppercase for at-rules names.
   * Fixable
   */
  'at-rule-name-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/at-rule-name-space-after
   * Require a single space after at-rule names.
   * Fixable
   */
  'at-rule-name-space-after': 'always',

  /**
   * https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after
   * Require a newline after the semicolon of at-rules.
   * Fixable
   */
  'at-rule-semicolon-newline-after': 'always',

  /**
   * https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before
   * Require or disallow an empty line before the closing brace of blocks.
   * Fixable
   */
  'block-closing-brace-empty-line-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/block-closing-brace-newline-after
   * Require a newline or disallow whitespace after the closing brace of blocks.
   * Fixable
   */
  'block-closing-brace-newline-after': null,

  /**
   * https://stylelint.io/user-guide/rules/block-closing-brace-newline-before
   * Require a newline or disallow whitespace before the closing brace of blocks.
   * Fixable
   */
  'block-closing-brace-newline-before': null,

  /**
   * https://stylelint.io/user-guide/rules/block-closing-brace-space-before
   * Require a single space or disallow whitespace before the closing brace of blocks.
   * Fixable
   */
  'block-closing-brace-space-before': null,

  /**
   * https://stylelint.io/user-guide/rules/block-opening-brace-newline-after
   * Require a newline after the opening brace of blocks.
   * Fixable
   */
  'block-opening-brace-newline-after': null,

  /**
   * https://stylelint.io/user-guide/rules/block-opening-brace-newline-before
   * Require a newline or disallow whitespace before the opening brace of blocks.
   * Fixable
   */
  'block-opening-brace-newline-before': null,

  /**
   * https://stylelint.io/user-guide/rules/block-opening-brace-space-after
   * Require a single space or disallow whitespace after the opening brace of blocks.
   * Fixable
   */
  'block-opening-brace-space-after': null,

  /**
   * https://stylelint.io/user-guide/rules/block-opening-brace-space-before
   * Require a single space or disallow whitespace before the opening brace of blocks.
   * Fixable
   */
  'block-opening-brace-space-before': null,

  /**
   * https://stylelint.io/user-guide/rules/color-hex-case
   * Specify lowercase or uppercase for hex colors.
   * Fixable
   */
  'color-hex-case': 'upper',

  /**
   * https://stylelint.io/user-guide/rules/color-hex-length
   * Specify short or long notation for hex colors.
   * Fixable
   */
  'color-hex-length': 'long',

  /**
   * https://stylelint.io/user-guide/rules/comment-empty-line-before
   * Require or disallow an empty line before comments.
   * Fixable
   */
  'comment-empty-line-before': 'always',

  /**
   * https://stylelint.io/user-guide/rules/comment-whitespace-inside
   * Require or disallow whitespace on the inside of comment markers.
   * Fixable
   */
  'comment-whitespace-inside': 'always',

  /**
   * https://stylelint.io/user-guide/rules/custom-property-empty-line-before
   * Require or disallow an empty line before custom properties.
   * Fixable
   */
  'custom-property-empty-line-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/declaration-bang-space-after
   * Require a single space or disallow whitespace after the bang of declarations.
   * Fixable
   */
  'declaration-bang-space-after': 'never',

  /**
   * https://stylelint.io/user-guide/rules/declaration-bang-space-before
   * Require a single space or disallow whitespace before the bang of declarations.
   * Fixable
   */
  'declaration-bang-space-before': 'always',

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after
   * Require a newline or disallow whitespace after the semicolons of declaration blocks.
   * Fixable
   */
  'declaration-block-semicolon-newline-after': 'always',

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after
   * Require a single space or disallow whitespace after the semicolons of declaration blocks.
   * Fixable
   */
  'declaration-block-semicolon-space-after': 'always-single-line',

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before
   * Require a single space or disallow whitespace before the semicolons of declaration blocks.
   * Fixable
   */
  'declaration-block-semicolon-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon
   * Require or disallow a trailing semicolon within declaration blocks.
   * Fixable
   */
  'declaration-block-trailing-semicolon': 'always',

  /**
   * https://stylelint.io/user-guide/rules/declaration-colon-newline-after
   * Require a newline or disallow whitespace after the colon of declarations.
   * Fixable
   */
  'declaration-colon-newline-after': 'always-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/declaration-colon-space-after
   * Require a single space or disallow whitespace after the colon of declarations.
   * Fixable
   */
  'declaration-colon-space-after': 'always',

  /**
   * https://stylelint.io/user-guide/rules/declaration-colon-space-before
   * Require a single space or disallow whitespace before the colon of declarations.
   * Fixable
   */
  'declaration-colon-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/declaration-empty-line-before
   * Require or disallow an empty line before declarations.
   * Fixable
   */
  'declaration-empty-line-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/function-comma-newline-after
   * Require a newline or disallow whitespace after the commas of functions.
   * Fixable
   */
  'function-comma-newline-after': 'always-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/function-comma-newline-before
   * Require a newline or disallow whitespace before the commas of functions.
   * Fixable
   */
  'function-comma-newline-before': 'never-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/function-comma-space-after
   * Require a single space or disallow whitespace after the commas of functions.
   * Fixable
   */
  'function-comma-space-after': 'always-single-line',

  /**
   * https://stylelint.io/user-guide/rules/function-comma-space-before
   * Require a single space or disallow whitespace before the commas of functions.
   * Fixable
   */
  'function-comma-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/function-max-empty-lines
   * Limit the number of adjacent empty lines within functions.
   * Fixable
   */
  'function-max-empty-lines': 0,

  /**
   * https://stylelint.io/user-guide/rules/function-name-case
   * Specify lowercase or uppercase for function names.
   * Fixable
   */
  'function-name-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/function-parentheses-newline-inside
   * Require a newline or disallow whitespace on the inside of the parentheses of functions.
   * Fixable
   */
  'function-parentheses-newline-inside': 'never-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/function-parentheses-space-inside
   * Require a single space or disallow whitespace on the inside of the parentheses of functions.
   * Fixable
   */
  'function-parentheses-space-inside': 'never',

  /**
   * https://stylelint.io/user-guide/rules/function-whitespace-after
   * Require or disallow whitespace after functions.
   * Fixable
   */
  'function-whitespace-after': 'always',

  /**
   * https://stylelint.io/user-guide/rules/indentation
   * Specify indentation.
   * Fixable
   */
  'indentation': 2,

  /**
   * https://stylelint.io/user-guide/rules/length-zero-no-unit
   * Disallow units for zero lengths.
   * Fixable
   */
  'length-zero-no-unit': true,

  /**
   * https://stylelint.io/user-guide/rules/linebreaks
   * Specify unix or windows linebreaks.
   * Fixable
   */
  'linebreaks': 'unix',

  /**
   * https://stylelint.io/user-guide/rules/media-feature-colon-space-after
   * Require a single space or disallow whitespace after the colon in media features.
   * Fixable
   */
  'media-feature-colon-space-after': 'always',

  /**
   * https://stylelint.io/user-guide/rules/media-feature-colon-space-before
   * Require a single space or disallow whitespace before the colon in media features.
   * Fixable
   */
  'media-feature-colon-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/media-feature-name-case
   * Specify lowercase or uppercase for media feature names.
   * Fixable
   */
  'media-feature-name-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside
   * Require a single space or disallow whitespace on the inside of the parentheses within media features.
   * Fixable
   */
  'media-feature-parentheses-space-inside': 'never',

  /**
   * https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after
   * Require a single space or disallow whitespace after the range operator in media features.
   * Fixable
   */
  'media-feature-range-operator-space-after': 'always',

  /**
   * https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before
   * Require a single space or disallow whitespace before the range operator in media features.
   * Fixable
   */
  'media-feature-range-operator-space-before': 'always',

  /**
   * https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after
   * Require a newline or disallow whitespace after the commas of media query lists.
   * Fixable
   */
  'media-query-list-comma-newline-after': 'always-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/media-query-list-comma-space-after
   * Require a single space or disallow whitespace after the commas of media query lists.
   * Fixable
   */
  'media-query-list-comma-space-after': 'always-single-line',

  /**
   * https://stylelint.io/user-guide/rules/media-query-list-comma-space-before
   * Require a single space or disallow whitespace before the commas of media query lists.
   * Fixable
   */
  'media-query-list-comma-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/no-empty-first-line
   * Disallow empty first lines..
   * Fixable
   */
  'no-empty-first-line': true,

  /**
   * https://stylelint.io/user-guide/rules/no-eol-whitespace
   * Disallow end-of-line whitespace.
   * Fixable
   */
  'no-eol-whitespace': true,

  /**
   * https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline
   * Disallow missing end-of-source newlines.
   * Fixable
   */
  'no-missing-end-of-source-newline': null,

  /**
   * https://stylelint.io/user-guide/rules/number-leading-zero
   * Require or disallow a leading zero for fractional numbers less than 1.
   * Fixable
   */
  'number-leading-zero': 'always',

  /**
   * https://stylelint.io/user-guide/rules/number-no-trailing-zeros
   * Disallow trailing zeros in numbers.
   * Fixable
   */
  'number-no-trailing-zeros': true,

  /**
   * https://stylelint.io/user-guide/rules/property-case
   * Specify lowercase or uppercase for properties.
   * Fixable
   */
  'property-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/rule-empty-line-before
   * Require or disallow an empty line before rules.
   * Fixable
   */
  'rule-empty-line-before': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside
   * Require a single space or disallow whitespace on the inside of the brackets within attribute selectors.
   * Fixable
   */
  'selector-attribute-brackets-space-inside': 'never',

  /**
   * https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after
   * Require a single space or disallow whitespace after operators within attribute selectors.
   * Fixable
   */
  'selector-attribute-operator-space-after': 'never',

  /**
   * https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before
   * Require a single space or disallow whitespace before operators within attribute selectors.
   * Fixable
   */
  'selector-attribute-operator-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/selector-combinator-space-after
   * Require a single space or disallow whitespace after the combinators of selectors.
   * Fixable
   */
  'selector-combinator-space-after': 'always',

  /**
   * https://stylelint.io/user-guide/rules/selector-combinator-space-before
   * Require a single space or disallow whitespace before the combinators of selectors.
   * Fixable
   */
  'selector-combinator-space-before': 'always',

  /**
   * https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space
   * Disallow non-space characters for descendant combinators of selectors.
   * Fixable
   */
  'selector-descendant-combinator-no-non-space': true,

  /**
   * https://stylelint.io/user-guide/rules/selector-list-comma-newline-after
   * Require a newline or disallow whitespace after the commas of selector lists.
   * Fixable
   */
  'selector-list-comma-newline-after': 'always-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/selector-list-comma-newline-before
   * Require a newline or disallow whitespace before the commas of selector lists.
   * Fixable
   */
  'selector-list-comma-newline-before': 'never-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/selector-list-comma-space-after
   * Require a single space or disallow whitespace after the commas of selector lists.
   * Fixable
   */
  'selector-list-comma-space-after': 'always-single-line',

  /**
   * https://stylelint.io/user-guide/rules/selector-list-comma-space-before
   * Require a single space or disallow whitespace before the commas of selector lists.
   * Fixable
   */
  'selector-list-comma-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-class-case
   * Specify lowercase or uppercase for pseudo-class selectors.
   * Fixable
   */
  'selector-pseudo-class-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside
   * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors.
   * Fixable
   */
  'selector-pseudo-class-parentheses-space-inside': 'never',

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation
   * Specify single or double colon notation for applicable pseudo-elements.
   * Fixable
   */
  'selector-pseudo-element-colon-notation': 'double',

  /**
   * https://stylelint.io/user-guide/rules/selector-type-case
   * Specify lowercase or uppercase for type selector.
   * Fixable
   */
  'selector-type-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/string-quotes
   * Specify single or double quotes around strings.
   * Fixable
   */
  'string-quotes': 'single',

  /**
   * https://stylelint.io/user-guide/rules/unit-case
   * Specify lowercase or uppercase for units.
   * Fixable
   */
  'unit-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/value-keyword-case
   * Specify lowercase or uppercase for keywords values.
   * Fixable
   */
  'value-keyword-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/value-list-comma-newline-after
   * Require a newline or disallow whitespace after the commas of value lists.
   * Fixable
   */
  'value-list-comma-newline-after': 'always-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/value-list-comma-space-after
   * Require a single space or disallow whitespace after the commas of value lists.
   * Fixable
   */
  'value-list-comma-space-after': 'always-single-line',

  /**
   * https://stylelint.io/user-guide/rules/value-list-comma-space-before
   * Require a single space or disallow whitespace before the commas of value lists.
   * Fixable
   */
  'value-list-comma-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/value-list-max-empty-lines
   * Limit the number of adjacent empty lines within value lists.
   * Fixable
   */
  'value-list-max-empty-lines': 0,
};
const rules = {

  /**
   * https://stylelint.io/user-guide/rules/at-rule-name-newline-after
   * Require a newline after at-rule names.
   */
  'at-rule-name-newline-after': 'always-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before
   * Require a single space or disallow whitespace before the semicolons of at rules.
   */
  'at-rule-semicolon-space-before': 'never',

  /**
   * https://stylelint.io/user-guide/rules/block-closing-brace-space-after
   * Require a single space or disallow whitespace after the closing brace of blocks.
   */
  'block-closing-brace-space-after': null,

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before
   * Require a newline or disallow whitespace before the semicolons of declaration blocks.
   */
  'declaration-block-semicolon-newline-before': 'never-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/font-family-name-quotes
   * Specify whether or not quotation marks should be used around font family names.
   */
  'font-family-name-quotes': 'always-unless-keyword',

  /**
   * https://stylelint.io/user-guide/rules/font-weight-notation
   * Require numeric or named (where possible) font-weight values.
   */
  'font-weight-notation': 'named-where-possible',

  /**
   * https://stylelint.io/user-guide/rules/function-url-quotes
   * Require or disallow quotes for urls.
   */
  'function-url-quotes': 'always',

  /**
   * https://stylelint.io/user-guide/rules/max-empty-lines
   * Limit the number of adjacent empty lines.
   */
  'max-empty-lines': 1,

  /**
   * https://stylelint.io/user-guide/rules/max-line-length
   * Limit the length of a line.
   */
  'max-line-length': null,

  /**
   * https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before
   * Require a newline or disallow whitespace before the commas of media query lists.
   */
  'media-query-list-comma-newline-before': 'never-multi-line',

  /**
   * https://stylelint.io/user-guide/rules/selector-attribute-quotes
   * Require or disallow quotes for attribute values.
   */
  'selector-attribute-quotes': 'always',

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-element-case
   * Specify lowercase or uppercase for pseudo-element selectors.
   */
  'selector-pseudo-element-case': 'lower',

  /**
   * https://stylelint.io/user-guide/rules/value-list-comma-newline-before
   * Require a newline or disallow whitespace before the commas of value lists.
   */
  'value-list-comma-newline-before': 'never-multi-line',
};

module.exports = {
  rules: {
    ...fixableRules,
    ...rules,
  },
};
