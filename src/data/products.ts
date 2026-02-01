import { Product } from '@/types/product';

// Import images
import img_combo_2_set from '../images/combo_2_set_qua_cao_cap_tet.jpg';
import img_gio_qua_cao_cap from '../images/gio_qua_cao_cap.jpg';
import img_gio_qua_cao_cap_2 from '../images/gio_qua_cao_cap_2.jpg';

import img_gio_trai_cay_1 from '../images/gio_trai_cay_1.jpg';
import img_gio_trai_cay_2 from '../images/gio_trai_cay_2.jpg';
import img_gio_trai_cay_3 from '../images/gio_trai_cay_3.jpg';
import img_gio_trai_cay_4 from '../images/gio_trai_cay_4.jpg';
import img_gio_trai_cay_5 from '../images/gio_trai_cay_5.jpg';
import img_gio_trai_cay_6 from '../images/gio_trai_cay_6.jpg';
import img_gio_trai_cay_7 from '../images/gio_trai_cay_7.jpg';
import img_gio_trai_cay_8 from '../images/gio_trai_cay_8.jpg';
import img_gio_trai_cay_9 from '../images/gio_trai_cay_9.jpg';
import img_gio_trai_cay_10 from '../images/gio_trai_cay_10.jpg';

import img_set_qua_cao_cap_1 from '../images/set_qua_cao_cap_1.jpg';
import img_set_qua_cao_cap_hoang_kim from '../images/set_qua_cao_cap_hoang_kim_dai_phuc.jpg';

import img_set_qua_tet_1 from '../images/set_qua_tet_1.jpg';
import img_set_qua_tet_2 from '../images/set_qua_tet_2.jpg';
import img_set_qua_tet_3 from '../images/set_qua_tet_3.jpg';
import img_set_qua_tet_dien_tho from '../images/set_qua_tet_dien_tho_ngoc_xuan.jpg';
import img_set_qua_tet_hoang_kim_cat_tuong from '../images/set_qua_tet_hoang_kim_cat_tuong.jpg';
import img_set_qua_tet_hong_hac from '../images/set_qua_tet_hong_hac_vuong_phuc.jpg';
import img_set_qua_tet_hong_phat from '../images/set_qua_tet_hong_phat_dai_xuan.jpg';
import img_set_qua_tet_hung_thinh from '../images/set_qua_tet_hung_thinh_tan_xuan.jpg';
import img_set_qua_tet_kim_phuc from '../images/set_qua_tet_kim_phuc_vien_man.jpg';
import img_set_qua_tet_phu_quy from '../images/set_qua_tet_phu_quy_an_khang.jpg';
import img_set_qua_tet_phuc_loc from '../images/set_qua_tet_phuc_loc_doan_vien.jpg';
import img_set_qua_tet_thien_loc from '../images/set_qua_tet_thien_loc_dai_xuan.jpg';
import img_set_qua_tet_vuong_sac from '../images/set_qua_tet_vuong_sac_kim_xuan.jpg';
import img_set_qua_tet_xuan_an_nhien from '../images/set_qua_tet_xuan_an_nhien.jpg';

import img_trai_cay_cam from '../images/trai_cay_cam.jpg';
import img_trai_cay_cherry from '../images/trai_cay_cherry.jpg';
import img_trai_cay_dau from '../images/trai_cay_dau.jpg';
import img_trai_cay_ryong from '../images/trai_cay_ryong.jpg';
import img_trai_cay_tao from '../images/trai_cay_tao.jpg';

import img_wedding_long_phung from '../images/wedding_long_phung_hong.jpg';
import img_wedding_rong_hong from '../images/wedding_rong_hong.jpg';
import img_wedding_trap_1 from '../images/wedding_trap_1.jpg';
import img_wedding_trap_2 from '../images/wedding_trap_2.jpg';
import img_wedding_trap_3 from '../images/wedding_trap_3.jpg';

