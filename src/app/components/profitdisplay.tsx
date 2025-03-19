import React from 'react';

interface ProfitDisplayProps {
  profit: number;
}

const ProfitDisplay: React.FC<ProfitDisplayProps> = ({ profit }) => {
  return (
    <div>
      <p>Your profit: {profit}</p>
    </div>
  );
};

export default ProfitDisplay;