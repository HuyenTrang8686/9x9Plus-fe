'use client';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const ButtonMeaning = ({ baseUrl }: Props) => {
  const t = useTranslations('numerology');
  return (
    <Link href={`${baseUrl}&meaning=true`}>
      <Button className="button-base !px-4">
        {t('messageForYou')}
      </Button>
    </Link>
  );
};export default ButtonMeaning;
