
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-lg font-bold text-xs uppercase mb-6">
            WHO AM I
          </div>
          <h2 className="text-4xl font-bold mb-8 text-slate-900">
            20년의 경험, <br/>
            그리고 꼼꼼함과 창의력
          </h2>
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              안녕하세요, 20년 동안 현장에서 호흡하며 가치를 만들어 온 개발자 오두성입니다. 
              기술은 단순히 코드를 짜는 행위가 아니라, 누군가에게 따뜻한 빵 한 조각처럼 
              직관적인 즐거움과 실질적인 행복을 전달하는 도구라고 믿습니다.
            </p>
            <p>
              저의 가장 큰 무기는 <span className="text-blue-600 font-semibold">꼼꼼함</span>입니다. 
              수만 줄의 코드 속에서도 작은 오차를 놓치지 않는 세심함으로 시스템의 안정성을 책임집니다. 
              또한, 기존의 틀에 얽매이지 않는 <span className="text-blue-600 font-semibold">창의력</span>을 통해 
              실무의 난제들을 혁신적인 방식으로 해결해 왔습니다.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow group">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold mb-2">꼼꼼함</h3>
            <p className="text-slate-500 text-sm">결코 타협하지 않는 디테일. 완성도 높은 제품을 위한 기초 체력입니다.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 mt-8 hover:shadow-2xl transition-shadow group">
            <div className="w-12 h-12 bg-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">창의력</h3>
            <p className="text-slate-500 text-sm">불가능을 가능으로 바꾸는 아이디어. 비즈니스의 새로운 가능성을 엽니다.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 -mt-4 hover:shadow-2xl transition-shadow group">
            <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-2">20년차</h3>
            <p className="text-slate-500 text-sm">깊고 넓은 통찰력. 수많은 프로젝트를 성공으로 이끈 노하우를 보유하고 있습니다.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 mt-4 hover:shadow-2xl transition-shadow group">
            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🥖</span>
            </div>
            <h3 className="text-xl font-bold mb-2">행복 전달</h3>
            <p className="text-slate-500 text-sm">빵처럼 따뜻한 기술. 사람을 향한 개발을 최고의 가치로 삼습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
