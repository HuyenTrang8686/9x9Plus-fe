'use client';
import ConnectionIcon from '@/libs/shared/icons/Connection';
import TelegramIcon from '@/libs/shared/icons/Telegram';
import { handleClipboardCopy } from '@/libs/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const ProfileController = ({ address }: { address: string }) => {
  const t = useTranslations('profile');

  return (
    <>
      <button type="button" className="rounded-md bg-[rgba(255,255,255,0.20)] flex items-center h-12 my-4 w-full" onClick={() => handleClipboardCopy(address || '', t('walletCopied'))}>
        <ConnectionIcon />
        <p className="text-shadow-custom">{t('shareJourney')}</p>
      </button>
      <Link href="https://t.me/+WrtBnbRub-k5ZWM1" target="_blank" className="rounded-md bg-[rgba(255,255,255,0.20)] flex items-center h-12 my-4 space-x-2">
        <TelegramIcon className="ms-4" />
        <p className="text-shadow-custom">{t('contact')}</p>
      </Link>
    </>
  );
};

export default ProfileController;
