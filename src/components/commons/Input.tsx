import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 rounded-md bg-gray-200 text-black placeholder-brand-muted outline-none focus:ring-2 focus:ring-light-purple/50  transition`}
    />
  );
};

export default Input;
