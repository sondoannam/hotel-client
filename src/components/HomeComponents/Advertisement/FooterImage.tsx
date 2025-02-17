import { MoveUpRight } from 'lucide-react';
import './FooterImage.scss';
import type { AppTranslationFunction } from '@/lib/types/i18n';

interface FooterImageProps {
  t: AppTranslationFunction;
}

export default function FooterImage({ t }: FooterImageProps) {
  return (
    <div className='footer_image-section'>
      <div className='img_center'>
        <span className='img-load'>
          <img src='/images/home-mvl-more-footer-bg.png' alt='Footer Image' />
        </span>
        <div className='footer-content-container container'>
          <div className='footer-content__heading text-center'>
            Đăng kí thành viên, tối đa trải nghiệm
          </div>
          <div className='footer-content__description text-center'>
            Là hội viên của khách sạn, bạn có thể tích luỹ số đêm trải nghiệm tại A HOMEVILLA để tận
            hưởng các quyền lợi độc quyền như nhận phòng sớm, trả phòng muộn và miễn phí nâng hạng
            phòng ở nhiều cơ sở khách sạn của chúng tôi.
          </div>
          <div className='footer-content__actions text-center'>
            <a href='#' className='action-text'>
              Tham gia Home Villa{' '}
              <span>
                <MoveUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
