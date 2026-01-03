import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pattern-dots"></div>
      <div className="container-center relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Đăng Ký Nhận Tin</h2>
              <p className="text-white/90 text-lg mb-6">
                Nhận thông báo về các chương trình khuyến mãi, giảm giá đặc biệt và các mẹo chọn trái cây tươi ngon.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <span className="text-xl">🎁</span>
                  <span className="font-medium">Voucher 50k cho lần đầu</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <span className="text-xl">🥗</span>
                  <span className="font-medium">Ebook công thức Healthy</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email của bạn</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Đăng Ký Ngay
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Chúng tôi cam kết bảo mật thông tin của bạn.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
