import React from 'react';

const DataCard = ({ title, data }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {data.map((item, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCard;
