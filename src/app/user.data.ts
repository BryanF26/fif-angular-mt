import { DataUser } from "./app.entity";

export const userDataPublic: DataUser = {
    name:  'John',
    age:  30,
    address: [
        {
            zipcode: 1,
            province: 'Banten',
            city: 'Tangerang',
            district:  'Tangerang Selatan',
            zone: 1
        },
        {
            province: 'DKI Jakarta',
            city: 'Jakarta',
            district:  'Jakarta Selatan',
            zone: 2
        }
    ]
}