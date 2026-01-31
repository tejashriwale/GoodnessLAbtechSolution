import { ServiceDetailTemplate } from '@/components/services/ServiceDetailTemplate';
import { corrosionTestingService } from '@/lib/services-data';

export const metadata = {
  title: 'Corrosion Testing Services - Goodness Labtech Solutions',
  description: 'Comprehensive corrosion testing including IGC, pitting, crevice, and salt spray testing as per ASTM and NACE standards.',
};

export default function CorrosionTestingPage() {
  return <ServiceDetailTemplate service={corrosionTestingService} />;
}
