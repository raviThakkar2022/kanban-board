
import React, { useEffect, useState } from 'react';
import { fetchTotalTasks } from '../API/api';

import './Dashboard.css';

const Dashboard = () => {
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);
  const [totalPendingTasks, setTotalPendingTasks] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const totalTasksCount = await fetchTotalTasks();
      setTotalTasks(totalTasksCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-item">
        <h3 className="dashboard-item-title">Total Tasks</h3>
        <p className="dashboard-item-count">{totalTasks}</p>
      </div>
      <div className="dashboard-item">
        <h3 className="dashboard-item-title">Total Completed Tasks</h3>
        <p className="dashboard-item-count">{totalCompletedTasks}</p>
      </div>
      <div className="dashboard-item">
        <h3 className="dashboard-item-title">Total Pending Tasks</h3>
        <p className="dashboard-item-count">{totalPendingTasks}</p>
      </div>
    </div>
  );
};

export default Dashboard;