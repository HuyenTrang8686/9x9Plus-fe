'use client';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type Props = {
  isKyc: boolean;
};

const WelcomeFooter = ({ isKyc }: Props) => {
  const t = useTranslations('welcome');

  return (
    <>
      <Link href={isKyc ? '/' : 'introduction'} prefetch>
        <Button className="button-rounded py-[1rem]">
          <span className="text-wrap">{t('startJourney')}</span>
        </Button>
      </Link>
    </>
  );
};

export default WelcomeFooter;
