import Image from 'next/image';
interface SideBarPolicy {
  lng: string;
  side_bar_pay_ment: boolean;
}

const SideBarPolicy = async ({ lng, side_bar_pay_ment }: SideBarPolicy) => {
  return (
    <>
      {!side_bar_pay_ment && (
        <div className='rounded-xl bg-white flex flex-col px-4 py-6 mt-6'>
          <div className='text-lg font-medium'>Chính sách hủy và dời lịch</div>
          <div className=' mt-4'>
            <div className=' flex gap-3 mt-2'>
              <svg
                width='48'
                height='48'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.80167 11.2596L12.1317 5.9296L11.5417 5.3396L6.80167 10.0796L4.42667 7.7046L3.83667 8.2946L6.80167 11.2596ZM8.0025 15.5029C6.96583 15.5029 5.99083 15.3063 5.0775 14.9129C4.16472 14.519 3.37056 13.9846 2.695 13.3096C2.01944 12.6346 1.48472 11.8413 1.09083 10.9296C0.696945 10.0179 0.5 9.04321 0.5 8.00543C0.5 6.96765 0.696945 5.99265 1.09083 5.08043C1.48417 4.16765 2.01778 3.37349 2.69167 2.69793C3.36556 2.02237 4.15917 1.48765 5.0725 1.09376C5.98583 0.699874 6.96083 0.50293 7.9975 0.50293C9.03417 0.50293 10.0092 0.699874 10.9225 1.09376C11.8353 1.4871 12.6294 2.02099 13.305 2.69543C13.9806 3.36987 14.5153 4.16349 14.9092 5.07626C15.3031 5.98904 15.5 6.96376 15.5 8.00043C15.5 9.0371 15.3033 10.0121 14.91 10.9254C14.5167 11.8388 13.9822 12.6329 13.3067 13.3079C12.6311 13.9829 11.8378 14.5177 10.9267 14.9121C10.0156 15.3065 9.04083 15.5035 8.0025 15.5029Z'
                  fill='#24C35E'
                ></path>
              </svg>
              <span>
                Đối với đặt phòng này, hủy không còn khả dụng để được hoàn tiền đầy đủ do còn ít hơn
                7 ngày trước ngày nhận phòng.
              </span>
            </div>
            <div className='flex gap-3 mt-2'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.80167 11.2596L12.1317 5.9296L11.5417 5.3396L6.80167 10.0796L4.42667 7.7046L3.83667 8.2946L6.80167 11.2596ZM8.0025 15.5029C6.96583 15.5029 5.99083 15.3063 5.0775 14.9129C4.16472 14.519 3.37056 13.9846 2.695 13.3096C2.01944 12.6346 1.48472 11.8413 1.09083 10.9296C0.696945 10.0179 0.5 9.04321 0.5 8.00543C0.5 6.96765 0.696945 5.99265 1.09083 5.08043C1.48417 4.16765 2.01778 3.37349 2.69167 2.69793C3.36556 2.02237 4.15917 1.48765 5.0725 1.09376C5.98583 0.699874 6.96083 0.50293 7.9975 0.50293C9.03417 0.50293 10.0092 0.699874 10.9225 1.09376C11.8353 1.4871 12.6294 2.02099 13.305 2.69543C13.9806 3.36987 14.5153 4.16349 14.9092 5.07626C15.3031 5.98904 15.5 6.96376 15.5 8.00043C15.5 9.0371 15.3033 10.0121 14.91 10.9254C14.5167 11.8388 13.9822 12.6329 13.3067 13.3079C12.6311 13.9829 11.8378 14.5177 10.9267 14.9121C10.0156 15.3065 9.04083 15.5035 8.0025 15.5029Z'
                  fill='#24C35E'
                ></path>
              </svg>
              <span>Có thể dời lịch</span>
            </div>
          </div>
        </div>
      )}
      {!side_bar_pay_ment && (
        <div className='rounded-xl bg-white flex flex-col px-4 py-6 mt-6'>
          <div className='text-lg font-medium'>Chính sách chỗ ở</div>
          <div className='mt-3'>
            <div className=' flex gap-3 mt-2'>
              <svg
                width='17'
                height='20'
                viewBox='0 0 17 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.3975 4.3525L12.6475 0.6025C12.5421 0.496981 12.3991 0.437631 12.25 0.4375H4.75C4.4019 0.4375 4.06806 0.575781 3.82192 0.821922C3.57578 1.06806 3.4375 1.4019 3.4375 1.75V3.4375H1.75C1.4019 3.4375 1.06806 3.57578 0.821922 3.82192C0.575781 4.06806 0.4375 4.4019 0.4375 4.75V18.25C0.4375 18.5981 0.575781 18.9319 0.821922 19.1781C1.06806 19.4242 1.4019 19.5625 1.75 19.5625H12.25C12.5981 19.5625 12.9319 19.4242 13.1781 19.1781C13.4242 18.9319 13.5625 18.5981 13.5625 18.25V16.5625H15.25C15.5981 16.5625 15.9319 16.4242 16.1781 16.1781C16.4242 15.9319 16.5625 15.5981 16.5625 15.25V4.75C16.5624 4.60087 16.503 4.45789 16.3975 4.3525ZM12.4375 18.25C12.4375 18.2997 12.4177 18.3474 12.3826 18.3826C12.3474 18.4177 12.2997 18.4375 12.25 18.4375H1.75C1.70027 18.4375 1.65258 18.4177 1.61742 18.3826C1.58225 18.3474 1.5625 18.2997 1.5625 18.25V4.75C1.5625 4.70027 1.58225 4.65258 1.61742 4.61742C1.65258 4.58225 1.70027 4.5625 1.75 4.5625H9.01656L12.4375 7.98344V18.25ZM15.4375 15.25C15.4375 15.2997 15.4177 15.3474 15.3826 15.3826C15.3474 15.4177 15.2997 15.4375 15.25 15.4375H13.5625V7.75C13.5624 7.60087 13.503 7.45789 13.3975 7.3525L9.6475 3.6025C9.54211 3.49698 9.39913 3.43763 9.25 3.4375H4.5625V1.75C4.5625 1.70027 4.58225 1.65258 4.61742 1.61742C4.65258 1.58225 4.70027 1.5625 4.75 1.5625H12.0166L15.4375 4.98344V15.25ZM9.8125 12.25C9.8125 12.3992 9.75324 12.5423 9.64775 12.6477C9.54226 12.7532 9.39918 12.8125 9.25 12.8125H4.75C4.60082 12.8125 4.45774 12.7532 4.35225 12.6477C4.24676 12.5423 4.1875 12.3992 4.1875 12.25C4.1875 12.1008 4.24676 11.9577 4.35225 11.8523C4.45774 11.7468 4.60082 11.6875 4.75 11.6875H9.25C9.39918 11.6875 9.54226 11.7468 9.64775 11.8523C9.75324 11.9577 9.8125 12.1008 9.8125 12.25ZM9.8125 15.25C9.8125 15.3992 9.75324 15.5423 9.64775 15.6477C9.54226 15.7532 9.39918 15.8125 9.25 15.8125H4.75C4.60082 15.8125 4.45774 15.7532 4.35225 15.6477C4.24676 15.5423 4.1875 15.3992 4.1875 15.25C4.1875 15.1008 4.24676 14.9577 4.35225 14.8523C4.45774 14.7468 4.60082 14.6875 4.75 14.6875H9.25C9.39918 14.6875 9.54226 14.7468 9.64775 14.8523C9.75324 14.9577 9.8125 15.1008 9.8125 15.25Z'
                  fill='#0A0A0A'
                ></path>
              </svg>
              <div className='item-info flex-1'>
                <div className='font-normal'>Tài liệu cần thiết</div>
                <div className='text-gray-500'>
                  Khi nhận phòng, bạn cần mang theo Chứng minh nhân dân/VISA/Hộ chiếu. Các tài liệu
                  yêu cầu ở dạng bản cứng.
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className=' flex gap-3 mt-2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.25 0.65918H1.75C1.45992 0.65918 1.18172 0.774414 0.976602 0.979532C0.771484 1.18465 0.65625 1.46285 0.65625 1.75293V14.2529C0.65625 14.543 0.771484 14.8212 0.976602 15.0263C1.18172 15.2314 1.45992 15.3467 1.75 15.3467H14.25C14.5401 15.3467 14.8183 15.2314 15.0234 15.0263C15.2285 14.8212 15.3438 14.543 15.3438 14.2529V1.75293C15.3438 1.46285 15.2285 1.18465 15.0234 0.979532C14.8183 0.774414 14.5401 0.65918 14.25 0.65918ZM14.4062 14.2529C14.4062 14.2944 14.3898 14.3341 14.3605 14.3634C14.3312 14.3927 14.2914 14.4092 14.25 14.4092H1.75C1.70856 14.4092 1.66882 14.3927 1.63951 14.3634C1.61021 14.3341 1.59375 14.2944 1.59375 14.2529V1.75293C1.59375 1.71149 1.61021 1.67175 1.63951 1.64244C1.66882 1.61314 1.70856 1.59668 1.75 1.59668H14.25C14.2914 1.59668 14.3312 1.61314 14.3605 1.64244C14.3898 1.67175 14.4062 1.71149 14.4062 1.75293V14.2529ZM11.4563 7.67168C11.544 7.75957 11.5933 7.87871 11.5933 8.00293C11.5933 8.12715 11.544 8.24629 11.4563 8.33418L8.95625 10.8342C8.86739 10.917 8.74986 10.9621 8.62842 10.9599C8.50699 10.9578 8.39112 10.9086 8.30524 10.8227C8.21935 10.7368 8.17016 10.6209 8.16802 10.4995C8.16587 10.3781 8.21095 10.2605 8.29375 10.1717L9.99297 8.47168H4.875C4.75068 8.47168 4.63145 8.42229 4.54354 8.33439C4.45564 8.24648 4.40625 8.12725 4.40625 8.00293C4.40625 7.87861 4.45564 7.75938 4.54354 7.67147C4.63145 7.58357 4.75068 7.53418 4.875 7.53418H9.99297L8.29375 5.83418C8.21095 5.74532 8.16587 5.62779 8.16802 5.50635C8.17016 5.38492 8.21935 5.26905 8.30524 5.18317C8.39112 5.09728 8.50699 5.04809 8.62842 5.04595C8.74986 5.0438 8.86739 5.08888 8.95625 5.17168L11.4563 7.67168Z'
                    fill='#0A0A0A'
                  ></path>
                </svg>
                <div className=''>
                  <div className=''>Nhận phòng</div>
                  <div className='text-gray-500'>Sau 2:00 chiều</div>
                </div>
              </div>
              <div className='flex gap-3 mt-2'>
                <svg
                  width='15'
                  height='16'
                  viewBox='0 0 15 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.75 0.65918H1.25C0.959919 0.65918 0.68172 0.774414 0.476602 0.979532C0.271484 1.18465 0.15625 1.46285 0.15625 1.75293V14.2529C0.15625 14.543 0.271484 14.8212 0.476602 15.0263C0.68172 15.2314 0.959919 15.3467 1.25 15.3467H13.75C14.0401 15.3467 14.3183 15.2314 14.5234 15.0263C14.7285 14.8212 14.8438 14.543 14.8438 14.2529V1.75293C14.8438 1.46285 14.7285 1.18465 14.5234 0.979532C14.3183 0.774414 14.0401 0.65918 13.75 0.65918ZM13.9062 14.2529C13.9062 14.2944 13.8898 14.3341 13.8605 14.3634C13.8312 14.3927 13.7914 14.4092 13.75 14.4092H1.25C1.20856 14.4092 1.16882 14.3927 1.13951 14.3634C1.11021 14.3341 1.09375 14.2944 1.09375 14.2529V1.75293C1.09375 1.71149 1.11021 1.67175 1.13951 1.64244C1.16882 1.61314 1.20856 1.59668 1.25 1.59668H13.75C13.7914 1.59668 13.8312 1.61314 13.8605 1.64244C13.8898 1.67175 13.9062 1.71149 13.9062 1.75293V14.2529ZM11.0938 8.00293C11.0938 8.12725 11.0444 8.24648 10.9565 8.33439C10.8685 8.42229 10.7493 8.47168 10.625 8.47168H5.50703L7.20625 10.1717C7.2523 10.2146 7.28924 10.2663 7.31486 10.3238C7.34048 10.3813 7.35426 10.4434 7.35537 10.5064C7.35648 10.5693 7.3449 10.6318 7.32133 10.6902C7.29775 10.7485 7.26266 10.8016 7.21815 10.8461C7.17364 10.8906 7.12062 10.9257 7.06225 10.9493C7.00388 10.9728 6.94136 10.9844 6.87842 10.9833C6.81548 10.9822 6.75341 10.9684 6.69591 10.9428C6.63841 10.9172 6.58666 10.8802 6.54375 10.8342L4.04375 8.33418C3.95597 8.24629 3.90666 8.12715 3.90666 8.00293C3.90666 7.87871 3.95597 7.75957 4.04375 7.67168L6.54375 5.17168C6.63261 5.08888 6.75014 5.0438 6.87158 5.04595C6.99301 5.04809 7.10888 5.09728 7.19476 5.18317C7.28065 5.26905 7.32984 5.38492 7.33198 5.50635C7.33413 5.62779 7.28905 5.74532 7.20625 5.83418L5.50703 7.53418H10.625C10.7493 7.53418 10.8685 7.58357 10.9565 7.67147C11.0444 7.75938 11.0938 7.87861 11.0938 8.00293Z'
                    fill='#0A0A0A'
                  ></path>
                </svg>
                <div className=''>
                  <div className='item-info__title'>Trả phòng</div>
                  <div className='text-gray-500'>Trước 12:00 chiều</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBarPolicy;
