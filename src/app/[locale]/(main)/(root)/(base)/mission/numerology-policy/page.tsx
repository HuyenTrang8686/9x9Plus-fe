/* eslint-disable react/no-array-index-key */
import PreviousNavigation from '@/components/PreviousNavigation';

const personalYearData = [
  {
    title: 'NĂM CÁ NHÂN 1 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Vào thời điểm này, bạn là ngọn lửa tiên phong, sẵn sàng chinh phục đỉnh cao với năng lượng độc lập và sáng tạo. Năm Cá Nhân 1 đánh dấu sự khởi đầu mới, nơi bạn được kêu gọi dẫn dắt và đặt nền móng cho tương lai rực rỡ.',
    doList: [
      'Khởi động dự án mới.',
      'Đặt mục tiêu lớn lao.',
      'Phát triển kỹ năng lãnh đạo.',
      'Tin tưởng vào bản thân và hành động dứt khoát.'
    ],
    avoidList: [
      'Trì hoãn hoặc sợ thất bại.',
      'Phụ thuộc vào người khác.',
      'Hành động bốc đồng mà không có kế hoạch.'
    ],
    positiveForecast: 'Bạn sẽ trải qua một khởi đầu mạnh mẽ, mở ra cánh cửa thành công. Đây là năm để bạn khẳng định bản thân, xây dựng nền tảng cho tương lai rực rỡ, và truyền cảm hứng cho người khác như một nhà cách mạng!',
    riskForecast: 'Nguy cơ bị cô lập do quá tập trung vào bản thân, dẫn đến xung đột hoặc mất cân bằng. Tránh tự cao hoặc bỏ qua ý kiến của người khác.'
  },
  {
    title: 'NĂM CÁ NHÂN 2 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Năm nay, bạn là cầu nối tình yêu, mang lại hòa bình với năng lượng kết nối và trực giác. Năm Cá Nhân 2 là thời điểm để xây dựng mối quan hệ sâu sắc và tìm kiếm sự cân bằng trong cuộc sống.',
    doList: [
      'Xây dựng mối quan hệ mới.',
      'Lắng nghe và hợp tác với người khác.',
      'Phát triển trực giác nhạy bén.',
      'Giải quyết xung đột một cách khéo léo.'
    ],
    avoidList: [
      'Xung đột hoặc tranh cãi không cần thiết.',
      'Phụ thuộc quá mức vào người khác.',
      'Bỏ qua cảm xúc và nhu cầu bản thân.'
    ],
    positiveForecast: 'Bạn sẽ tìm thấy sự cân bằng và tình yêu trong các mối quan hệ. Đây là năm để bạn trở thành nhà hòa giải, tạo nên những liên minh bền vững, và cảm nhận sự ấm áp từ cộng đồng xung quanh!',
    riskForecast: 'Nguy cơ bị cuốn vào drama hoặc cảm xúc tiêu cực, dẫn đến căng thẳng hoặc mất năng lượng. Tránh né tránh vấn đề hoặc để người khác lợi dụng lòng tốt của bạn.'
  },
  {
    title: 'NĂM CÁ NHÂN 3 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Bạn là ngôi sao rực rỡ, lan tỏa niềm vui với năng lượng sáng tạo và biểu đạt. Năm Cá Nhân 3 là thời điểm để bạn tỏa sáng qua nghệ thuật và truyền cảm hứng đến mọi người.',
    doList: [
      'Tham gia nghệ thuật hoặc sáng tạo.',
      'Chia sẻ ý tưởng và cảm xúc.',
      'Tận hưởng cuộc sống với nụ cười.',
      'Giao tiếp tích cực và lạc quan.'
    ],
    avoidList: [
      'Phân tâm hoặc thiếu tập trung.',
      'So sánh bản thân với người khác.',
      'Lãng phí thời gian vào việc vô bổ.'
    ],
    positiveForecast: 'Bạn sẽ tỏa sáng như pháo hoa, thu hút sự chú ý và truyền cảm hứng qua tài năng của mình. Đây là năm để bạn biến giấc mơ thành hiện thực, mang lại niềm vui cho bản thân và thế giới!',
    riskForecast: 'Nguy cơ kiệt sức do quá tải sáng tạo hoặc bị phê phán làm tổn thương. Tránh lan man ý tưởng mà không hoàn thiện, hoặc để sự tự ti cản bước bạn tỏa sáng.'
  },
  {
    title: 'NĂM CÁ NHÂN 4 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Bạn là trụ cột vững chắc, kiến tạo di sản với năng lượng ổn định và kỷ luật. Năm Cá Nhân 4 là thời điểm để xây dựng nền tảng cho thành công lâu dài.',
    doList: [
      'Lập kế hoạch chi tiết và rõ ràng.',
      'Làm việc chăm chỉ và kiên trì.',
      'Xây dựng hệ thống hoặc thói quen tốt.',
      'Tiết kiệm và quản lý tài chính khôn ngoan.'
    ],
    avoidList: [
      'Cứng nhắc hoặc sợ thay đổi.',
      'Bỏ qua sức khỏe cá nhân.',
      'Mất kiên nhẫn với tiến độ chậm.'
    ],
    positiveForecast: 'Bạn sẽ tạo ra nền tảng vững chắc cho tương lai, đạt được sự ổn định và tự hào với công sức của mình. Đây là năm để bạn dựng nên những cấu trúc bất diệt, như một kiến trúc sư tài ba!',
    riskForecast: 'Nguy cơ kiệt sức do làm việc quá sức hoặc bị mắc kẹt trong thói quen cũ. Tránh bỏ qua gia đình và bạn bè.'
  },
  {
    title: 'NĂM CÁ NHÂN 5 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Bạn là cơn gió hoang dã, khám phá vô tận với năng lượng tự do và thay đổi. Năm Cá Nhân 5 là thời điểm để bạn bước ra ngoài vùng an toàn và trải nghiệm cuộc sống.',
    doList: [
      'Thử thách bản thân với điều mới mẻ.',
      'Du lịch hoặc học hỏi kiến thức mới.',
      'Chấp nhận và đón nhận thay đổi.',
      'Tận hưởng tự do cá nhân một cách tích cực.'
    ],
    avoidList: [
      'Bốc đồng hoặc thiếu trách nhiệm.',
      'Trốn tránh cam kết quan trọng.',
      'Lạm dụng tự do vào việc tiêu cực.'
    ],
    positiveForecast: 'Bạn sẽ trải qua một năm đầy màu sắc, mở ra những chân trời mới và truyền cảm hứng cho người khác sống hết mình. Đây là năm để bạn bay cao như đại bàng, khám phá bản thân!',
    riskForecast: 'Nguy cơ mất kiểm soát tài chính hoặc mối quan hệ do thay đổi quá nhanh. Tránh liều lĩnh mà không có kế hoạch.'
  },
  {
    title: 'NĂM CÁ NHÂN 6 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Bạn là trái tim nhân loại, nuôi dưỡng mọi người với năng lượng tình yêu và trách nhiệm. Năm Cá Nhân 6 là thời điểm để bạn mang lại hòa bình và sự ấm áp.',
    doList: [
      'Chăm sóc gia đình hoặc cộng đồng.',
      'Giải quyết vấn đề với tình yêu thương.',
      'Tham gia hoạt động từ thiện ý nghĩa.',
      'Tạo môi trường sống hài hòa.'
    ],
    avoidList: [
      'Kiểm soát quá mức người khác.',
      'Bỏ bê bản thân vì người khác.',
      'Gánh vác quá nhiều trách nhiệm.'
    ],
    positiveForecast: 'Bạn sẽ mang lại sự ấm áp và hòa hợp, trở thành nguồn sáng cho những người xung quanh. Đây là năm để bạn chữa lành và xây dựng những mối quan hệ bền vững, như một người bảo vệ vĩ đại!',
    riskForecast: 'Nguy cơ kiệt sức do hy sinh quá nhiều hoặc bị lợi dụng. Tránh can thiệp quá sâu vào vấn đề của người khác.'
  },
  {
    title: 'NĂM CÁ NHÂN 7 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Bạn là nhà hiền triết, dẫn lối giác ngộ với năng lượng tâm linh và suy ngẫm. Năm Cá Nhân 7 là thời điểm để bạn tìm kiếm chân lý và khám phá nội tâm.',
    doList: [
      'Thiền định hoặc học hỏi sâu sắc.',
      'Tìm kiếm sự thật bên trong bản thân.',
      'Chia sẻ trí tuệ với người khác.',
      'Nghỉ ngơi để tái tạo năng lượng.'
    ],
    avoidList: [
      'Cô lập quá mức với thế giới.',
      'Nghi ngờ bản thân hoặc người khác.',
      'Bỏ qua cơ hội giao tiếp xã hội.'
    ],
    positiveForecast: 'Bạn sẽ khám phá những chiều sâu mới của tâm hồn, đạt được trí tuệ và ánh sáng từ bên trong. Đây là năm để bạn trở thành ngọn hải đăng, dẫn dắt người khác đến sự thật!',
    riskForecast: 'Nguy cơ rơi vào trầm tư quá mức hoặc mất kết nối xã hội. Tránh né tránh thực tế.'
  },
  {
    title: 'NĂM CÁ NHÂN 8 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Bạn là vị vua chinh phục đỉnh cao, với năng lượng quyền lực và thịnh vượng. Năm Cá Nhân 8 là thời điểm để bạn đạt thành công và lãnh đạo với sự công bằng.',
    doList: [
      'Lãnh đạo dự án hoặc tổ chức lớn.',
      'Quản lý tài chính một cách khôn ngoan.',
      'Đầu tư vào tương lai dài hạn.',
      'Cân bằng quyền lực với lòng nhân ái.'
    ],
    avoidList: [
      'Tham vọng mù quáng vì lợi nhuận.',
      'Bỏ qua đạo đức trong hành động.',
      'Mất kiểm soát cảm xúc cá nhân.'
    ],
    positiveForecast: 'Bạn sẽ đạt được thành công rực rỡ, xây dựng đế chế và mang lại thịnh vượng cho bản thân lẫn cộng đồng. Đây là năm để bạn tỏa sáng như ngọn núi bất khuất!',
    riskForecast: 'Nguy cơ mất cân bằng giữa công việc và cuộc sống, dẫn đến xung đột hoặc sức khỏe suy giảm. Tránh lạm dụng quyền lực.'
  },
  {
    title: 'NĂM CÁ NHÂN 9 - KHÁC BIỆT ĐỂ TIÊN PHONG',
    description: 'Nhận định vận hạn: Bạn là đại dương từ bi, để lại di sản với năng lượng nhân đạo và hoàn thiện. Năm Cá Nhân 9 là thời điểm để bạn kết thúc chu kỳ và phục vụ nhân loại.',
    doList: [
      'Tham gia hoạt động từ thiện ý nghĩa.',
      'Chữa lành mối quan hệ cũ.',
      'Hoàn thành các dự án dang dở.',
      'Cho đi với lòng biết ơn và tha thứ.'
    ],
    avoidList: [
      'Giữ lại oán giận hoặc hận thù.',
      'Bám víu vào quá khứ không cần thiết.',
      'Lãng phí năng lượng vào việc vô ích.'
    ],
    positiveForecast: 'Bạn sẽ hoàn thành một chu kỳ vĩ đại, để lại di sản yêu thương và mở ra cánh cửa mới. Đây là năm để bạn trở thành nhà cách mạng nhân ái, thay đổi thế giới!',
    riskForecast: 'Nguy cơ cảm thấy trống rỗng hoặc mất phương hướng sau khi kết thúc chu kỳ. Tránh trì hoãn việc buông bỏ.'
  }
];

