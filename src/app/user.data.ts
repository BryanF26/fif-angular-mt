import { DataUser } from "./app.entity";

export const userDataPublic: DataUser[] = [
    {
    name:  'John',
    email: 'john@gmail.com',
    address:
      {
        province: 'Banten',
        city: 'Tangerang',
        zipCode: 1
      },
    paymentDeadline: new Date(2024, 8, 25),
    isCompleted: false
    },
    {
      name:  'John',
      email: 'john@gmail.com',
      address:
        {
          province: 'Banten',
          city: 'Tangerang',
          zipCode: 1
        },
      paymentDeadline: new Date(2024, 8, 21),
      isCompleted: false
    },
  ]