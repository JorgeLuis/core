export class Admin {
  id: string;
  name: string;
  email: string;
  networks: [];
  tags: [];
  orgAccess: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
