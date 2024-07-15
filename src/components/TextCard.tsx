import React from 'react';

interface TextCardProps {
  title: string;
  progress: number; // assuming progress is a number
  totalDuration: number; // assuming total duration is a number
}

const TextCard: React.FC<TextCardProps> = ({ title, progress, totalDuration }) => {
  const progressPercentage = (progress / totalDuration) * 100;

  return (
    <div style={styles.card}>
      <h1>{title}</h1>
      <h2>Progress: {progress}/{totalDuration} ({progressPercentage.toFixed(2)}%)</h2>
    </div>
  );
};

const styles = {
  card: {
    width: '100%' as '100%',
    padding: '16px',
    boxSizing: 'border-box' as 'border-box',
    backgroundColor: '#f9f9f9',
    borderTop: '1px solid #ddd',
    textAlign: 'center' as 'center',
  }
};

export default TextCard;