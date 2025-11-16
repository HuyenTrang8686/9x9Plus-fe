/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';

const blindBoxList = [
  {
    id: 1,
    image: '/assets/blind-box-1.png',
    title: 'Khai mở ý trí',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Bắt đầu là điều khó nhất – nhưng bạn vừa làm được. Dũng khí hôm nay sẽ thay đổi vận mệnh ngày mai."
        </p>
        <p className="relative z-50 text-white">🎯 Gợi ý hành động tiếp theo: Đặt mục tiêu 1 việc bạn sẽ làm ngay hôm nay mà trước đây bạn từng trì hoãn.</p>
      </div>
    )
  },
  {
    id: 2,
    image: '/assets/blind-box-2.png',
    title: 'Kết Nối Yêu Thương',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Bạn không cô đơn – những kết nối thật sự bắt đầu từ sự chân thành."
        </p>
        <p className="relative z-50 text-white">
          🎯 Gợi ý hành động tiếp theo: Gửi lời cảm ơn tới 1 người bạn trân quý, hoặc nhắn một tin tử tế đến người từng giúp bạn.
        </p>
      </div>
    )
  },
  {
    id: 3,
    image: '/assets/blind-box-3.png',
    title: 'Biểu Đạt & Sáng Tạo',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Tiếng nói bên trong bạn có giá trị – hãy để nó cất lên thành hành động hoặc câu chữ."
        </p>
        <p className="relative z-50 text-white">
          🎯 Gợi ý hành động tiếp theo: Viết một dòng status chia sẻ điều bạn đang nghĩ, cảm nhận hoặc sáng tạo.
        </p>
      </div>
    )
  },
  {
    id: 4,
    image: '/assets/blind-box-4.png',
    title: 'Kỷ Luật & Cam Kết',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Kỷ luật là cây cầu giữa mục tiêu và thành tựu. Bền bỉ hôm nay – tự do ngày mai."
        </p>
        <p className="relative z-50 text-white">🎯 Gợi ý hành động tiếp theo: Cam kết thực hiện 1 việc lặp lại trong 3 ngày tới, dù chỉ 5 phút/ngày.</p>
      </div>
    )
  },
  {
    id: 5,
    image: '/assets/blind-box-5.png',
    title: 'Đột Phá & Linh Hoạt',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Bạn không sinh ra để lặp lại một kịch bản cũ - bạn được tạo ra để đột phá và thay đổi."
        </p>
        <p className="relative z-50 text-white">🎯 Gợi ý hành động tiếp theo: Hãy làm một điều mà bạn thấy sợ - dù nhỏ thôi, nhưng vượt ra ngoài vùng an toàn.</p>
      </div>
    )
  },
  {
    id: 6,
    image: '/assets/blind-box-6.png',
    title: 'Chăm Sóc & Phụng Sự',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Trái tim bạn luôn biết cách chữa lành - cho mình và cho người khác."
        </p>
        <p className="relative z-50 text-white">🎯 Gợi ý hành động tiếp theo: Hỏi thăm chân thành 1 người bạn lâu chưa liên lạc – và lắng nghe họ bằng sự hiện diện.</p>
      </div>
    )
  },
  {
    id: 7,
    image: '/assets/blind-box-7.png',
    title: 'Trực Giác & Hiểu Mình',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Bạn càng yên lặng - bạn càng nghe rõ tiếng nói thật từ bên trong."
        </p>
        <p className="relative z-50 text-white">🎯 Gợi ý hành động tiếp theo: Dành 5 phút thiền tĩnh - hoặc viết ra 3 điều bạn cảm thấy đúng với linh cảm gần đây.</p>
      </div>
    )
  },
  {
    id: 8,
    image: '/assets/blind-box-8.png',
    title: 'Giàu Có & Thịnh Vượng',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Giàu có không chỉ là tiền bạc – mà là khả năng bạn tạo giá trị, dẫn dắt và đón nhận."
        </p>
        <p className="relative z-50 text-white">🎯 Gợi ý hành động tiếp theo: Viết 3 điều bạn đang có khiến bạn biết ơn, và chia sẻ 1 điều có giá trị cho cộng đồng.</p>
      </div>
    )
  },
  {
    id: 9,
    image: '/assets/blind-box-9.png',
    title: 'Phụng Sự & Hoàn Thiện',
    content: (
      <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
        <p className="relative z-50 text-white">
          "Bạn đang sống không chỉ cho mình – bạn là hạt giống của sự lan tỏa."
        </p>
        <p className="relative z-50 text-white">🎯 Gợi ý hành động tiếp theo: Chia sẻ câu chuyện bạn từng vượt qua khó khăn để truyền cảm hứng cho 1 người khác.</p>
      </div>
    )
  },
];

