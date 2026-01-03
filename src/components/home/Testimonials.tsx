import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    role: 'Khách hàng thân thiết',
    content: 'Trái cây ở đây rất tươi ngon, giao hàng nhanh chóng. Tôi rất hài lòng với dịch vụ của Lan Chu Trái Cây.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=60',
    rating: 5
  },
  {
    id: 2,
    name: 'Trần Thị B',
    role: 'Nội trợ',
    content: 'Sản phẩm chất lượng, giá cả hợp lý. Đặc biệt là các loại trái cây nhập khẩu, rất đáng tiền.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60',
    rating: 5
  },
  {
    id: 3,
    name: 'Lê Văn C',
    role: 'Nhân viên văn phòng',
    content: 'Thường xuyên đặt trái cây cho công ty ở đây. Đóng gói đẹp, sang trọng, rất thích hợp làm quà biếu.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60',
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sự hài lòng của khách hàng là động lực để chúng tôi phát triển mỗi ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < item.rating ? 'fill-current' : 'text-gray-300'}`} 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 italic">"{item.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
