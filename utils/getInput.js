import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export default function getInput({ day, file }) {
  return fs
    .readFileSync(
      path.join(
        dirname(fileURLToPath(import.meta.url)),
        '..',
        'inputs',
        `day${day}`,
        `${file}.txt`
      ),
      'utf-8'
    )
    .trim();
}
