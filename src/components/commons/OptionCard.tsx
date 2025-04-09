import React from 'react';
import { Option } from '../../types';

interface OptionCardProps extends Option {
  onSubscribe?: () => void;
};

const OptionCard: React.FC<OptionCardProps> = ({ name, monthly_price, yearly_price, onSubscribe }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl shadow-md p-6 w-full min-h-[600px] max-w-sm text-white hover:ring-2 hover:ring-zinc-400 transition-all flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>


      <div className="flex justify-between items-center text-zinc-100 mb-2">
        <span className="text-sm">월 구독</span>
        <span className="font-semibold">₩{monthly_price.toLocaleString()}</span>
      </div>

      <div className="flex justify-between items-center text-zinc-100 mb-4">
        <span className="text-sm">연 구독</span>
        <span className="font-semibold">₩{yearly_price.toLocaleString()}</span>
      </div>

      <button
        onClick={onSubscribe}
        className="w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-zinc-200 transition"
      >
        구독하기
      </button>
    </div>
  );
};

export default OptionCard;
