export interface DataUser {
    name:  string;
    age:  number;
    address: Array<Address>;
}

interface Address {
    zone?: number;
    zipcode?: number;
    district: string;
    city: string;
    province: string;
}