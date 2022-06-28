import type en from './en.json';

/**
 * Builds up valid keypaths for translations.
 */
type DefaultLocale = typeof en;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

// via: https://stackoverflow.com/a/65333050
type RecursiveKeyOf<TypeObj extends object> = {
  [TKey in keyof TypeObj & (string | number)]: RecursiveKeyOfHandleValue<
    TypeObj[TKey],
    `${TKey}`
  >;
}[keyof TypeObj & (string | number)];

type RecursiveKeyOfInner<TypeObj extends object> = {
  [TKey in keyof TypeObj & (string | number)]: RecursiveKeyOfHandleValue<
    TypeObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TypeObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TypeValue,
  Text extends string
> = TypeValue extends never[]
  ? Text
  : TypeValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TypeValue>}`
  : Text;
