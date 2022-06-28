import i18n from 'i18n-js';
import type { TxKeyPath } from 'src/shared/config/i18n/types';

export const t = (key: TxKeyPath, options?: i18n.TranslateOptions) => {
  return i18n.t(key, options);
};
