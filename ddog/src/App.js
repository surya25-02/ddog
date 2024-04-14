import React, { useState, useEffect } from 'react';
import Ddog from './ddog_api';
import Modal from './Modal';
import { Table } from './Table';


const DD_API_KEY = "e3d7e25752e312e468c10609cddfbe07";
const DD_APPLICATION_KEY = "e89a23f4546a7eb0489f9b7bd136a4609cac8891";
export const ddog = new Ddog(DD_API_KEY, DD_APPLICATION_KEY);


function Navbar() {
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className='container-fuild'>
          <a className="navbar-brand" href="/">Ddog</a>
        </div>
      </nav>
    </>
  )
}


function Button({ table_data }) {
  return (
    <>
      <div className={table_data.length ? "text-end" : "text-center"}>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#monitormodal">
          Create Monitor
        </button>
      </div>
    </>)
}


function App() {
  const [table_data, setTableData] = useState([]);

  return (
    <div className="App container-fluid">
      <Navbar />
      <Table table_data={table_data} setTableData={setTableData} />
      <Button table_data={table_data} />
      <Modal setTableData={setTableData} />
    </div>
  );
}

export default App;
