import axios from "axios";
import type { NextPage } from "next";
import { useState } from "react";
const Signup: NextPage = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = inputData;
  const onChange = ({ target }: any) => {
    const { name, value } = target;
    const nextInputs = {
      ...inputData,
      [name]: value,
    };
    setInputData(nextInputs);
  };
  const onSubmit = async (e:any) => {
    e.preventDefault()
    const body = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const res = await axios.post("http://localhost:555/signup", body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="w-full max-w-sm border-2 m-auto" onSubmit={onSubmit}>
      <div className="md:flex md:items-center mb-6 ">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            이름
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-password"
          >
            비밀번호
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6 ">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-email"
          >
            이-메일
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-email"
            type="text"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
