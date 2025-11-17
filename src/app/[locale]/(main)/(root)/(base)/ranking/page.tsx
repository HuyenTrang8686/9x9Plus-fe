import RankingList from '@/components/ranking/RankingList';
import { getTranslations } from 'next-intl/server';

const page = async () => {
  const t = await getTranslations('ranking');

  return (
    <div className="min-h-screen bg-9x9 flex flex-col items-center pt-10">
      <h2 className="text-[#BAE7FF] text-shadow-custom text-[1.25rem] font-[274]">{t('title')}</h2>
      <h1 className="text-[#BAE7FF] text-shadow-custom text-[1.25rem] font-[590]">{t('prosperityPoints')}</h1>
      <RankingList />
    </div>
  );
};

export default page;
