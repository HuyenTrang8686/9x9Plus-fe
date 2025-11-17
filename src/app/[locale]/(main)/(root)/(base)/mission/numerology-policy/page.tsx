/* eslint-disable react/no-array-index-key */
import { getTranslations } from 'next-intl/server';

import PreviousNavigation from '@/components/PreviousNavigation';

async function getPersonalYearData(t: Awaited<ReturnType<typeof getTranslations<'numerologyPolicy'>>>) {
  return [
    {
      title: t('year1Title'),
      content: (
        <section id="soul-urge" className="mb-8 bg-card-info max-w-97.75">
          <h2 className="text-xl font-bold mb-2 text-shadow-custom">{t('soulUrgeTitle')}</h2>
          <p className="text-shadow-custom mb-4">
            {t('soulUrgeIntro')}
          </p>
        </section>
      ),
      description: t('year1Description'),
      doList: [
        t('year1Do1'),
        t('year1Do2'),
        t('year1Do3'),
        t('year1Do4')
      ],
      avoidList: [
        t('year1Avoid1'),
        t('year1Avoid2'),
        t('year1Avoid3')
      ],
      positiveForecast: t('year1PositiveForecast'),
      riskForecast: t('year1RiskForecast')
    },
    {
      title: t('year2Title'),
      description: t('year2Description'),
      doList: [
        t('year2Do1'),
        t('year2Do2'),
        t('year2Do3'),
        t('year2Do4')
      ],
      avoidList: [
        t('year2Avoid1'),
        t('year2Avoid2'),
        t('year2Avoid3')
      ],
      positiveForecast: t('year2PositiveForecast'),
      riskForecast: t('year2RiskForecast')
    },
    {
      title: t('year3Title'),
      description: t('year3Description'),
      doList: [
        t('year3Do1'),
        t('year3Do2'),
        t('year3Do3'),
        t('year3Do4')
      ],
      avoidList: [
        t('year3Avoid1'),
        t('year3Avoid2'),
        t('year3Avoid3')
      ],
      positiveForecast: t('year3PositiveForecast'),
      riskForecast: t('year3RiskForecast')
    },
    {
      title: t('year4Title'),
      description: t('year4Description'),
      doList: [
        t('year4Do1'),
        t('year4Do2'),
        t('year4Do3'),
        t('year4Do4')
      ],
      avoidList: [
        t('year4Avoid1'),
        t('year4Avoid2'),
        t('year4Avoid3')
      ],
      positiveForecast: t('year4PositiveForecast'),
      riskForecast: t('year4RiskForecast')
    },
    {
      title: t('year5Title'),
      description: t('year5Description'),
      doList: [
        t('year5Do1'),
        t('year5Do2'),
        t('year5Do3'),
        t('year5Do4')
      ],
      avoidList: [
        t('year5Avoid1'),
        t('year5Avoid2'),
        t('year5Avoid3')
      ],
      positiveForecast: t('year5PositiveForecast'),
      riskForecast: t('year5RiskForecast')
    },
    {
      title: t('year6Title'),
      description: t('year6Description'),
      doList: [
        t('year6Do1'),
        t('year6Do2'),
        t('year6Do3'),
        t('year6Do4')
      ],
      avoidList: [
        t('year6Avoid1'),
        t('year6Avoid2'),
        t('year6Avoid3')
      ],
      positiveForecast: t('year6PositiveForecast'),
      riskForecast: t('year6RiskForecast')
    },
    {
      title: t('year7Title'),
      description: t('year7Description'),
      doList: [
        t('year7Do1'),
        t('year7Do2'),
        t('year7Do3'),
        t('year7Do4')
      ],
      avoidList: [
        t('year7Avoid1'),
        t('year7Avoid2'),
        t('year7Avoid3')
      ],
      positiveForecast: t('year7PositiveForecast'),
      riskForecast: t('year7RiskForecast')
    },
    {
      title: t('year8Title'),
      description: t('year8Description'),
      doList: [
        t('year8Do1'),
        t('year8Do2'),
        t('year8Do3'),
        t('year8Do4')
      ],
      avoidList: [
        t('year8Avoid1'),
        t('year8Avoid2'),
        t('year8Avoid3')
      ],
      positiveForecast: t('year8PositiveForecast'),
      riskForecast: t('year8RiskForecast')
    },
    {
      title: t('year9Title'),
      description: t('year9Description'),
      doList: [
        t('year9Do1'),
        t('year9Do2'),
        t('year9Do3'),
        t('year9Do4')
      ],
      avoidList: [
        t('year9Avoid1'),
        t('year9Avoid2'),
        t('year9Avoid3')
      ],
      positiveForecast: t('year9PositiveForecast'),
      riskForecast: t('year9RiskForecast')
    }
  ];
}

