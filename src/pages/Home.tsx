import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-brand-black text-brand-text min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-2">홈</h1>
      <p className="text-brand-muted">구독 내역을 한눈에 확인하고 관리해보세요.</p>
    </div>
  );
};

export default Home;