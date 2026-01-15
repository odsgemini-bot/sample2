
import React from 'react';

const Career: React.FC = () => {
  const experiences = [
    {
      period: "2004 - Present",
      title: "Senior Full-Stack Developer & Technical Lead",
      company: "Professional Engineering Portfolio",
      desc: "20년간 다양한 산업 분야에서 웹 애플리케이션 및 엔터프라이즈 시스템 개발을 주도해 왔습니다. 시스템 아키텍처 설계, 대규모 데이터 처리, 팀 리딩 및 기술 멘토링을 수행하며 비즈니스의 성장을 이끌었습니다."
    },
    {
      period: "Focus Area 1",
      title: "비즈니스 실무 솔루션 최적화",
      company: "Practical Innovation",
      desc: "엑셀 자동화 및 실무 중심의 툴 개발을 통해 업무 효율성을 극대화하는 다수의 프로젝트를 성공적으로 완수하였습니다."
    },
    {
      period: "Focus Area 2",
      title: "창의적인 문제 해결사",
      company: "Creative Developer",
      desc: "기술적 한계에 부딪힌 수많은 프로젝트에서 창의적인 알고리즘과 발상의 전환을 통해 돌파구를 마련했습니다."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 text-center text-slate-900">경력 및 이력</h2>
      
      <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:w-px before:h-full before:bg-slate-200 before:hidden md:before:block">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row gap-8 items-start relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-sm z-10"></div>
            
            <div className="w-full md:w-1/2">
              <div className={`p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'md:ml-4' : 'md:mr-4'}`}>
                <span className="text-blue-600 font-bold text-sm mb-2 block">{exp.period}</span>
                <h3 className="text-xl font-bold mb-1 text-slate-900">{exp.title}</h3>
                <p className="text-slate-400 text-sm font-medium mb-4">{exp.company}</p>
                <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 hidden md:block"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
