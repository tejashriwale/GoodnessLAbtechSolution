import { ServiceDetailTemplate } from '@/components/services/ServiceDetailTemplate';
import { failureAnalysisService } from '@/lib/services-data';

export const metadata = {
  title: 'Failure Analysis Services - Goodness Labtech Solutions',
  description: 'Expert failure analysis services to identify root causes of material and component failures with comprehensive reporting.',
};

export default function FailureAnalysisPage() {
  return <ServiceDetailTemplate service={failureAnalysisService} />;
}
