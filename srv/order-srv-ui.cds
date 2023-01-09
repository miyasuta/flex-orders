using {OrderService} from './order-srv';

// annotate OrderService.Orders with @(
//     Capabilities.Insertable: false
// );

annotate OrderService.Orders with @(
    Common.SemanticKey : [orderId],
    UI                 : {
        SelectionFields : [customer_ID, ],
        LineItem        : [
            { $Type : 'UI.DataField', Value : orderId, },
            { $Type : 'UI.DataField', Value : customer_ID, },
            { $Type : 'UI.DataField', Value : createdAt, },
            { $Type : 'UI.DataField', Value : createdBy, },
            {
                $Type : 'UI.DataFieldForIntentBasedNavigation',
                SemanticObject : 'Order',
                Action : 'createWithWizard',
                Label : 'Create wizard',
                RequiresContext: false
            }
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
                { $Type : 'UI.DataField', Value : description, },
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
            { $Type : 'UI.DataField', Value : quantity, },
        ],
        FieldGroup #main : {
            $Type : 'UI.FieldGroupType',
            Data : [
                { $Type : 'UI.DataField', Value : product_ID, },
                { $Type : 'UI.DataField', Value : quantity, },                
            ],
            
        },
        Facets  : [
            {
                $Type : 'UI.ReferenceFacet',
                Target : '@UI.FieldGroup#main',
            },
        ],
    }
);
