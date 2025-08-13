import { Inject, Injectable } from '@nestjs/common';
import { access, readFile, writeFile } from 'fs/promises';
import type { DbModuleOptions } from './db.module';

@Injectable()
export class DbService {
  @Inject('OPTIONS')
  private options: DbModuleOptions;

  async read(): Promise<any> {
    const filePath = this.options.path;
    try {
      await access(filePath);

      const data = await readFile(filePath, {
        encoding: 'utf-8',
      });
      const parsed = JSON.parse(data);

      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  async write(obj: Record<string, any>) {
    await writeFile(this.options.path, JSON.stringify(obj || []), {
      encoding: 'utf-8',
    });
  }
}
