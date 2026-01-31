export interface EquipmentItem {
  id: string;
  name: string;
  manufacturer: string;
  model?: string;
  capacity?: string;
  features?: string[];
  category: string;
  image?: string;
  usedFor?: string[];
}

// Universal Testing Machines
export const universalTestingMachines: EquipmentItem[] = [
  {
    id: 'utm-fie-400kn',
    name: 'Universal Testing Machine (UTM)',
    manufacturer: 'FIE',
    capacity: '400 KN',
    features: ['Electronic Extensometer'],
    category: 'Universal Testing Machines',
    usedFor: [
      'Tensile testing',
      'Compression testing',
      'Bend testing',
      'Proof stress determination',
    ],
  },
];

// Hardness Testers
export const hardnessTesters: EquipmentItem[] = [
  {
    id: 'brinell-fie',
    name: 'Optical Brinell Hardness Testing Machine',
    manufacturer: 'FIE',
    category: 'Hardness Testers',
    features: ['Optical measurement system'],
    usedFor: ['Brinell hardness testing', 'Large indentation testing'],
  },
  {
    id: 'vickers-fie',
    name: 'Computerized Vickers Hardness Testing Machine',
    manufacturer: 'FIE',
    category: 'Hardness Testers',
    features: ['Computer controlled', 'Digital display'],
    usedFor: ['Macro and micro hardness testing', 'Precise indentation measurement'],
  },
  {
    id: 'rockwell-fie',
    name: 'Rockwell Cum Superficial Hardness Testing Machine',
    manufacturer: 'FIE',
    category: 'Hardness Testers',
    features: ['Multiple scales (A, B, C, N, T)'],
    usedFor: ['Rockwell hardness testing', 'Superficial hardness testing'],
  },
  {
    id: 'micro-chroma',
    name: 'Micro Hardness Testing Machine',
    manufacturer: 'CHROMA',
    category: 'Hardness Testers',
    features: ['10 gms to 1kg load range', 'High precision'],
    usedFor: ['Microhardness testing', 'Case depth measurement'],
  },
];

// Impact Testers
export const impactTesters: EquipmentItem[] = [
  {
    id: 'impact-fie-it30',
    name: 'Impact Testing Machine',
    manufacturer: 'FIE',
    model: 'IT 30',
    capacity: '2 to 220 joules',
    category: 'Impact Testers',
    features: ['Wide capacity range', 'Charpy and Izod capability'],
    usedFor: ['Impact toughness testing', 'Charpy V-notch testing', 'Temperature range testing'],
  },
];

// Spectrometers
export const spectrometers: EquipmentItem[] = [
  {
    id: 'oes-german',
    name: 'Optical Emission Spectrometer',
    manufacturer: 'German Make',
    category: 'Chemical Analysis',
    features: ['PPM level analysis', 'Percentage level analysis', 'Multi-element capability'],
    usedFor: [
      'Chemical composition analysis',
      'Ferrous metals analysis',
      'Non-ferrous metals analysis',
      'Alloy verification',
    ],
  },
];

// Metallography Equipment
export const metallographyEquipment: EquipmentItem[] = [
  {
    id: 'microscope-met',
    name: 'Metallurgical Microscope',
    manufacturer: 'Professional Grade',
    category: 'Metallography',
    features: ['Digital imaging', 'High magnification', 'Multiple objectives'],
    usedFor: [
      'Microstructure examination',
      'Grain size determination',
      'Inclusion rating',
      'Phase analysis',
    ],
  },
  {
    id: 'ferritoscope',
    name: 'Ferritoscope',
    manufacturer: 'Professional Grade',
    category: 'Metallography',
    features: ['Portable', 'Digital display'],
    usedFor: ['Ferrite content measurement', 'Duplex stainless steel analysis'],
  },
];

// Corrosion Testing Equipment
export const corrosionEquipment: EquipmentItem[] = [
  {
    id: 'salt-spray',
    name: 'Salt Spray (Fog) Chamber',
    manufacturer: 'Professional Grade',
    category: 'Corrosion Testing',
    features: ['ASTM B117 compliant', 'ISO 9227 compliant', 'Temperature controlled'],
    usedFor: ['Salt spray testing', 'Neutral salt spray (NSS)', 'Corrosion resistance testing'],
  },
  {
    id: 'corrosion-test-equipment',
    name: 'Corrosion Testing Equipment',
    manufacturer: 'Professional Grade',
    category: 'Corrosion Testing',
    features: ['Multiple test methods', 'Temperature controlled'],
    usedFor: [
      'Intergranular corrosion testing',
      'Pitting corrosion testing',
      'Crevice corrosion testing',
    ],
  },
];

// All Equipment Combined
export const allEquipment: EquipmentItem[] = [
  ...universalTestingMachines,
  ...hardnessTesters,
  ...impactTesters,
  ...spectrometers,
  ...metallographyEquipment,
  ...corrosionEquipment,
];

// Equipment Categories
export const equipmentCategories = [
  'Universal Testing Machines',
  'Hardness Testers',
  'Impact Testers',
  'Chemical Analysis',
  'Metallography',
  'Corrosion Testing',
];

// Helper functions
export function getEquipmentByCategory(category: string): EquipmentItem[] {
  return allEquipment.filter(item => item.category === category);
}

export function getEquipmentById(id: string): EquipmentItem | undefined {
  return allEquipment.find(item => item.id === id);
}

export const equipmentSummary = {
  totalEquipment: allEquipment.length,
  byCategory: {
    universalTestingMachines: universalTestingMachines.length,
    hardnessTesters: hardnessTesters.length,
    impactTesters: impactTesters.length,
    spectrometers: spectrometers.length,
    metallographyEquipment: metallographyEquipment.length,
    corrosionEquipment: corrosionEquipment.length,
  },
};
