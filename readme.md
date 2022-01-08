
- khi dùng fixed thì nhớ top, left , right để kéo nó ra.
- để kích thước ảnh thay đổi theo ô cửa sở ta có thể dùng thuộc tính padding top: %.
- vấn đề khi sử dụng float là các thằng con của 1 thẻ sử dụng float thì thằng thẻ cha của nó sẽ bị thu nhỏ lại vì thằng nó nó float 1 mặt phẳng khác. Các cách khắc phục: 1. cho thẻ cha có thuộc tính overflow : hidden 2. đặt thẻ clearFloat với thuộc tính trong clear: both.
- Tính chất của hình ảnh sẽ không tự co nhỏ theo thẻ cha của nó. Vì vậy ta cho width 100%.
- Kết hợp giữa padding và margin âm là 1 kỹ thuật trong bootstrap.
- Khi thẻ Img có thuộc tính block thì nó sẽ có phần margin ẩn vì nó có tính chất inline( line hieght).
- Cách xây dựng 1 modal:
    + Dùng fixed.
    + Lớp ngoài mờ gọi là overlay

- Từ ngoài vào trong -> từ trên xuống dưới -> Tổng quan đến chi tiết.
- Vị trí -> kích thước -> màu sắc -> kiểu dáng.