export type Category = 'all' | 'gaming' | 'workstations' | 'apple';

export type SortOption = 'default' | 'price-asc' | 'price-desc';

export interface LaptopSpecification {
  processor?: string;
  ram: string;
  storage: string;
  graphics?: string;
  gpu?: string;
  display: string;
  refreshRate?: string;
  portsAndConnectivity?: string;
  useCase?: string;
  otherFeatures?: string;
}

export interface Laptop {
  id: string;
  name: string;
  variantSubtitle?: string;
  priceKsh: number;
  category: 'gaming' | 'workstations' | 'apple';
  categoryLabel: string;
  imageUrl: string;
  imageAlt: string;
  specs: LaptopSpecification;
  keyHighlights: string[];
  isFeatured?: boolean;
}

export interface FilterState {
  searchQuery: string;
  category: Category;
  sortBy: SortOption;
}
