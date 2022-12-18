using { flex } from '../db/schema';

service OrderService {
    @odata.draft.enabled
    entity Orders as projection on flex.Orders;
    entity Items as projection on flex.Items;
    
    @readonly entity Customers as projection on flex.Customers;
    @readonly entity Products as projection on flex.Products;


}