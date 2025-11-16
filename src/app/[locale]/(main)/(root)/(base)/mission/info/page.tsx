/* eslint-disable react/no-array-index-key */
import PreviousNavigation from '@/components/PreviousNavigation';
import { getTranslations } from 'next-intl/server';

const page = async () => {
  const t = await getTranslations('missionInfo');

  const DataInfo = {
    rule1: {
      title: t('section1Title'),
      content: [
        {
          subTitle: t('q1'),
          description: t('a1')
        },
        {
          subTitle: t('q2'),
          description: t('a2')
        },
        {
          subTitle: t('q3'),
          description: t('a3')
        },
        {
          subTitle: t('q4'),
          description: t('a4')
        },
        {
          subTitle: t('q5'),
          description: t('a5')
        }
      ]
    },
    rule2: {
      title: t('section2Title'),
      content: [
        {
          subTitle: t('q6'),
          description: t('a6')
        },
        {
          subTitle: t('q7'),
          description: t('a7')
        },
        {
          subTitle: t('q8'),
          description: t('a8')
        },
        {
          subTitle: t('q9'),
          description: t('a9')
        },
        {
          subTitle: t('q10'),
          description: t('a10')
        },
        {
          subTitle: t('q11'),
          description: t('a11')
        }
      ]
    },
    rule3: {
      title: t('section3Title'),
      content: [
        {
          subTitle: t('q12'),
          description: t('a12')
        },
        {
          subTitle: t('q13'),
          description: t('a13')
        },
        {
          subTitle: t('q14'),
          description: t('a14')
        },
        {
          subTitle: t('q15'),
          description: t('a15')
        },
        {
          subTitle: t('q16'),
          description: t('a16')
        }
      ]
    },
    rule4: {
      title: t('section4Title'),
      content: [
        {
          subTitle: t('q17'),
          description: t('a17')
        },
        {
          subTitle: t('q18'),
          description: t('a18')
        },
        {
          subTitle: t('q19'),
          description: t('a19')
        },
        {
          subTitle: t('q20'),
          description: t('a20')
        },
        {
          subTitle: t('q21'),
          description: t('a21')
        }
      ]
    },
  };

  return (
    <div className="min-h-screen bg-9x9 flex flex-col items-center pt-10 px-4">
      <PreviousNavigation />

      {/* Header */}
      <div className="mb-6">
        <p className="text-[1.25rem] font-[274] text-shadow-custom text-center">{t('pageTitle')}</p>
        <p className="text-[1.25rem] font-bold text-shadow-custom text-center">{t('pageSubtitle')}</p>
      </div>

      <div className="h-[calc(100vh-100px)] overflow-y-auto w-full flex flex-col items-center justify-start">
        {/* Render all sections */}
        {Object.values(DataInfo).map((section, sectionIndex) => (
          <div key={sectionIndex} className="w-full max-w-97.75 mb-3">
            {/* Section Title */}
            <h2 className="text-shadow-custom font-bold text-[1.1rem] mb-4 text-left  text-yellow-200">
              {section.title}
            </h2>

            {/* Section Content */}
            {section.content.map((item, itemIndex) => (
              <div key={itemIndex} className="bg-card-info w-full my-4 p-4 rounded-lg">
                <div className="w-full border-b border-white pb-2">
                  <h3 className="text-left text-shadow-custom font-[590] text-[1rem]">
                    {item.subTitle}
                  </h3>
                </div>
                <p className="text-shadow-custom font-normal text-[0.875rem] text-left mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
