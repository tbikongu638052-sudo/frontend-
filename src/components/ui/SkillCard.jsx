import React from 'react';
import { useSkills } from '../../hooks/useSkills';
import { useNotification } from '../../hooks/useNotification';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Star, Copy, FileCode } from 'lucide-react';

export const SkillCard = ({ skill }) => {
  const { setSelectedSkill, favorites, toggleFavorite } = useSkills();
  const { notify } = useNotification();
  const isFav = favorites.includes(skill.id);

  const handleCopyTrigger = (e) => {
    e.stopPropagation();
    const primaryTrigger = skill.triggers?.[0] || skill.id;
    navigator.clipboard.writeText(primaryTrigger);
    notify(`Copied skill invocation: "${primaryTrigger}"`, 'success');
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(skill.id);
    notify(isFav ? `Removed from favorites` : `Added to favorites`, 'info');
  };

  return (
    <Card
      onClick={() => setSelectedSkill(skill)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <div>
        {/* Card Header: Category badge & Favorite button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <Badge variant={skill.category === 'ai-ml' ? 'cyan' : skill.category === 'security-pentest' ? 'rose' : skill.category === 'frontend-web' ? 'emerald' : 'primary'}>
            {skill.category}
          </Badge>

          <button
            onClick={handleFavoriteClick}
            style={{
              padding: '6px',
              borderRadius: 'var(--radius-md)',
              color: isFav ? '#f59e0b' : 'var(--text-muted)',
              display: 'flex',
            }}
            title={isFav ? "Remove Favorite" : "Add Favorite"}
          >
            <Star size={16} fill={isFav ? '#f59e0b' : 'transparent'} />
          </button>
        </div>

        {/* Skill Title & Description */}
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
          {skill.name}
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px' }}>
          {skill.description}
        </p>

        {/* Tag Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
          {skill.tags?.map((tag) => (
            <Badge key={tag} variant="neutral" size="sm">
              #{tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Card Footer: Usage metrics and Quick Action */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '14px',
          borderTop: '1px solid var(--border-subtle)',
          marginTop: 'auto',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          ⭐️ {skill.rating} ({skill.usageCount.toLocaleString()})
        </span>

        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            variant="ghost"
            size="sm"
            icon={Copy}
            onClick={handleCopyTrigger}
            title="Copy Trigger Command"
          />
          <Button
            variant="outline"
            size="sm"
            icon={FileCode}
          >
            Inspect
          </Button>
        </div>
      </div>
    </Card>
  );
};
