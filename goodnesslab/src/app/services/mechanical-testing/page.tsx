import { ServiceDetailTemplate } from '@/components/services/ServiceDetailTemplate';
import { mechanicalTestingService } from '@/lib/services-data';

export const metadata = {
  title: 'Mechanical Testing Services - Goodness Labtech Solutions',
  description: 'Comprehensive mechanical testing services including tensile, bend, impact, and hardness testing. NABL accredited with 400 KN UTM and advanced testing equipment.',
};

export default function MechanicalTestingPage() {
  return <ServiceDetailTemplate service={mechanicalTestingService} />;
}
