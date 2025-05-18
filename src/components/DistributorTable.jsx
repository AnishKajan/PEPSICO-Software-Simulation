import { useState } from 'react';
import PropTypes from 'prop-types';


const headers = [
  { key: 'name', label: 'Name' },
  { key: 'shippedLastMonth', label: 'Shipped Last Month' },
  { key: 'forecastThisMonth', label: 'Forecast This Month' },
  { key: 'ytdAvgPerMonth', label: 'Y-T-D Avg / Month' },
];

export default function DistributorTable({ rows }) {
  const [sortKey, setSortKey] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...rows].sort((a, b) => {
    if (a[sortKey] === b[sortKey]) return 0;
    return (a[sortKey] > b[sortKey] ? 1 : -1) * (sortAsc ? 1 : -1);
  });

  function toggleSort(key) {
    if (key === sortKey) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  }

  return (
    <table className="distributor-table">
      <thead>
        <tr>
          {headers.map(h => (
            <th key={h.key} onClick={() => toggleSort(h.key)}>
              {h.label}
              {sortKey === h.key ? (sortAsc ? ' ▲' : ' ▼') : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map(r => (
          <tr key={r.id}>
            <td>{r.name}</td>
            <td>{r.shippedLastMonth.toLocaleString()}</td>
            <td>{r.forecastThisMonth.toLocaleString()}</td>
            <td>{r.ytdAvgPerMonth.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

DistributorTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};
