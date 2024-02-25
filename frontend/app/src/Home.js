/*  Home.js */

import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <>
      <h1 class="mb-4">ホーム画面</h1>
      
      <div class="btn btn-secondary mb-4">
        <Link to={`/db/`}>DB連携の確認を行う</Link>
      </div>

      <div class="mb-4">
        <h1 class="text-xl font-bold">Tailwind test</h1>
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
        Tailwind test
        </button>
      </div>

      <div className="mb-4">
        <h1 className="text-3xl font-bold underline">daisy UI test</h1>
        <button className="btn btn-primary">daisy UI test</button>
      </div>
    </>
  );
};

export default Home;