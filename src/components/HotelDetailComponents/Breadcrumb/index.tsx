'use client';

import Link from 'next/link';
import {
  Breadcrumb as UIBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import styles from './index.module.scss';
import { useTranslation } from '@/i18n/client';
import { APP_ROUTES } from '@/constants/routes.constant';

interface BreadcrumbProps {
  lng: string;
  name: string;
}

const BreadcrumbComponent = ({ lng, name }: Readonly<BreadcrumbProps>) => {
  const { t } = useTranslation(lng, 'searchroom');

  return (
    <UIBreadcrumb>
      <div className={styles.breadcrumb_items}>
        <BreadcrumbList className={styles.breadcrumb_list}>
          <BreadcrumbItem className={styles.breadcrumb_item}>
            <BreadcrumbLink href='/'>
              <Link href={APP_ROUTES.Home}>{t('booking.home')}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className={styles.breadcrumb_item}>
            <BreadcrumbLink href='/components'>
              <Link href={APP_ROUTES.SearchRoom}>{t('booking.searchroom')}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className={styles.breadcrumb_item}>
            <BreadcrumbPage>
              <b className='font-semibold'> {name} </b>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </div>
    </UIBreadcrumb>
  );
};

export default BreadcrumbComponent;
