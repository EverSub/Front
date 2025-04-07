import React from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import OptionCard from '../../components/commons/OptionCard';
import { dummyOptions } from '../../data/dummyOptions';

const UserSubManagePage: React.FC = () => {
  const handleSubscribe = (name: string) => {
    // 추후 실제 로직 연결: API 호출 or 상태 업데이트
    console.log(`${name} 구독 선택됨`);
  };

  return (
    <BaseLayout>
      <section className="px-8 py-10 text-white">
        <h1 className="text-2xl font-bold mb-6">구독 옵션 관리</h1>

        <div className="grid grid-cols-3 gap-6">
          {dummyOptions.map((option, index) => (
            <OptionCard
              key={index}
              {...option}
              onSubscribe={() => handleSubscribe(option.name)}
            />
          ))}
        </div>
      </section>
    </BaseLayout>
  );
};

export default UserSubManagePage;
