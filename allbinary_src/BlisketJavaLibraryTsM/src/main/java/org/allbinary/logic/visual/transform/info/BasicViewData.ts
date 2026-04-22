
        /*
                * 
                *  AllBinary Open License Version 1
                *  Copyright (c) 2011 AllBinary
                *  
                *  By agreeing to this license you and any business entity you represent are
                *  legally bound to the AllBinary Open License Version 1 legal agreement.
                *  
                *  You may obtain the AllBinary Open License Version 1 legal agreement from
                *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
                *  
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */
        




















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicViewData
            extends Object
         {
        

    private static readonly instance: BasicViewData = new BasicViewData();
        
        

    public static getInstance(): BasicViewData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    readonly GENERICDIR: string = "generic/";
        
        

    readonly USERDIR: string = GENERICDIR +"user/";
        
        

    readonly ADDRESSDIR: string = USERDIR +"address/";
        
        

    readonly BILLINGADDRESSDIR: string = ADDRESSDIR +"billing/";
        
        

    readonly SHIPPINGADDRESSDIR: string = ADDRESSDIR +"shipping/";
        
        

    readonly COMMERCEDIR: string = USERDIR +"commerce/";
        
        

    readonly INVENTORYDIR: string = COMMERCEDIR +"inventory/";
        
        

    readonly BASKETDIR: string = INVENTORYDIR +"basket/";
        
        

    readonly ITEMDIR: string = INVENTORYDIR +"item/";
        
        

    readonly MONEYDIR: string = COMMERCEDIR +"money/";
        
        

    readonly SHIPPINGDIR: string = COMMERCEDIR +"shipping/";
        
        

    readonly ORDERDIR: string = INVENTORYDIR +"order/";
        
        

    readonly ORDEREMAILDIR: string = ORDERDIR +"email/";
        
        

    readonly ORDERHISTORYDIR: string = ORDERDIR +"history/";
        
        

    readonly ORDERREVIEWDIR: string = ORDERDIR +"review/";
        
        

    public readonly PAYMENTDIR: string = MONEYDIR +"payment/";
        
        

    readonly GENERATIONDIR: string = GENERICDIR +"generation/";
        
        

    readonly PRODUCTSDIR: string = GENERICDIR +"products/";
        
        

    public readonly IGNOREXMLXSL: string = GENERICDIR +"ignoreXmlView.xsl";
        
        

    public readonly REVIEWORDERVIEWXSL: string = ORDERREVIEWDIR +"reviewOrderView.xsl";
        
        

    public readonly ORDERVIEWXSL: string = REVIEWORDERVIEWXSL;
        
        

    public readonly INVENTORYXSL: string = INVENTORYDIR +"inventory.xsl";
        
        

    public readonly BASKETXSL: string = BASKETDIR +"basket.xsl";
        
        

    public readonly CHECKOUTBASKETXSL: string = BASKETDIR +"staticBasket.xsl";
        
        

    public readonly MINIBASKETXSL: string = BASKETDIR +"miniBasket.xsl";
        
        

    public readonly BILLINGADDRESSCHANGEFORMXSL: string = BILLINGADDRESSDIR +"billingAddressChangeForm.xsl";
        
        

    public readonly BILLINGADDRESSINPUTFORMXSL: string = BILLINGADDRESSDIR +"billingAddressInputForm.xsl";
        
        

    public readonly BILLINGADDRESSVIEWXSL: string = BILLINGADDRESSDIR +"billingAddressView.xsl";
        
        

    public readonly SHIPPINGADDRESSCHANGEFORMXSL: string = SHIPPINGADDRESSDIR +"shippingAddressChangeForm.xsl";
        
        

    public readonly SHIPPINGADDRESSINPUTFORMXSL: string = SHIPPINGADDRESSDIR +"shippingAddressInputForm.xsl";
        
        

    public readonly SHIPPINGADDRESSVIEWXSL: string = SHIPPINGADDRESSDIR +"shippingAddressView.xsl";
        
        

    public readonly NEWTAXADDRESSXSL: string = SHIPPINGADDRESSDIR +"newTaxAddressView.xsl";
        
        

    public readonly EDITTAXADDRESSXSL: string = SHIPPINGADDRESSDIR +"editTaxAddressView.xsl";
        
        

    public readonly SHIPPINGMETHODSXSL: string = SHIPPINGDIR +"shippingMethods.xsl";
        
        

    public readonly ORDERCUSTOMEREMAILVIEWXSL: string = ORDEREMAILDIR +"orderCustomerEmailView.xsl";
        
        

    public readonly ORDERMANAGEREMAILVIEWXSL: string = ORDEREMAILDIR +"orderManagerEmailView.xsl";
        
        

    public readonly EDITCUSTOMERXSL: string = USERDIR +"editCustomerInputForm.xsl";
        
        

    public readonly ORDERHISTORYXSL: string = ORDERHISTORYDIR +"orderHistory.xsl";
        
        

    public readonly PAYMENTVIEWXSL: string = PAYMENTDIR +"paymentView.xsl";
        
        

    public readonly SUMMARYXSL: string = ITEMDIR +"summary/summary.xsl";
        
        

    public readonly PAYMENTGATEWAYOPTIONSXSL: string = PAYMENTDIR +"paymentGatewayOptions.xsl";
        
        

    public readonly MAKEPAYMENTVIEWXSL: string = PAYMENTDIR +"invoice/" +"makePayment.xsl";
        
        

}
                
            

