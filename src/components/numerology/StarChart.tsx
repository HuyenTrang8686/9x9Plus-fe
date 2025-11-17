'use client';
import type { NumerologyResponse } from '@/types/numberology';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

type Props = {
  numerologyResult: NumerologyResponse['number'] | null;
};

const StarChart = ({ numerologyResult }: Props) => {
  const t = useTranslations('numerology');

  const locale = useLocale();

  return (
    <div className="relative min-h-[370px] min-w-[440px] max-w-[450px] w-full">
      <Image width={500} height={500} alt="aura" src="/assets/aura-circle.webp" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[49%] z-0" />
      <Image width={500} height={500} alt="star chart" src="/assets/star-chart.webp" className="size-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Destiny */}
      <button type="button" className={`flex flex-col items-center absolute -top-5 ${locale === 'en' ? 'left-34' : locale === 'vi' ? 'left-34' : 'left-38'}`}>
        <p className="text-shadow-custom text-medium-custom-2">{t('destiny')}</p>
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.destiny}
        </p>
      </button>

      {/* Life Path */}
      <button
        type="button"
        className={`flex flex-col items-center ${
          locale === 'en' ? 'right-6' : locale === 'vi' ? 'right-8' : 'right-16'
        } absolute top-10`}
      >
        <p className="text-shadow-custom text-medium-custom text-medium-custom-2">{t('personalYear')}</p>
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.lifePath}
        </p>
      </button>

      {/* Personality */}
      <button
        type="button"
        className={`flex flex-col items-center ${
          locale === 'en' ? 'left-4' : locale === 'vi' ? 'left-8' : 'left-14'
        } absolute top-27`}
      >
        <p className="text-shadow-custom text-medium-custom-2 ">{t('personality')}</p>
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.personality}
        </p>

      </button>

      {/* Character */}
      <button type="button"className={`flex flex-col items-center left-30 absolute bottom-0 ${locale === 'en' ? 'left-30' : locale === 'vi' ? 'left-32' : 'left-38'}`}>
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.soul}
        </p>
        <p className="text-shadow-custom text-medium-custom-2">{t('character')}</p>
      </button>

      {/* Soul */}
      <button type="button" className={`flex flex-col items-center absolute  bottom-12 ${locale === 'en' ? 'right-19' : locale === 'vi' ? 'right-15' : 'right-20'}`}>
        <p className="text-shadow-custom font-[590] text-[2.5rem] bg-number size-16">
          {numerologyResult?.body}
        </p>
        <p className="text-shadow-custom text-medium-custom-2">{t('soul')}</p>
      </button>

      <p className="absolute top-1/2 left-1/2 -translate-1/2 text-shadow-custom font-[590] text-[4.5rem]">
        {numerologyResult && numerologyResult.mainNumber}
      </p>
    </div>
  );
};

export default StarChart;
