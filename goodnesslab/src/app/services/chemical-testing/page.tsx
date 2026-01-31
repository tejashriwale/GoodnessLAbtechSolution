import { ServiceDetailTemplate } from '@/components/services/ServiceDetailTemplate';
import { chemicalTestingService } from '@/lib/services-data';

export const metadata = {
  title: 'Chemical Analysis Lab - Goodness Labtech Solutions',
  description: 'Chemical analysis of ferrous and non-ferrous metals using German-made Optical Emission Spectrometer. PPM and percentage level analysis with 24-hour turnaround.',
};

export default function ChemicalTestingPage() {
  return <ServiceDetailTemplate service={chemicalTestingService} />;
}