export const products: Product[] = [
    // --- FRUITS (Trái Cây Tươi) ---
    {
        id: 1,
        name: 'Cherry Đỏ Mỹ Premium',
        price: 599000,
        originalPrice: 750000,
        category: 'fruit',
        image: img_trai_cay_cherry,
        tag: 'Best Seller',
        isBestSeller: true,
        slug: 'cherry-do-my-premium',
        sku: 'FRU-CHR-USA',
        stock: 50,
        status: 'in-stock',
        description: 'Cherry đỏ Mỹ size lớn, giòn ngọt, mọng nước. Nhập khẩu trực tiếp đường hàng không, đảm bảo độ tươi ngon nhất.',
        tags: ['Cherry', 'Mỹ', 'Hoa quả nhập khẩu'],
        attributes: { 'Xuất xứ': 'Mỹ', 'Đóng gói': 'Hộp 1kg' }
    },
    {
        id: 2,
        name: 'Dâu Tây Hàn Quốc',
        price: 350000,
        category: 'fruit',
        image: img_trai_cay_dau,
        tag: 'Mới về',
        isNew: true,
        slug: 'dau-tay-han-quoc',
        sku: 'FRU-STR-KR',
        stock: 30,
        status: 'in-stock',
        description: 'Dâu tây Hàn Quốc giống Maehyang, trái to đều, màu đỏ tươi bắt mắt, hương thơm nồng nàn và vị ngọt thanh.',
        tags: ['Dâu tây', 'Hàn Quốc'],
        attributes: { 'Xuất xứ': 'Hàn Quốc', 'Đóng gói': 'Hộp 330g' }
    },
    {
        id: 3,
        name: 'Cam Vàng Navel Úc',
        price: 120000,
        category: 'fruit',
        image: img_trai_cay_cam,
        slug: 'cam-vang-navel-uc',
        sku: 'FRU-ORA-AUS',
        stock: 100,
        status: 'in-stock',
        description: 'Cam vàng Navel Úc không hạt, tép cam mọng nước, vị ngọt đậm đà, vỏ mỏng dễ bóc.',
        attributes: { 'Xuất xứ': 'Úc', 'Đóng gói': 'Kg' }
    },
    {
        id: 4,
        name: 'Thanh Long Vỏ Vàng Ryong',
        price: 250000,
        originalPrice: 300000,
        category: 'fruit',
        image: img_trai_cay_ryong,
        tag: 'Độc lạ',
        isHot: true,
        slug: 'thanh-long-vo-vang-ryong',
        sku: 'FRU-DRA-YEL',
        stock: 15,
        status: 'in-stock',
        description: 'Thanh long vỏ vàng giống mới, vị ngọt hơn thanh long thường, hương thơm nhẹ nhàng đặc trưng.',
        attributes: { 'Xuất xứ': 'Việt Nam', 'Đóng gói': 'Kg' }
    },
    {
        id: 5,
        name: 'Táo Envy Size Lớn',
        price: 220000,
        category: 'fruit',
        image: img_trai_cay_tao,
        slug: 'tao-envy-size-lon',
        sku: 'FRU-APP-ENV',
        stock: 80,
        status: 'in-stock',
        description: 'Táo Envy Mỹ size lớn, thịt chắc giòn, rất ngọt và thơm. Loại táo được yêu thích nhất.',
        attributes: { 'Xuất xứ': 'Mỹ/NewZealand', 'Đóng gói': 'Kg' }
    },

    // --- FRUIT BASKETS (Giỏ Trái Cây) ---
    {
        id: 11,
        name: 'Giỏ Trái Cây Cao Cấp Hạnh Phúc Ver.1',
        price: 1500000,
        category: 'fruit-basket',
        image: img_gio_trai_cay_1,
        tag: 'Yêu thích',
        isBestSeller: true,
        slug: 'gio-trai-cay-hanh-phuc-v1',
        sku: 'BSK-FRU-001',
        stock: 10,
        status: 'in-stock',
        description: 'Kết hợp hoàn hảo giữa Nho mẫu đơn, Dâu tây và Táo Envy. Trang trí hoa tươi sang trọng.',
    },
    {
        id: 12,
        name: 'Giỏ Trái Cây Sum Vầy',
        price: 2200000,
        category: 'fruit-basket',
        image: img_gio_trai_cay_2,
        slug: 'gio-trai-cay-sum-vay',
        description: 'Thiết kế đầy đặn, sung túc với đa dạng các loại trái cây nhiệt đới và nhập khẩu cao cấp.',
    },
    {
        id: 13,
        name: 'Giỏ Trái Cây Tinh Tế',
        price: 1800000,
        category: 'fruit-basket',
        image: img_gio_trai_cay_3,
        isHot: true,
        slug: 'gio-trai-cay-tinh-te',
        description: 'Phong cách gói quà hiện đại, tinh tế, phù hợp biếu tặng đối tác hoặc người thân.',
    },
    {
        id: 14,
        name: 'Giỏ Lan Chu Signature',
        price: 3500000,
        category: 'fruit-basket',
        image: img_gio_trai_cay_8,
        tag: 'Signature',
        isHot: true,
        originalPrice: 4000000,
        slug: 'gio-lan-chu-signature',
        sku: 'BSK-SIG-008',
        description: 'Sản phẩm đặc biệt của Lan Chu với những loại trái cây thượng hạng nhất: Nho Nhật, Dưa lưới Taki, Cherry...',
    },
    {
        id: 15,
        name: 'Hộp Quà Trái Cây Mini',
        price: 650000,
        category: 'fruit-basket',
        image: img_gio_trai_cay_5,
        slug: 'hop-qua-trai-cay-mini',
        description: 'Nhỏ gọn nhưng đầy đủ dưỡng chất. Món quà sức khỏe ý nghĩa cho mọi người.',
    },
    {
        id: 16,
        name: 'Giỏ Trái Cây Kính Biếu',
        price: 1200000,
        category: 'fruit-basket',
        image: img_gio_trai_cay_6,
        slug: 'gio-trai-cay-kinh-bieu',
        description: 'Lựa chọn trang trọng để kính biếu ông bà, cha mẹ hoặc cấp trên.',
    },
    { id: 17, name: 'Giỏ Quà Sắc Màu', price: 950000, category: 'fruit-basket', image: img_gio_trai_cay_7, slug: 'gio-qua-sac-mau' },
    { id: 18, name: 'Giỏ Trái Cây Thịnh Vượng', price: 2800000, category: 'fruit-basket', image: img_gio_trai_cay_9, tag: 'Premium', slug: 'gio-trai-cay-thinh-vuong' },
    { id: 19, name: 'Giỏ Quà Đoàn Viên', price: 1600000, category: 'fruit-basket', image: img_gio_trai_cay_10, slug: 'gio-qua-doan-vien' },
    { id: 20, name: 'Box Trái Cây Văn Phòng', price: 500000, category: 'fruit-basket', image: img_gio_trai_cay_4, slug: 'box-trai-cay-van-phong' },


    // --- GIFT BASKETS (Quà Tết/Bánh Kẹo) ---
    {
        id: 100,
        name: 'Set Quà Tết Hoàng Kim Cát Tường',
        price: 1850000,
        category: 'gift-basket',
        image: img_set_qua_tet_hoang_kim_cat_tuong,
        tag: 'Tết 2026',
        isNew: true,
        isHot: true,
        slug: 'set-qua-tet-hoang-kim-cat-tuong',
        sku: 'GIFT-TET-HKCT',
        description: 'Bộ quà tết sang trọng với tông màu vàng kim chủ đạo, tượng trưng cho phú quý, tài lộc cả năm.',
    },
    {
        id: 101,
        name: 'Set Quà Tết Hồng Hạc Vương Phúc',
        price: 2100000,
        category: 'gift-basket',
        image: img_set_qua_tet_hong_hac,
        tag: 'Tết 2026',
        isNew: true,
        slug: 'set-qua-tet-hong-hac-vuong-phuc',
        description: 'Họa tiết Hồng Hạc cao quý, mang ý nghĩa trường thọ và may mắn.',
    },
    {
        id: 102,
        name: 'Set Quà Tết Điền Thổ Ngọc Xuân',
        price: 1600000,
        category: 'gift-basket',
        image: img_set_qua_tet_dien_tho,
        tag: 'Tết 2026',
        isNew: true,
        slug: 'set-qua-tet-dien-tho-ngoc-xuan',
        description: 'Sự kết hợp tinh tế giữa truyền thống và hiện đại, mang không khí xuân ấm áp về nhà.',
    },
    {
        id: 103,
        name: 'Set Quà Tết Hưng Thịnh Tân Xuân',
        price: 1450000,
        category: 'gift-basket',
        image: img_set_qua_tet_hung_thinh,
        tag: 'Bán chạy',
        isBestSeller: true,
        slug: 'set-qua-tet-hung-thinh-tan-xuan',
        description: 'Lời chúc Hưng Thịnh cho năm mới, món quà ý nghĩa dành tặng đối tác kinh doanh.',
    },
    {
        id: 104,
        name: 'Set Quà Tết Kim Phúc Viên Mãn',
        price: 2500000,
        category: 'gift-basket',
        image: img_set_qua_tet_kim_phuc,
        tag: 'VIP',
        slug: 'set-qua-tet-kim-phuc-vien-man',
        description: 'Phiên bản giới hạn với các loại bánh kẹo, rượu vang nhập khẩu cao cấp nhất.',
    },
    {
        id: 105,
        name: 'Combo 2 Set Quà Tết Cao Cấp',
        price: 3200000,
        originalPrice: 3500000,
        category: 'gift-basket',
        image: img_combo_2_set,
        tag: 'Combo Hot',
        isHot: true,
        slug: 'combo-2-set-qua-tet-cao-cap',
        description: 'Tiết kiệm hơn khi mua theo combo. Giải pháp quà tặng hoàn hảo cho doanh nghiệp.',
    },
    { id: 106, name: 'Hộp Quà Cao Cấp Hoàng Kim Đại Phúc', price: 2800000, category: 'gift-basket', image: img_set_qua_cao_cap_hoang_kim, slug: 'hop-qua-hoang-kim-dai-phuc' },
    { id: 107, name: 'Set Quà Tết Phú Quý An Khang', price: 1250000, category: 'gift-basket', image: img_set_qua_tet_phu_quy, slug: 'set-qua-tet-phu-quy' },
    { id: 108, name: 'Set Quà Tết Phúc Lộc Đoàn Viên', price: 1350000, category: 'gift-basket', image: img_set_qua_tet_phuc_loc, slug: 'set-qua-tet-phuc-loc' },
    { id: 109, name: 'Set Quà Tết Thiên Lộc Đại Xuân', price: 1950000, category: 'gift-basket', image: img_set_qua_tet_thien_loc, slug: 'set-qua-tet-thien-loc' },
    { id: 110, name: 'Set Quà Tết Vượng Sắc Kim Xuân', price: 1550000, category: 'gift-basket', image: img_set_qua_tet_vuong_sac, slug: 'set-qua-tet-vuong-sac' },
    { id: 111, name: 'Set Quà Tết Xuân An Nhiên', price: 990000, category: 'gift-basket', image: img_set_qua_tet_xuan_an_nhien, slug: 'set-qua-tet-xuan-an_nhien' },
    { id: 112, name: 'Giỏ Quà Tết Truyền Thống 1', price: 850000, category: 'gift-basket', image: img_set_qua_tet_1, slug: 'gio-qua-tet-truyen-thong-1' },
    { id: 113, name: 'Giỏ Quà Tết Truyền Thống 2', price: 1050000, category: 'gift-basket', image: img_set_qua_tet_2, slug: 'gio-qua-tet-truyen-thong-2' },
    { id: 114, name: 'Giỏ Quà Tết Truyền Thống 3', price: 1550000, category: 'gift-basket', image: img_set_qua_tet_3, slug: 'gio-qua-tet-truyen-thong-3' },
    { id: 115, name: 'Hộp Quà Cao Cấp Signature 1', price: 2200000, category: 'gift-basket', image: img_set_qua_cao_cap_1, slug: 'hop-qua-cao-cap-signature-1' },
    { id: 116, name: 'Giỏ Quà Rượu Vang', price: 3500000, category: 'gift-basket', image: img_gio_qua_cao_cap, slug: 'gio-qua-ruou-vang' },
    { id: 117, name: 'Giỏ Quà Thịnh Vượng', price: 4200000, category: 'gift-basket', image: img_gio_qua_cao_cap_2, slug: 'gio-qua-thinh-vuong' },


    // --- WEDDING (Cưới Hỏi/Tráp) ---
    {
        id: 200,
        name: 'Tráp Cưới Long Phụng Hồng (Cặp)',
        price: 8500000,
        category: 'wedding',
        image: img_wedding_long_phung,
        tag: 'Best Seller',
        isBestSeller: true,
        slug: 'trap-cuoi-long-phung-hong',
        sku: 'WED-LPH-PAIR',
        status: 'pre-order',
        description: 'Cặp tráp Rồng Phượng kết thủ công tinh xảo, sử dụng hoa tươi và trái cây tuyển chọn. Biểu tượng cho hạnh phúc lứa đôi bền chặt.',
    },
    {
        id: 201,
        name: 'Tráp Phượng Hồng Đơn',
        price: 4500000,
        category: 'wedding',
        image: img_wedding_rong_hong, // Tên file là rong_hong nhưng thường là cặp
        slug: 'trap-phuong-hong-don',
        status: 'pre-order',
        description: 'Tráp Phượng được kết tỉ mỉ, dáng vẻ uy nghi, sang trọng.',
    },
    {
        id: 202,
        name: 'Mâm Quả Cưới Truyền Thống (Tráp 1)',
        price: 1500000,
        category: 'wedding',
        image: img_wedding_trap_1,
        slug: 'mam-qua-cuoi-truyen-thong-1',
        description: 'Mâm quả cơ bản với đầy đủ lễ vật theo phong tục truyền thống.',
    },
    {
        id: 203,
        name: 'Tráp Ăn Hỏi Hiện Đại (Tráp 2)',
        price: 2200000,
        category: 'wedding',
        image: img_wedding_trap_2,
        slug: 'trap-an-hoi-hien-dai-2',
        description: 'Thiết kế hiện đại, sử dụng khay gỗ/sơn mài cao cấp.',
    },
    {
        id: 204,
        name: 'Tráp Dạm Ngõ Cao Cấp (Tráp 3)',
        price: 1800000,
        category: 'wedding',
        image: img_wedding_trap_3,
        slug: 'trap-dam-ngo-cao-cap-3',
        description: 'Tráp dạm ngõ nhỏ gọn nhưng đầy đủ và sang trọng.',
    },
];
