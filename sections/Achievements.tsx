
import React from 'react';

const Achievements: React.FC = () => {
  const stats = [
    { label: "경력 연수", value: "20+", suffix: "Years" },
    { label: "수행 프로젝트", value: "100+", suffix: "Projects" },
    { label: "실무 효율 개선", value: "85", suffix: "%" },
    { label: "만족도", value: "100", suffix: "%" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4">MILESTONES</h2>
      <h3 className="text-4xl md:text-5xl font-bold mb-16">활동 및 성과</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-8 border border-slate-800 rounded-3xl bg-slate-800/50">
            <div className="text-4xl md:text-6xl font-extrabold text-white mb-2 flex items-center justify-center">
              {stat.value}
              <span className="text-xl md:text-2xl text-blue-500 ml-1 font-bold">{stat.suffix}</span>
            </div>
            <div className="text-slate-400 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        <div className="bg-slate-800 p-8 rounded-3xl border-l-4 border-blue-600">
          <h4 className="text-xl font-bold mb-4 text-white">20년의 견고한 개발 역량</h4>
          <p className="text-slate-400 leading-relaxed">
            한 분야에서 20년을 버티는 것은 기술적 숙련도뿐만 아니라 끊임없는 학습과 책임감이 필수적입니다. 
            수많은 서비스의 런칭부터 유지보수까지 전 과정을 책임지며 실전 근육을 다져왔습니다.
          </p>
        </div>
        <div className="bg-slate-800 p-8 rounded-3xl border-l-4 border-blue-400">
          <h4 className="text-xl font-bold mb-4 text-white">빵처럼 행복한 기술의 가치</h4>
          <p className="text-slate-400 leading-relaxed">
            단순히 작동하는 기능을 만드는 것에 그치지 않고, 사용자가 기술을 마주할 때 
            마치 갓 구운 빵의 향기를 맡는 것처럼 기분 좋은 경험을 할 수 있도록 사용자 중심의 인터페이스를 설계합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
