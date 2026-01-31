export interface Equipment {
  name: string;
  manufacturer?: string;
  model?: string;
  capacity?: string;
  features?: string[];
  image?: string;
}

export interface TestCategory {
  category: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  equipment: Equipment[];
  tests: TestCategory[];
  detailedSections?: DetailedSection[];
  standards: string[];
  icon?: string;
}

export interface DetailedSection {
  title: string;
  description: string;
  standards?: string[];
}

// MECHANICAL TESTING SERVICE
export const mechanicalTestingService: Service = {
  id: 'mechanical-testing',
  title: 'Mechanical and Physical Testing',
  slug: 'mechanical-testing',
  excerpt: 'Goodness Lab has a comprehensive range of Mechanical Testing services for metallic material.',
  description: 'Goodness Lab provides a various range of physical testing services on Metal, weldments, Pipe & Tubes. Our state-of-the-art facility is equipped with the latest testing technologies to ensure accurate and reliable results.',

  equipment: [
    {
      name: 'Universal Testing Machine (UTM)',
      manufacturer: 'FIE',
      capacity: '400 KN',
      features: ['Electronic Extensometer'],
    },
    {
      name: 'Optical Brinell Hardness Testing Machine',
      manufacturer: 'FIE',
    },
    {
      name: 'Computerized Vickers Hardness Testing Machine',
      manufacturer: 'FIE',
    },
    {
      name: 'Rockwell Cum Superficial Hardness Testing Machine',
      manufacturer: 'FIE',
    },
    {
      name: 'Micro Hardness Testing Machine',
      manufacturer: 'CHROMA',
    },
    {
      name: 'Impact Testing Machine',
      manufacturer: 'FIE',
      model: 'IT 30',
    },
  ],

  tests: [
    {
      category: 'Tensile Tests',
      items: [
        'Tensile / Transverse/Compression test',
        'Tensile Tests at Room Temperature with extensometer',
        'Tensile test with 0.2% proof stress, stress/strain diagram with electronic extensometer inclusive of sample machining charges',
        'Yield, UTS and Elongation',
        'Tensile test for fine wires/foils',
        'Full section Tensile test for steel bar up to 40 mm diameter',
        'Tensile test with Youngs Modulus (Modulus of Elasticity)',
        'Stress Strain Graphs with all relevant data',
      ],
    },
    {
      category: 'Bend Tests',
      items: [
        'Ball Test',
        'Bend test / Reverse bend / Re-bend / Root / Face / side bend test',
        'Flattening, Flaring, Drift Expansion Tests on Pipes and Tube',
        'Re-bend test including aging',
      ],
    },
    {
      category: 'Impact Tests',
      items: [
        'Charpy V notch Impact Test (a) R. T.',
        'Impact Tests as per ISO and IS Standards Charpy and Izod',
      ],
    },
    {
      category: 'Hardness Tests',
      items: [
        'Rockwell Hardness A, B, C including Superficial Scales N, T',
        'Microhardness 10 gms to 1kg including Case Depth by Micro hardness',
        'Vickers Hardness tester (Micro/Macro indentation)',
        'Brinell Hardness tester',
      ],
    },
    {
      category: 'Specialized Tests',
      items: [
        'Full-size breaking of bolt',
        'Wedge load test / Head soundness test',
        'Compression test of springs (up to 3 readings)',
        'Hydraulic / Pneumatic Test inclusive of Sample Preparation Charges',
        'Shear Test',
        'Proof Load / Slip Test on fabricated items such as clamps and assemblies',
        'Load Test - Proof Load on nuts, Breaking Load, Wedge Load Test on Bolts, Load vs Displacement',
        'Peel Test',
        'Residual Stress Measurement',
        'Jominy End Quench Test (with normalizing heat treatment) as per ASTM A255',
        'Sectional Weight of CTD/TMT/Reinforcement bars',
        'Surface characteristics of CTD/TMT/Reinforcement bars',
      ],
    },
  ],

  detailedSections: [
    {
      title: 'Tensile Test',
      description: 'All tests at Goodness Lab are performed in compliance with ASTM E8/E8M, ASTM A370, and IS/BS/ISO Standards. Information regarding the U.T.S, Yield strength, Elongation, and Reduction in Area obtained from tensile strength. Our equipment is capable of performing 0.1%, 0.2%, 0.5%, and 1% proof tests, as well as Extension Under Load (EUL) testing. Test can be performed these tests at room temperature, enable us to determine properties such as Young\'s modules.',
      standards: ['ASTM E8/E8M', 'ASTM A370', 'IS/BS/ISO'],
    },
    {
      title: 'Bend Test',
      description: 'A bend test is a mechanical test used to determine the ductility, strength, and toughness of a material (usually sheet, strips, plate, bar and wire). In this test, a sample material is subjected to a bending force to observe how it deforms under stress. It helps assess the material\'s ability to withstand deformation without breaking. Test carried out such as bend, double bend, Rebend, reverse/alternate bend as per ASTM E290, E190, A370 and other IS, BS, ISO standards.',
      standards: ['ASTM E290', 'E190', 'A370', 'IS/BS/ISO'],
    },
    {
      title: 'Load Test',
      description: 'This is a method for assessing the ability of a material to withstand compressive loads. such as proof load tests on nuts, breaking load tests, wedge load tests on bolts, and load vs. displacement tests.',
    },
    {
      title: 'Flattening Test',
      description: 'A flattening test is a mechanical assessment used primarily to evaluate the ductility and integrity of tubular products, such as pipes and tubes. Applied for Pipe and Tube as per ASTM A370, IS 2328.',
      standards: ['ASTM A370', 'IS 2328'],
    },
    {
      title: 'Flaring Test',
      description: 'The Drift Expansion Test, also known as a Flaring Test, is a method to assess the ductility and formability of metallic tubes and pipe by expanding the inner diameter using a conical mandrel, verifying the tube\'s ability to undergo plastic deformation without cracking, as per IS 2328.',
      standards: ['IS 2328'],
    },
    {
      title: 'Impact Testing',
      description: 'The impact test (ASTM A370, ASTM E23, ISO 148-1 and IS 1757, IS 1598) is a method for evaluating the toughness and notch sensitivity of metallic materials across a wide range of temperature from ambient to -196°C. Machine capability ranging from 2 joules to 220 joules.',
      standards: ['ASTM A370', 'ASTM E23', 'ISO 148-1', 'IS 1757', 'IS 1598'],
    },
    {
      title: 'Hardness Testing',
      description: 'Hardness Testing measures a material\'s strength by determining resistance to indentation/penetration by material surface.',
    },
  ],

  standards: ['ASTM E8/E8M', 'ASTM A370', 'ASTM E10', 'ASTM E92', 'ASTM E18', 'ASTM E384', 'IS/BS/ISO Standards'],
};

