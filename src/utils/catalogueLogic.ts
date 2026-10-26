import { Category, Laptop, SortOption } from '../types/laptop';

export function filterAndSortLaptops(
  laptops: Laptop[],
  searchQuery: string,
  category: Category,
  sortBy: SortOption
): Laptop[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = laptops.filter((laptop) => {
    // 1. Category check
    if (category !== 'all' && laptop.category !== category) {
      return false;
    }

    // 2. Search query check
    if (!normalizedQuery) {
      return true;
    }

    const searchableFields = [
      laptop.name,
      laptop.variantSubtitle || '',
      laptop.categoryLabel,
      laptop.specs.processor || '',
      laptop.specs.ram || '',
      laptop.specs.storage || '',
      laptop.specs.graphics || '',
      laptop.specs.gpu || '',
      laptop.specs.display || '',
      laptop.specs.refreshRate || '',
      laptop.specs.portsAndConnectivity || '',
      laptop.specs.useCase || '',
      laptop.specs.otherFeatures || '',
      ...laptop.keyHighlights,
    ];

    const matchFound = searchableFields.some((field) =>
      field.toLowerCase().includes(normalizedQuery)
    );

    return matchFound;
  });

  // 3. Sorting
  const result = [...filtered];
  if (sortBy === 'price-asc') {
    result.sort((a, b) => a.priceKsh - b.priceKsh);
  } else if (sortBy === 'price-desc') {
    result.sort((a, b) => b.priceKsh - a.priceKsh);
  }

  return result;
}

export function getCategoryCounts(laptops: Laptop[]): Record<Category, number> {
  const counts: Record<Category, number> = {
    all: laptops.length,
    gaming: 0,
    workstations: 0,
    apple: 0,
  };

  for (const laptop of laptops) {
    if (laptop.category in counts) {
      counts[laptop.category]++;
    }
  }

  return counts;
}