const page = async () => {
  const t = await getTranslations('numerologyPolicy');
  const personalYearData = await getPersonalYearData(t);

  return (
    <div className="h-[calc(100vh-10px)] bg-9x9 flex flex-col items-center py-10 px-4">
      <PreviousNavigation />

      {/* Header */}
      <div className="mb-6">
        <p className="text-[1.25rem] font-[274] text-shadow-custom text-center">9x9Plus</p>
        <p className="text-[1.25rem] font-bold text-shadow-custom text-center">{t('pageTitle')}</p>
      </div>

      <div className="h-[calc(100vh-100px)] overflow-y-auto w-full flex flex-col items-center justify-start">
        <section id="intro" className="mb-8 bg-card-info max-w-97.75 text-shadow-custom">
          <p>
            {t('introText')}
          </p>
        </section>

        <div>
          {/* Nguồn gốc */}
          <section id="origin" className="mb-8 bg-card-info max-w-97.75">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">{t('originTitle')}</h2>
            <p className="text-shadow-custom">
              {t('originText')}
            </p>
          </section>
          {/* Sứ mệnh */}
          <section id="life-mission" className="mb-8 bg-card-info max-w-97.75">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">{t('lifeMissionTitle')}</h2>
            <p className="text-shadow-custom mb-4">
              {t('lifeMissionIntro')}
            </p>
            <ul className="list-disc list-inside  text-shadow-custom space-y-5">
              <li>
                {t('mission1')}
                <p className="ml-6 mt-1">
                  {t('mission1Text')}
                </p>
              </li>
              <li>
                {t('mission2')}
                <p className="ml-6 mt-1">
                  {t('mission2Text')}
                </p>
              </li>
              <li>
                {t('mission3')}
                <p className="ml-6 mt-1">
                  {t('mission3Text')}
                </p>
              </li>
              <li>
                {t('mission4')}
                <p className="ml-6 mt-1">
                  {t('mission4Text')}
                </p>
              </li>
              <li>
                {t('mission5')}
                <p className="ml-6 mt-1">
                  {t('mission5Text')}
                </p>
              </li>
              <li>
                {t('mission6')}
                <p className="ml-6 mt-1">
                  {t('mission6Text')}
                </p>
              </li>
              <li>
                {t('mission7')}
                <p className="ml-6 mt-1">
                  {t('mission7Text')}
                </p>
              </li>
              <li>
                {t('mission8')}
                <p className="ml-6 mt-1">
                  {t('mission8Text')}
                </p>
              </li>
              <li>
                {t('mission9')}
                <p className="ml-6 mt-1">
                  {t('mission9Text')}
                </p>
              </li>
              <li>
                {t('mission11')}
                Nhà Chiếu Sáng Trực Giác, Truyền Cảm Hứng Siêu Việt
                <p className="ml-6 mt-1">
                  {t('mission11Text')}
                </p>
              </li>
              <li>
                {t('mission22')}
                <p className="ml-6 mt-1">
                  {t('mission22Text')}
                </p>
              </li>
              <li>
                {t('mission33')}
                <p className="ml-6 mt-1">
                  {t('mission33Text')}
                </p>
              </li>
              <li>
                {t('mission44')}
                <p className="ml-6 mt-1">
                  {t('mission44Text')}
                </p>
              </li>
            </ul>
            <p className="text-shadow-custom mt-4">
              {t('lifeMissionConclusion')}
            </p>
          </section>
          {/* Linh hồn */}
          <section id="soul-urge" className="mb-8 bg-card-info max-w-97.75">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">
              {
                t('soulUrgeTitle')
              }
            </h2>
            <p className="text-shadow-custom mb-4">
              {t('soulUrgeIntro')}
            </p>
            <ul className="list-disc list-inside  text-shadow-custom space-y-5">
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">
                  {
                    t('soul1')
                  }
                </span>
                <p className="ml-6 mt-1">
                  {t('soul1Text')}
                </p>
              </li>
              <li>
                {t('soul2')}
                <p className="ml-6 mt-1">
                  {t('soul2Text')}
                </p>
              </li>
              <li>
                {t('soul3')}
                <p className="ml-6 mt-1">
                  {t('soul3Text')}
                </p>
              </li>
              <li>
                {t('soul4')}
                <p className="ml-6 mt-1">
                  {t('soul4Text')}
                </p>
              </li>
              <li>
                {t('soul5')}
                <p className="ml-6 mt-1">
                  {t('soul5Text')}
                </p>
              </li>
              <li>
                {t('soul6')}
                <p className="ml-6 mt-1">
                  {t('soul6Text')}
                </p>
              </li>
              <li>
                {t('soul7')}
                <p className="ml-6 mt-1">
                  {t('soul7Text')}
                </p>
              </li>
              <li>
                {t('soul8')}
                <p className="ml-6 mt-1">
                  {t('soul8Text')}
                </p>
              </li>
              <li>
                {t('soul9')}
                <p className="ml-6 mt-1">
                  {t('soul9Text')}
                </p>
              </li>
              <li>
                {t('soul11')}
                <p className="ml-6 mt-1">
                  {t('soul11Text')}
                </p>
              </li>
              <li>
                {t('soul22')}
                <p className="ml-6 mt-1">
                  {t('soul22Text')}
                </p>
              </li>
              <li>
                {t('soul33')}
                <p className="ml-6 mt-1">
                  {t('soul33Text')}
                </p>
              </li>
              <li>
                {t('soul44')}
                <p className="ml-6 mt-1">
                  {t('soul44Text')}
                </p>
              </li>
            </ul>
          </section>
          {/* Tính cách */}
          <section id="personality" className="mb-8 bg-card-info max-w-97.75">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">{t('personalityTitle')}</h2>
            <p className="text-shadow-custom mb-4">
              {t('personalityIntro')}
            </p>
            <ul className="list-disc list-inside  text-shadow-custom space-y-5">
              <li>
                {t('personality1')}
                <p className="ml-6 mt-1">
                  {t('personality1Text')}
                </p>
              </li>
              <li>
                {t('personality2')}
                <p className="ml-6 mt-1">
                  {t('personality2Text')}
                </p>
              </li>
              <li>
                {t('personality3')}
                <p className="ml-6 mt-1">
                  {t('personality3Text')}
                </p>
              </li>
              <li>
                {t('personality4')}
                <p className="ml-6 mt-1">
                  {t('personality4Text')}
                </p>
              </li>
              <li>
                {t('personality5')}
                <p className="ml-6 mt-1">
                  {t('personality5Text')}
                </p>
              </li>
              <li>
                {t('personality6')}
                <p className="ml-6 mt-1">
                  {t('personality6Text')}
                </p>
              </li>
              <li>
                {t('personality7')}
                <p className="ml-6 mt-1">
                  {t('personality7Text')}
                </p>
              </li>
              <li>
                {t('personality8')}
                <p className="ml-6 mt-1">
                  {t('personality8Text')}
                </p>
              </li>
              <li>
                {t('personality9')}
                <p className="ml-6 mt-1">
                  {t('personality9Text')}
                </p>
              </li>
              <li>
                {t('personality11')}
                <p className="ml-6 mt-1">
                  {t('personality11Text')}
                </p>
              </li>
              <li>
                {t('personality22')}
                <p className="ml-6 mt-1">
                  {t('personality22Text')}
                </p>
              </li>
              <li>
                {t('personality33')}
                <p className="ml-6 mt-1">
                  {t('personality33Text')}
                </p>
              </li>
              <li>
                {t('personality44')}
                <p className="ml-6 mt-1">
                  {t('personality44Text')}
                </p>
              </li>
            </ul>
            <p className="text-shadow-custom mt-4">
              {t('personalityConclusion')}
            </p>
          </section>
          {/* Nhân cách */}
          <section id="expression" className="mb-8 bg-card-info max-w-97.75">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">{t('expressionTitle')}</h2>
            <p className="text-shadow-custom mb-4">
              {t('expressionIntro')}
            </p>
            <ul className="list-disc list-inside  text-shadow-custom space-y-5">
              <li>
                {t('expression1')}
                <p className="ml-6 mt-1">
                  {t('expression1Text')}
                </p>
              </li>
              <li>
                {t('expression2')}
                <p className="ml-6 mt-1">
                  {t('expression2Text')}
                </p>
              </li>
              <li>
                {t('expression3')}
                <p className="ml-6 mt-1">
                  {t('expression3Text')}
                </p>
              </li>
              <li>
                {t('expression4')}
                <p className="ml-6 mt-1">
                  {t('expression4Text')}
                </p>
              </li>
              <li>
                {t('expression5')}
                <p className="ml-6 mt-1">
                  {t('expression5Text')}
                </p>
              </li>
              <li>
                {t('expression6')}
                <p className="ml-6 mt-1">
                  {t('expression6Text')}
                </p>
              </li>
              <li>
                {t('expression7')}
                <p className="ml-6 mt-1">
                  {t('expression7Text')}
                </p>
              </li>
              <li>
                {t('expression8')}
                <p className="ml-6 mt-1">
                  {t('expression8Text')}
                </p>
              </li>
              <li>
                {t('expression9')}
                <p className="ml-6 mt-1">
                  {t('expression9Text')}
                </p>
              </li>
              <li>
                {t('expression11')}
                <p className="ml-6 mt-1">
                  {t('expression11Text')}
                </p>
              </li>
              <li>
                {t('expression22')}
                <p className="ml-6 mt-1">
                  {t('expression22Text')}
                </p>
              </li>
              <li>
                {t('expression33')}
                <p className="ml-6 mt-1">
                  {t('expression33Text')}
                </p>
              </li>
              <li>
                {t('expression44')}
                <p className="ml-6 mt-1">
                  {t('expression44Text')}
                </p>
              </li>
            </ul>
            <p className="text-shadow-custom mt-4">
              {t('expressionConclusion')}
            </p>
          </section>
        </div>
        <h2 className="text-shadow-custom font-bold text-[1.1rem] mb-4 text-left text-yellow-200">
          {t('personalYearTitle')}
        </h2>
        {personalYearData.map((item, index) => (
          <div key={index} className="bg-card-info w-full my-4 p-4 rounded-lg max-w-97.75">
            <div className="w-full border-b border-white pb-2">
              <h3 className="text-left text-shadow-custom font-[590] text-[1rem]">{item.title}</h3>
            </div>
            <p className="text-shadow-custom font-normal text-[0.875rem] text-left mt-2 leading-relaxed">{item.description}</p>

            <div className="mt-3">
              <p className="font-[590] text-[0.875rem] text-shadow-custom">{t('doLabel')}</p>
              <ul className="list-disc list-inside ml-2 text-shadow-custom">
                {item.doList.map((doItem, idx) => <li key={idx}>{doItem}</li>)}
              </ul>
            </div>

            <div className="mt-2">
              <p className="font-[590] text-[0.875rem] text-shadow-custom">{t('avoidLabel')}</p>
              <ul className="list-disc list-inside ml-2 text-shadow-custom">
                {item.avoidList.map((avoidItem, idx) => <li key={idx}>{avoidItem}</li>)}
              </ul>
            </div>

            <div className="mt-2">
              <p className="font-[590] text-[0.875rem] text-shadow-custom">{t('positiveForecastLabel')}</p>
              <ul className="list-disc list-inside ml-2 text-shadow-custom">
                <li>{item.positiveForecast}</li>
              </ul>
            </div>

            <div className="mt-2">
              <p className="font-[590] text-[0.875rem] text-shadow-custom">{t('riskForecastLabel')}</p>
              <ul className="list-disc list-inside ml-2 text-shadow-custom">
                <li>{item.riskForecast}</li>
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
