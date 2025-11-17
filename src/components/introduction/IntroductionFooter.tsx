'use client';

import { Button } from '@/components/ui/button';
import HandMoney from '@/libs/shared/icons/HandMoney';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const IntroductionFooter = () => {
  const t = useTranslations('introduction');

  return (
    <div className="w-full flex flex-col items-center justify-center pt-[0.12rem]">
      <p className="footer-title-introduction text-shadow-custom max-w-81.75 w-full text-center">
        👉
        {' '}
        {t('footerText')}
      </p>
      <p className="footer-subtitle-introduction pb-3 pt-[0.62rem]">{t('footerSubtitle')}</p>
      <Link href="/kyc" className="max-w-83.75 w-full mb-4" prefetch>
        <Button className="button-rounded w-full">
          <HandMoney />
          <span className="-translate-x-4">
            {t('unlockNow')}
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default IntroductionFooter;
