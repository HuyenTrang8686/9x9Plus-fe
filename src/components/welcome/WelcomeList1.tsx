'use client';

import ArrowIcon from '@/libs/shared/icons/Arrow';
import { useTranslations } from 'next-intl';

const WelcomeList1 = () => {
  const t = useTranslations('welcome');

  return (
    <div>
      <span>
        🎉
        {' '}
        {t('greeting')}
        {' '}
        <strong>9x9Plus</strong>
        !
      </span>
      <p className="text-[0.6875rem] font-medium shadow-none!">
        {t('description')}
      </p>
      <div className="font-bold text-white text-[0.6875rem] flex items-center h-4 -translate-x-3">
        <ArrowIcon className="size-9 translate-y-[3px]" />
        <span className="-translate-x-1 text-[0.6875rem] font-medium">
          {t('journeyTitle')}
        </span>
      </div>
      <ul className="list-inside space-y-1">
        <li>
          <span className="text-[0.6875rem] font-bold text-white">{t('step1.title')}</span>
          {' '}
          {t('step1.description')}
        </li>
        <li>
          <span className="text-[0.6875rem] font-bold text-white">{t('step2.title')}</span>
          {' '}
          {t('step2.description')}
        </li>
        <li>
          <span className="text-[0.6875rem] font-bold text-white">{t('step3.title')}</span>
          {' '}
          {t('step3.description')}
        </li>
        <li className="no-bullet translate-x-3">
          <span className="text-[0.6875rem] font-bold text-white">{t('step4.title')}</span>
          {' '}
          {t('step4.description')}
        </li>
      </ul>
    </div>
  );
};

export default WelcomeList1;
