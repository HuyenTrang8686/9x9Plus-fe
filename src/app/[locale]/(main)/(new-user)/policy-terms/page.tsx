/* eslint-disable react-dom/no-dangerously-set-innerhtml */
/* eslint-disable react/no-array-index-key */
import { montserrat } from '@/app/fonts/montserrat';
import { Button } from '@/components/ui/button';
import CheckCircle from '@/libs/shared/icons/CheckCircle';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const page = async () => {
  const t = await getTranslations('policyTerms');

  const policyTerms = [
    {
      title: (
        <p dangerouslySetInnerHTML={{ __html: t('section1Title') }} />
      )
    },
    {
      title: t('section2Title'),
      subtitle: (
        <ul>
          <li>{t('section2Item1')}</li>
          <li>{t('section2Item2')}</li>
          <li>{t('section2Item3')}</li>
          <li>{t('section2Item4')}</li>
        </ul>
      )
    },
    {
      title: t('section3Title'),
      subtitle: (
        <ul>
          <li dangerouslySetInnerHTML={{ __html: t('section3Item1') }} />
          <li>{t('section3Item2')}</li>
          <li>{t('section3Item3')}</li>
          <li>{t('section3Item4')}</li>
        </ul>
      )
    },
    {
      title: (
        <p dangerouslySetInnerHTML={{ __html: t('section4Title') }} />
      ),
      subtitle: (
        <ul>
          <li>{t('section4Item1')}</li>
          <li>{t('section4Item2')}</li>
          <li>{t('section4Item3')}</li>
        </ul>
      )
    },
    {
      title: t('section5Title'),
      subtitle: (
        <ul>
          <li>{t('section5Item1')}</li>
        </ul>
      )
    },
    {
      title: (
        <p dangerouslySetInnerHTML={{ __html: t('section6Title') }} />
      )
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className={`${montserrat.variable} title-introduction`}>
        {t('title').split(' ').slice(0, 3).join(' ')}
        <br />
        {t('title').split(' ').slice(3).join(' ')}
      </h1>
      <div className={`${montserrat.variable} layout-policy`}>
        <ol className="text-policy">
          {policyTerms.map((item, index) => (
            <li key={index} className="policy-item">
              <h2 className="policy-title">{item.title}</h2>
              {item.subtitle && <div className="policy-subtitle">{item.subtitle}</div>}
            </li>
          ))}
          <p className="-translate-x-4 mt-1 text-center" dangerouslySetInnerHTML={{ __html: t('agreement') }} />
        </ol>

        <Link href="/welcome" prefetch>
          <Button className="button-rounded mt-[1.13rem] focus:bg-white">
            <CheckCircle className="size-6" />
            <span
              className={`${montserrat.variable} font-bold text-[0.875rem] text-wrap`}
              style={{ textShadow: '0px 4px 15px rgba(145, 213, 255, 0.50)' }}
            >
              {t('acceptButton')}
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
