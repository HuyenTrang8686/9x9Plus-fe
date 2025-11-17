import ButtonMeaning from '@/components/numerology/ButtonMeaning';
import StarChart from '@/components/numerology/StarChart';
import PreviousNavigation from '@/components/PreviousNavigation';
import type { NumerologyResponse } from '@/types/numberology';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type Props = {
  baseUrl: string;
  numerologyResult: NumerologyResponse['number'] | null;
};

const Numerology = ({ baseUrl, numerologyResult }: Props) => {
  const t = useTranslations('numerology');
  return (
    <div className="flex flex-col items-center h-[calc(100vh-100px)] overflow-y-auto">
      <PreviousNavigation baseUrl="/numerology" />
      <h1 className="text-shadow-custom text-medium-custom">{t('discoverYourself')}</h1>
      <p className="text-shadow-custom text-small-custom">{t('understandYourself')}</p>
      <Image width={500} height={500} className="w-[250px] h-[160px]" alt="logo 9x9" src="/assets/logo-9x9.png" />
      <StarChart numerologyResult={numerologyResult} />
      <div className="w-full flex justify-center mt-6">
        <ButtonMeaning baseUrl={baseUrl} />
      </div>
      <p className="text-[#FFD8BF] mt-6 italic text-center text-small-custom text-shadow-[0px_4px_4px_rgba(255,216,191,0.50)] px-4">
        {t('disclaimer')}
      </p>
    </div>
  );
};

export default Numerology;
