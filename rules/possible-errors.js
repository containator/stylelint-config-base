const fixableRules = { 'no-extra-semicolons': true };
const rules = {

  /**
   * https://stylelint.io/user-guide/rules/at-rule-no-unknown
   * Disallow unknown at-rules.
   */
  'at-rule-no-unknown': true,

  /**
   * https://stylelint.io/user-guide/rules/block-no-empty
   * Disallow empty blocks.
   */
  'block-no-empty': true,

  /**
   * https://stylelint.io/user-guide/rules/color-no-invalid-hex
   * Disallow invalid hex colors.
   */
  'color-no-invalid-hex': true,

  /**
   * https://stylelint.io/user-guide/rules/comment-no-empty
   * Disallow empty comments.
   */
  'comment-no-empty': true,

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties
   * Disallow duplicate properties within declaration blocks.
   */
  'declaration-block-no-duplicate-properties': true,

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides
   * Disallow shorthand properties that override related longhand properties within declaration blocks.
   */
  'declaration-block-no-shorthand-property-overrides': true,

  /**
   * https://stylelint.io/user-guide/rules/font-family-no-duplicate-names
   * Disallow duplicate font family names.
   */
  'font-family-no-duplicate-names': true,

  /**
   * https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword
   * Disallow missing generic families in lists of font family names.
   */
  'font-family-no-missing-generic-family-keyword': true,

  /**
   * https://stylelint.io/user-guide/rules/function-calc-no-invalid
   * Disallow an invalid expression within calc functions.
   */
  'function-calc-no-invalid': true,

  /**
   * https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator
   * Disallow an unspaced operator within calc functions.
   */
  'function-calc-no-unspaced-operator': true,

  /**
   * https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction
   * Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
   */
  'function-linear-gradient-no-nonstandard-direction': true,

  /**
   * https://stylelint.io/user-guide/rules/keyframe-declaration-no-important
   * Disallow !important within keyframe declarations.
   */
  'keyframe-declaration-no-important': true,

  /**
   * https://stylelint.io/user-guide/rules/media-feature-name-no-unknown
   * Disallow unknown media feature names.
   */
  'media-feature-name-no-unknown': true,

  /**
   * https://stylelint.io/user-guide/rules/no-descending-specificity
   * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
   */
  'no-descending-specificity': true,

  /**
   * https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules
   * Disallow duplicate @import rules within a stylesheet.
   */
  'no-duplicate-at-import-rules': true,

  /**
   * https://stylelint.io/user-guide/rules/no-duplicate-selectors
   * Disallow duplicate selectors.
   */
  'no-duplicate-selectors': true,

  /**
   * https://stylelint.io/user-guide/rules/no-empty-source
   * Disallow empty sources.
   */
  'no-empty-source': null,

  /**
   * https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments
   * Disallow double-slash comments (//...) which are not supported by CSS.
   */
  'no-invalid-double-slash-comments': true,

  /**
   * https://stylelint.io/user-guide/rules/property-no-unknown
   * Disallow unknown properties.
   */
  'property-no-unknown': true,

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown
   * Disallow unknown pseudo-class selectors.
   */
  'selector-pseudo-class-no-unknown': true,

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown
   * Disallow unknown pseudo-element selectors.
   */
  'selector-pseudo-element-no-unknown': true,

  /**
   * https://stylelint.io/user-guide/rules/selector-type-no-unknown
   * Disallow unknown type selectors.
   */
  'selector-type-no-unknown': true,

  /**
   * https://stylelint.io/user-guide/rules/string-no-newline
   * Disallow (unescaped) newlines in strings.
   */
  'string-no-newline': true,

  /**
   * https://stylelint.io/user-guide/rules/unit-no-unknown
   * Disallow unknown units.
   */
  'unit-no-unknown': true,
};

module.exports = {
  rules: {
    ...fixableRules,
    ...rules,
  },
};
