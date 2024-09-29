# Human Resource Management system

[![CI](https://github.com/CircuitVerse/mobile-app/actions/workflows/ci.yml/badge.svg)](https://github.com/CircuitVerse/mobile-app/actions/workflows/ci.yml)
[![CD](https://github.com/CircuitVerse/mobile-app/actions/workflows/cd.yml/badge.svg)](https://github.com/CircuitVerse/mobile-app/actions/workflows/cd.yml)

Tôi đang sử dụng Next.js 14 và Nodejs express và dùng mongooes để xây dựng một trang web quản lý nguồn nhân lực. Trang web của tôi được thiết kế nhằm tối ưu hóa quy trình quản lý nhân sự, bao gồm việc theo dõi thông tin nhân viên, xử lý yêu cầu nghỉ phép và quản lý bảng lương. Với giao diện thân thiện và dễ sử dụng, hệ thống của tôi giúp cải thiện hiệu quả trong công tác quản lý và nâng cao trải nghiệm cho người dùng.

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
 - Bạn phải tải source code  từ github BE của tôi về [tại đây](https://www.figma.com/design/DaUHqGmrJTtzrQZ4NkVMRo/Adnroid-NC_App_%C4%90i%E1%BB%87n-Tho%E1%BA%A1i?node-id=0-1&t=FwSXPviwQM8RXsnq-1).
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

## Công nghệ được sử dụng:
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA9lBMVEX///8AAAAzMzPq6uo+hj0lJSVyqmJ2rWQtLS13sGNupmB4smJro14eHh55tGAUFBRrv0d1t1phYWHJycl3tl3c3NwZGRlgm1dyulQfHx9wu1FWlU91dXVuvE1zuFdon2OVlZVLjkddl13f39/x8fG5ubl/f3+srKw8PDyr0qPMzMxkm1lSqjuXl5cLCwuNjY1sbGzp8OhKSkqjo6NAQEBXnUtWVla0zbJRUVFXm0xYpEhZqUcwgC/X5NXL3Mmev5t+rHqSuI670bmSvId3p23Q5smEw2ye0Yxftzakypxcuy1opFSAqoCoxqROlURFjT81iiwkeyMfbAcLAAAI3klEQVR4nO3da3eaSBwGcEFJ2VSXVAquNWlqFbSmwZh7oubebrNuks33/zILEgRm/sNFh+Jw5nmz56Quzk/mDmJJKHpKeRcg83Ah++FC9pNQaNWHPVXrlNcjHU3tDesUhabRLa1juoZJQzjU8oZERotFRgtFI29Bghji0sL+IO/CJ8ygv5TQYuH8eVGt9MJh3oVOmWFKobLe/QsUTU8jrOdd3KUCj5CgcD/vsi6Z/aRClrqYcIxkQjXvcq4QNYmQZSBExITsVlE3WEVFhax2Mn7Q7gYRsjlMhFOPEip5l45KlAghezMZKBpZyNpclJQhSWjlXTJqsQhC1gcKPwYs7OddLorpg0JWVvRJMoCEYt6lohoREBanFToxAGHeZaIcXFiUsdCLiQmLMZ3xo2HCvEtEPajQzLtA1GMiwmL1pE4MRLieV5dWSTcsLM6k209YWIS1PZp6SFi00dDJMCTs5V2cDNILCdneJIWjhoRFm9E40ULCTt7FySCdkLCcd3EySJkLmQ8Xsh8uZD9cyH64kP1wIfvhQvbDheyHC9kPF7IfLmQ/XMh+uJD9cCH74UL2w4X5pCzRu2diPYWqLtVo3TWxpsKaKDZFOvdNrK9QFPVTGndOrLNQlK3t1W+0W2uhY/yy6rHWXCiKtYMVj7X2QrG24rHWXyiteCwuzCdcmCZcmE+4ME24MJ9wYZpwYT7hwjQpknB6Bf21QMLr0ehsiv95OWHWX+JbRnhWurkeneF/X0bYk4SDjM62Yc432JIJj8RgMWzh7Wg6wl6VXjg4rFHZPwGineuSctpJJlTFpl0Mf+f4qXQ7nd7hr0srLB8osvvGUsJv1F7dA1UHSte0nEPLlllSm3HCzqmOFGN0NirdrS78YsmLt9YPE2xnTt/NNmYNsJNDcqR7h5aakhgjNP1y1LxijM6gjiad0JCCb51kO/P+w/t3Gxt7rQe8fYTj1Dk4gLBXk5IXI4VQO9TRd5eVyIeCffv88f0ftnBzr3FxG/XCcl0h+ADhoI9+GLJyREHY3Q5U0MD7y8Tm+OPz549/usLqnm0kN8cheGhYCH8YEvkiR1LhvkIqhH4Ofmtx9HPn84c3oX0S9/aqjSrcHMN1LkZI/DD0U8KXJ5MJDTmiEHbnh7eDv3/t/BUQ2iexWq1e3ODNcXBcIx8aFSIdAVIM+JpjEmHnHGuAyMHRdvDt19bOp6DQOYlz4yPy9gfEuoELtcPoDwO+5phEGNVK3hIi/tj5tYUKq66wujkLDlmGEH9oKcWLdeAiRwKhFnMGncjbi5ePfv6ztQUKHeLm5uydP2qRe1BAWI//NETg2SzUhY9zHy5cnMTNjdl9ZkLgeYjLCGVdQRv8Qnj3skUWuidxY2P2L0koNzEGWSjpWL9DR6jUO6UecvCF8OnlhCAMnMT2V4JQqatYb0IS2pP/7hHaT9EQNt8e0W6G+h9f+NzaiRNWJ7DQvTcBHRFgoazMV07oPISCsLnokDungWMHhBcnBGHDI7YrkNAfcsKjOiiUjr0H52mHwTnc6j1NLfhEvnP/LYNC9yQCwoYrbFQgoRyYPpdDGEAoz5/2dLX75Pxnf3HOZejZuSmFoVrgHzogvDxxTyIkdM9iBRTqwUkXuD4MCJt2dR7dNHb3dq8C5auBy7lVhF9g4cnFJ4Kw5QBbBGGwdEYCoc2z0xp55SMtyWkLHy9t4glJ6BArtITzNN6EpFlpBsKxQxyTha1MhEqduCyiLfxmC20jSdjaq9AV2rV0YDWjfmQkG+HlmCBstxMJk/Q00we7p2k48/h6xAo/A+H3sWOs7BDOIR2hNB+V7xrXUbTkwk5a4fjyufJMErYJQvHYr2lG4M/wiK8Di+7fKRzbiE9phYveAtnxIs3aIqtmBkLvkZJz4bONeNkhCdsEodvjYztepJl30jtsMxB+H8/b2ph4DuF56VwjDXVsjUQQRmw+ZS58mQsrSwjtA2F/iVgBg3tgKwpDc3dY+P3SBVYuie2wvfv2agvz4Ilc40t6bHNMJ9S3g/+g+VtDQWHFS7xQjt+YkI8XHyi459HsxzTHNEKpiezW+fvPAeHzQnhC7Es9oUa8WuGl1vfbGraid+PsOVARgnNb9e0aQkBY8RMrdK44RW14IzughCsL5Fl3KiFpbuvu2PjC/wLCZ4Jw8hAotUncjgVKrsGb05JOvpiZUBg1t3U2HRbC0tfXABEWTiahzX3SlroCDgbwBQaZ/BDrJEIl5is6dnOU/C7oqjJZCF8g4etTklKTB3S8OcoRi6dEu/rHsV+zUo+DteT6dWGcYcLXG2gIQy9tRU7K0IpdO4z6PYdM7qcZ3SyqKiJ8+QpdiHZKvR0wxo7k3lX8eRskX8GcJ6M7hqatN+MsJGwDdxJ48a8s6efxNwh4V8Wl2Bl4ZvdE3U3cqhoQPscs59y94Lhz4sUZZ5JM2zK868ttji1PCF0eRTO0mlbinwvrmjFjvZss72sbPThV1b0GPKsSGiBSHPq/OZztnXvT9mR+EsPXRX9vsr438Wwy2dyYPca/MLNkf/fl7eQ+vgFmmPW8v5RmuJD9cCH74UL2w4XshwvZDxeyHy5kP1zIfriQ/XAh++FC9sOF7IcL2Q8Xsh8uZD9cyH7CwiR3FbOWTkhY/N90Lv7vchf/t9XpPet9fTIMCet5FyeD1ENC8p227EYIC7N+TNnvTxcRJny6FUMxEKEZ/78wFhMRFq8hCqiwaLMaDRMWrZqamLBo1VTAhcXqTQ1AKOZdKKoRAaEQ9f0T1jIQIGE/72JRTB8UFmiRqAqw0Mq7YNRiEYSFWSUOBZKwIBMbTSAL9bwLRyV6hLAQa/26ECWEnpnFWPaFaCHzkzcDBWFCxkdFFfPgQqaJOBASMlxRsSpKEDLb3aCdDFnI6KBRBy2wUFDYm91oOkwhCNmbow5JEKJQsFjqcFSL6CAL7SUxK6v+QT9CESUUBJGF82iIkYZooZ3hevc5mhkHiBXaMek/74BKukYsL6HQjlUf9lStU16PdDS1N4RHv6WFDIcL2Q8Xsp/iC/8HmAEZonqAKGkAAAAASUVORK5CYII=?raw=true" alt="Splash View" width="1080">



## The End

The project is implemented by Nguyen Tuan Anh.
