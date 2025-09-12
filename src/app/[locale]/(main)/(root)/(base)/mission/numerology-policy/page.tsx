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
        <p className="text-[1.25rem] font-[700] text-shadow-custom text-center">Giới Thiệu Về Thần Số Học</p>
      </div>

      <div className="h-[calc(100vh-100px)] overflow-y-auto w-full flex flex-col items-center justify-start">
        <section id="intro" className="mb-8 bg-card-info max-w-[24.4375rem] text-shadow-custom">
          <p>
            Chào mừng bạn đến với hành trình khám phá bản thân qua Thần Số Học – một khoa học huyền bí và đầy sức mạnh, nơi các con số trở thành chìa khóa mở ra cánh cửa định mệnh của bạn! Thần số học không chỉ là một công cụ tính toán, mà còn là một nghệ thuật tâm linh cổ xưa, kết hợp giữa toán học, triết học và sự giác ngộ, giúp bạn hiểu rõ tiềm năng, sứ mệnh, và những thử thách trên con đường đời. Với mỗi con số từ 1 đến 9, cùng các số chủ đạo 11, 22, và 33, 44 bạn sẽ khám phá bản chất sâu thẳm của mình, từ tính cách bẩm sinh đến những cơ hội rực rỡ đang chờ đợi trong tương lai. Đây không chỉ là một hành trình tự nhận thức, mà còn là lời mời gọi để bạn sống trọn vẹn, dẫn dắt cuộc đời mình với sự tự tin và ánh sáng nội tại.
            Thần số học không chỉ mang lại những con số, mà còn là câu chuyện về vũ trụ và sự kết nối kỳ diệu giữa con người với vạn vật. Hãy để chúng tôi đồng hành cùng bạn, hóa thân thành ngọn hải đăng soi sáng, hướng dẫn bạn khám phá định mệnh và tỏa sáng như những vì sao trên bầu trời cuộc đời!
          </p>
        </section>

        <div>
          {/* Nguồn gốc */}
          <section id="origin" className="mb-8 bg-card-info max-w-[24.4375rem] max-w-[24.4375rem]">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">Nguồn Gốc Ra Đời Của Thần Số Học</h2>
            <p className="text-shadow-custom">
              Thần số học có nguồn gốc sâu xa, được xem là một trong những hệ thống tri thức cổ xưa nhất của nhân loại, bắt nguồn từ sự giao thoa văn hóa và tư duy triết học của nhiều nền văn minh vĩ đại. Câu chuyện bắt đầu từ khoảng thế kỷ 6 trước Công nguyên, khi nhà triết gia người Hy Lạp Pythagoras – được mệnh danh là “Cha đẻ của Thần số học” – đã đặt nền móng cho hệ thống này. Pythagoras tin rằng vũ trụ vận hành theo các quy luật toán học, và mỗi con số mang một rung động riêng, phản ánh bản chất của sự sống. Ông kết hợp kiến thức từ toán học Hy Lạp với các truyền thống huyền bí từ Ai Cập, Babylon, và Ấn Độ, nơi các nhà thông thái đã sử dụng con số để dự đoán, chữa lành và hiểu về linh hồn.
              Từ đó, Thần số học phát triển qua nhiều nền văn hóa. Tại Ấn Độ, nó hòa quyện với Vệ Đà và các bài toán chiêm tinh; ở Trung Quốc, nó gắn liền với Phong Thủy và các con số may mắn như 8; trong khi tại phương Tây, nó được cải tiến bởi các nhà huyền học như Cheiro và L. Dow Balliett vào thế kỷ 19-20, đưa Thần số học trở thành một công cụ phổ biến trên toàn cầu. Hệ thống Pythagoras hiện đại, dựa trên việc gán các chữ cái (A=1, B=2, …, Z=26) và tính toán từ ngày sinh, đã trở thành nền tảng cho các chỉ số như Đường Đời, Số Mệnh, và Số Linh Hồn mà chúng ta biết ngày nay.
              Thần số học không chỉ là di sản của quá khứ, mà còn là ngọn lửa sống động, được tái sinh trong thời đại công nghệ để giúp bạn – ngay tại giây phút này, khám phá ý nghĩa cuộc đời. Đây là lời thì thầm từ vũ trụ, mời gọi bạn bước vào hành trình tự nhận thức và chinh phục định mệnh với tất cả sự rực rỡ mà bạn xứng đáng!
            </p>
          </section>
          {/* Sứ mệnh */}
          <section id="life-mission" className="mb-8 bg-card-info max-w-[24.4375rem] max-w-[24.4375rem]">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">Sứ Mệnh Trong Thần Số Học: Hành Trình Đích Thực Của Bạn</h2>
            <p className="text-shadow-custom mb-4">
              Là một chuyên gia về thần số học, tôi rất hào hứng khi được chia sẻ với bạn về sứ mệnh – hay còn gọi là con đường đời (Life Path) – gắn liền với từng con số. Trong thần số học, mỗi con số đại diện cho một rung động năng lượng độc đáo, và sứ mệnh của bạn chính là sứ mệnh thiêng liêng mà vũ trụ giao phó, giúp bạn phát huy tiềm năng cao nhất để tạo nên sự khác biệt. Hãy để những lời này thôi thúc bạn hành động và tỏa sáng!
            </p>
            <ul className="list-disc list-inside  text-shadow-custom space-y-5">
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 1:</span>
                {' '}
                Nhà Lãnh Đạo Tiên Phong, Khai Phá Tương Lai
                <p className="ml-6 mt-1">
                  Bạn là ngọn lửa dẫn dắt! Sứ mệnh của số 1 là trở thành người tiên phong, độc lập và sáng tạo, dẫn dắt thế giới bước vào những chân trời mới. Bạn được sinh ra để phá vỡ giới hạn cũ kỹ, khởi xướng ý tưởng đột phá và truyền cảm hứng cho hàng triệu người theo sau. Hãy tưởng tượng bạn là vị anh hùng đứng đầu cuộc cách mạng cá nhân – xây dựng doanh nghiệp từ con số không, lãnh đạo đội ngũ chinh phục đỉnh cao, hoặc sáng tạo nghệ thuật thay đổi nhận thức xã hội. Đừng sợ cô đơn; đó là sức mạnh để bạn tỏa sáng rực rỡ! Với lòng dũng cảm và ý chí sắt đá, bạn sẽ biến giấc mơ thành hiện thực, chứng minh rằng một cá nhân có thể thay đổi cả thế giới. Hãy đứng dậy ngay hôm nay – lãnh đạo của bạn đang chờ đợi để bùng nổ!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 2:</span>
                {' '}
                Nhà Ngoại Giao Hòa Hợp, Kết Nối Linh Hồn
                <p className="ml-6 mt-1">
                  Bạn là cầu nối của tình yêu và sự thống nhất! Sứ mệnh của số 2 là mang lại sự cân bằng, hợp tác và ngoại giao tinh tế, giúp mọi người kết nối sâu sắc hơn. Bạn được định mệnh chọn để lắng nghe, hỗ trợ và xây dựng mối quan hệ bền vững, biến xung đột thành hòa bình và cô lập thành cộng đồng. Hãy hình dung bạn là nhà hòa giải vĩ đại – trong gia đình, công việc hay xã hội – nơi bạn sử dụng trực giác nhạy bén để chữa lành vết thương, thúc đẩy đối thoại và tạo nên những liên minh mạnh mẽ. Đừng coi sự nhạy cảm là điểm yếu; đó là siêu năng lực để bạn lan tỏa lòng từ bi! Với sự kiên nhẫn và tình yêu vô bờ, bạn sẽ biến thế giới thành một nơi ấm áp hơn, nơi mọi người cùng nhau bay cao. Hãy mở lòng ngay bây giờ – sứ mệnh kết nối của bạn sẽ thay đổi cuộc đời biết bao người!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 3:</span>
                {' '}
                Nghệ Sĩ Sáng Tạo, Khơi Dậy Niềm Vui Sống
                <p className="ml-6 mt-1">
                  Bạn là nguồn cảm hứng bất tận! Sứ mệnh của số 3 là biểu đạt sáng tạo, lan tỏa niềm vui và khơi dậy sự lạc quan trong mọi người. Bạn được sinh ra để biến ý tưởng thành nghệ thuật sống động – viết sách truyền cảm hứng, biểu diễn sân khấu chạm đến trái tim, hoặc thiết kế những điều đẹp đẽ làm thế giới rực rỡ hơn. Hãy tưởng tượng bạn là ngôi sao tỏa sáng – sử dụng lời nói, âm nhạc hay hình ảnh để chữa lành nỗi buồn, khích lệ tinh thần và làm cuộc sống trở nên đáng sống. Đừng kìm nén sự vui vẻ; hãy để nó bùng nổ như pháo hoa! Với tài năng thiên bẩm và năng lượng tích cực, bạn sẽ truyền động lực cho hàng ngàn người theo đuổi đam mê. Hãy sáng tạo ngay hôm nay – thế giới đang chờ đợi kiệt tác từ bạn!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 4:</span>
                {' '}
                Nhà Xây Dựng Vững Chắc, Kiến Tạo Nền Tảng
                <p className="ml-6 mt-1">
                  Bạn là trụ cột của sự ổn định! Sứ mệnh của số 4 là xây dựng cấu trúc vững chắc, thực tế và đáng tin cậy, tạo nền tảng cho sự phát triển lâu dài. Bạn được định mệnh giao phó để tổ chức, lập kế hoạch và biến ý tưởng trừu tượng thành thực tế bền vững – như xây dựng doanh nghiệp vững vàng, tạo hệ thống giáo dục thay đổi xã hội, hoặc phát triển cộng đồng an toàn. Hãy hình dung bạn là kiến trúc sư vĩ đại – với kỷ luật và sự kiên trì, bạn dựng nên những tòa tháp không thể lay chuyển. Đừng coi công việc chăm chỉ là gánh nặng; đó là chìa khóa mở ra thành công vĩnh cửu! Với sức mạnh thực tiễn và lòng trung thành, bạn sẽ mang lại sự an toàn và thịnh vượng cho mọi người xung quanh. Hãy bắt đầu xây dựng ngay – di sản của bạn sẽ tồn tại mãi mãi!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 5:</span>
                {' '}
                Nhà Phiêu Lưu Tự Do, Khám Phá Vô Tận
                <p className="ml-6 mt-1">
                  Bạn là cơn gió tự do! Sứ mệnh của số 5 là theo đuổi sự thay đổi, phiêu lưu và thích nghi, mang lại sự tươi mới cho cuộc sống. Bạn được sinh ra để khám phá thế giới, thử thách giới hạn và truyền cảm hứng cho người khác sống hết mình – du lịch đến những vùng đất mới, khởi nghiệp mạo hiểm, hoặc thúc đẩy sự đa dạng văn hóa. Hãy tưởng tượng bạn là nhà thám hiểm dũng cảm – sử dụng sự linh hoạt và tò mò để vượt qua mọi trở ngại, biến thử thách thành cơ hội. Đừng sợ rủi ro; đó là nhiên liệu cho sự phát triển! Với năng lượng sôi động và tinh thần tự do, bạn sẽ khơi dậy niềm đam mê sống ở mọi người. Hãy bước ra khỏi vùng an toàn ngay hôm nay – cuộc phiêu lưu vĩ đại của bạn đang chờ!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 6:</span>
                {' '}
                Nhà Nuôi Dưỡng Yêu Thương, Mang Lại Hài Hòa
                <p className="ml-6 mt-1">
                  Bạn là trái tim của nhân loại! Sứ mệnh của số 6 là chăm sóc, trách nhiệm và tạo sự hài hòa, mang lại tình yêu vô điều kiện cho gia đình và cộng đồng. Bạn được định mệnh chọn để chữa lành, hỗ trợ và xây dựng môi trường an lành – như làm cha mẹ mẫu mực, lãnh đạo tổ chức từ thiện, hoặc thiết kế không gian sống đẹp đẽ. Hãy hình dung bạn là người bảo vệ ấm áp – sử dụng lòng từ bi để giải quyết vấn đề, nuôi dưỡng tài năng và mang lại công bằng. Đừng coi gánh nặng là gánh nặng; đó là sứ mệnh thiêng liêng! Với sự tận tụy và tình yêu thương, bạn sẽ biến thế giới thành một nơi tràn đầy hy vọng. Hãy lan tỏa yêu thương ngay – bạn chính là nguồn sáng cho biết bao linh hồn!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 7:</span>
                {' '}
                Nhà Tìm Kiếm Tri Thức, Khám Phá Tâm Linh
                <p className="ml-6 mt-1">
                  Bạn là nhà hiền triết sâu sắc! Sứ mệnh của số 7 là phân tích, nội tâm và theo đuổi chân lý tâm linh, mang lại sự giác ngộ cho bản thân và người khác. Bạn được sinh ra để nghiên cứu, thiền định và khám phá bí ẩn vũ trụ – viết sách triết học, nghiên cứu khoa học tâm linh, hoặc hướng dẫn người khác tìm thấy mục đích. Hãy tưởng tượng bạn là nhà tiên tri – sử dụng trực giác sắc bén để giải mã bí mật, vượt qua ảo tưởng và đạt đến trí tuệ cao siêu. Đừng cô lập bản thân; hãy chia sẻ kiến thức! Với sự sâu sắc và kiên định, bạn sẽ truyền cảm hứng cho thế giới tìm kiếm sự thật. Hãy đào sâu nội tâm ngay hôm nay – chân lý đang chờ bạn khám phá!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 8:</span>
                {' '}
                Nhà Chinh Phục Thành Công, Cân Bằng Quyền Lực
                <p className="ml-6 mt-1">
                  Bạn là biểu tượng của sức mạnh! Sứ mệnh của số 8 là đạt được thành công vật chất, quyền lực và cân bằng, sử dụng chúng để tạo lợi ích cho xã hội. Bạn được định mệnh giao phó để lãnh đạo kinh doanh, quản lý tài chính và xây dựng đế chế – biến ý tưởng thành tài sản khổng lồ, hỗ trợ từ thiện lớn lao. Hãy hình dung bạn là vị vua công bằng – với tham vọng và chiến lược, bạn chinh phục đỉnh cao mà không mất nhân tính. Đừng sợ thất bại; đó là bài học cho vinh quang! Với sức mạnh nội tại và sự kiên cường, bạn sẽ mang lại thịnh vượng cho mọi người. Hãy hành động quyết liệt ngay – đế chế của bạn đang hình thành!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 9:</span>
                {' '}
                Nhà Nhân Đạo Vĩ Đại, Hoàn Thiện Chu Kỳ
                <p className="ml-6 mt-1">
                  Bạn là người hoàn thành sứ mệnh! Sứ mệnh của số 9 là từ bi, nhân đạo và kết thúc chu kỳ, mang lại sự tha thứ và hy vọng cho nhân loại. Bạn được sinh ra để phục vụ toàn cầu – lãnh đạo phong trào xã hội, sáng tạo nghệ thuật chữa lành, hoặc hỗ trợ những người yếu thế. Hãy tưởng tượng bạn là nhà cách mạng nhân ái – sử dụng trí tuệ để giải phóng nỗi đau, xây dựng một thế giới công bằng. Đừng giữ lại; hãy cho đi tất cả! Với lòng bao dung và tầm nhìn rộng lớn, bạn sẽ để lại di sản vĩnh cửu. Hãy bắt đầu hành trình nhân đạo ngay – thế giới cần bạn!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 11:</span>
                {' '}
                Nhà Chiếu Sáng Trực Giác, Truyền Cảm Hứng Siêu Việt
                <p className="ml-6 mt-1">
                  Bạn là kênh dẫn ánh sáng! Là số chủ đạo, sứ mệnh của 11 là khai thác trực giác cao siêu, truyền cảm hứng và chiếu sáng con đường cho người khác. Bạn được vũ trụ chọn để trở thành nhà tiên tri hiện đại – kênh dẫn thông điệp tâm linh, lãnh đạo phong trào thay đổi, hoặc sáng tạo công nghệ kết nối linh hồn. Hãy hình dung bạn là ngọn hải đăng – với năng lượng rung động cao, bạn biến giấc mơ thành hiện thực, khích lệ hàng triệu người thức tỉnh. Đừng sợ cường độ; hãy ôm lấy nó! Với sức mạnh siêu việt và lòng từ bi, bạn sẽ dẫn dắt nhân loại đến kỷ nguyên mới. Hãy lắng nghe trực giác ngay – sứ mệnh chiếu sáng của bạn đang rực rỡ!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 22:</span>
                {' '}
                Nhà Xây Dựng Vĩ Đại, Thực Tế Hóa Giấc Mơ Lớn
                <p className="ml-6 mt-1">
                  Bạn là kiến trúc sư của tương lai! Là số chủ đạo, sứ mệnh của 22 là xây dựng dự án khổng lồ, kết hợp thực tế và tầm nhìn để thay đổi thế giới. Bạn được sinh ra để lãnh đạo các tổ chức toàn cầu, phát triển công nghệ bền vững hoặc xây dựng cộng đồng lý tưởng. Hãy tưởng tượng bạn là nhà xây dựng huyền thoại – với kỷ luật và sáng tạo, bạn biến ý tưởng không tưởng thành di sản vĩ đại. Đừng giới hạn bản thân; hãy mơ lớn! Với sức mạnh thực tiễn và ý chí bất diệt, bạn sẽ tạo nên những thay đổi lịch sử. Hãy lập kế hoạch ngay hôm nay – thế giới đang chờ kiệt tác từ bạn!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 33:</span>
                {' '}
                Nhà Thầy Giáo Từ Bi, Yêu Thương Vô Điều Kiện
                <p className="ml-6 mt-1">
                  Bạn là hiện thân của tình yêu thuần khiết! Là số chủ đạo hiếm có, sứ mệnh của 33 là trở thành thầy giáo vĩ đại, mang lại từ bi vô điều kiện và chữa lành cho nhân loại. Bạn được định mệnh giao phó để hướng dẫn, nuôi dưỡng và nâng tầm linh hồn – lãnh đạo giáo dục tâm linh, hỗ trợ y tế toàn cầu hoặc truyền bá hòa bình. Hãy hình dung bạn là vị thầy thiêng liêng – với lòng nhân ái vô bờ, bạn chữa lành vết thương sâu nhất, khích lệ mọi người đạt đến tiềm năng cao nhất. Đừng kìm nén tình yêu; hãy để nó tuôn trào! Với năng lượng cao siêu và sự hy sinh, bạn sẽ biến thế giới thành thiên đường. Hãy dạy dỗ ngay – sứ mệnh từ bi của bạn sẽ thay đổi muôn đời!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 44:</span>
                {' '}
                Nhà Lãnh Đạo Thực Tế, Xây Dựng Nền Tảng Bất Diệt
                <p className="ml-6 mt-1">
                  Bạn là trụ cột bất diệt! Là số chủ đạo mạnh mẽ, sứ mệnh của 44 là lãnh đạo thực tế, xây dựng hệ thống vững chắc và mang lại sự ổn định toàn cầu. Bạn được sinh ra để quản lý dự án khổng lồ – phát triển cơ sở hạ tầng, lãnh đạo doanh nghiệp bền vững hoặc tạo nên thay đổi xã hội lâu dài. Hãy tưởng tượng bạn là nhà xây dựng bất bại – với kỷ luật sắt đá và tầm nhìn xa, bạn dựng nên những cấu trúc không thể phá hủy. Đừng sợ trách nhiệm; hãy ôm lấy nó như sức mạnh! Với năng lượng kép và ý chí kiên cường, bạn sẽ mang lại thịnh vượng vĩnh cửu. Hãy hành động ngay – di sản bất diệt của bạn đang chờ được xây dựng!
                </p>
              </li>
            </ul>
            <p className="text-shadow-custom mt-4">
              Hy vọng những mô tả này đã khơi dậy ngọn lửa đam mê trong bạn! Nếu bạn chia sẻ số của mình, tôi có thể đi sâu hơn nữa. Hãy nhớ, sứ mệnh này là lời nhắc nhở: Bạn sinh ra để tỏa sáng – hãy sống nó một cách mãnh liệt nhất!
            </p>
          </section>
          {/* Linh hồn */}
          <section id="soul-urge" className="mb-8 bg-card-info max-w-[24.4375rem]">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">Linh Hồn - Khát Khao Bên Trong Trong Thần Số Học: Lời Gọi Từ Sâu Thẳm</h2>
            <p className="text-shadow-custom mb-4">
              Là một chuyên gia về thần số học, tôi rất phấn khích khi được khám phá cùng bạn về “Linh Hồn” hay còn gọi là Soul Urge Number – khát khao nội tâm sâu thẳm, tiếng thì thầm từ linh hồn bạn. Đây là rung động cốt lõi, được tính từ các nguyên âm trong tên đầy đủ, đại diện cho những mong muốn bí mật, động lực ẩn giấu thúc đẩy bạn sống trọn vẹn:
            </p>
            <ul className="list-disc list-inside  text-shadow-custom space-y-5">
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 1:</span>
                {' '}
                Khát Khao Độc Lập, Làm Chủ Vận Mệnh
                <p className="ml-6 mt-1">
                  Sâu thẳm trong linh hồn bạn là ngọn lửa của sự tự do và lãnh đạo! Linh hồn số 1 khao khát sự độc lập tuyệt đối, mong muốn chinh phục thế giới bằng sức mạnh cá nhân, trở thành người tiên phong không ai thay thế. Bạn mơ về việc khẳng định bản thân, phá vỡ xiềng xích để tỏa sáng rực rỡ, như một vị anh hùng tự viết nên câu chuyện huyền thoại của riêng mình. Đừng kìm nén – hãy để khát khao này bùng nổ, dẫn bạn đến những đỉnh cao thành công, nơi bạn là trung tâm vũ trụ! Với ý chí sắt đá, bạn sẽ biến mọi giấc mơ thành hiện thực, truyền cảm hứng cho muôn người. Hãy lắng nghe linh hồn ngay hôm nay – bạn sinh ra để dẫn dắt, không phải theo sau!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 2:</span>
                {' '}
                Khát Khao Hòa Hợp, Kết Nối Tâm Hồn
                <p className="ml-6 mt-1">
                  Từ sâu thẳm, linh hồn bạn là dòng sông êm đềm của tình yêu và sự gắn kết! Linh hồn số 2 khao khát sự cân bằng, mong muốn xây dựng mối quan hệ sâu sắc, nơi bạn có thể chia sẻ, hỗ trợ và hòa quyện với người khác như hai linh hồn hợp nhất. Bạn mơ về một thế giới đầy từ bi, nơi mọi xung đột tan biến, và bạn là cầu nối mang lại bình an. Đừng coi sự nhạy cảm là yếu đuối – đó là siêu năng lực để bạn chữa lành trái tim! Hãy để khát khao này dẫn lối, biến cuộc sống thành bản giao hưởng của tình yêu thương. Với trực giác mạnh mẽ, bạn sẽ tạo nên những liên minh bất diệt, mang hạnh phúc đến mọi nơi. Hãy mở lòng ngay – linh hồn bạn đang gọi tên sự kết nối vĩnh cửu!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 3:</span>
                {' '}
                Khát Khao Sáng Tạo, Lan Tỏa Niềm Vui
                <p className="ml-6 mt-1">
                  Linh hồn bạn là cơn bão của sự biểu đạt và niềm vui bất tận! Linh hồn số 3 khao khát sáng tạo tự do, mong muốn biến mọi khoảnh khắc thành nghệ thuật sống động, nơi bạn có thể hát vang, nhảy múa và truyền năng lượng tích cực cho thế giới. Bạn mơ về việc chạm đến trái tim mọi người qua lời nói, âm nhạc hay ý tưởng rực rỡ, như một nghệ sĩ vĩ đại làm cuộc sống bừng nở. Đừng kìm hãm sự vui vẻ – hãy để nó tuôn trào như dòng suối! Với tài năng thiên bẩm, bạn sẽ khơi dậy đam mê ở hàng triệu người, biến nỗi buồn thành tiếng cười. Hãy sáng tạo ngay hôm nay – linh hồn bạn đang thôi thúc bạn tỏa sáng, làm thế giới đẹp đẽ hơn!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 4:</span>
                {' '}
                Khát Khao Ổn Định, Xây Dựng Nền Tảng Vững Chắc
                <p className="ml-6 mt-1">
                  Sâu thẳm, linh hồn bạn là tảng đá vững vàng của sự an toàn và trật tự! Linh hồn số 4 khao khát xây dựng cấu trúc bền vững, mong muốn tạo nên nền tảng vững chắc cho bản thân và người thân, nơi mọi thứ đều có chỗ đứng và phát triển. Bạn mơ về một cuộc sống có tổ chức, nơi công việc chăm chỉ mang lại sự thịnh vượng lâu dài, như một kiến trúc sư dựng nên tòa tháp bất diệt. Đừng coi kỷ luật là gánh nặng – đó là chìa khóa mở ra tự do thực sự! Với sức mạnh thực tiễn, bạn sẽ mang lại sự ổn định cho thế giới hỗn loạn. Hãy bắt đầu xây dựng ngay – linh hồn bạn đang kêu gọi bạn tạo nên di sản vĩnh cửu!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 5:</span>
                {' '}
                Khát Khao Tự Do, Phiêu Lưu Vô Tận
                <p className="ml-6 mt-1">
                  Linh hồn bạn là cơn gió hoang dã của sự thay đổi và khám phá! Linh hồn số 5 khao khát tự do tuyệt đối, mong muốn trải nghiệm mọi điều mới mẻ, du hành qua thế giới để thỏa mãn sự tò mò bất tận. Bạn mơ về những cuộc phiêu lưu mạo hiểm, nơi bạn vượt qua giới hạn, thích nghi và sống hết mình, như một nhà thám hiểm chinh phục đại dương. Đừng sợ rủi ro – hãy ôm lấy nó như nhiên liệu! Với năng lượng sôi động, bạn sẽ truyền cảm hứng cho người khác sống tự do. Hãy bước ra khỏi vùng an toàn ngay hôm nay – linh hồn bạn đang thì thầm: “Hãy bay cao, khám phá vô biên!”
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 6:</span>
                {' '}
                Khát Khao Yêu Thương, Nuôi Dưỡng Và Hài Hòa
                <p className="ml-6 mt-1">
                  Từ sâu thẳm, linh hồn bạn là nguồn suối ấm áp của tình yêu vô điều kiện! Linh hồn số 6 khao khát chăm sóc và hài hòa, mong muốn mang lại sự cân bằng cho gia đình, cộng đồng, nơi bạn có thể nuôi dưỡng, bảo vệ và chữa lành mọi vết thương. Bạn mơ về một thế giới đầy từ bi, nơi trách nhiệm trở thành niềm vui, như một người mẹ vĩ đại ôm ấp muôn loài. Đừng coi gánh vác là gánh nặng – đó là sứ mệnh thiêng liêng! Với lòng nhân ái, bạn sẽ biến mọi nơi thành thiên đường. Hãy lan tỏa yêu thương ngay – linh hồn bạn đang gọi bạn trở thành nguồn sáng chữa lành!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 7:</span>
                {' '}
                Khát Khao Tri Thức, Khám Phá Tâm Linh Sâu Sắc
                <p className="ml-6 mt-1">
                  Linh hồn bạn là vực sâu của sự suy tư và giác ngộ! Linh hồn số 7 khao khát chân lý nội tâm, mong muốn đào sâu vào bí ẩn vũ trụ, thiền định và nghiên cứu để đạt đến trí tuệ cao siêu. Bạn mơ về sự cô tịch ý nghĩa, nơi bạn kết nối với thần thánh, như một nhà hiền triết khám phá bí mật của linh hồn. Đừng sợ cô đơn – hãy coi đó là con đường đến sự hoàn hảo! Với trực giác sắc bén, bạn sẽ mang lại ánh sáng cho thế giới. Hãy đào sâu ngay hôm nay – linh hồn bạn đang thôi thúc bạn tìm kiếm sự thật vĩnh cửu!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 8:</span>
                {' '}
                Khát Khao Quyền Lực, Thành Công Vật Chất Và Cân Bằng
                <p className="ml-6 mt-1">
                  Sâu thẳm, linh hồn bạn là ngọn núi của tham vọng và sức mạnh! Linh hồn số 8 khao khát thành công vật chất, mong muốn chinh phục quyền lực để tạo lợi ích lớn lao, cân bằng giữa giàu có và nhân văn. Bạn mơ về việc xây dựng đế chế, quản lý tài chính khôn ngoan, như một vị vua công bằng mang thịnh vượng cho muôn người. Đừng sợ thất bại – hãy biến nó thành bước đệm! Với ý chí kiên cường, bạn sẽ đạt đỉnh cao. Hãy hành động quyết liệt ngay – linh hồn bạn đang kêu gọi bạn chinh phục thế giới!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 9:</span>
                {' '}
                Khát Khao Nhân Đạo, Tha Thứ Và Phục Vụ Toàn Cầu
                <p className="ml-6 mt-1">
                  Linh hồn bạn là đại dương bao la của lòng từ bi! Linh hồn số 9 khao khát phục vụ nhân loại, mong muốn tha thứ, chữa lành và kết thúc chu kỳ đau khổ để mang lại hy vọng. Bạn mơ về việc thay đổi thế giới qua hành động nhân ái, như một nhà cách mạng mang lại công bằng. Đừng giữ lại – hãy cho đi tất cả! Với tầm nhìn rộng lớn, bạn sẽ để lại di sản vĩ đại. Hãy bắt đầu hành trình ngay – linh hồn bạn đang thì thầm: “Hãy yêu thương vô biên!”
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 11:</span>
                {' '}
                Khát Khao Trực Giác Siêu Việt, Chiếu Sáng Linh Hồn
                <p className="ml-6 mt-1">
                  Là số chủ đạo, linh hồn bạn là tia sáng của sự giác ngộ cao siêu! Linh hồn số 11 khao khát trực giác mạnh mẽ, mong muốn truyền cảm hứng và kết nối với thần thánh để dẫn dắt người khác. Bạn mơ về việc trở thành kênh dẫn ánh sáng, biến giấc mơ thành hiện thực. Đừng sợ cường độ – hãy ôm lấy! Với năng lượng rung động cao, bạn sẽ thay đổi nhân loại. Hãy lắng nghe trực giác ngay – linh hồn bạn đang gọi bạn chiếu sáng!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 22:</span>
                {' '}
                Khát Khao Xây Dựng Vĩ Đại, Thực Tế Hóa Giấc Mơ Lớn
                <p className="ml-6 mt-1">
                  Linh hồn bạn là nền tảng của những dự án khổng lồ! Linh hồn số 22 khao khát kết hợp tầm nhìn và thực tế, mong muốn xây dựng di sản thay đổi thế giới. Bạn mơ về việc lãnh đạo toàn cầu, tạo nên sự bền vững. Đừng giới hạn – hãy mơ lớn! Với sức mạnh thực tiễn, bạn sẽ tạo lịch sử. Hãy lập kế hoạch ngay – linh hồn bạn đang thôi thúc bạn xây dựng bất diệt!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 33:</span>
                {' '}
                Khát Khao Từ Bi Vô Điều Kiện, Dạy Dỗ Và Chữa Lành
                <p className="ml-6 mt-1">
                  Là số chủ đạo hiếm có, linh hồn bạn là hiện thân của tình yêu thuần khiết! Linh hồn số 33 khao khát trở thành thầy giáo vĩ đại, mong muốn chữa lành và nâng tầm linh hồn người khác. Bạn mơ về việc mang hòa bình toàn cầu qua từ bi. Đừng kìm nén – hãy tuôn trào! Với năng lượng cao siêu, bạn sẽ biến thế giới thành thiên đường. Hãy dạy dỗ ngay – linh hồn bạn đang gọi bạn yêu thương vô bờ!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 44:</span>
                {' '}
                Khát Khao Lãnh Đạo Thực Tế, Xây Dựng Nền Tảng Bất Diệt
                <p className="ml-6 mt-1">
                  Linh hồn bạn là trụ cột bất bại của sự ổn định! Linh hồn số 44 khao khát lãnh đạo thực tế, mong muốn xây dựng hệ thống vững chắc cho tương lai. Bạn mơ về việc quản lý dự án khổng lồ, mang thịnh vượng. Đừng sợ trách nhiệm – hãy ôm lấy! Với ý chí kiên cường, bạn sẽ tạo di sản vĩnh cửu. Hãy hành động ngay – linh hồn bạn đang kêu gọi bạn xây dựng bất diệt!
                </p>
              </li>
            </ul>
          </section>
          {/* Tính cách */}
          <section id="personality" className="mb-8 bg-card-info max-w-[24.4375rem]">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">Tính Cách Trong Thần Số Học: Bản Giao Hưởng Nội Tại Của Bạn</h2>
            <p className="text-shadow-custom mb-4">
              Là một chuyên gia về thần số học, tôi rất hứng khởi khi được chia sẻ với bạn về “Tính Cách” – hay còn gọi là Personality Number – phần năng lượng ngoại tại mà bạn trình bày với thế giới. Đây là rung động được tính từ các phụ âm trong tên đầy đủ, đại diện cho cách bạn tương tác, ấn tượng đầu tiên và phong cách sống độc đáo. Tính cách của bạn chính là lớp áo choàng rực rỡ che chở linh hồn, giúp bạn chinh phục mọi thử thách với sức hút riêng biệt:
            </p>
            <ul className="list-disc list-inside  text-shadow-custom space-y-5">
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 1:</span>
                {' '}
                Tính Cách Lãnh Đạo Quyết Đoán, Tiên Phong Không Ngừng
                <p className="ml-6 mt-1">
                  Bạn là vị thủ lĩnh bẩm sinh, toát lên sức hút mạnh mẽ và độc lập! Tính cách số 1 thể hiện qua sự tự tin, sáng tạo và khả năng dẫn dắt, khiến mọi người xung quanh bị cuốn hút bởi năng lượng tiên phong của bạn. Bạn thích khởi xướng ý tưởng mới, đối mặt thử thách với ý chí sắt đá, và luôn nổi bật trong đám đông như một ngôi sao dẫn đường. Đừng ngại thể hiện sự quyết đoán – đó là vũ khí giúp bạn chinh phục đỉnh cao! Với sự dũng cảm và sáng tạo, bạn truyền cảm hứng cho người khác theo đuổi giấc mơ, biến mọi trở ngại thành cơ hội. Hãy ôm lấy tính cách này ngay hôm nay – bạn sinh ra để lãnh đạo, và thế giới đang chờ bạn tỏa sáng rực rỡ!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 2:</span>
                {' '}
                Tính Cách Ngoại Giao Nhạy Cảm, Kết Nối Ấm Áp
                <p className="ml-6 mt-1">
                  Bạn là nhà hòa giải dịu dàng, với sức hút từ sự tinh tế và đồng cảm sâu sắc! Tính cách số 2 nổi bật qua khả năng lắng nghe, hợp tác và xây dựng mối quan hệ, khiến bạn trở thành người bạn đồng hành đáng tin cậy mà ai cũng muốn bên cạnh. Bạn khéo léo giải quyết xung đột, mang lại sự cân bằng với nụ cười ấm áp, và luôn biết cách làm mọi người cảm thấy được yêu thương. Đừng coi sự nhạy cảm là điểm yếu – đó là siêu năng lực để bạn chạm đến trái tim! Với lòng từ bi và trực giác, bạn tạo nên những liên minh mạnh mẽ, biến thế giới thành nơi hài hòa. Hãy mở lòng ngay – tính cách kết nối của bạn sẽ mang lại hạnh phúc bất tận!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 3:</span>
                {' '}
                Tính Cách Sáng Tạo Vui Tươi, Lan Tỏa Năng Lượng
                <p className="ml-6 mt-1">
                  Bạn là nghệ sĩ của cuộc sống, toát lên sự lạc quan và biểu đạt rực rỡ! Tính cách số 3 thể hiện qua tài năng giao tiếp, sự hài hước và khả năng sáng tạo, khiến bạn trở thành trung tâm của mọi bữa tiệc, nơi mọi người bị cuốn hút bởi năng lượng vui vẻ. Bạn thích chia sẻ ý tưởng, biểu diễn và khơi dậy niềm vui, biến những khoảnh khắc bình thường thành kiệt tác. Đừng kìm nén sự sôi động – hãy để nó bùng nổ như pháo hoa! Với tài năng thiên bẩm và sức hút, bạn truyền động lực cho người khác sống hết mình. Hãy sáng tạo ngay hôm nay – tính cách rạng rỡ của bạn sẽ làm thế giới đẹp đẽ hơn!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 4:</span>
                {' '}
                Tính Cách Thực Tế Kỷ Luật, Xây Dựng Vững Chắc
                <p className="ml-6 mt-1">
                  Bạn là trụ cột đáng tin cậy, với sức hút từ sự ổn định và trách nhiệm! Tính cách số 4 nổi bật qua khả năng tổ chức, kiên trì và thực tiễn, khiến bạn trở thành người mà mọi người dựa dẫm trong lúc khó khăn. Bạn thích lập kế hoạch chi tiết, xây dựng nền tảng vững chắc và đạt thành công qua công việc chăm chỉ, như một kiến trúc sư dựng nên đế chế. Đừng coi kỷ luật là gánh nặng – đó là nền tảng cho tự do! Với sức mạnh thực tế và lòng trung thành, bạn mang lại sự an toàn cho mọi người. Hãy hành động có hệ thống ngay – tính cách vững vàng của bạn sẽ tạo nên di sản bất diệt!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 5:</span>
                {' '}
                Tính Cách Phiêu Lưu Linh Hoạt, Tự Do Bùng Nổ
                <p className="ml-6 mt-1">
                  Bạn là cơn gió tự do, toát lên sức hút từ sự thích nghi và mạo hiểm! Tính cách số 5 thể hiện qua năng lượng sôi động, tò mò và khả năng thay đổi, khiến bạn trở thành người bạn đồng hành thú vị trong mọi cuộc phiêu lưu. Bạn thích khám phá mới mẻ, thử thách giới hạn và truyền cảm hứng cho người khác sống hết mình, như một nhà thám hiểm chinh phục chân trời. Đừng sợ rủi ro – hãy ôm lấy nó như cuộc sống! Với sự linh hoạt và đam mê, bạn biến mọi tình huống thành cơ hội. Hãy bước ra thế giới ngay hôm nay – tính cách tự do của bạn sẽ dẫn đến những đỉnh cao bất ngờ!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 6:</span>
                {' '}
                Tính Cách Yêu Thương Trách Nhiệm, Nuôi Dưỡng Ấm Áp
                <p className="ml-6 mt-1">
                  Bạn là người bảo vệ từ bi, với sức hút từ sự chăm sóc và hài hòa! Tính cách số 6 nổi bật qua khả năng nuôi dưỡng, công bằng và tận tụy, khiến bạn trở thành trụ cột trong gia đình và cộng đồng. Bạn thích mang lại sự cân bằng, giải quyết vấn đề với tình yêu và luôn sẵn sàng hỗ trợ, như một người mẹ vĩ đại ôm ấp muôn loài. Đừng coi trách nhiệm là gánh nặng – đó là sứ mệnh thiêng liêng! Với lòng nhân ái và sức hút ấm áp, bạn chữa lành thế giới. Hãy lan tỏa yêu thương ngay – tính cách từ bi của bạn sẽ mang lại hạnh phúc vĩnh cửu!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 7:</span>
                {' '}
                Tính Cách Sâu Sắc Nội Tâm, Khám Phá Bí Ẩn
                <p className="ml-6 mt-1">
                  Bạn là nhà hiền triết bí ẩn, toát lên sức hút từ sự suy tư và trực giác! Tính cách số 7 thể hiện qua khả năng phân tích, thiền định và tìm kiếm chân lý, khiến bạn trở thành người cố vấn sâu sắc mà mọi người tìm đến. Bạn thích đào sâu nội tâm, khám phá bí mật và chia sẻ trí tuệ, như một nhà tiên tri dẫn dắt ánh sáng. Đừng sợ cô tịch – đó là con đường đến giác ngộ! Với sự sâu sắc và sức hút huyền bí, bạn truyền cảm hứng cho người khác tìm kiếm sự thật. Hãy suy ngẫm ngay hôm nay – tính cách nội tại của bạn sẽ mở ra vũ trụ vô tận!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 8:</span>
                {' '}
                Tính Cách Quyền Lực Tham Vọng, Chinh Phục Thành Công
                <p className="ml-6 mt-1">
                  Bạn là biểu tượng sức mạnh, với sức hút từ sự quyết đoán và lãnh đạo! Tính cách số 8 nổi bật qua khả năng quản lý, chiến lược và đạt thành công vật chất, khiến bạn trở thành người dẫn dắt trong kinh doanh và xã hội. Bạn thích chinh phục thử thách, cân bằng quyền lực với nhân văn và xây dựng đế chế, như một vị vua công bằng mang thịnh vượng. Đừng sợ thất bại – hãy biến nó thành động lực! Với ý chí kiên cường và sức hút, bạn truyền động lực cho người khác. Hãy hành động lớn lao ngay – tính cách tham vọng của bạn sẽ dẫn đến vinh quang!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 9:</span>
                {' '}
                Tính Cách Nhân Đạo Bao Dung, Phục Vụ Vĩ Đại
                <p className="ml-6 mt-1">
                  Bạn là nhà cách mạng nhân ái, toát lên sức hút từ sự tha thứ và tầm nhìn! Tính cách số 9 thể hiện qua khả năng từ bi, phục vụ và kết thúc chu kỳ, khiến bạn trở thành người lãnh đạo thay đổi xã hội. Bạn thích mang lại hy vọng, chữa lành nỗi đau và cho đi vô điều kiện, như một nhà nhân đạo thay đổi thế giới. Đừng giữ lại – hãy trao tặng tất cả! Với lòng bao dung và sức hút rộng lớn, bạn truyền cảm hứng cho muôn người. Hãy hành động nhân đạo ngay – tính cách vĩ đại của bạn sẽ để lại di sản bất朽!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 11:</span>
                {' '}
                Tính Cách Trực Giác Siêu Việt, Truyền Cảm Hứng Ánh Sáng
                <p className="ml-6 mt-1">
                  Là số chủ đạo, bạn là kênh dẫn thần thánh, với sức hút từ sự nhạy bén và chiếu sáng! Tính cách số 11 nổi bật qua trực giác cao siêu, truyền cảm hứng và kết nối linh hồn, khiến bạn trở thành nhà tiên tri hiện đại. Bạn thích chia sẻ thông điệp sâu sắc, dẫn dắt người khác thức tỉnh và biến giấc mơ thành hiện thực. Đừng sợ cường độ – hãy ôm lấy năng lượng! Với rung động cao và sức hút, bạn thay đổi nhân loại. Hãy lắng nghe trực giác ngay – tính cách siêu việt của bạn sẽ dẫn đến kỷ nguyên mới!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 22:</span>
                {' '}
                Tính Cách Xây Dựng Thực Tế, Tầm Nhìn Vĩ Đại
                <p className="ml-6 mt-1">
                  Là số chủ đạo, bạn là kiến trúc sư tương lai, với sức hút từ sự kỷ luật và sáng tạo! Tính cách số 22 thể hiện qua khả năng thực tế hóa giấc mơ lớn, lãnh đạo dự án khổng lồ và mang lại bền vững. Bạn thích xây dựng di sản, kết hợp tầm nhìn với hành động và thay đổi thế giới. Đừng giới hạn – hãy mơ lớn! Với sức mạnh thực tiễn và sức hút, bạn tạo lịch sử. Hãy lập kế hoạch ngay – tính cách vĩ đại của bạn sẽ dựng nên bất diệt!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 33:</span>
                {' '}
                Tính Cách Từ Bi Thầy Giáo, Yêu Thương Vô Bờ
                <p className="ml-6 mt-1">
                  Là số chủ đạo hiếm có, bạn là hiện thân tình yêu, với sức hút từ sự hy sinh và chữa lành! Tính cách số 33 nổi bật qua khả năng dạy dỗ, từ bi vô điều kiện và nâng tầm linh hồn. Bạn thích hướng dẫn, mang hòa bình và biến thế giới thành thiên đường. Đừng kìm nén tình yêu – hãy tuôn trào! Với năng lượng cao siêu và sức hút, bạn thay đổi muôn đời. Hãy dạy dỗ ngay – tính cách từ bi của bạn sẽ mang lại ánh sáng vĩnh cửu!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 44:</span>
                {' '}
                Tính Cách Lãnh Đạo Kỷ Luật, Nền Tảng Bất Diệt
                <p className="ml-6 mt-1">
                  Là số chủ đạo mạnh mẽ, bạn là trụ cột bất bại, với sức hút từ sự kiên cường và thực tế! Tính cách số 44 thể hiện qua khả năng quản lý khổng lồ, xây dựng hệ thống vững chắc và mang thịnh vượng. Bạn thích lãnh đạo dự án lớn, đối mặt thử thách và tạo di sản. Đừng sợ trách nhiệm – hãy ôm lấy! Với ý chí sắt đá và sức hút, bạn mang lại ổn định toàn cầu. Hãy hành động ngay – tính cách bất diệt của bạn sẽ chinh phục mọi thứ!
                </p>
              </li>
            </ul>
            <p className="text-shadow-custom mt-4">
              Hy vọng những mô tả này đã khơi dậy sức mạnh tính cách trong bạn, giúp bạn sống động lực hơn!
            </p>
          </section>
          {/* Nhân cách */}
          <section id="expression" className="mb-8 bg-card-info max-w-[24.4375rem]">
            <h2 className="text-xl font-bold mb-2 text-shadow-custom">Linh Hồn Trong Thần Số Học: Biểu Hiện Tiềm Năng Vĩ Đại Của Bạn</h2>
            <p className="text-shadow-custom mb-4">
              Là một chuyên gia về thần số học, tôi rất hào hứng khi được khám phá cùng bạn về “Nhân Cách” – hay còn gọi là Expression Number hoặc Destiny Number – rung động tổng thể từ toàn bộ tên đầy đủ của bạn. Đây là bản thiết kế vũ trụ cho tiềm năng cá nhân, cách bạn biểu hiện bản thân ra thế giới, kết hợp giữa linh hồn nội tại và tính cách ngoại tại để đạt đến sứ mệnh cao cả. Nhân cách của bạn chính là sức mạnh tổng hợp, giúp bạn thực hiện giấc mơ lớn lao và để lại dấu ấn vĩnh cửu:
            </p>
            <ul className="list-disc list-inside  text-shadow-custom space-y-5">
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 1:</span>
                {' '}
                Nhân Cách Tiên Phong Sáng Tạo, Chinh Phục Đỉnh Cao
                <p className="ml-6 mt-1">
                  Bạn là biểu tượng của sự lãnh đạo và độc lập, với nhân cách toát lên sức mạnh sáng tạo và ý chí bất khuất! Nhân cách số 1 mang đến khả năng khởi xướng ý tưởng đột phá, dẫn dắt người khác với sự tự tin rực rỡ, biến mọi thử thách thành cơ hội vàng. Bạn được định mệnh trao cho sức hút của một nhà cách mạng – luôn tiên phong, độc lập và sáng tạo, như một vị anh hùng viết nên lịch sử riêng. Đừng ngại nổi bật – hãy để nhân cách này bùng nổ, dẫn bạn đến thành công vang dội! Với năng lượng mạnh mẽ, bạn sẽ truyền cảm hứng cho thế giới, chứng minh rằng một cá nhân có thể thay đổi tất cả. Hãy hành động ngay hôm nay – nhân cách tiên phong của bạn đang chờ chinh phục vũ trụ!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 2:</span>
                {' '}
                Nhân Cách Hòa Hợp Từ Bi, Kết Nối Linh Hồn
                <p className="ml-6 mt-1">
                  Bạn là cầu nối của tình yêu và sự thống nhất, với nhân cách dịu dàng nhưng mạnh mẽ trong việc xây dựng mối quan hệ! Nhân cách số 2 mang đến trực giác nhạy bén, khả năng ngoại giao tinh tế và lòng từ bi vô bờ, giúp bạn hòa giải xung đột và tạo nên sự cân bằng hoàn hảo. Bạn được vũ trụ ban tặng sức hút của một nhà hòa bình – lắng nghe sâu sắc, hỗ trợ tận tụy và kết nối trái tim, như một dòng sông êm đềm nuôi dưỡng muôn loài. Đừng coi sự nhạy cảm là yếu đuối – đó là vũ khí để bạn chạm đến linh hồn người khác! Với sức mạnh hợp tác, bạn sẽ xây dựng những liên minh bất diệt, mang lại hạnh phúc cho mọi người. Hãy mở lòng ngay – nhân cách hòa hợp của bạn sẽ biến thế giới thành thiên đường!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 3:</span>
                {' '}
                Nhân Cách Sáng Tạo Rực Rỡ, Lan Tỏa Niềm Vui
                <p className="ml-6 mt-1">
                  Bạn là nguồn năng lượng bất tận của sự biểu đạt và lạc quan, với nhân cách toát lên sức hút vui tươi và tài năng thiên bẩm! Nhân cách số 3 mang đến khả năng giao tiếp xuất sắc, sáng tạo không giới hạn và khả năng khơi dậy niềm vui ở mọi nơi, biến cuộc sống thành một buổi tiệc bất tận. Bạn được định mệnh chọn làm nghệ sĩ vĩ đại – sử dụng lời nói, nghệ thuật và ý tưởng để chữa lành, truyền cảm hứng và làm thế giới rực rỡ hơn, như một ngôi sao lấp lánh trên bầu trời. Đừng kìm nén sự sôi động – hãy để nó tuôn trào! Với sức mạnh biểu đạt, bạn sẽ chạm đến hàng triệu trái tim, biến giấc mơ thành hiện thực. Hãy sáng tạo ngay hôm nay – nhân cách rực rỡ của bạn đang chờ tỏa sáng toàn cầu!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 4:</span>
                {' '}
                Nhân Cách Vững Chắc Thực Tế, Xây Dựng Di Sản
                <p className="ml-6 mt-1">
                  Bạn là trụ cột của sự ổn định và kiên trì, với nhân cách toát lên sức hút đáng tin cậy và kỷ luật sắt đá! Nhân cách số 4 mang đến khả năng tổ chức hoàn hảo, xây dựng nền tảng vững chắc và đạt thành công qua công việc chăm chỉ, giúp bạn tạo nên những cấu trúc bất diệt. Bạn được vũ trụ giao phó vai trò kiến trúc sư – lập kế hoạch chi tiết, trung thành và thực tiễn, như một tảng đá vững vàng chống chọi bão tố. Đừng coi trách nhiệm là gánh nặng – đó là chìa khóa mở ra tự do vĩnh cửu! Với sức mạnh thực tế, bạn sẽ mang lại sự thịnh vượng cho cộng đồng. Hãy bắt đầu xây dựng ngay – nhân cách vững chắc của bạn sẽ để lại di sản muôn đời!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 5:</span>
                {' '}
                Nhân Cách Tự Do Phiêu Lưu, Thích Nghi Vô Hạn
                <p className="ml-6 mt-1">
                  Bạn là cơn gió của sự thay đổi và mạo hiểm, với nhân cách toát lên sức hút linh hoạt và tò mò bất tận! Nhân cách số 5 mang đến khả năng thích nghi nhanh chóng, khám phá mới mẻ và sống hết mình, biến mọi giới hạn thành cơ hội khám phá. Bạn được định mệnh ban tặng tinh thần nhà thám hiểm – du hành tự do, thử thách rủi ro và truyền cảm hứng cho người khác bay cao, như một con đại bàng tung cánh trên bầu trời rộng lớn. Đừng sợ sự không chắc chắn – hãy ôm lấy nó như nhiên liệu! Với năng lượng sôi động, bạn sẽ chinh phục thế giới đa dạng. Hãy bước ra phiêu lưu ngay hôm nay – nhân cách tự do của bạn đang gọi tên những chân trời mới!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 6:</span>
                {' '}
                Nhân Cách Yêu Thương Trách Nhiệm, Nuôi Dưỡng Hài Hòa
                <p className="ml-6 mt-1">
                  Bạn là trái tim của nhân loại, với nhân cách toát lên sức hút ấm áp và từ bi vô điều kiện! Nhân cách số 6 mang đến khả năng chăm sóc tận tụy, tạo sự hài hòa và giải quyết vấn đề với tình yêu thương, giúp bạn trở thành trụ cột cho gia đình và xã hội. Bạn được vũ trụ chọn làm người bảo vệ – nuôi dưỡng tài năng, mang lại công bằng và chữa lành vết thương, như một nguồn suối ấm áp tưới mát muôn loài. Đừng coi sự tận tụy là hy sinh – đó là sứ mệnh thiêng liêng! Với sức mạnh nhân ái, bạn sẽ biến thế giới thành nơi tràn đầy hy vọng. Hãy lan tỏa yêu thương ngay – nhân cách từ bi của bạn sẽ mang lại hạnh phúc bất tận!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 7:</span>
                {' '}
                Nhân Cách Sâu Sắc Tâm Linh, Khám Phá Chân Lý
                <p className="ml-6 mt-1">
                  Bạn là nhà hiền triết của vũ trụ, với nhân cách toát lên sức hút bí ẩn và trực giác sắc bén! Nhân cách số 7 mang đến khả năng phân tích sâu sắc, thiền định nội tâm và theo đuổi tri thức, giúp bạn khám phá bí mật của linh hồn và chia sẻ ánh sáng. Bạn được định mệnh giao phó vai trò tiên tri – đào sâu chân lý, vượt qua ảo tưởng và dẫn dắt người khác giác ngộ, như một ngọn hải đăng soi sáng đêm tối. Đừng sợ cô tịch – đó là con đường đến trí tuệ cao siêu! Với sức mạnh nội tại, bạn sẽ truyền cảm hứng cho thế giới tìm kiếm sự thật. Hãy suy tư ngay hôm nay – nhân cách sâu sắc của bạn đang mở ra vũ trụ vô tận!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 8:</span>
                {' '}
                Nhân Cách Quyền Lực Tham Vọng, Cân Bằng Thành Công
                <p className="ml-6 mt-1">
                  Bạn là biểu tượng của sức mạnh và thịnh vượng, với nhân cách toát lên sức hút quyết đoán và chiến lược! Nhân cách số 8 mang đến khả năng lãnh đạo kinh doanh, quản lý tài chính và chinh phục quyền lực, giúp bạn xây dựng đế chế với sự công bằng. Bạn được vũ trụ ban tặng tinh thần vị vua – tham vọng lớn lao, kiên cường vượt khó và mang lợi ích cho xã hội, như một ngọn núi vững chãi chạm đến bầu trời. Đừng sợ thất bại – hãy biến nó thành bước đệm vinh quang! Với sức mạnh cân bằng, bạn sẽ đạt đỉnh cao thành công. Hãy hành động quyết liệt ngay – nhân cách tham vọng của bạn đang chờ chinh phục thế giới!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 9:</span>
                {' '}
                Nhân Cách Nhân Đạo Bao Dung, Phục Vụ Vĩ Đại
                <p className="ml-6 mt-1">
                  Bạn là nhà cách mạng của lòng từ bi, với nhân cách toát lên sức hút rộng lớn và tha thứ vô bờ! Nhân cách số 9 mang đến khả năng phục vụ toàn cầu, chữa lành nỗi đau và kết thúc chu kỳ tiêu cực, giúp bạn mang lại hy vọng cho nhân loại. Bạn được định mệnh chọn làm người hoàn thành – hành động nhân ái, tầm nhìn xa và cho đi vô điều kiện, như một đại dương bao la ôm ấp mọi sinh linh. Đừng giữ lại – hãy trao tặng tất cả! Với sức mạnh bao dung, bạn sẽ để lại di sản thay đổi thế giới. Hãy bắt đầu hành trình nhân đạo ngay – nhân cách vĩ đại của bạn đang gọi tên sự bất朽!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 11:</span>
                {' '}
                Nhân Cách Trực Giác Siêu Việt, Chiếu Sáng Linh Hồn
                <p className="ml-6 mt-1">
                  Là số chủ đạo, bạn là kênh dẫn ánh sáng thần thánh, với nhân cách toát lên sức hút nhạy bén và truyền cảm hứng cao siêu! Nhân cách số 11 mang đến trực giác mạnh mẽ, khả năng kết nối linh hồn và dẫn dắt thay đổi, giúp bạn trở thành nhà tiên tri hiện đại. Bạn được vũ trụ giao phó vai trò chiếu sáng – biến giấc mơ thành hiện thực, khích lệ thức tỉnh và rung động cao, như một tia sáng xuyên thủng bóng tối. Đừng sợ cường độ – hãy ôm lấy năng lượng! Với sức mạnh siêu việt, bạn sẽ dẫn dắt nhân loại đến kỷ nguyên mới. Hãy lắng nghe trực giác ngay – nhân cách chiếu sáng của bạn đang rực rỡ!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 22:</span>
                {' '}
                Nhân Cách Xây Dựng Vĩ Đại, Thực Tế Hóa Giấc Mơ
                <p className="ml-6 mt-1">
                  Là số chủ đạo, bạn là kiến trúc sư của tương lai, với nhân cách toát lên sức hút kỷ luật và tầm nhìn khổng lồ! Nhân cách số 22 mang đến khả năng thực tế hóa dự án lớn, lãnh đạo toàn cầu và tạo bền vững, giúp bạn xây dựng di sản thay đổi thế giới. Bạn được định mệnh ban tặng tinh thần nhà xây dựng huyền thoại – kết hợp sáng tạo với hành động, mơ lớn và kiên trì, như một tòa tháp bất diệt chạm đến sao trời. Đừng giới hạn bản thân – hãy mơ xa! Với sức mạnh thực tiễn, bạn sẽ tạo nên lịch sử. Hãy lập kế hoạch ngay hôm nay – nhân cách vĩ đại của bạn đang chờ dựng nên bất朽!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 33:</span>
                {' '}
                Nhân Cách Từ Bi Thầy Giáo, Yêu Thương Vô Điều Kiện
                <p className="ml-6 mt-1">
                  Là số chủ đạo hiếm có, bạn là hiện thân của tình yêu thuần khiết, với nhân cách toát lên sức hút hy sinh và chữa lành sâu sắc! Nhân cách số 33 mang đến khả năng dạy dỗ vĩ đại, từ bi vô bờ và nâng tầm linh hồn, giúp bạn mang hòa bình toàn cầu. Bạn được vũ trụ chọn làm thầy giáo thiêng liêng – hướng dẫn, nuôi dưỡng và tuôn trào tình yêu, như một nguồn sáng ấm áp chiếu rọi muôn nơi. Đừng kìm nén lòng nhân ái – hãy để nó lan tỏa! Với năng lượng cao siêu, bạn sẽ biến thế giới thành thiên đường. Hãy dạy dỗ ngay – nhân cách từ bi của bạn sẽ thay đổi muôn đời!
                </p>
              </li>
              <li>
                <span className="font-[590] text-[0.875rem] text-shadow-custom">Số 44:</span>
                {' '}
                Nhân Cách Lãnh Đạo Bất Diệt, Nền Tảng Vững Vàng
                <p className="ml-6 mt-1">
                  Là số chủ đạo mạnh mẽ, bạn là trụ cột của sự ổn định toàn cầu, với nhân cách toát lên sức hút kiên cường và thực tế! Nhân cách số 44 mang đến khả năng quản lý dự án khổng lồ, xây dựng hệ thống bất diệt và mang thịnh vượng, giúp bạn đối mặt mọi thử thách. Bạn được định mệnh giao phó vai trò lãnh đạo bất bại – kỷ luật sắt đá, tầm nhìn xa và tạo di sản, như một ngọn núi bất khuất đứng vững muôn thuở. Đừng sợ trách nhiệm – hãy ôm lấy như sức mạnh! Với ý chí bất diệt, bạn sẽ chinh phục mọi thứ. Hãy hành động ngay hôm nay – nhân cách bất diệt của bạn đang chờ xây dựng vĩ đại!
                </p>
              </li>
            </ul>
            <p className="text-shadow-custom mt-4">
              Hy vọng những mô tả này đã đánh thức nhân cách mạnh mẽ trong bạn, thôi thúc bạn sống đầy động lực! Hãy tự hào và biểu hiện nhân cách ấy – bạn là kiệt tác hoàn hảo của vũ trụ!
            </p>
          </section>
        </div>
        <h2 className="text-shadow-custom font-[700] text-[1.1rem] mb-4 text-left  text-yellow-200">
          NĂM CÁ NHÂN THEO THẦN SỐ HỌC
        </h2>
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