// CHEMICAL TESTING SERVICE
export const chemicalTestingService: Service = {
  id: 'chemical-testing',
  title: 'Chemical Analysis Lab',
  slug: 'chemical-testing',
  excerpt: 'Goodness lab has the capability to analyze ferrous and non-ferrous metals in PPM or percentage level.',
  description: 'To identify the elements, a German make Optical Emission Spectrometer is used. NABL Test Certificates for requests requiring only chemical testing are generally delivered within 1 day.',

  equipment: [
    {
      name: 'Optical Emission Spectrometer',
      manufacturer: 'German Make',
      features: ['PPM and percentage level analysis'],
    },
  ],

  tests: [
    {
      category: 'Chemical Analysis of Ferrous Metals & Alloys',
      items: [
        'Carbon Steels',
        'Low Alloy Steels',
        'Stainless Steels',
        'Boron Steels',
        'Tool & Die Steels',
        'Cast Irons',
        'Low Alloy Cast Steels',
      ],
    },
    {
      category: 'Elements Tested (Ferrous)',
      items: [
        'Carbon, Manganese, Silicon, Sulphur, Phosphorus',
        'Chromium, Nickel, Molybdenum, Titanium',
        'Copper, Cobalt, Vanadium, Tungsten, Lead, Aluminium',
        'Niobium, Tantalum, Zirconium, Nitrogen',
        'Boron in Boron Steels',
      ],
    },
    {
      category: 'Super Alloys & Special Purpose Materials',
      items: [
        'Heat-Resistant Alloys',
        'Special Purpose High Alloy Steel and Castings (Total Alloy Content 40% Or More)',
      ],
    },
    {
      category: 'Ferro-Alloys',
      items: [
        'All types of Ferro-Alloys analysis',
      ],
    },
    {
      category: 'Chemical Analysis of Non-Ferrous Metals & Alloys',
      items: [
        'Copper Based Alloys',
        'Aluminum Based Alloys',
        'Zinc Based Alloys',
        'Tin Based Alloys',
        'Lead Based Alloys',
        'Silver Based Materials',
        'Purity of Metals (Copper, Zinc, Aluminum, Tin, Lead, Silver)',
      ],
    },
  ],

  standards: ['ASTM Standards', 'IS Standards', 'International Standards'],
};

