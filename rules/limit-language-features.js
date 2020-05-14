const fixableRules = { 'shorthand-property-no-redundant-values': true };
const rules = {

  /**
   * https://stylelint.io/user-guide/rules/at-rule-blacklist
   * Specify a blacklist of disallowed at-rules.
   */
  'at-rule-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix
   * Disallow vendor prefixes for at-rules.
   */
  'at-rule-no-vendor-prefix': true,

  /**
   * https://stylelint.io/user-guide/rules/at-rule-whitelist
   * Specify a whitelist of allowed at-rules.
   */
  'at-rule-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/color-named
   * Require (where possible) or disallow named colors.
   */
  'color-named': 'always-where-possible',

  /**
   * https://stylelint.io/user-guide/rules/color-no-hex
   * Disallow hex colors.
   */
  'color-no-hex': true,

  /**
   * https://stylelint.io/user-guide/rules/comment-word-blacklist
   * Specify a blacklist of disallowed words within comments.
   */
  'comment-word-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/custom-media-pattern
   * Specify a pattern for custom media query names.
   */
  'custom-media-pattern': null,

  /**
   * https://stylelint.io/user-guide/rules/custom-property-pattern
   * Specify a pattern for custom properties.
   */
  'custom-property-pattern': null,

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties
   * Disallow longhand properties that can be combined into one shorthand property.
   */
  'declaration-block-no-redundant-longhand-properties': true,

  /**
   * https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations
   * Limit the number of declarations within single line declaration blocks.
   */
  'declaration-block-single-line-max-declarations': 1,

  /**
   * https://stylelint.io/user-guide/rules/declaration-no-important
   * Disallow !important within declarations.
   */
  'declaration-no-important': true,

  /**
   * https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist
   * Specify a blacklist of disallowed property and unit pairs within declarations.
   */
  'declaration-property-unit-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist
   * Specify a whitelist of allowed property and unit pairs within declarations.
   */
  'declaration-property-unit-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/declaration-property-value-blacklist
   * Specify a blacklist of disallowed property and value pairs within declarations.
   */
  'declaration-property-value-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/declaration-property-value-whitelist
   * Specify a whitelist of allowed property and value pairs within declarations.
   */
  'declaration-property-value-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/function-blacklist
   * Specify a blacklist of disallowed functions.
   */
  'function-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/function-url-no-scheme-relative
   * Disallow scheme-relative urls.
   */
  'function-url-no-scheme-relative': null,

  /**
   * https://stylelint.io/user-guide/rules/function-url-scheme-blacklist
   * Specify a blacklist of disallowed url schemes.
   */
  'function-url-scheme-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/function-url-scheme-whitelist
   * Specify a whitelist of allowed url schemes.
   */
  'function-url-scheme-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/function-whitelist
   * Specify a whitelist of allowed functions.
   */
  'function-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/keyframes-name-pattern
   * Specify a pattern for keyframe names.
   */
  'keyframes-name-pattern': null,

  /**
   * https://stylelint.io/user-guide/rules/max-nesting-depth
   * Limit the depth of nesting.
   */
  'max-nesting-depth': null,

  /**
   * https://stylelint.io/user-guide/rules/media-feature-name-blacklist
   * Specify a blacklist of disallowed media feature names.
   */
  'media-feature-name-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix
   * Disallow vendor prefixes for media feature names.
   */
  'media-feature-name-no-vendor-prefix': true,

  /**
   * https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist
   * Specify a whitelist of allowed media feature name and value pairs.
   */
  'media-feature-name-value-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/media-feature-name-whitelist
   * Specify a whitelist of allowed media feature names.
   */
  'media-feature-name-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/no-unknown-animations
   * Disallow unknown animations.
   */
  'no-unknown-animations': null,

  /**
   * https://stylelint.io/user-guide/rules/number-max-precision
   * Limit the number of decimal places allowed in numbers.
   */
  'number-max-precision': null,

  /**
   * https://stylelint.io/user-guide/rules/property-blacklist
   * Specify a blacklist of disallowed properties.
   */
  'property-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/property-no-vendor-prefix
   * Disallow vendor prefixes for properties.
   */
  'property-no-vendor-prefix': true,

  /**
   * https://stylelint.io/user-guide/rules/property-whitelist
   * Specify a whitelist of allowed properties.
   */
  'property-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist
   * Specify a blacklist of disallowed attribute operators.
   */
  'selector-attribute-operator-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist
   * Specify a whitelist of allowed attribute operators.
   */
  'selector-attribute-operator-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-class-pattern
   * Specify a pattern for class selectors.
   */
  'selector-class-pattern': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-combinator-blacklist
   * Specify a blacklist of disallowed combinators.
   */
  'selector-combinator-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-combinator-whitelist
   * Specify a whitelist of allowed combinators.
   */
  'selector-combinator-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-id-pattern
   * Specify a pattern for ID selectors.
   */
  'selector-id-pattern': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-attribute
   * Limit the number of attribute selectors in a selector.
   */
  'selector-max-attribute': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-class
   * Limit the number of classes in a selector.
   */
  'selector-max-class': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-combinators
   * Limit the number of combinators in a selector.
   */
  'selector-max-combinators': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-compound-selectors
   * Limit the number of compound selectors in a selector.
   */
  'selector-max-compound-selectors': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-empty-lines
   * Limit the number of adjacent empty lines within selectors.
   */
  'selector-max-empty-lines': 0,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-id
   * Limit the number of ID selectors in a selector.
   */
  'selector-max-id': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-pseudo-class
   * Limit the number of pseudo-classes in a selector.
   */
  'selector-max-pseudo-class': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-specificity
   * Limit the specificity of selectors.
   */
  'selector-max-specificity': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-type
   * Limit the number of type in a selector.
   */
  'selector-max-type': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-max-universal
   * Limit the number of universal selectors in a selector.
   */
  'selector-max-universal': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-nested-pattern
   * Specify a pattern for the selectors of rules nested within rules.
   */
  'selector-nested-pattern': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-no-qualifying-type
   * Disallow qualifying a selector by type.
   */
  'selector-no-qualifying-type': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-no-vendor-prefix
   * Disallow vendor prefixes for selectors.
   */
  'selector-no-vendor-prefix': true,

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist
   * Specify a blacklist of disallowed pseudo-class selectors.
   */
  'selector-pseudo-class-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist
   * Specify a whitelist of allowed pseudo-class selectors.
   */
  'selector-pseudo-class-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist
   * Specify a blacklist of disallowed pseudo-element selectors.
   */
  'selector-pseudo-element-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist
   * Specify a whitelist of allowed pseudo-element selectors.
   */
  'selector-pseudo-element-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/time-min-milliseconds
   * Specify the minimum number of milliseconds for time values.
   */
  'time-min-milliseconds': null,

  /**
   * https://stylelint.io/user-guide/rules/unit-blacklist
   * Specify a blacklist of disallowed units.
   */
  'unit-blacklist': null,

  /**
   * https://stylelint.io/user-guide/rules/unit-whitelist
   * Specify a whitelist of allowed units.
   */
  'unit-whitelist': null,

  /**
   * https://stylelint.io/user-guide/rules/value-no-vendor-prefix
   * Disallow vendor prefixes for values.
   */
  'value-no-vendor-prefix': true,
};

module.exports = {
  rules: {
    ...fixableRules,
    ...rules,
  },
};
