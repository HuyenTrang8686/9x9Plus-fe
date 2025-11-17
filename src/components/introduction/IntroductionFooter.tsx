'use client';

import { Button } from '@/components/ui/button';
import HandMoney from '@/libs/shared/icons/HandMoney';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const IntroductionFooter = () => {
  const t = useTranslations('introduction');
  
  return (
    <div className="w-full flex flex-col items-center justify-center pt-[0.12rem]">
      <p className="footer-title-introduction text-shadow-custom max-w-[20.4375rem] w-full text-center">
        👉 {t('footerText')}
      </p>
      <p className="footer-subtitle-introduction pb-[0.75rem] pt-[0.62rem]">{t('footerSubtitle')}</p>
      <Link href="/kyc" className="max-w-[20.9375rem] w-full mb-4" prefetch>
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
