import PageLayout from '../components/PageLayout';

const HomePage: React.FC = () => (
  <PageLayout title="Home">
    <div style={{ padding: '1.5rem' }}>
      <h2>Welcome</h2>
      <p>Use the burger menu to navigate between categories.</p>
    </div>
  </PageLayout>
);

export default HomePage;
