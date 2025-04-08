import React from 'react';
import OptionCard from './OptionCard';
import { Option } from '../../types';

interface OptionListProps {
  options: Option[];
  onSubscribe: (name: string) => void;
}

const OptionList: React.FC<OptionListProps> = ({ options, onSubscribe }) => {
  return (
    <div className="grid grid-cols-2 gap-6 w-3/4">
      {options.map((opt, idx) => (
        <OptionCard key={idx} {...opt} onSubscribe={() => onSubscribe(opt.name)} />
      ))}
    </div>
  );
};

export default OptionList;