type Props = {
  secretNumber: number;
  setDisplayRandomBlindBox: (value: { isDisplay: boolean; secretNumber: number }) => void;
};

const RandomBlindBox = ({ secretNumber, setDisplayRandomBlindBox }: Props) => {
  const t = useTranslations('goldMining');
  const [isUnboxed, setisUnboxed] = useState<boolean>(false);

  const handleUnbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setisUnboxed(true);
  };

  const renderRandomBlindBox = () => {
    const blindBox = blindBoxList.find(box => box.id === secretNumber);
    if (!blindBox) {
      return (
        <div className="text-center text-white">
          <h1>{t('notFound')}</h1>
          <p>{t('tryAgain')}</p>
        </div>
      );
    }

    return (
      <div
        onClick={handleUnbox}
        className="relative flex flex-col items-center justify-center cursor-pointer h-full"
      >
        {/* Background Image */}
        <div className="absolute z-20 flex flex-col items-center justify-center text-center space-y-4 top-50">
          <h1 className="text-shadow-custom text-[2rem] font-[860] text-white">
            {t('boxNumber', { number: blindBox.id })}
          </h1>
          <h2 className="text-shadow-custom text-[1.25rem] font-[510] text-white">
            {t(`blindBoxes.box${secretNumber}.title`)}
          </h2>
        </div>
        <Image
          src={blindBox.image}
          alt={`Blind Box ${blindBox.id}`}
          width={500}
          height={500}
          className="absolute  w-full h-screen object-cover z-10"
        />

        {/* Content overlay */}

        <p className="text-shadow-custom font-[510] text-[1rem] text-white absolute bottom-40 z-50">
          {t('clickToOpen')}
        </p>
      </div>
    );
  };

  const renderUnboxedContent = () => {
    const blindBox = blindBoxList.find(box => box.id === secretNumber);
    if (!blindBox) {
      return null;
    }

    return (
      <div
        onClick={() => setDisplayRandomBlindBox({ isDisplay: false, secretNumber: 0 })}
        className="relative flex flex-col items-center justify-center cursor-pointer h-full"
      >
        {/* Background Image */}
        <Image
          width={500}
          height={500}
          className="absolute -bottom-40 w-full h-full object-contain z-10"
          alt="display base"
          src="/assets/display-base.png"
        />

        {/* Content overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center space-y-4 px-2 -translate-y-20">
          <h1 className="text-shadow-custom font-[860] text-[2rem] text-white">
            {t('openedSuccessfully')}
          </h1>
          <Image
            width={500}
            height={500}
            className="w-[250px] h-[160px]"
            alt="logo 9x9"
            src="/assets/logo-9x9.png"
          />
          <div className="relative z-50 text-shadow-custom font-[400] text-[1.25rem] space-y-3">
            <p className="relative z-50 text-white">
              {t(`blindBoxes.box${secretNumber}.quote`)}
            </p>
            <p className="relative z-50 text-white">
              {t(`blindBoxes.box${secretNumber}.action`)}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#222B3C]/75 ">
      <div className="relative w-full h-screen">
        {!isUnboxed ? renderRandomBlindBox() : renderUnboxedContent()}
      </div>
    </div>
  );
};

export default RandomBlindBox;
