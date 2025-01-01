import React from 'react';
import { type ProjectCategory } from './types';

interface ProjectTabsProps {
  activeTab: ProjectCategory;
  onTabChange: (tab: ProjectCategory) => void;
}

const ProjectTabs = ({ activeTab, onTabChange }: ProjectTabsProps) => {
  const tabs: ProjectCategory[] = ['all', 'web', 'android', 'data'];
  
  return (
    <div className="flex justify-center gap-4 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
            activeTab === tab
              ? 'bg-secondary text-primary font-semibold shadow-lg'
              : 'bg-accent text-secondary hover:bg-accent/80'
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      </)}
    </div>
  );
};

export default ProjectTabs;