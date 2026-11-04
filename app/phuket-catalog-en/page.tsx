import type { Metadata } from 'next';
import EnglishCatalog from './EnglishCatalog';

export const metadata: Metadata = {
  title: 'Phuket Property Catalog | Pattaya Grad',
  description: 'Get the Phuket property catalog and find the right home or investment with Pattaya Grad.',
};

export default function Page() {
  return <EnglishCatalog />;
}
