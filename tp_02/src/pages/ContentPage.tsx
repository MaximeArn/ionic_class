import { useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

interface Params {
  category: string;
  subcategory: string;
}

const ContentPage: React.FC = () => {
  const { category, subcategory } = useParams<Params>();
  const title = subcategory.charAt(0).toUpperCase() + subcategory.slice(1);

  return (
    <PageLayout title={title}>
      <div style={{ padding: '1.5rem' }}>
        <h2>{title}</h2>
        <p style={{ textTransform: 'capitalize', color: 'var(--ion-color-medium)' }}>
          {category} › {subcategory}
        </p>
        <p>Content for <strong>{title}</strong> goes here.</p>
      </div>
    </PageLayout>
  );
};

export default ContentPage;
