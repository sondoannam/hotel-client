import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../Header/index.module.scss';

import { APP_ROUTES } from '@/constants/routes.constant';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { CircleUserRound, Menu } from 'lucide-react';
import { createTranslation } from '@/i18n/server';
import { cn } from '@/lib/utils';

interface HeaderSecondaryProps {
  lng: string;
  logoSrc?: string;
}

const HeaderSecondary = async ({ lng, logoSrc }: Readonly<HeaderSecondaryProps>) => {
  const { t } = await createTranslation(lng);

  //   const logo = {
  //     dark: '/logos/logo-large-dark.png',
  //     light: '/logos/logo-large-light.png',
  //   };

  return (
    <header className={cn(styles.header_section, styles.bg_white)}>
      <div className={styles.logo}>
        <Image
          src={logoSrc ?? '/logos/logo-large-dark.webp'}
          alt='Logo'
          width={40}
          height={40}
          className='h-[40px] w-auto'
        />
      </div>

      <nav className={styles.nav_links}>
        <Link href={APP_ROUTES.SearchRoom}>{t('route.search_room')}</Link>
        <Link href={APP_ROUTES.About}>{t('route.about')}</Link>
        <Link href={APP_ROUTES.Contact}>{t('route.contact')}</Link>

        <LanguageSwitcher />

        <div className={styles.basic_button}>
          <div className={styles.account_menu}>
            <CircleUserRound />
          </div>
          <div className={styles.account_menu}>
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSecondary;
