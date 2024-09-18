export interface DataUser {
    name:  string;
    email:  string;
    address: Address;
    paymentDeadline: Date;
    isCompleted: boolean;
}

interface Address {
    province: string;
    city: string;
    zipCode: number;
}