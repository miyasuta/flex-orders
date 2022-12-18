using {OrderService} from './order-srv';

annotate OrderService.Orders with @(
    Common.SemanticKey : [orderId],
    UI                 : {
        SelectionFields : [customer_ID, ],
        LineItem        : [
            { $Type : 'UI.DataField', Value : orderId, },
            { $Type : 'UI.DataField', Value : customer_ID, },
            { $Type : 'UI.DataField', Value : createdAt, },
        ],
        HeaderInfo  : {
            $Type : 'UI.HeaderInfoType',
            TypeName : 'Order',
            TypeNamePlural : 'Orders',
            Title : {
                $Type : 'UI.DataField',
                Value : orderId,
            },
        },
        FieldGroup #main : {
            $Type : 'UI.FieldGroupType',
            Data : [
                { $Type : 'UI.DataField', Value : customer_ID, },
            ],
        },
        Facets  : [
            {
                $Type : 'UI.ReferenceFacet',
                Target : '@UI.FieldGroup#main',
                Label: 'Header'
            },
            {
                $Type : 'UI.ReferenceFacet',
                Target : 'to_Items/@UI.LineItem',
                Label: 'Items'
            },
        ],
    }
);

annotate OrderService.Items with @(
    Common.SemanticKey : [itemNumber],
    UI: {
        LineItem  : [
            { $Type : 'UI.DataField', Value : itemNumber, },
            { $Type : 'UI.DataField', Value : product_ID, },
        ],
    }
);
