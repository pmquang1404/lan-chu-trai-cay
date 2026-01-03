import React from 'react';

export default function LeftBanner() {
    return (
        <div className="col-span-12 lg:col-span-3 h-full">
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl p-6 lg:p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-400/20 flex flex-col">
                <h3 className="text-white font-bold text-lg lg:text-xl mb-6 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    <span>Ưu Đãi Đặc Biệt</span>
                </h3>
                <div className="space-y-4 flex-1">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/10 shadow-lg group">
                        <p className="text-white text-sm font-semibold mb-2 group-hover:text-blue-50 transition-colors">Giảm 30% Trái Cây Nhập Khẩu</p>
                        <p className="text-blue-100 text-xs group-hover:text-white transition-colors">Từ 100k</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/10 shadow-lg group">
                        <p className="text-white text-sm font-semibold mb-2 group-hover:text-blue-50 transition-colors">Mua 2 Tặng 1</p>
                        <p className="text-blue-100 text-xs group-hover:text-white transition-colors">Áp dụng táo</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/10 shadow-lg group">
                        <p className="text-white text-sm font-semibold mb-2 group-hover:text-blue-50 transition-colors">Freeship 0Đ</p>
                        <p className="text-blue-100 text-xs group-hover:text-white transition-colors">Đơn từ 200k</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
