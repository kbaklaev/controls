import React from 'react';

import './tooltip.scss';

interface TooltipProps {
  label: string;
  tooltipText: string;
  click: Boolean
}

const Tooltip: React.FC<TooltipProps> = ({ label, tooltipText, click }) => {

  const style = !click ? 'custom-tooltip-click' : 'custom-tooltip'

  return (
    <div className={style}>
      {label}
      <span className="custom-tooltip-text">{tooltipText}</span>
    </div>
  );
};

export default Tooltip;
