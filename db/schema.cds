using {managed} from '@sap/cds/common';

namespace flex;

entity Orders : managed {
    key ID       : UUID                             @title : 'UUID';
        orderId  : Integer                          @title : 'Order ID'  @readonly  default 0;
        to_Items : Composition of many Items
                       on to_Items.to_Order = $self @title : 'Items';
        customer : Association to Customers         @title : 'Customer';
}

entity Items : managed {
    key ID         : UUID                    @title : 'UUID';
        to_Order   : Association to Orders   @title : 'Order ID';
        itemNumber : Integer                 @title : 'Item Number'  @readonly  default 0;
        product    : Association to Products @title : 'Product';
}

@cds.odata.valuelist
entity Customers {
    key ID   : Integer     @title : 'Customer ID';
        name : String(111) @title : 'Customer Name';
}

@cds.odata.valuelist
entity Products {
    key ID   : Integer     @title : 'Product ID';
        name : String(111) @title : 'Product Name';
}
