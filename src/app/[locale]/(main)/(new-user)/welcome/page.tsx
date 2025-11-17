import { getCookie } from '@/app/actions/cookie';
import { montserrat } from '@/app/fonts/montserrat';
import WelcomeFooter from '@/components/welcome/WelcomeFooter';
import WelcomeList1 from '@/components/welcome/WelcomeList1';
import Shield2Icon from '@/libs/shared/icons/Shield2';
import { getTranslations } from 'next-intl/server';

const page = async () => {
  const authData = await getCookie('authData');
  const isKyc = authData ? JSON.parse(authData)?.isKyc : false;
  const t = await getTranslations('welcome');

  return (
    <div className="flex flex-col items-center">
      <div className="title-welcome flex flex-col">
        <h1 className={`${montserrat.variable} text-center text-title-welcome`}>{t('title')}</h1>
      </div>
      <p className="subtitle-welcome text-shadow-custom pt-3">{t('subtitle')}</p>
      <div className="layout-welcome-list">
        <div className={`${montserrat.variable} welcome-list-items space-y-[0.30rem] mb-6`}>
          <WelcomeList1 />
          <div className="font-bold text-white text-[0.6875rem] flex items-center h-4 -translate-x-3">
            <Shield2Icon className="size-9 translate-y-[3px]" />
            <span className="-translate-x-1 text-[0.6875rem] font-medium">
              {t('commitmentTitle')}
            </span>
          </div>
          <ul className="list-inside space-y-1">
            <li>
              {t('commitment1')}
            </li>
            <li>
              {t('commitment2')}
            </li>
            <li>
              {t('commitment3')}
            </li>
          </ul>
          <div className="footer-layout-welcome mt-3">
            <p className="footer-text-welcome text-shadow-custom">
              {t('footerText')}
            </p>
          </div>
        </div>
        <WelcomeFooter isKyc={isKyc} />
      </div>
    </div>
  );
};

export default page;
