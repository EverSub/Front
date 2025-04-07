import React from 'react';

type Option = {
  name: string;
  english_name: string;
  description: string;
  monthly_price: number;
  yearly_price: number;
  genre: string;
  onSubscribe?: () => void;
};

const OptionCard: React.FC<Option> = ({ name, english_name, description, monthly_price, yearly_price, genre, onSubscribe }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl shadow-md p-6 w-full min-h-[600px] max-w-sm text-white hover:ring-2 hover:ring-zinc-400 transition-all flex flex-col justify-between">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm text-zinc-400 italic">{english_name}</p>
      </div>

      <p className="text-sm text-zinc-300 mb-4">{description}</p>

      <div className="flex justify-between items-center text-zinc-100 mb-2">
        <span className="text-sm">월 구독</span>
        <span className="font-semibold">₩{monthly_price.toLocaleString()}</span>
      </div>

      <div className="flex justify-between items-center text-zinc-100 mb-4">
        <span className="text-sm">연 구독</span>
        <span className="font-semibold">₩{yearly_price.toLocaleString()}</span>
      </div>

      <div className="inline-block bg-zinc-800 text-xs text-white px-3 py-1 rounded-full mb-4">
        {genre}
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
