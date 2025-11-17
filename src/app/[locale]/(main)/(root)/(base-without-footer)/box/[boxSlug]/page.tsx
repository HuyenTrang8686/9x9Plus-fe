import { boxRequest } from '@/app/http/requests/box';
import BoxCardDetail from '@/components/box/BoxCardDetail';
import BoxTableDetail from '@/components/box/BoxTableDetail';
import LeftArrowIcon from '@/libs/shared/icons/LeftArrow';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

type PageProps = {
  params: Promise<{
    locale: string;
    boxSlug: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { boxSlug, locale } = await params;
  const t = await getTranslations('box');
  const resBoxDetail = await boxRequest.boxDetail(boxSlug ? +boxSlug : 0);
  if (!resBoxDetail) {
    return (
      <div className="min-h-screen bg-9x9 flex flex-col items-center pt-10 px-3 sm:px-7">
        <Link href="/">
          <LeftArrowIcon className="absolute left-4" />
        </Link>
        <h1 className="text-shadow-custom text-[1.25rem] font-bold">{t('boxNotExist')}</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-9x9 flex flex-col items-center pt-10 px-3 sm:px-7 mb-6">
      <Link href="/">
        <LeftArrowIcon className="absolute left-4" />
      </Link>
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-shadow-custom text-[1.25rem] font-bold">
          Box
          {' '}
          {boxSlug}
          {' '}
          -
          {' '}
          {resBoxDetail?.title[locale as keyof typeof resBoxDetail.title]}
        </h1>
        <h2 className="text-shadow-custom text-[0.75rem] font-normal text-center w-[200px]">
          {resBoxDetail?.content[locale as keyof typeof resBoxDetail.content]}
        </h2>
      </div>
      <BoxCardDetail boxSlug={boxSlug} dataBoxDetail={resBoxDetail} />
      <BoxTableDetail totalUser={resBoxDetail.invitedCount} levelUsers={resBoxDetail.levelUsers} />
    </div>
  );
};

export default page;
