'use client';
import ControllerIcon from '@/libs/shared/icons/Controller';
import HouseIcon from '@/libs/shared/icons/House';
import HumanIcon from '@/libs/shared/icons/Human';
import NotesIcon from '@/libs/shared/icons/Notes';
import QuestionIcon from '@/libs/shared/icons/Question';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const t = useTranslations('navigation');
  const pathName = usePathname();

  const tabBar = [
    { icon: HouseIcon, title: t('home'), to: '/' },
    { icon: HumanIcon, title: t('numerology'), to: '/numerology' },
    { icon: ControllerIcon, title: t('goldMining'), to: '/gold-mining' },
    { icon: NotesIcon, title: t('ranking'), to: '/ranking' },
    { icon: QuestionIcon, title: t('mission'), to: '/mission' },
  ];
  if (pathName.includes('game') || pathName.includes('info')) {
    return null;
  }
  return (
    <footer
      className="absolute bottom-0 w-full footer"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {tabBar.map((item) => {
        const Icon = item.icon;
        const isActive = item.to === '/' ? pathName === '/' : pathName.includes(item.to);
        return (
          <Link
            href={item.to}
            key={item.title}
            prefetch
            className={`footer-items ${isActive ? '' : 'opacity-50'}`}
          >
            <Icon />
            <span className="text-white font-[500] text-[0.5625rem]">
              {item.title}
            </span>
          </Link>
        );
      })}
    </footer>
  );
}
