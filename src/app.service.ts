import { Injectable } from '@nestjs/common';

export interface Account {
  id: number;
  name: string;
  numberOfEmployees: number;
}

@Injectable()
export class AppService {
  private accounts: Account[] = [
    { id: 1, name: 'Dach Group', numberOfEmployees: 123 },
    { id: 1, name: 'Flashed Craft', numberOfEmployees: 55 },
    { id: 1, name: 'The Sleek Apple', numberOfEmployees: 1040 },
  ];

  getAccounts(): Account[] {
    return this.accounts;
  }
}
