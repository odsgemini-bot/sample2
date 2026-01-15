
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl overflow-hidden relative">
        {/* Decorative Circle */}
        <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-blue-500/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-blue-700/50 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">새로운 여정을 <br/>함께 시작해볼까요?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-md leading-relaxed">
              당신의 비즈니스에 꼼꼼함과 창의력을 더해드립니다. 
              언제든 편하게 연락해 주세요. 따뜻한 커피 한 잔처럼 환영합니다.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:oh.neodavinci@gmail.com" className="group flex items-center space-x-6 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  📧
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Email Me</p>
                  <p className="text-lg md:text-xl font-bold break-all">oh.neodavinci@gmail.com</p>
                </div>
              </a>

              <a href="tel:01068225256" className="group flex items-center space-x-6 p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all border border-white/10">
                <div className="w-14 h-14 bg-white text-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  📞
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Call Me</p>
                  <p className="text-lg md:text-xl font-bold">010-6822-5256</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold mb-2 text-blue-100">Name</label>
                <input type="text" placeholder="성함" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-blue-200/50" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-blue-100">Message</label>
                <textarea rows={4} placeholder="함께 나누고 싶은 이야기" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-blue-200/50 resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-blue-900/20 uppercase tracking-widest text-sm">
                메시지 보내기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
