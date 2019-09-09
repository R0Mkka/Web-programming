import { Injectable } from '@angular/core';

const storage: Storage = localStorage;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public get(key: string): string {
    return storage.getItem(key);
  }

  public getAsObject<T>(key: string): T {
    return JSON.parse(this.get(key)) as T;
  }

  public set(key: string, value: string): void {
    storage.setItem(key, value);
  }

  public remove(key: string): void {
    storage.removeItem(key);
  }

  public clear(): void {
    storage.clear();
  }

  public has(key: string): boolean {
    return !!this.get(key);
  }
}
