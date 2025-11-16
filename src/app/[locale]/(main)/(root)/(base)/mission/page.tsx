'use client';

import { handleRevalidateTag } from '@/app/actions/revalidation';
import { useGetMission, useUpdateMission } from '@/app/http/queries/useMission';
import GoodSign2Icon from '@/libs/shared/icons/GoodSign2';
import RightArrowIcon from '@/libs/shared/icons/RightArrow2';
import { useQueryClient } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
/* eslint-disable react/no-array-index-key */
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'nextjs-toploader/app';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { toast } from 'sonner';

type Mission = {
  title: string;
  describe: string | ReactNode; // can be plain text or JSX
  score: string;
  type?: 'shareLink' | 'joinGroup' | 'readTerms' | 'numerologyPolicy';
  to?: string;
  isCompleted: boolean;
};
const Page = () => {
  const t = useTranslations('mission');
  const { data: dataMission, isSuccess, isLoading } = useGetMission();
  const miningCount = (dataMission?.miningTimes ?? 9) >= 9 ? 9 : dataMission?.miningTimes || 0;
  const data: Mission[] = [
    {
      title: t('miningDaily'),
      describe: t('miningDailyDesc', { count: miningCount }),
      score: '+99',
      isCompleted: dataMission?.miningTimes === 9
    },
    // {
    //   title: 'Kiên trì 3 ngày liên tiếp',
    //   describe: 'Tham gia liên tục 3 ngày để gieo hạt thói quen - 3/3',
    //   score: '+99'
    // },
    // {
    //   title: 'Xây thói quen 21 ngày',
    //   describe: 'Duy trì hành trình trọn vẹn 21 ngày - 3/21',
    //   score: '+999'
    // },
    // {
    //   title: 'Bền bỉ 30 ngày',
    //   describe: 'Hoàn thành hành trình 30 ngày liên tục - 3/30',
    //   score: '+999'
    // },
    {
      title: t('connectNewFriend'),
      describe: t.rich('connectNewFriendDesc', {
        strong: chunks => <strong>{chunks}</strong>
      }),
      score: '+999',
      isCompleted: false

    },
    {
      title: t('spreadValue'),
      describe: t('spreadValueDesc'),
      score: '+999',
      type: 'shareLink',
      to: 'https://www.facebook.com/share/19nBvnkfwo/?mibextid=LQQJ4d',
      isCompleted: dataMission?.shareLink === true
    },
    {
      title: t('joinCommunity'),
      describe: t('joinCommunityDesc'),
      score: '+999',
      type: 'joinGroup',
      to: 'https://t.me/+WrtBnbRub-k5ZWM1',
      isCompleted: dataMission?.joinGroup === true
    },
    {
      title: t('learnNumerology'),
      describe: t.rich('learnNumerologyDesc', {
        strong: chunks => <strong>{chunks}</strong>
      }),
      type: 'numerologyPolicy',
      score: '',
      to: '/mission/numerology-policy',
      isCompleted: false
    },
    {
      title: t('learnAbout9x9'),
      describe: t.rich('learnAbout9x9Desc', {
        strong: chunks => <strong>{chunks}</strong>
      }),
      type: 'readTerms',
      score: '',
      to: '/mission/info',
      isCompleted: false
    },
  ];
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutateAsync } = useUpdateMission();
  const handleMission = async ({ type, to, isCompleted }: {
    type: 'shareLink' | 'joinGroup' | 'readTerms' | 'numerologyPolicy';
    to?: string;
    isCompleted: boolean;
  }) => {
    if (!type) {
      return;
    }
    if ((type === 'readTerms' || type === 'numerologyPolicy') && to) {
      router.push(to);
      return;
    }
    // Perform the mutation first (only for types that support it)
    if (type === 'shareLink' || type === 'joinGroup') {
      await mutateAsync(type);
      queryClient.removeQueries({ queryKey: ['get-me'] });
      handleRevalidateTag('get-me');
    }

    if ((type === 'shareLink' || type === 'joinGroup') && to) {
      // For Telegram links, use deep linking
      if (to.includes('t.me')) {
        const telegramUrl = to.replace('https://t.me/', 'tg://');
        try {
          window.open(telegramUrl, '_blank');
          // Fallback to web version after a delay
          setTimeout(() => {
            window.location.href = to;
          }, 1000);
        } catch {
          window.location.href = to;
        }
      } else if (to.includes('facebook.com')) {
        const fbUrl = to.replace('https://www.facebook.com/', 'fb://');
        try {
          window.location.href = fbUrl;
          setTimeout(() => {
            window.location.href = to;
          }, 1000);
        } catch {
          window.location.href = to;
        }
      } else {
        window.location.href = to;
      }
    }

    queryClient.refetchQueries({ queryKey: ['get-mission'] });

    if (!isCompleted) {
      toast.success(
        t('rewardSuccess'),
        { duration: 3000 }
      );
    }
  };
  useEffect(() => {
    router.prefetch('/mission/info');
  }, [router]);
  return (
    <div className="bg-9x9 min-h-screen flex flex-col items-center text-center p-4 text-white">
      <h1 className="font-light text-xl text-blue-200 mb-2">{t('pageTitle')}</h1>
      <h2 className="font-semibold text-base mb-6 drop-shadow-lg">{t('title')}</h2>

      <div className="w-full max-w-md h-[calc(100vh-180px)] overflow-y-auto">
        {isSuccess && data.map((item, index) => (
          <button
            type="button"
            onClick={() => item.type && handleMission({
              type: item.type,
              to: item.to,
              isCompleted: item.isCompleted
            })}
            className={`relative my-4 rounded-[0.75rem] p-4 flex border items-center gap-3 ${item.isCompleted ? 'border-[#52C41A] bg-[rgba(82,196,26,0.25)]' : 'border-[#68DAF2] bg-[rgba(0,39,102,0.25)]'}`}
            key={index}

          >
            {item.isCompleted && (
              <div className="absolute -right-[0.5px] -top-[0.5px] bg-[#52C41A] size-6 flex items-center justify-center rounded-tr-[0.75rem] rounded-bl-[0.75rem]">
                <GoodSign2Icon />
              </div>
            )}
            <Image
              style={{
                backgroundImage: 'radial-gradient(267.72% 139.47% at 0% 2.78%, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.10) 100%)'
              }}
              src="/assets/logo-9x9.png"
              width={80}
              height={80}
              className="size-18 rounded-full"
              alt="logo"
            />

            <div className="grow text-left">
              <p className="font-semibold text-base drop-shadow-sm mb-1">
                {item.title}
              </p>
              <div className="text-sm text-blue-100 drop-shadow-sm  space-x-3">
                {item.describe}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <p className="text-shadow-custom font-medium drop-shadow-sm">
                {item.score}
              </p>
              {item.type !== 'numerologyPolicy' && item.type !== 'readTerms' && (
                <Image
                  src="/assets/badge-medal.png"
                  alt="Badge Medal"
                  width={24}
                  height={24}
                  className="inline-block"
                />
              )}
            </div>
            {item.type && (
              <div>
                <RightArrowIcon />
              </div>
            )}
          </button>
        ))}
        <div className="w-full flex justify-center items-center mt-4">
          { isLoading
            && <Loader2 className="animate-spin text-shadow-custom text-xl text-center" />}
        </div>
      </div>
    </div>
  );
};

export default Page;
