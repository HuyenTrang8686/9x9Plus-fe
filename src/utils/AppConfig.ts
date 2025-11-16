import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: '9x9Plus',
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  localePrefix,
};
