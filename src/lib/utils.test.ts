import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('merges tailwind classes', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });
  it('handles conditional', () => {
    expect(cn('text-red-500', false && 'bg-blue-500')).toBe('text-red-500');
  });
  it('merges clsx arrays', () => {
    expect(cn(['p-2', 'm-2'], 'p-4')).toBe('m-2 p-4');
  });
});
