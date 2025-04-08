import BaseLayout from '../../layouts/BaseLayout';
import ServiceList from '../../components/commons/ServiceList';
import OptionList from '../../components/commons/OptionList';
import { dummyOptions, dummyServices } from '../../data/dummyOptions';

const UserSubManagePage: React.FC = () => {

  const handleSubscribe = (name: string) => {
    console.log(`${name} 구독 선택됨`);
  };

  const handleServiceSelect = (name: string) => {
    console.log(`${name} 구독 선택됨`);
  }

  return (
    <BaseLayout>
      <section className="px-8 py-10 text-white">
        <h1 className="text-2xl font-bold mb-6">구독 옵션 관리</h1>
        <ServiceList services={dummyServices} onSelect={handleServiceSelect} />
        <OptionList options={dummyOptions} onSubscribe={handleSubscribe}/>
      </section>
    </BaseLayout>
  );
};

export default UserSubManagePage;
