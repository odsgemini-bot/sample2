
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 bg-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 fade-in">
        <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4">Professional Developer</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 mb-8 leading-tight">
          오두성입니다<span className="text-blue-600">.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          "빵을 통해 행복을 전하고 싶습니다."<br/>
          <span className="text-slate-400 text-lg mt-4 block italic">세상을 더 따뜻하고 풍요롭게 만드는 기술을 지향합니다.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#about" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1">
            저를 소개합니다
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 transition-all hover:-translate-y-1">
            함께 일하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