// CORROSION TESTING SERVICE
export const corrosionTestingService: Service = {
  id: 'corrosion-testing',
  title: 'Corrosion Detection',
  slug: 'corrosion-testing',
  excerpt: 'Goodness Lab undertakes a wide range of corrosion and stress corrosion tests as per ASTM NACE standards.',
  description: 'Comprehensive corrosion testing services including intergranular corrosion, pitting and crevice corrosion, salt spray testing, and specialized tests for various materials and applications.',

  equipment: [
    {
      name: 'Salt Spray (Fog) Chamber',
      features: ['NSS Testing', 'ASTM B117 Compliance'],
    },
    {
      name: 'Corrosion Testing Equipment',
      features: ['IGC Testing', 'Pitting and Crevice Testing', 'Duplex Testing'],
    },
  ],

  tests: [
    {
      category: 'Intergranular Corrosion (IGC) Testing - Stainless Steels',
      items: [
        'Oxalic Acid Etch test per ASTM A262 Practice A',
        'Ferric Sulfate-Sulfuric Acid test per ASTM A262 Practice B',
        'Huey Test, Nitric Acid test per ASTM A262 Practice C',
        'Copper–Copper Sulfate–Sulfuric Acid test per ASTM A262 Practice E',
      ],
    },
    {
      category: 'Intergranular Corrosion - Nickel Rich Chromium Bearing Steel',
      items: [
        'ASTM G28:2022 (Method A)',
      ],
    },
    {
      category: 'Pitting and Crevice Corrosion Resistance',
      items: [
        'Ferric Chloride pitting test ASTM G48 method A',
        'Ferric Chloride crevice test ASTM G48 method B',
      ],
    },
    {
      category: 'Duplex Stainless Steel Testing',
      items: [
        'Ferric Chloride Corrosion test for Classification of Structures of Duplex Stainless Steels per ASTM A923 method C',
      ],
    },
    {
      category: 'Salt Spray Corrosion Testing',
      items: [
        'Salt Spray (Fog) per ASTM B117',
        'Neutral salt spray (NSS) per ISO 9227',
      ],
    },
    {
      category: 'Mercurous Nitrate Test',
      items: [
        'Test for residual stresses in wrought copper alloy mill products',
      ],
    },
  ],

  detailedSections: [
    {
      title: 'Intergranular Corrosion (IGC) Testing',
      description: 'Inter-granular Corrosion attack in Stainless Steels and Nickel Rich Chromium Bearing steel using various standardized test methods.',
      standards: ['ASTM A262', 'ASTM G28'],
    },
    {
      title: 'Pitting and Crevice Corrosion',
      description: 'Resistance testing of Stainless Steels and Related Alloys using Ferric Chloride methods.',
      standards: ['ASTM G48'],
    },
    {
      title: 'Salt Spray Testing',
      description: 'Neutral salt spray and fog testing for evaluating corrosion resistance of materials and coatings.',
      standards: ['ASTM B117', 'ISO 9227'],
    },
  ],

  standards: ['ASTM A262', 'ASTM G28', 'ASTM G48', 'ASTM A923', 'ASTM B117', 'ISO 9227', 'NACE Standards'],
};

