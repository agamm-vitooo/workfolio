import React, { useState } from 'react';
import { Home, Briefcase, Clock } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const FloatingDock = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', icon: Home, path: '/', label: 'Home' },
    { id: 'project', icon: Briefcase, path: '/project', label: 'Project' },
    { id: 'timeline', icon: Clock, path: '/timeline', label: 'Timeline' }
  ];

  const handleTabClick = (id, path) => {
    setActiveTab(id);
    navigate(path);
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
      <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm p-1.5 rounded-2xl">
        {menuItems.map(({ id, icon: Icon, path, label }) => (
          <button
            key={id}
            onClick={() => handleTabClick(id, path)}
            className={`
              relative p-3 rounded-xl
              transition-all duration-300 ease-out
              group
              ${activeTab === id 
                ? 'bg-white/10 text-white shadow-lg scale-110' 
                : 'hover:bg-white/5 text-white/70'
              }
            `}
          >
            <Icon 
              size={20} 
              className={`
                transition-transform duration-300
                ${activeTab === id 
                  ? 'scale-100' 
                  : 'scale-90 group-hover:scale-100'
                }
              `}
              strokeWidth={2}
            />
            {/* Label muncul di atas ikon saat di-hover */}
            <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {label}
            </span>
          </button>
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-black/10 backdrop-blur-sm rounded-2xl 
                    shadow-[0_8px_32px_rgba(0,0,0,0.1)] scale-105" />
    </div>
  );
};

export default FloatingDock;
