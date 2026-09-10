import React from 'react';
import { Network, Cpu, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SKILL_CATEGORIES } from '../data/telecomData';

export const ExpertiseSection: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'settings_ethernet':
        return <Network className="w-6 h-6 text-secondary" />;
      case 'precision_manufacturing':
        return <Cpu className="w-6 h-6 text-primary" />;
      case 'verified_user':
      default:
        return <ShieldCheck className="w-6 h-6 text-secondary" />;
    }
  };

  const categories = SKILL_CATEGORIES.map((cat, idx) => {
    let title = cat.title;
    let subtitle = cat.subtitle;
    if (idx === 0) {
      title = t.expertise.categories.opticalTitle;
      subtitle = t.expertise.categories.opticalSubtitle;
    } else if (idx === 1) {
      title = t.expertise.categories.hardwareTitle;
      subtitle = t.expertise.categories.hardwareSubtitle;
    } else if (idx === 2) {
      title = t.expertise.categories.fieldTitle;
      subtitle = t.expertise.categories.fieldSubtitle;
    }
    return {
      ...cat,
      title,
      subtitle,
    };
  });

  return (
    <section id="expertise" className="w-full bg-[#0b1229] py-16 px-5 md:px-10 lg:px-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-tech-badge text-xs text-secondary tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4cd7f6]"></span>
            {t.expertise.badge}
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-on-surface font-semibold">
            {t.expertise.title}
          </h2>
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
            {t.expertise.subtitle}
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => {
            const isSecondary = category.accentColor === 'secondary';

            return (
              <div
                key={category.id}
                className="p-6 sm:p-8 bg-surface-container-low rounded-2xl border border-primary/15 flex flex-col gap-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-secondary/30 transition-all group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center border border-primary/20">
                    {getIcon(category.icon)}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-headline-sm text-base sm:text-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <span className="font-tech-badge text-xs text-outline">
                      {category.subtitle}
                    </span>
                  </div>
                </div>

                {/* Skill Bars */}
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center font-tech-badge text-xs">
                        <span className="text-on-surface font-medium">{skill.name}</span>
                        <span
                          className={`font-semibold ${
                            isSecondary ? 'text-secondary' : 'text-primary'
                          }`}
                        >
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            isSecondary
                              ? 'bg-gradient-to-r from-primary to-secondary'
                              : 'bg-primary'
                          }`}
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>

                      {skill.detail && (
                        <span className="font-tech-badge text-[10px] text-outline">
                          {skill.detail}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tags Footer */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-outline/15 mt-auto">
                  {category.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`font-tech-badge text-xs px-2.5 py-1 bg-surface-bright rounded border border-outline/20 transition-colors ${
                        isSecondary
                          ? 'text-secondary hover:border-secondary/50'
                          : 'text-primary hover:border-primary/50'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