const page = () => {
  return (
    <div className="h-[calc(100vh-10px)] bg-9x9 flex flex-col items-center py-10 px-4">
      <PreviousNavigation />

      {/* Header */}
      <div className="mb-6">
        <p className="text-[1.25rem] font-[274] text-shadow-custom text-center">9x9Plus</p>
        <p className="text-[1.25rem] font-[700] text-shadow-custom text-center">DỰ BÁO NĂM CÁ NHÂN</p>
      </div>

      <div className="h-[calc(100vh-100px)] overflow-y-auto w-full flex flex-col items-center justify-start">
        {personalYearData.map((item, index) => (
          <div key={index} className="bg-card-info w-full my-4 p-4 rounded-lg max-w-[24.4375rem]">
            <div className="w-full border-b border-white pb-2">
              <h3 className="text-left text-shadow-custom font-[590] text-[1rem]">{item.title}</h3>
            </div>
            <p className="text-shadow-custom font-[400] text-[0.875rem] text-left mt-2 leading-relaxed">{item.description}</p>

            <div className="mt-3">
              <p className="font-[590] text-[0.875rem] text-shadow-custom">Việc cần làm:</p>
              <ul className="list-disc list-inside ml-2 text-shadow-custom">
                {item.doList.map((doItem, idx) => <li key={idx}>{doItem}</li>)}
              </ul>
            </div>

            <div className="mt-2">
              <p className="font-[590] text-[0.875rem] text-shadow-custom">Việc cần tránh:</p>
              <ul className="list-disc list-inside ml-2 text-shadow-custom">
                {item.avoidList.map((avoidItem, idx) => <li key={idx}>{avoidItem}</li>)}
              </ul>
            </div>

            <div className="mt-2">
              <p className="font-[590] text-[0.875rem] text-shadow-custom">Dự báo tích cực:</p>
              <ul className="list-disc list-inside ml-2 text-shadow-custom">
                <li>{item.positiveForecast}</li>
              </ul>
            </div>

            <div className="mt-2">
              <p className="font-[590] text-[0.875rem] text-shadow-custom">Nguy cơ cần tránh:</p>
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
