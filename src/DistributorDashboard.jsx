import DistributorTable from './components/DistributorTable';
import { mockDistributors } from './data/mockDistributors';

export default function DistributorDashboard() {
  return (
    <main className="dashboard-wrapper">
      <h1>PepsiCo Augur – Distributor Metrics</h1>
      <DistributorTable rows={mockDistributors} />
    </main>
  );
}