// MICROSTRUCTURE & METALLOGRAPHY SERVICE
export const microstructureMetallographyService: Service = {
  id: 'microstructure-metallography',
  title: 'Metallurgical Evaluation',
  slug: 'microstructure-metallography',
  excerpt: 'Metallography is the study of the microstructure of materials. The metallurgists at Goodness Lab have deep expertise in Metallographic preparation and examination.',
  description: 'Comprehensive metallographic testing services including microstructure examination, grain size determination, inclusion rating, and various specialized metallurgical evaluations.',

  equipment: [
    {
      name: 'Metallurgical Microscope',
      features: ['Digital imaging', 'High magnification'],
    },
    {
      name: 'Sample Preparation Equipment',
      features: ['Grinding', 'Polishing', 'Etching'],
    },
    {
      name: 'Ferritoscope',
      features: ['Ferrite content measurement'],
    },
  ],

  tests: [
    {
      category: 'Microscopic Examination',
      items: [
        'Microstructure Examination',
        'Macrostructure Examination',
        'Grain Size determination',
        'Case depth',
        'Inclusion rating',
        'Decarburization Test',
        'Coating Thickness',
      ],
    },
    {
      category: 'Ferrite Testing',
      items: [
        'Ferrite by Ferritoscope',
        'Ferrite by Metallography/Area Fraction (Two Phase Structure)',
        'Determination of Detrimental Phases in Duplex Stainless steels',
      ],
    },
    {
      category: 'Phase Analysis',
      items: [
        'Nodular Count/ Inter metallic phases',
      ],
    },
    {
      category: 'Macro Examination',
      items: [
        'Macro Examination of Forging/Mock up sample',
        'Macro Examination of Fillet Welded Sample',
        'Macro Etch Test on Pipe',
        'Macro Test on Welded Plate',
      ],
    },
    {
      category: 'Weld Examination',
      items: [
        'Welding, Brazing & Fusion Examination',
      ],
    },
  ],

  detailedSections: [
    {
      title: 'Metallography',
      description: 'The metallurgists at Goodness Lab have deep expertise in Metallographic preparation and examination for comprehensive material analysis.',
    },
  ],

  standards: ['ASTM Standards', 'ISO Standards', 'IS Standards'],
};

// FAILURE ANALYSIS SERVICE
export const failureAnalysisService: Service = {
  id: 'failure-analysis',
  title: 'Failure Analysis',
  slug: 'failure-analysis',
  excerpt: 'Expert failure analysis services for materials and components across various industries.',
  description: 'Comprehensive failure analysis services to identify root causes of material and component failures. Our team of experienced metallurgists and engineers use advanced testing methods to determine failure mechanisms and provide recommendations for prevention.',

  equipment: [
    {
      name: 'Advanced Microscopy Equipment',
      features: ['High magnification', 'Digital imaging'],
    },
    {
      name: 'Chemical Analysis Equipment',
      features: ['Elemental analysis'],
    },
    {
      name: 'Mechanical Testing Equipment',
      features: ['Comprehensive testing capabilities'],
    },
  ],

  tests: [
    {
      category: 'Failure Investigation',
      items: [
        'Visual Examination',
        'Macroscopic Analysis',
        'Microscopic Analysis',
        'Chemical Composition Verification',
        'Mechanical Property Testing',
        'Fractography',
        'Microstructural Analysis',
      ],
    },
    {
      category: 'Root Cause Analysis',
      items: [
        'Manufacturing Defects',
        'Material Defects',
        'Design Issues',
        'Service Conditions',
        'Corrosion Failures',
        'Fatigue Failures',
        'Stress Corrosion Cracking',
      ],
    },
  ],

  detailedSections: [
    {
      title: 'Comprehensive Failure Analysis',
      description: 'Our failure analysis services combine metallography, chemical analysis, mechanical testing, and expert interpretation to identify failure mechanisms and provide actionable recommendations.',
    },
  ],

  standards: ['ASTM Standards', 'NACE Standards', 'Industry Best Practices'],
};

// Export all services
export const allServices: Service[] = [
  mechanicalTestingService,
  chemicalTestingService,
  corrosionTestingService,
  microstructureMetallographyService,
  failureAnalysisService,
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find(service => service.slug === slug);
}

// Helper function to get service by id
export function getServiceById(id: string): Service | undefined {
  return allServices.find(service => service.id === id);
}
