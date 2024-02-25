/*  Db.js */

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Task from "./component/Task";
import axios from "axios";

const Db = () => {
  const [tasks, setTasks] = useState([]);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3001/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <h1 class="mb-4">DB連携テスト画面</h1>
      <ul class="mb-4">
        {tasks.map((task, index) => {
            return (
              <Task
                index={index}
                name={task.name}
              />
            );
        })}
      </ul>

      <div class="btn btn-danger mb-4">
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </>
  );
};

export default Db;