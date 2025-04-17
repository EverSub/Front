import React from 'react';

interface HeaderProps {
  username?: string;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, onLogout }) => {
  return (
    <header className="w-full px-6 py-4 bg-zinc-900 text-white flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        EverSub
      </div>

      <div className="flex items-center gap-4">
        {username && <span className="text-sm text-zinc-300">👤 {username}님</span>}
        {onLogout && (
          <button
            onClick={onLogout}
            className="text-sm bg-white text-black py-1 px-3 rounded hover:bg-zinc-200 transition"
          >
            로그아웃
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
