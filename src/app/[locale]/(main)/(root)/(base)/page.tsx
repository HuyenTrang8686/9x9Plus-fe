import Loading from '@/app/[locale]/loading';
import { Header } from '@/components/header-footer/Header';
import BoxTable from '@/components/home/BoxTable';
import { getTranslations } from 'next-intl/server';
import { Suspense } from 'react';

const page = async () => {
  const t = await getTranslations('home');

  return (
    <div className="bg-9x9 flex flex-col items-center h-[calc(100vh-30px)]">
      <Header />
      <h1 className="text-shadow-custom text-[20px] font-[860] mt-4">
        9x9Plus
      </h1>
      <h2 className="text-shadow-custom text-[14px] font-[510] text-center">
        {t('title')}
        <br />
        {t('subtitle')}
      </h2>
      <Suspense fallback={<Loading />}>
        <BoxTable />
      </Suspense>
    </div>
  );
};

export default page;
