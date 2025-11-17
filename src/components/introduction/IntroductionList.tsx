'use client';

import { montserrat } from '@/app/fonts/montserrat';
import IntroductionFooter from '@/components/introduction/IntroductionFooter';
import GamePadIcon from '@/libs/shared/icons/GamePad';
import GraphUpIcon from '@/libs/shared/icons/GraphUp';
import HammerIcon from '@/libs/shared/icons/Hammer';
import HeartLockIcon from '@/libs/shared/icons/HeartLock';
import RocketIcon from '@/libs/shared/icons/Rocket';
import { useTranslations } from 'next-intl';

const IntroductionList = () => {
  const t = useTranslations('introduction');

  const dataIntro = [
    {
      icon: RocketIcon,
      title: t('vision.title'),
      des: (
        <p>
          {t('vision.description')}
        </p>
      ),
    },
    {
      icon: HeartLockIcon,
      title: t('mission.title'),
      des: (
        <ul className="list-inside space-y-1">
          <li>{t('mission.description1')}</li>
          <li>{t('mission.description2')}</li>
          <li>{t('mission.description3')}</li>
        </ul>
      ),
    },
    {
      icon: GraphUpIcon,
      title: t('coreValues.title'),
      des: (
        <>
          <p>{t('coreValues.peace')}</p>
          <p>{t('coreValues.spread')}</p>
          <p>{t('coreValues.sustainable')}</p>
        </>
      ),
    },
    {
      icon: GamePadIcon,
      title: t('howToJoin.title'),
      des: (
        <>
          <ol className="list-inside space-y-1">
            <li>{t('howToJoin.step1')}</li>
            <li>{t('howToJoin.step2')}</li>
            <li>
              {t('howToJoin.step3')}
              <ul className="list-inside space-y-1">
                <li>{t('howToJoin.step3a')}</li>
                <li>{t('howToJoin.step3b')}</li>
                <li>{t('howToJoin.step3c')}</li>
              </ul>
            </li>
            <li>
              {t('howToJoin.step4')}
            </li>
          </ol>
        </>
      ),
    },
    {
      icon: HammerIcon,
      title: t('rules.title'),
      des: (
        <>
          <ul className="list-inside space-y-1 ">
            <li className="text-wrap">{t('rules.rule1')}</li>
            <li>{t('rules.rule2')}</li>
          </ul>
        </>
      ),
    }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {dataIntro.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="introduction-list-items">
            <div>
              <Icon className="-translate-y-2 size-14" />
            </div>
            <div>
              <h3 className={`${montserrat.variable} introduction-title-items mb-1`}>{item.title}</h3>
              <div className="introduction-des-items pe-3 text-wrap">
                {item.des}
              </div>
            </div>
          </div>
        );
      })}
      <IntroductionFooter />
    </div>
  );
};

export default IntroductionList;
