export interface GiftBasket {
  id: number;
  name: string;
  price: number;
  image: string;
  occasion: string; // e.g., 'Sinh nhật', 'Khai trương', 'Thăm bệnh', 'Tết'
  description: string;
  items: string[]; // List of fruits in the basket
}

export const giftBaskets: GiftBasket[] = [
  {
    id: 101,
    name: 'Giỏ Quà Tặng Sức Khỏe',
    price: 500000,
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=500&auto=format&fit=crop&q=60',
    occasion: 'Thăm bệnh',
    description: 'Giỏ quà trái cây tươi ngon, giàu vitamin, thích hợp biếu tặng người ốm, người lớn tuổi.',
    items: ['Cam Úc', 'Táo Envy', 'Nho Mỹ', 'Lê Hàn Quốc']
  },
  {
    id: 102,
    name: 'Giỏ Quà Khai Trương Hồng Phát',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1595123550441-d377e017de6a?w=500&auto=format&fit=crop&q=60',
    occasion: 'Khai trương',
    description: 'Thiết kế sang trọng, đẳng cấp với các loại trái cây nhập khẩu cao cấp, mang ý nghĩa may mắn.',
    items: ['Cherry New Zealand', 'Dưa lưới Nhật', 'Nho Mẫu Đơn', 'Táo Rockit']
  },
  {
    id: 103,
    name: 'Giỏ Quà Sinh Nhật Ngọt Ngào',
    price: 800000,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=60',
    occasion: 'Sinh nhật',
    description: 'Món quà sinh nhật ý nghĩa, thiết kế trẻ trung, tươi tắn.',
    items: ['Dâu tây Hàn Quốc', 'Nho xanh không hạt', 'Kiwi vàng', 'Táo Juliet']
  },
  {
    id: 104,
    name: 'Hộp Quà Tết Sum Vầy',
    price: 1500000,
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&auto=format&fit=crop&q=60',
    occasion: 'Tết',
    description: 'Hộp quà Tết sang trọng, kết hợp trái cây và rượu vang/hạt dinh dưỡng.',
    items: ['Lựu Peru', 'Cam Cara', 'Táo Aomori', 'Rượu vang']
  },
  {
    id: 105,
    name: 'Giỏ Trái Cây Văn Phòng',
    price: 300000,
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&auto=format&fit=crop&q=60',
    occasion: 'Tiệc nhẹ',
    description: 'Tiện lợi cho các buổi họp, tiệc trà tại văn phòng.',
    items: ['Chuối', 'Quýt', 'Táo nhỏ', 'Ổi']
  },
  {
    id: 106,
    name: 'Giỏ Quà Cao Cấp Vip 1',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=500&auto=format&fit=crop&q=60',
    occasion: 'Biếu tặng',
    description: 'Sự lựa chọn hoàn hảo cho các đối tác quan trọng.',
    items: ['Nho Mẫu Đơn Vip', 'Dưa lưới Musk Melon', 'Cherry size 32+', 'Hồng treo gió']
  }
];

export const occasions = [
  'Tất cả',
  'Sinh nhật',
  'Khai trương',
  'Thăm bệnh',
  'Tết',
  'Biếu tặng',
  'Tiệc nhẹ'
];
