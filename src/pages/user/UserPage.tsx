import BaseLayout from '../../layouts/BaseLayout';
import Header from '../../components/commons/Header';

const UserPage: React.FC = () => {
  const handleLogout = () => {
    console.log('logout');
  };
  return ( 
    <BaseLayout>
      <Header username='Test' onLogout={() => handleLogout}/>
      <div className='text-text'>
        <p>UserPage</p>
      </div>
    </BaseLayout>
  );
};

export default UserPage;