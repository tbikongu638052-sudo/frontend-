import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_SKILLS } from '../constants/mockSkills';

export const SkillContext = createContext({
  skills: [],
  selectedSkill: null,
  setSelectedSkill: () => {},
  favorites: [],
  toggleFavorite: () => {},
  activeCategory: 'all',
  setActiveCategory: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  activeTab: 'dashboard',
  setActiveTab: () => {},
});

export const SkillProvider = ({ children }) => {
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('c2k_favorites');
      return saved ? JSON.parse(saved) : ['antigravity-workflows', 'react-ui-patterns'];
    } catch {
      return ['antigravity-workflows', 'react-ui-patterns'];
    }
  });

  useEffect(() => {
    localStorage.setItem('c2k_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (skillId) => {
    setFavorites(prev => 
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  return (
    <SkillContext.Provider
      value={{
        skills,
        selectedSkill,
        setSelectedSkill,
        favorites,
        toggleFavorite,
        activeCategory,
        setActiveCategory,
        searchQuery,
        setSearchQuery,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};
