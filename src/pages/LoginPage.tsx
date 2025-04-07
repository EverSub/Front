import React, { useState } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import Input from '../components/commons/Input';

const LoginPage: React.FC = () => {
  const [loginParams, setLoginParams] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 요청:', loginParams);
    // 로그인 로직 연결 예정
  };

  return (
    <BaseLayout>
      <div className="flex justify-center items-center h-full w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white p-6 rounded-xl shadow-xl/20 shadow-light-purple space-y-4"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Wellcome!</h2>

          <Input
            type="text"
            name="username"
            placeholder="아이디"
            value={loginParams.username}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={loginParams.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-md bg-brand-accent text-black font-semibold hover:bg-opacity-80 transition"
          >
            로그인
          </button>
        </form>
      </div>
    </BaseLayout>
  );
};

export default LoginPage;
