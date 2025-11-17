import { montserrat } from '@/app/fonts/montserrat';
import IntroductionList from '@/components/introduction/IntroductionList';
import { getTranslations } from 'next-intl/server';

const page = async () => {
  const t = await getTranslations('introduction');

  return (
    <div className="flex flex-col items-center">
      <h1 className={`${montserrat.variable} title-introduction`}>{t('pageTitle')}</h1>
      <IntroductionList />
    </div>
  );
};

export default page;
