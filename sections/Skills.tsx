
import React from 'react';

const Skills: React.FC = () => {
  const skillList = [
    {
      title: "엑셀 (Excel)",
      description: "단순 데이터 입력을 넘어선 자동화 및 데이터 시각화 전문가. 복잡한 수식과 VBA를 활용한 실무 최적화 솔루션을 구축합니다.",
      percentage: 95,
      tags: ["VBA", "Power Query", "Data Analysis"]
    },
    {
      title: "실무 (Business Operation)",
      description: "비즈니스 프로세스에 대한 깊은 이해를 바탕으로, 현업의 요구사항을 정확히 파악하고 실행 가능한 기술적 대안을 제시합니다.",
      percentage: 90,
      tags: ["Process Design", "Stakeholder Mgmt", "Requirement Analysis"]
    },
    {
      title: "개발 (Development)",
      description: "20년 구력의 풀스택 개발 역량. 안정적인 아키텍처 설계부터 최신 프레임워크를 활용한 고성능 웹 애플리케이션 개발까지 수행합니다.",
      percentage: 98,
      tags: ["Full-Stack", "Architecture", "Optimization"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">보유 기술 및 도구</h2>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillList.map((skill, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-300 transition-all flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{skill.title}</h3>
            <p className="text-slate-600 mb-8 flex-grow">{skill.description}</p>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm font-bold mb-2 text-slate-500">
                <span>숙련도</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
