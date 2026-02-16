import { pkg2 } from '@bar/pkg2';

export { pkg2 };

export function pkg1(): string {
  return 'pkg1' + pkg2();
}
