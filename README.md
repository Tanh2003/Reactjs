# Human Resource Management system

[![CI](https://github.com/CircuitVerse/mobile-app/actions/workflows/ci.yml/badge.svg)](https://github.com/CircuitVerse/mobile-app/actions/workflows/ci.yml)
[![CD](https://github.com/CircuitVerse/mobile-app/actions/workflows/cd.yml/badge.svg)](https://github.com/CircuitVerse/mobile-app/actions/workflows/cd.yml)

Tôi đang sử dụng Next.js 14 và Nodejs Express và dùng MongoDB để xây dựng một trang web quản lý nguồn nhân lực. Trang web của tôi được thiết kế nhằm tối ưu hóa quy trình quản lý nhân sự, bao gồm việc theo dõi thông tin nhân viên, xử lý yêu cầu nghỉ phép và quản lý bảng lương. Với giao diện thân thiện và dễ sử dụng, hệ thống của tôi giúp cải thiện hiệu quả trong công tác quản lý và nâng cao trải nghiệm cho người dùng.

## Trải nghiệm website của tôi [tại đây](https://tanh2003-human-resource-management-system.vercel.app).

## Sau đây là các bước để chạy website sẽ gồm 2 phần lần lượt là FE và BE:
### Đây là hướng dẫn run project ở FE:
Bước: 1
 - Bạn phải tải source code  từ github của tôi về.
Bước: 2
 - Sau đó bạn phải cài môi trường nodejs bản 20.4.0
Bước: 3
 - Tiếp tục bạn  hãy mở source code bằng Visual Studio Code và bận Terminal lên
Bước: 4
 - Bạn dùng câu lệnh là npm install để cài các package của project
Bước: 5
 - Bạn hãy kiểm tra  file .env xem có biến môi trường như này chưa NEXT_PUBLIC_API_BE_HR="https://nguyentuananh-be-human-resource-manager.onrender.com"
Bước: 6
 - Biến môi trường này là để gọi API từ backend. ở đây thì tôi đã setup và deploy rồi nên nếu bạn chạy localhost thì bạn hãy  đổi thành http://localhost:8080
Bước: 7
  - Bạn dùng câu lệnh là npm run dev để run project thì nó sẽ ở cổng http://localhost:3000/ bạn hãy truy cập vào cổng này.

### Đây là hướng dẫn run project ở BE:
Bước: 1
 - Bạn phải tải source code  từ github BE của tôi về [tại đây](https://github.com/Tanh2003/BE_Human_Resource).
Bước: 2
 - Sau đó bạn phải cài môi trường nodejs bản 20.4.0 nếu đã cài rồi thì thôi 
Bước: 3
 - Tiếp tục bạn  hãy mở source code bằng Visual Studio Code và bận Terminal lên
Bước: 4
 - Bạn dùng câu lệnh là npm install để cài các package của project
Bước: 5
 - Bạn hãy kiểm tra  file .env xem có biến môi trường chưa nếu chưa hãy mở file .env example  và tạo file .env trong cây thư mục src nhá
Bước: 7
  - Bạn dùng câu lệnh là npm run dev để run project  thì lúc này các API đã hoạt động để FE sử dụng rùi nha.
### Lưu ý:
- Bạn phải chạy 2 project FE  và BE riêng nha không thì không lên website được đâu

### Các chức năng chính
Admin
- Đăng nhập.
- Thống kê số lượng tài khoản,nhân viên,phòng ban, vị trí ,yêu cầu nghỉ phép, trạng thái nghỉ đang được chờ, tiền lương, tiền thưởng
- Quản lý tài khoản(Thêm,sửa,xóa) và hiển thị danh sách tài khoản.
- Quản lý nhân viên(Thêm,sửa,xóa) và hiển thị danh sách nhân viên và xem thông tin chi tiết nhân viên.
- Quản lý phòng ban(Thêm,sửa,xóa) và hiển thị danh sách phòng ban.
- Quản lý vị trí(Thêm,sửa,xóa) và hiển thị danh sách vị trí.
- Quản lý yêu cầu nghỉ phép(Thêm,sửa,xóa) và hiển thị danh sách yêu cầu nghỉ phép.
- Quản lý bảng lương(Thêm,sửa,xóa) và hiển thị danh sách bảng lương.
- Quản lý điểm danh (Thêm,sửa,xóa) và hiển thị danh sách điểm danh.

==> sẽ bổ sung và nâng cấp thêm các tính năng sớm nhất.

User
- Đăng nhập bằng tài khoản admin cấp
- xem chi tiết thông tin trạng thái của mình
- Gửi và sửa yêu cầu nghỉ phép.

==> sẽ bổ sung và nâng cấp thêm các tính năng sớm nhất.

## Hình ảnh 

### Admin

<p>
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619246/hr_manager/15_fsjnv0.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619148/hr_manager/9_tvisxa.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619148/hr_manager/1_ctws10.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619148/hr_manager/2_waik8l.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619147/hr_manager/3_pyyea3.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619147/hr_manager/4_dhmtsn.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619147/hr_manager/5_ua49pc.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619148/hr_manager/chitiet_nhan_vien_admin_fgadzu.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619147/hr_manager/6_ahrouf.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619147/hr_manager/7_iprnog.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619148/hr_manager/8_ksm8nd.png?raw=true" alt="Splash View" width="1080">
</p>

### User
<p>
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619149/hr_manager/11_hilkaz.png?raw=true" alt="Splash View" width="1080">
<img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727619148/hr_manager/13_wxuf38.png?raw=true" alt="Splash View" width="1080">
</p>

## Công nghệ chính được sử dụng:
<p align="center">
  <img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727620195/hr_manager/nextsjs_lznjwe.png?raw=true" alt="Next.js" width="50"> 
  <img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727620195/hr_manager/reactjs_qfjuo8.png?raw=true" alt="React.js" width="50">
  <img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727620195/hr_manager/nodejs_b6jgcu.png?raw=true" alt="Node.js" width="50">
  <img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727620195/hr_manager/mongo_pyva0q.jpg?raw=true" alt="MongoDB" width="50">
  <img src="https://res.cloudinary.com/ddaxowlyn/image/upload/v1727620321/hr_manager/mui_jqyf5k.png?raw=true" alt="MUI" width="50">
</p>

## Kết thúc
Cảm ơn bạn đẽ ghé trang web của tôi.
Website được thực hiện bởi Nguyễn Tuấn Anh
Dự án được thực hiện bởi Nguyễn Tuấn Anh
