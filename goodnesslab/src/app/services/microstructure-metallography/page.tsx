import { ServiceDetailTemplate } from '@/components/services/ServiceDetailTemplate';
import { microstructureMetallographyService } from '@/lib/services-data';

export const metadata = {
  title: 'Metallurgical Evaluation - Goodness Labtech Solutions',
  description: 'Expert metallography services including microstructure examination, grain size determination, inclusion rating, and phase analysis.',
};

export default function MicrostructureMetallographyPage() {
  return <ServiceDetailTemplate service={microstructureMetallographyService} />;
}
