const questions = [
    {
        question: "Một người lạ nhắn tin mời em đến chơi nhà và hứa cho quà. Em nên làm gì?",
        answers: [
            { text: "Đồng ý đi ngay vì có quà.", type: "gameover" },
            { text: "Từ chối và nói với bố mẹ ngay.", type: "correct" },
            { text: "Hỏi bạn xem có nên đi không.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Chính xác! Không bao giờ đi với người lạ và luôn báo cho bố mẹ biết.",
            warn: "⚠️ Nên hỏi người lớn đáng tin cậy (bố mẹ, giáo viên), không phải bạn bè.",
            gameover: "❌ Rất nguy hiểm! Không bao giờ đi với người lạ, dù họ hứa gì đi nữa."
        }
    },
    {
        question: "Một người lạ yêu cầu em gửi ảnh của mình qua mạng xã hội. Em nên làm gì?",
        answers: [
            { text: "Gửi ngay cho vui.", type: "gameover" },
            { text: "Không gửi, chặn người đó và báo cho bố mẹ.", type: "correct" },
            { text: "Hỏi bạn xem có nên gửi không.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Đúng rồi! Không bao giờ gửi ảnh cá nhân cho người lạ trên mạng.",
            warn: "⚠️ Không nên hỏi bạn. Hãy từ chối ngay và báo cho bố mẹ biết.",
            gameover: "❌ Nguy hiểm! Ảnh của em có thể bị sử dụng sai mục đích."
        }
    },
    {
        question: "Nếu bị lạc ở nơi đông người, em nên làm gì?",
        answers: [
            { text: "Đi theo một người lạ.", type: "gameover" },
            { text: "Đứng yên, gọi bố mẹ hoặc tìm bảo vệ/nhân viên.", type: "correct" },
            { text: "Đi lung tung để tìm đường.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Đứng yên hoặc tìm người làm việc tại đó để được giúp đỡ.",
            warn: "⚠️ Đi lung tung có thể khiến em lạc xa hơn. Hãy đứng yên ở chỗ an toàn.",
            gameover: "❌ Rất nguy hiểm! Không bao giờ đi theo người lạ."
        }
    },
    {
        question: "Có người lạ gọi điện nói bố mẹ em gặp tai nạn và yêu cầu em đi theo họ. Em làm gì?",
        answers: [
            { text: "Đi theo họ ngay.", type: "gameover" },
            { text: "Gọi điện cho bố mẹ để kiểm tra trước.", type: "correct" },
            { text: "Khóc và hoảng sợ.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất thông minh! Luôn kiểm tra lại với bố mẹ trước khi làm gì.",
            warn: "⚠️ Hãy bình tĩnh và gọi điện cho bố mẹ để kiểm tra thông tin.",
            gameover: "❌ Đây có thể là mánh khóe của kẻ xấu. Hãy kiểm tra lại với bố mẹ!"
        }
    },
    {
        question: "Bạn trong lớp liên tục trêu chọc và bắt nạt em. Em nên làm gì?",
        answers: [
            { text: "Đánh lại bạn đó.", type: "gameover" },
            { text: "Nói với cô giáo và bố mẹ.", type: "correct" },
            { text: "Im lặng và chịu đựng.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Đúng vậy! Luôn báo cho người lớn khi bị bắt nạt.",
            warn: "⚠️ Không nên im lặng. Hãy nói với người lớn để được giúp đỡ.",
            gameover: "❌ Bạo lực không phải là giải pháp. Hãy nhờ sự giúp đỡ từ người lớn."
        }
    },
    {
        question: "Khi qua đường, em thấy đèn giao thông đang màu vàng. Em nên làm gì?",
        answers: [
            { text: "Chạy nhanh qua đường.", type: "gameover" },
            { text: "Dừng lại và đợi đèn xanh.", type: "correct" },
            { text: "Đi chậm qua đường.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Chính xác! Đèn vàng có nghĩa là chuẩn bị dừng lại.",
            warn: "⚠️ Đèn vàng nghĩa là dừng lại, không phải đi chậm.",
            gameover: "❌ Rất nguy hiểm! Đèn vàng là tín hiệu chuẩn bị dừng, không phải chạy."
        }
    },
    {
        question: "Có người lạ cho em kẹo và bảo giữ bí mật, không nói với bố mẹ. Em làm gì?",
        answers: [
            { text: "Nhận kẹo và giữ bí mật.", type: "gameover" },
            { text: "Từ chối và báo cho bố mẹ ngay.", type: "correct" },
            { text: "Nhận kẹo nhưng sau đó nói với bố mẹ.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! 'Bí mật' từ người lạ luôn là tín hiệu nguy hiểm.",
            warn: "⚠️ Tốt hơn là không nhận gì từ người lạ cả. Từ chối ngay từ đầu.",
            gameover: "❌ Nguy hiểm! Người lớn tốt không bao giờ bảo trẻ em giữ bí mật với bố mẹ."
        }
    },
    {
        question: "Thấy lửa bốc cháy ở nhà. Em nên làm gì đầu tiên?",
        answers: [
            { text: "Chạy trốn và gọi điện 114.", type: "correct" },
            { text: "Cố gắng dập lửa bằng nước.", type: "warn" },
            { text: "Chạy vào phòng và ẩn náu.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Đúng rồi! An toàn của em là quan trọng nhất. Thoát ra và gọi cứu hỏa.",
            warn: "⚠️ Lửa lớn rất nguy hiểm. Hãy thoát ra và gọi 114 ngay.",
            gameover: "❌ Rất nguy hiểm! Không bao giờ ẩn náu khi có cháy. Phải thoát ra ngoài."
        }
    },
    {
        question: "Em muốn sạc điện thoại nhưng thấy dây sạc bị hỏng, lộ dây đồng. Em làm gì?",
        answers: [
            { text: "Dùng luôn, không sao đâu.", type: "gameover" },
            { text: "Nói với bố mẹ và không dùng dây hỏng.", type: "correct" },
            { text: "Quấn băng keo vào và sử dụng.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Chính xác! Dây điện hỏng có thể gây giật điện rất nguy hiểm.",
            warn: "⚠️ Băng keo không an toàn. Hãy thay dây mới với sự giúp đỡ của bố mẹ.",
            gameover: "❌ Cực kỳ nguy hiểm! Dây hỏng có thể gây giật điện và cháy nổ."
        }
    },
    {
        question: "Ai đó trên mạng xã hội rủ em chơi game và hứa tặng tiền thật. Em làm gì?",
        answers: [
            { text: "Đồng ý ngay để kiếm tiền.", type: "gameover" },
            { text: "Từ chối và báo cho bố mẹ.", type: "correct" },
            { text: "Chơi thử một lần xem sao.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Thông minh! Đây thường là mánh khóe lừa đảo trên mạng.",
            warn: "⚠️ Đừng thử! Đây có thể là lừa đảo. Hãy báo cho bố mẹ ngay.",
            gameover: "❌ Đây là chiêu lừa đảo! Không ai tặng tiền miễn phí trên mạng."
        }
    },
    {
        question: "Em thấy thuốc của bố mẹ để trên bàn. Em nên làm gì?",
        answers: [
            { text: "Uống thử xem vị như thế nào.", type: "gameover" },
            { text: "Không động đến và nhắc bố mẹ cất đi.", type: "correct" },
            { text: "Để đó không làm gì cả.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất đúng! Thuốc rất nguy hiểm nếu uống không đúng cách.",
            warn: "⚠️ Tốt hơn là nhắc bố mẹ cất đi để em và các bé khác không vô tình động vào.",
            gameover: "❌ Cực kỳ nguy hiểm! Thuốc có thể gây ngộ độc nếu uống sai."
        }
    },
    {
        question: "Khi đi xe ô tô, em nên ngồi ở đâu?",
        answers: [
            { text: "Ghế sau và thắt dây an toàn.", type: "correct" },
            { text: "Ghế trước bên cạnh người lái.", type: "gameover" },
            { text: "Ghế sau nhưng không cần thắt dây.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Hoàn hảo! Trẻ em nên ngồi ghế sau và luôn thắt dây an toàn.",
            warn: "⚠️ Dây an toàn rất quan trọng! Luôn thắt dây khi đi xe.",
            gameover: "❌ Ghế trước rất nguy hiểm cho trẻ em. Hãy ngồi ghế sau nhé!"
        }
    },
    {
        question: "Có người gửi link lạ cho em trên mạng và bảo bấm vào để nhận quà. Em làm gì?",
        answers: [
            { text: "Bấm ngay để xem quà gì.", type: "gameover" },
            { text: "Không bấm và hỏi bố mẹ trước.", type: "correct" },
            { text: "Hỏi bạn bè xem có nên bấm không.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất khôn ngoan! Link lạ có thể chứa virus hoặc lừa đảo.",
            warn: "⚠️ Hãy hỏi bố mẹ, người lớn hiểu rõ hơn về an toàn mạng.",
            gameover: "❌ Nguy hiểm! Link lạ có thể là virus hoặc lừa đảo."
        }
    },
    {
        question: "Bạn thân rủ em bỏ học đi chơi game. Em nên làm gì?",
        answers: [
            { text: "Đồng ý đi cùng để giữ tình bạn.", type: "gameover" },
            { text: "Từ chối và khuyên bạn không nên làm vậy.", type: "correct" },
            { text: "Nói dối cô giáo rằng bạn bị ốm.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Bạn thật sự sẽ không rủ em làm điều sai trái.",
            warn: "⚠️ Nói dối không tốt. Hãy khuyên bạn đừng bỏ học và nói với cô giáo sự thật.",
            gameover: "❌ Bỏ học không đúng! Bạn tốt sẽ không rủ em làm việc xấu."
        }
    },
    {
        question: "Em nhặt được ví có tiền trên đường. Em nên làm gì?",
        answers: [
            { text: "Giữ lại và mua đồ chơi.", type: "gameover" },
            { text: "Đưa cho bảo vệ hoặc công an để tìm người mất.", type: "correct" },
            { text: "Chia tiền với bạn bè.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Em là người trung thực và tốt bụng.",
            warn: "⚠️ Đó không phải tiền của em. Hãy trả lại cho người mất.",
            gameover: "❌ Không được! Đó là của người kháHãy trả lại nhé."
        }
    },
    {
        question: "Có người lạ kêu em mở cửa nhà khi bố mẹ đi vắng. Em làm gì?",
        answers: [
            { text: "Mở cửa xem họ cần gì.", type: "gameover" },
            { text: "Không mở cửa và gọi cho bố mẹ.", type: "correct" },
            { text: "Hỏi qua cửa họ là ai.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Chính xác! Không bao giờ mở cửa cho người lạ khi ở nhà một mình.",
            warn: "⚠️ Dù biết họ là ai thì cũng không nên mở cửGọi cho bố mẹ nhé!",
            gameover: "❌ Rất nguy hiểm! Không bao giờ mở cửa cho người lạ."
        }
    },
    {
        question: "Em đang chơi ở công viên, có người hỏi đường. Em nên làm gì?",
        answers: [
            { text: "Đi theo họ để chỉ đường.", type: "gameover" },
            { text: "Chỉ bằng lời và không đi theo.", type: "correct" },
            { text: "Lên xe của họ để chỉ đường cho dễ.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Đúng rồi! Người lớn có thể hỏi người lớn khác, không cần em đi theo.",
            warn: "⚠️ Chỉ bằng lời và không đi theo là đúng nhất.",
            gameover: "❌ Rất nguy hiểm! Không bao giờ đi theo hoặc lên xe người lạ."
        }
    },
    {
        question: "Bạn chụp ảnh em và đăng lên mạng mà không xin phép. Em làm gì?",
        answers: [
            { text: "Không làm gì cả, kệ bạn.", type: "warn" },
            { text: "Nhờ bạn gỡ xuống và báo cho bố mẹ.", type: "correct" },
            { text: "Chụp lại ảnh xấu của bạn để trả thù.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Đúng vậy! Em có quyền kiểm soát hình ảnh của mình trên mạng.",
            warn: "⚠️ Em nên nhờ bạn gỡ ảnh xuống. Đó là quyền riêng tư của em.",
            gameover: "❌ Trả thù không phải cách giải quyết. Hãy nói với bạn và người lớn."
        }
    },
    {
        question: "Em thấy bạn đăng thông tin cá nhân (địa chỉ, số điện thoại) lên mạng. Em làm gì?",
        answers: [
            { text: "Để bạn tự quyết định.", type: "warn" },
            { text: "Nhắc bạn gỡ xuống vì rất nguy hiểm.", type: "correct" },
            { text: "Share cho nhiều người biết.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Em là người bạn tốt, biết bảo vệ bạn mình.",
            warn: "⚠️ Hãy nhắc bạn nhé! Thông tin cá nhân không nên công khai trên mạng.",
            gameover: "❌ Rất nguy hiểm! Đừng lan truyền thông tin cá nhân của người khác."
        }
    },
    {
        question: "Ai đó động chạm vào người em khiến em khó chịu. Em nên làm gì?",
        answers: [
            { text: "Im lặng vì ngại.", type: "warn" },
            { text: "Nói 'Dừng lại!' và báo ngay cho người lớn đáng tin cậy.", type: "correct" },
            { text: "Không làm gì cả.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Hoàn toàn đúng! Em có quyền bảo vệ cơ thể của mình.",
            warn: "⚠️ Đừng ngại! Hãy mạnh dạn nói với người lớn đáng tin cậy.",
            gameover: "❌ Em phải nói ra! Không ai được làm em khó chịu."
        }
    },
    {
        question: "Em muốn tải app mới trên điện thoại. Em nên làm gì?",
        answers: [
            { text: "Tải từ link lạ trên internet.", type: "gameover" },
            { text: "Hỏi bố mẹ và tải từ cửa hàng ứng dụng chính thức.", type: "correct" },
            { text: "Tải luôn không cần hỏi ai.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Chính xác! Chỉ tải app từ nguồn chính thức và có sự đồng ý của bố mẹ.",
            warn: "⚠️ Nên hỏi bố mẹ trướMột số app không phù hợp với trẻ em.",
            gameover: "❌ Nguy hiểm! Link lạ có thể chứa virus hoặc phần mềm độc hại."
        }
    },
    {
        question: "Em đang chơi game online, có người lạ chat và hỏi thông tin cá nhân. Em làm gì?",
        answers: [
            { text: "Trả lời hết vì họ tò mò thôi.", type: "gameover" },
            { text: "Không trả lời, chặn và báo cho bố mẹ.", type: "correct" },
            { text: "Nói một nửa thật, một nửa giả.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất thông minh! Không bao giờ chia sẻ thông tin cá nhân với người lạ online.",
            warn: "⚠️ Không nên chia sẻ bất kỳ thông tin nào. Hãy từ chối hoàn toàn.",
            gameover: "❌ Rất nguy hiểm! Kẻ xấu có thể dùng thông tin đó để làm hại em."
        }
    },
    {
        question: "Em thấy bè lửa trên bếp gas đang cháy mà không có người lớn. Em làm gì?",
        answers: [
            { text: "Thử tự tắt bếp.", type: "warn" },
            { text: "Gọi người lớn ngay lập tức.", type: "correct" },
            { text: "Đứng gần xem lửa cháy.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Chính xác! Lửa và gas rất nguy hiểm, cần người lớn xử lý.",
            warn: "⚠️ Không nên tự tắt vì có thể bị bỏng. Gọi người lớn nhé!",
            gameover: "❌ Cực kỳ nguy hiểm! Gas có thể nổ. Tránh xa và gọi người lớn ngay."
        }
    },
    {
        question: "Có người lạ kêu em rất xinh/đẹp trai và rủ em đi chụp ảnh làm người mẫu. Em làm gì?",
        answers: [
            { text: "Đồng ý luôn vì vui.", type: "gameover" },
            { text: "Từ chối và báo cho bố mẹ.", type: "correct" },
            { text: "Đi cùng bạn để an toàn hơn.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất đúng! Đây có thể là mánh khóe của kẻ xấu.",
            warn: "⚠️ Dù có bạn đi cùng vẫn nguy hiểm. Hãy từ chối và báo bố mẹ.",
            gameover: "❌ Nguy hiểm! Đây là chiêu trò phổ biến của kẻ xấu."
        }
    },
    {
        question: "Em thấy bạn đăng video bắt nạt bạn khác lên mạng. Em nên làm gì?",
        answers: [
            { text: "Like và share video.", type: "gameover" },
            { text: "Báo cho cô giáo và khuyên bạn gỡ xuống.", type: "correct" },
            { text: "Xem thôi, không làm gì.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Em là người bạn dũng cảm, biết đứng lên chống bắt nạt.",
            warn: "⚠️ Im lặng cũng là đồng lõa với kẻ bắt nạt. Hãy báo cho người lớn!",
            gameover: "❌ Rất sai! Đừng ủng hộ bạo lực và bắt nạt."
        }
    },
    {
        question: "Trời mưa to, em cần qua đường ngập nướEm nên làm gì?",
        answers: [
            { text: "Lội qua nhanh.", type: "gameover" },
            { text: "Tìm đường khác hoặc đợi nước rút.", type: "correct" },
            { text: "Bám vào lan can và đi qua.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Chính xác! Nước ngập có thể có hố sâu hoặc dòng điện rất nguy hiểm.",
            warn: "⚠️ Vẫn rất nguy hiểm! Tốt nhất là tránh đường ngập nước.",
            gameover: "❌ Cực kỳ nguy hiểm! Nước ngập có thể cuốn trôi em hoặc có điện giật."
        }
    },
    {
        question: "Em nhận được email trúng thưởng và yêu cầu cung cấp thông tin ngân hàng của bố mẹ. Em làm gì?",
        answers: [
            { text: "Điền thông tin để nhận thưởng.", type: "gameover" },
            { text: "Xóa email và báo cho bố mẹ.", type: "correct" },
            { text: "Hỏi bạn xem có thật không.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất thông minh! Đây là thủ đoạn lừa đảo phổ biến.",
            warn: "⚠️ Hãy hỏi bố mẹ, không phải bạn bè. Đây chắc chắn là lừa đảo.",
            gameover: "❌ Đây là lừa đảo! Không ai tặng thưởng miễn phí qua email."
        }
    },
    {
        question: "Em và bạn đi chơi, bạn rủ em trèo lên nơi cao và nguy hiểm. Em làm gì?",
        answers: [
            { text: "Trèo theo để khỏi bị bạn chê nhát.", type: "gameover" },
            { text: "Từ chối và rủ bạn chơi trò khác an toàn hơn.", type: "correct" },
            { text: "Đứng dưới canh cho bạn.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Hoàn hảo! Biết nói không với những việc nguy hiểm là dũng cảm.",
            warn: "⚠️ Nên ngăn bạn lại vì rất nguy hiểm. Rủ bạn chơi trò an toàn khác.",
            gameover: "❌ An toàn quan trọng hơn! Đừng làm việc nguy hiểm vì sợ bị chê."
        }
    },
    {
        question: "Em thấy có người theo dõi em trên đường về nhà. Em nên làm gì?",
        answers: [
            { text: "Chạy về nhà thật nhanh.", type: "warn" },
            { text: "Vào cửa hàng đông người và gọi bố mẹ/công an.", type: "correct" },
            { text: "Đi vào ngõ vắng để tránh.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Rất thông minh! Nơi đông người sẽ an toàn hơn.",
            warn: "⚠️ Chạy về nhà có thể để lộ địa chỉ. Tốt hơn vào nơi đông người.",
            gameover: "❌ Rất nguy hiểm! Ngõ vắng càng dễ bị hại. Hãy đi đến nơi đông người."
        }
    },
    {
        question: "Bạn bè rủ em uống thuốc lá điện tử để 'thử cho biết'. Em làm gì?",
        answers: [
            { text: "Thử một lần cho biết.", type: "gameover" },
            { text: "Từ chối kiên quyết và tránh xa những bạn đó.", type: "correct" },
            { text: "Nói sẽ thử sau.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Biết nói không với ma túy và chất gây nghiện là rất quan trọng.",
            warn: "⚠️ Không có 'sau' nào cả. Hãy từ chối ngay và luôn!",
            gameover: "❌ Rất nguy hiểm! Thuốc lá điện tử có hại cho sức khỏe và gây nghiện."
        }
    },
    {
        question: "Em thấy một túi xách bỏ quên ở nơi công cộng. Em nên làm gì?",
        answers: [
            { text: "Mở ra xem có gì bên trong.", type: "warn" },
            { text: "Báo cho nhân viên hoặc bảo vệ nơi đó.", type: "correct" },
            { text: "Lấy về nhà.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Chính xác! Đồ vật lạ có thể nguy hiểm, để chuyên viên xử lý.",
            warn: "⚠️ Không nên mở vì có thể nguy hiểm. Hãy báo cho nhân viên.",
            gameover: "❌ Không được! Đó là của người khác và có thể nguy hiểm."
        }
    },
    {
        question: "Có người hứa trả tiền nếu em giúp họ mang gói hàng đi giao. Em làm gì?",
        answers: [
            { text: "Đồng ý vì được trả tiền.", type: "gameover" },
            { text: "Từ chối và báo cho bố mẹ/công an.", type: "correct" },
            { text: "Hỏi xem trong gói có gì.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất đúng! Đây có thể là mánh khóe dùng trẻ em vận chuyển đồ bất hợp pháp.",
            warn: "⚠️ Dù biết trong gói có gì cũng không nên nhận. Hãy từ chối ngay!",
            gameover: "❌ Cực kỳ nguy hiểm! Đó có thể là ma túy hoặc đồ bất hợp pháp."
        }
    },
    {
        question: "Em bị ngã và chảy máu nhiều. Em nên làm gì?",
        answers: [
            { text: "Kêu cứu và gọi người lớn giúp đỡ ngay.", type: "correct" },
            { text: "Tự băng bó rồi về nhà.", type: "warn" },
            { text: "Không làm gì, đợi tự khỏi.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Đúng vậy! Chảy máu nhiều cần xử lý ngay bởi người lớn hoặc bác sĩ.",
            warn: "⚠️ Chảy máu nhiều cần chuyên viên y tế. Hãy kêu cứu ngay!",
            gameover: "❌ Rất nguy hiểm! Chảy máu nhiều có thể gây ngất, cần cấp cứu ngay."
        }
    },
    {
        question: "Bạn học online, thầy/cô giáo yêu cầu bật camerEm nên làm gì?",
        answers: [
            { text: "Bật camera nếu đó là thầy/cô thật của em.", type: "correct" },
            { text: "Không bật vì sợ bị quay lén.", type: "warn" },
            { text: "Bật camera cho bất kỳ ai yêu cầu.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Đúng rồi! Chỉ bật camera trong lớp học chính thức với giáo viên của em.",
            warn: "⚠️ Với thầy/cô thật của em thì an toàn. Nhưng hãy hỏi bố mẹ nếu không chắc.",
            gameover: "❌ Nguy hiểm! Chỉ bật camera cho người em biết rõ trong lớp học chính thức."
        }
    },
    {
        question: "Em thấy bạn đánh nhau ở sân trường. Em nên làm gì?",
        answers: [
            { text: "Quay video đăng lên mạng.", type: "gameover" },
            { text: "Gọi cô giáo hoặc bảo vệ đến can thiệp.", type: "correct" },
            { text: "Cổ vũ để xem ai thắng.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Chính xác! Gọi người lớn can thiệp là cách an toàn và đúng đắn.",
            warn: "⚠️ Đừng quay video! Hãy gọi người lớn giúp đỡ.",
            gameover: "❌ Rất sai! Đừng cổ vũ bạo lựHãy tìm người lớn giúp đỡ."
        }
    },
    {
        question: "Ai đó trên mạng gửi cho em hình ảnh không phù hợp. Em làm gì?",
        answers: [
            { text: "Xem rồi xóa đi.", type: "warn" },
            { text: "Không xem, chặn người đó và báo cho bố mẹ.", type: "correct" },
            { text: "Gửi lại cho bạn bè xem.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Hoàn toàn đúng! Hình ảnh không phù hợp có thể gây tổn hại tâm lý.",
            warn: "⚠️ Tốt nhất là không xem và báo ngay cho bố mẹ.",
            gameover: "❌ Rất sai! Đừng lan truyền nội dung xấu. Hãy báo cho người lớn."
        }
    },
    {
        question: "Em muốn mua đồ online bằng thẻ của bố mẹ. Em nên làm gì?",
        answers: [
            { text: "Lấy thẻ và mua luôn.", type: "gameover" },
            { text: "Xin phép bố mẹ và mua cùng họ.", type: "correct" },
            { text: "Nhớ số thẻ rồi mua sau.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Đúng rồi! Luôn xin phép bố mẹ khi dùng tiền hoặc thẻ của họ.",
            warn: "⚠️ Phải xin phép trước, không được tự ý dùng.",
            gameover: "❌ Đó là trộm cắp! Luôn phải xin phép bố mẹ."
        }
    },
    {
        question: "Bạn rủ em bỏ nhà đi 'khám phá' thế giới bên ngoài. Em làm gì?",
        answers: [
            { text: "Đồng ý đi để có trải nghiệm mới.", type: "gameover" },
            { text: "Từ chối và khuyên bạn không nên làm vậy.", type: "correct" },
            { text: "Đi nhưng để lại lời nhắn cho bố mẹ.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Bỏ nhà rất nguy hiểm và khiến bố mẹ lo lắng.",
            warn: "⚠️ Vẫn rất nguy hiểm! Hãy ở nhà và nói với bố mẹ kế hoạch muốn đi chơi.",
            gameover: "❌ Cực kỳ nguy hiểm! Trẻ em bỏ nhà dễ bị lạc hoặc gặp kẻ xấu."
        }
    },
    {
        question: "Em thấy bạn đăng thông tin xấu, sai sự thật về người khác lên mạng. Em làm gì?",
        answers: [
            { text: "Like và comment để ủng hộ bạn.", type: "gameover" },
            { text: "Nhắc bạn gỡ xuống vì đó là sai và có thể vi phạm pháp luật.", type: "correct" },
            { text: "Không làm gì, đó là chuyện của bạn.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất đúng! Tung tin giả và xúc phạm người khác là vi phạm pháp luật.",
            warn: "⚠️ Không nên im lặng. Hãy nhắc bạn và báo cho người lớn nếu cần.",
            gameover: "❌ Rất sai! Đừng ủng hộ bắt nạt và tung tin giả trên mạng."
        }
    },
    {
        question: "Em thấy có khói và mùi lạ từ nhà hàng xóm. Em nên làm gì?",
        answers: [
            { text: "Không làm gì, đó là chuyện nhà người ta.", type: "warn" },
            { text: "Báo ngay cho bố mẹ hoặc gọi 114.", type: "correct" },
            { text: "Chạy vào nhà hàng xóm xem sao.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Rất đúng! Có thể là cháy hoặc sự cố nguy hiểm, cần báo ngay.",
            warn: "⚠️ Nên báo ngay vì có thể là hỏa hoạn. Em có thể cứu mạng người!",
            gameover: "❌ Cực kỳ nguy hiểm! Không được tự ý vào nơi có khói và mùi lạ."
        }
    },
    {
        question: "Xe buýt đông người, có người luôn chen sát vào em. Em làm gì?",
        answers: [
            { text: "Chịu đựng vì xe đông.", type: "warn" },
            { text: "Di chuyển sang chỗ khác và nói với người lớn đáng tin cậy.", type: "correct" },
            { text: "Không làm gì cả.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Đúng vậy! Em có quyền cảm thấy an toàn và thoải mái.",
            warn: "⚠️ Đừng chịu đựng! Hãy di chuyển và nói với người lớn nếu cảm thấy không an toàn.",
            gameover: "❌ Em phải bảo vệ bản thân! Hãy di chuyển và nói với người lớn."
        }
    },
    {
        question: "Em nhận được tin nhắn đe dọa từ người lạ. Em nên làm gì?",
        answers: [
            { text: "Sợ hãi và làm theo lời họ.", type: "gameover" },
            { text: "Chụp màn hình, chặn họ và báo cho bố mẹ/công an.", type: "correct" },
            { text: "Xóa tin nhắn và quên đi.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Hoàn hảo! Đe dọa là vi phạm pháp luật, cần báo ngay cho công an.",
            warn: "⚠️ Không nên xóa! Hãy giữ bằng chứng và báo cho bố mẹ/công an.",
            gameover: "❌ Đừng sợ! Họ đang vi phạm pháp luật. Hãy báo cho bố mẹ/công an ngay."
        }
    },
    {
        question: "Bố mẹ đi vắng, em thấy đói. Em nên làm gì?",
        answers: [
            { text: "Tự mở bếp nấu ăn.", type: "warn" },
            { text: "Ăn đồ ăn sẵn hoặc gọi điện cho bố mẹ hỏi ý kiến.", type: "correct" },
            { text: "Nhịn đói đợi bố mẹ về.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất khôn ngoan! An toàn là trên hết, luôn hỏi ý kiến bố mẹ.",
            warn: "⚠️ Không nên tự nấu ăn khi chưa có người lớn. Hãy ăn đồ an toàn hoặc gọi bố mẹ.",
            gameover: "❌ Không cần nhịn! Hãy ăn đồ an toàn hoặc gọi bố mẹ hỏi."
        }
    },
    {
        question: "Em muốn kết bạn với người lạ quen qua mạng. Em nên làm gì?",
        answers: [
            { text: "Kết bạn ngay nếu họ tốt.", type: "gameover" },
            { text: "Hỏi ý kiến bố mẹ và cẩn thận với thông tin cá nhân.", type: "correct" },
            { text: "Kết bạn nhưng không gặp mặt ngoài đời.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất đúng! Luôn cẩn trọng với người lạ trên mạng và báo bố mẹ.",
            warn: "⚠️ Vẫn cần cẩn thận! Người trên mạng có thể giả mạo. Hãy hỏi bố mẹ.",
            gameover: "❌ Nguy hiểm! Người trên mạng có thể không như họ nói. Hãy cẩn trọng!"
        }
    },
    {
        question: "Em thấy nước trong nhà bị rò rỉ nhiều khi bố mẹ không có nhà. Em làm gì?",
        answers: [
            { text: "Tự sửa chữa.", type: "warn" },
            { text: "Khóa van nước chính (nếu biết) và gọi ngay cho bố mẹ.", type: "correct" },
            { text: "Để đó, đợi bố mẹ về.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Nhanh trí và biết xử lý tình huống khẩn cấp.",
            warn: "⚠️ Nên gọi bố mẹ ngay! Nước rò rỉ có thể gây hư hại lớn.",
            gameover: "❌ Không nên tự sửa vì có thể nguy hiểm. Hãy gọi bố mẹ!"
        }
    },
    {
        question: "Ai đó nói với em rằng bố mẹ em nợ tiền và yêu cầu em đưa tiền. Em làm gì?",
        answers: [
            { text: "Đưa tiền ngay vì sợ bố mẹ gặp rắc rối.", type: "gameover" },
            { text: "Gọi điện hỏi bố mẹ trước khi làm bất cứ điều gì.", type: "correct" },
            { text: "Hỏi họ cần bao nhiêu tiền.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất thông minh! Đây là mánh khóe lừa đảo phổ biến. Luôn kiểm tra lại với bố mẹ!",
            warn: "⚠️ Đừng tin! Hãy gọi bố mẹ kiểm tra ngay. Đây có thể là lừa đảo.",
            gameover: "❌ Đây là lừa đảo! Luôn gọi điện hỏi bố mẹ trước khi đưa tiền cho ai."
        }
    },
    {
        question: "Em thấy bạn mang dao đến trường. Em nên làm gì?",
        answers: [
            { text: "Không nói gì vì sợ bạn giận.", type: "warn" },
            { text: "Báo ngay cho cô giáo hoặc ban giám hiệu.", type: "correct" },
            { text: "Rủ bạn cho em xem dao.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Hoàn toàn đúng! Vũ khí ở trường rất nguy hiểm, cần báo ngay cho giáo viên.",
            warn: "⚠️ An toàn quan trọng hơn! Hãy báo cho cô giáo để bảo vệ mọi người.",
            gameover: "❌ Rất nguy hiểm! Dao là vũ khí, có thể gây thương tích. Báo cô giáo ngay!"
        }
    },
    {
        question: "Em được tặng quà từ người lạ không rõ nguồn gốEm nên làm gì?",
        answers: [
            { text: "Nhận và sử dụng ngay.", type: "gameover" },
            { text: "Từ chối lịch sự hoặc hỏi bố mẹ trước khi nhận.", type: "correct" },
            { text: "Nhận rồi mang về cho bố mẹ xem.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất khôn ngoan! Quà từ người lạ có thể có mục đích xấu.",
            warn: "⚠️ Tốt hơn là từ chối ngay. Nếu đã nhận, hãy cho bố mẹ kiểm tra kỹ.",
            gameover: "❌ Nguy hiểm! Quà có thể chứa thiết bị theo dõi hoặc có mục đích xấu."
        }
    },
    // 10 CÂU MỚI ĐƯỢC THÊM VÀO ĐỂ TRÒN 40 CÂU
    {
        question: "Khi đi thang máy, nếu thang bị kẹt và mất điện, em nên làm gì?",
        answers: [
            { text: "La hét lớn để người bên ngoài biết.", type: "warn" },
            { text: "Bấm nút báo động, giữ bình tĩnh và đợi cứu hộ.", type: "correct" },
            { text: "Cố gắng cạy cửa thang máy để thoát ra.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Chính xác! Giữ bình tĩnh và gọi cứu hộ là điều quan trọng nhất.",
            warn: "⚠️ La hét có thể làm em mất sứHãy bấm nút báo động và giữ sức chờ đợi.",
            gameover: "❌ Cực kỳ nguy hiểm! Tự ý cạy cửa có thể gây rơi hoặc bị kẹt."
        }
    },
    {
        question: "Em tìm thấy một vật kim loại lạ, có khả năng là vật liệu nổ. Em làm gì?",
        answers: [
            { text: "Mang về nhà khoe với bố mẹ.", type: "gameover" },
            { text: "Không chạm vào, tránh xa và báo cho người lớn hoặc công an (113).", type: "correct" },
            { text: "Dùng gậy khều nhẹ để xem nó là gì.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Rất thông minh! Không bao giờ chạm vào vật thể lạ có thể gây nguy hiểm.",
            warn: "⚠️ Rất nguy hiểm! Không bao giờ chạm vào vật lạ có khả năng là vật liệu nổ.",
            gameover: "❌ Cực kỳ nguy hiểm! Vật liệu nổ có thể phát nổ ngay lập tứPhải tránh xa và báo cáo."
        }
    },
    {
        question: "Bố mẹ yêu cầu em đặt mật khẩu cho các tài khoản mạng xã hội. Em nên đặt mật khẩu như thế nào?",
        answers: [
            { text: "Đặt mật khẩu là '123456' cho dễ nhớ.", type: "gameover" },
            { text: "Mật khẩu dài, có cả chữ hoa, chữ thường, số và ký tự đặc biệt.", type: "correct" },
            { text: "Dùng ngày sinh của em hoặc tên của thú cưng.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Chính xác! Mật khẩu phức tạp sẽ giúp bảo vệ tài khoản của em an toàn hơn.",
            warn: "⚠️ Mật khẩu dựa trên thông tin cá nhân rất dễ bị kẻ xấu đoán ra.",
            gameover: "❌ Mật khẩu quá đơn giản sẽ khiến tài khoản bị tấn công rất nhanh."
        }
    },
    {
        question: "Em bị té ngã khi đang chơi một mình và bị thương ở tay. Em nên làm gì?",
        answers: [
            { text: "Tiếp tục chơi như không có chuyện gì.", type: "warn" },
            { text: "Tìm cách rửa sạch vết thương, dùng khăn sạch cầm máu và gọi bố mẹ.", type: "correct" },
            { text: "Bôi kem đánh răng hoặc thuốc lá lên vết thương.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Đúng vậy! Sơ cứu đúng cách và thông báo cho bố mẹ là điều cần làm.",
            warn: "⚠️ Vết thương có thể bị nhiễm trùng. Hãy sơ cứu và gọi bố mẹ.",
            gameover: "❌ Nguy hiểm! Không dùng các chất lạ bôi lên vết thương vì có thể gây nhiễm trùng nặng hơn."
        }
    },
    {
        question: "Nếu có người lạ tiếp cận và hỏi xin tiền trên đường. Em nên làm gì?",
        answers: [
            { text: "Đưa hết tiền trong ví cho họ.", type: "warn" },
            { text: "Từ chối lịch sự, tránh xa họ và đi đến nơi có người lớn đáng tin cậy.", type: "correct" },
            { text: "Chỉ đường cho họ đến nhà mình để xin tiền bố mẹ.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Chính xác! Không nên cho tiền người lạ để tránh rắc rối và nguy hiểm.",
            warn: "⚠️ Không nên đưa hết tiền. Em cần phải giữ an toàn cho bản thân trước.",
            gameover: "❌ Rất nguy hiểm! Không bao giờ đưa thông tin về nhà mình cho người lạ."
        }
    },
    {
        question: "Em phát hiện ra một lỗ hổng bảo mật trên website trường họEm làm gì?",
        answers: [
            { text: "Khai thác lỗ hổng đó để làm một trò đùa.", type: "gameover" },
            { text: "Thông báo ngay cho giáo viên chủ nhiệm hoặc ban quản trị website.", type: "correct" },
            { text: "Nói với bạn bè để cùng nhau xem xét.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất đúng! Phát hiện và báo cáo lỗ hổng là hành động có trách nhiệm, giúp bảo vệ dữ liệu chung.",
            warn: "⚠️ Không nên rủ bạn bè! Việc này cần được báo cáo cho người có trách nhiệm ngay lập tức.",
            gameover: "❌ Hành động này là bất hợp pháp và có thể gây hậu quả nghiêm trọng."
        }
    },
    {
        question: "Em đang ở nhà một mình và thấy cửa sổ bị mở toang do gió. Em làm gì?",
        answers: [
            { text: "Kệ nó, trời nóng nên để cửa sổ mở.", type: "warn" },
            { text: "Đóng cửa sổ và khóa lại cẩn thận.", type: "correct" },
            { text: "Vô tình nhìn thấy người lạ đang đứng ngoài cửa sổ.", type: "gameover" }
        ],
        feedback: {
            correct: "✅ Rất tốt! Luôn giữ cửa ra vào và cửa sổ đóng/khóa cẩn thận khi ở nhà một mình.",
            warn: "⚠️ Cửa sổ mở có thể tạo điều kiện cho kẻ gian đột nhập.",
            gameover: "❌ Nếu thấy người lạ, hãy đóng và khóa cửa ngay, đồng thời gọi bố mẹ/công an."
        }
    },
    {
        question: "Em thấy bạn bè đang chế giễu, bêu xấu một bạn khác trên mạng xã hội. Em làm gì?",
        answers: [
            { text: "Cùng tham gia bình luận vì mọi người đều làm vậy.", type: "gameover" },
            { text: "Chặn những người đó, chụp màn hình bằng chứng và báo cáo cho cô giáo.", type: "correct" },
            { text: "Không làm gì, đó không phải là chuyện của mình.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Tuyệt vời! Hành vi bêu xấu là Bắt nạt qua mạng (Cyberbullying) và cần phải được ngăn chặn.",
            warn: "⚠️ Em có trách nhiệm bảo vệ bạn bè. Hãy báo cáo cho người lớn.",
            gameover: "❌ Sai lầm! Tham gia bắt nạt qua mạng là hành động rất xấu và có thể bị xử lý."
        }
    },
    {
        question: "Nếu em bị lạc trong siêu thị và không tìm thấy bố mẹ. Em làm gì?",
        answers: [
            { text: "Đi ra khỏi siêu thị để tìm đường về nhà.", type: "gameover" },
            { text: "Đứng tại chỗ gần quầy thu ngân và nhờ nhân viên gọi bố mẹ.", type: "correct" },
            { text: "Nhờ một người lạ mặc đồ đẹp giúp tìm bố mẹ.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Chính xác! Luôn tìm đến nhân viên mặc đồng phục để được giúp đỡ an toàn.",
            warn: "⚠️ Không nên nhờ người lạ, kể cả khi họ trông đáng tin. Hãy tìm nhân viên của siêu thị.",
            gameover: "❌ Rất nguy hiểm! Không bao giờ đi ra ngoài một mình khi bị lạc."
        }
    },
    {
        question: "Khi bố mẹ đi vắng, có người lạ tự xưng là 'bạn của bố mẹ' đến giao hàng. Em làm gì?",
        answers: [
            { text: "Mở cửa nhận hàng vì đó là bạn của bố mẹ.", type: "gameover" },
            { text: "Gọi điện thoại video cho bố mẹ để xác nhận và không mở cửa nếu không được phép.", type: "correct" },
            { text: "Yêu cầu họ để hàng trước cửa rồi đóng cửa lại.", type: "warn" }
        ],
        feedback: {
            correct: "✅ Rất thông minh! Luôn xác nhận với bố mẹ qua điện thoại trước khi mở cửa cho bất kỳ ai.",
            warn: "⚠️ Việc giao tiếp qua cửa cũng cần thận trọng. Tốt nhất là không mở cửa và gọi bố mẹ xác nhận.",
            gameover: "❌ Nguy hiểm! Đây có thể là một chiêu lừa để kẻ xấu đột nhập vào nhà."
        }
    }
];

let currentQuestionIndex = 0;
let score = 0;
let gameEnded = false;

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score'); // 👈 DÒNG BỊ THIẾU HOẶC KHÔNG TÌM THẤY TRƯỚC ĐÓ
const gameContainer = document.getElementById('game-container');
const gameOverScreen = document.getElementById('game-over-screen');
const gameOverTitle = document.getElementById('game-over-title');
const finalScoreEl = document.getElementById('final-score');
const finalMessage = document.getElementById('final-message');
const replayBtn = document.getElementById('replay-btn');
const robotFeedbackArea = document.getElementById('robot-feedback'); // New element for visibility

totalQuestionsEl.textContent = questions.length;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endGame(false);
        return;
    }

    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answersContainer.innerHTML = '';
    feedback.textContent = '';
    feedback.className = 'feedback';
    nextBtn.classList.add('hidden');

    // DÒNG ĐƯỢC THÊM VÀO: XÁO TRỘN VỊ TRÍ CỦA CÁC ĐÁP ÁN
    shuffleArray(question.answers); 

    robotFeedbackArea.classList.add('hidden'); // Ẩn phản hồi khi load câu hỏi mới

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer.text;
        button.addEventListener('click', () => selectAnswer(answer.type, index));
        // Gán data-type để dễ dàng tìm đáp án đúng
        button.setAttribute('data-type', answer.type); 
        answersContainer.appendChild(button);
    });

    currentQuestionEl.textContent = currentQuestionIndex + 1;
}

function selectAnswer(type, selectedIndex) {
    if (gameEnded) return;

    const question = questions[currentQuestionIndex];
    const buttons = answersContainer.querySelectorAll('.answer-btn');
    
    // Tìm đáp án đúng để hiển thị
    let correctAnswerButton = null;
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        
        if (btn.getAttribute('data-type') === 'correct') {
            correctAnswerButton = btn;
        }

        if (index === selectedIndex) {
            btn.classList.add(type);
        }
    });

    // Hiển thị phản hồi
    feedback.textContent = question.feedback[type];
    feedback.classList.add(type, 'show');
    robotFeedbackArea.classList.remove('hidden');

    // Nếu chọn sai, làm nổi bật đáp án đúng
    if (type !== 'correct' && correctAnswerButton) {
        correctAnswerButton.classList.add('correct-highlight');
    }

// Trong function selectAnswer
    if (type === 'correct') {
        score++; 
        scoreEl.textContent = score; // ✅ Dòng này sẽ cập nhật điểm lên giao diện
        nextBtn.classList.remove('hidden');
    } else if (type === 'warn') {
        nextBtn.classList.remove('hidden');
    } else if (type === 'gameover') {
        gameEnded = true;
        nextBtn.classList.add('hidden'); // Ẩn nút Next nếu Game Over
        setTimeout(() => endGame(true), 2000);
    }
}

function endGame(isGameOver) {
    gameContainer.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');

    // Logic điểm dựa trên 40 câu hỏi (Max 40 điểm)
    if (isGameOver) {
        gameOverTitle.textContent = '💔 Game Over';
        finalScoreEl.textContent = `${score}/${currentQuestionIndex + 1}`;
        if (score === 0) {
            finalMessage.textContent = 'Đừng lo! Hãy chơi lại để học thêm nhiều kiến thức về an toàn nhé! 💪';
        } else if (score < 5) {
            finalMessage.textContent = 'Em đã cố gắng rồi! Hãy chơi lại để hiểu rõ hơn về cách bảo vệ bản thân nhé! 🌟';
        } else {
            finalMessage.textContent = 'Em đã làm khá tốt! Tiếp tục học hỏi để an toàn hơn nhé! 🎯';
        }
    } else {
        gameOverTitle.textContent = '🎉 Chúc mừng!';
        finalScoreEl.textContent = `${score}/${questions.length}`;
        
        if (score === questions.length) {
            finalMessage.textContent = 'Xuất sắc! Em là chuyên gia về an toàn! Em đã biết cách bảo vệ bản thân rất tốt! 🏆⭐';
        } else if (score >= 35) { // 35/40 (Tuyệt vời)
            finalMessage.textContent = 'Tuyệt vời! Em hiểu rất rõ về an toàn. Hãy luôn nhớ những điều đã học nhé! 🌟';
        } else if (score >= 30) { // 30/40 (Tốt lắm)
            finalMessage.textContent = 'Tốt lắm! Em đã nắm được nhiều kiến thức quan trọng về an toàn! 👍';
        } else if (score >= 20) { // 20/40 (Khá đấy)
            finalMessage.textContent = 'Khá đấy! Em đã học được nhiều điều. Hãy chơi lại để ghi nhớ tốt hơn nhé! 📚';
        } else {
            finalMessage.textContent = 'Em đã cố gắng! Hãy chơi lại để học thêm cách bảo vệ bản thân nhé! 💪';
        }
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

replayBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    gameEnded = false;
    scoreEl.textContent = '0';
    gameOverScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    loadQuestion();
});

loadQuestion();