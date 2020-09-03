import { Gender, Address } from '../types/types';

export class Client {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  mobileNumber: string;
  legalAddress: Address;
  actualAddress: Address;
  pictureName: string;
}
