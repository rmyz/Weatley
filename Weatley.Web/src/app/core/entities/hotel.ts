import { Service } from './service';
import { Product } from './product';

export class Hotel {
    id: number;
    name: string;
    definition: string;
    address: string;
    email: string;
    phone: string;
    web: string;
    services: Service[];
    products: Product[];
}
