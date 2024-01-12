'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from './catalyst/input';
import { Description, Field, Label } from './catalyst/fieldset';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => { 
    const params = new URLSearchParams(searchParams);
    // params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    } 
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <Field className="w-full relative">
        <Label htmlFor="search" className="mb-2 text-inherit">
          Search
        </Label>
        <div className="flex items-center gap-2">
        <Input
          placeholder={placeholder}
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get('query')?.toString()}
          />
          </div>
      </Field>
    </div>
  );
}
