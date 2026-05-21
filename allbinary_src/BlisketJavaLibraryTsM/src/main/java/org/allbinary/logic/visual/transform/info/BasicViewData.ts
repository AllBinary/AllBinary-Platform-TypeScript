
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
        



            import { Object } from '../../../../../../java/lang/Object.js';


        
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicViewData
            extends Object
         {
        

    private static readonly instance: BasicViewData = new BasicViewData();

    public static getInstance(): BasicViewData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicViewData.instance;
    
}

private constructor (){

            super();
        }


    readonly GENERICDIR: string = "generic/";

    readonly USERDIR: string = this.GENERICDIR +"user/";

    readonly ADDRESSDIR: string = this.USERDIR +"address/";

    readonly BILLINGADDRESSDIR: string = this.ADDRESSDIR +"billing/";

    readonly SHIPPINGADDRESSDIR: string = this.ADDRESSDIR +"shipping/";

    readonly COMMERCEDIR: string = this.USERDIR +"commerce/";

    readonly INVENTORYDIR: string = this.COMMERCEDIR +"inventory/";

    readonly BASKETDIR: string = this.INVENTORYDIR +"basket/";

    readonly ITEMDIR: string = this.INVENTORYDIR +"item/";

    readonly MONEYDIR: string = this.COMMERCEDIR +"money/";

    readonly SHIPPINGDIR: string = this.COMMERCEDIR +"shipping/";

    readonly ORDERDIR: string = this.INVENTORYDIR +"order/";

    readonly ORDEREMAILDIR: string = this.ORDERDIR +"email/";

    readonly ORDERHISTORYDIR: string = this.ORDERDIR +"history/";

    readonly ORDERREVIEWDIR: string = this.ORDERDIR +"review/";

    public readonly PAYMENTDIR: string = this.MONEYDIR +"payment/";

    readonly GENERATIONDIR: string = this.GENERICDIR +"generation/";

    readonly PRODUCTSDIR: string = this.GENERICDIR +"products/";

    public readonly IGNOREXMLXSL: string = this.GENERICDIR +"ignoreXmlView.xsl";

    public readonly REVIEWORDERVIEWXSL: string = this.ORDERREVIEWDIR +"reviewOrderView.xsl";

    public readonly ORDERVIEWXSL: string = this.REVIEWORDERVIEWXSL;

    public readonly INVENTORYXSL: string = this.INVENTORYDIR +"inventory.xsl";

    public readonly BASKETXSL: string = this.BASKETDIR +"basket.xsl";

    public readonly CHECKOUTBASKETXSL: string = this.BASKETDIR +"staticBasket.xsl";

    public readonly MINIBASKETXSL: string = this.BASKETDIR +"miniBasket.xsl";

    public readonly BILLINGADDRESSCHANGEFORMXSL: string = this.BILLINGADDRESSDIR +"billingAddressChangeForm.xsl";

    public readonly BILLINGADDRESSINPUTFORMXSL: string = this.BILLINGADDRESSDIR +"billingAddressInputForm.xsl";

    public readonly BILLINGADDRESSVIEWXSL: string = this.BILLINGADDRESSDIR +"billingAddressView.xsl";

    public readonly SHIPPINGADDRESSCHANGEFORMXSL: string = this.SHIPPINGADDRESSDIR +"shippingAddressChangeForm.xsl";

    public readonly SHIPPINGADDRESSINPUTFORMXSL: string = this.SHIPPINGADDRESSDIR +"shippingAddressInputForm.xsl";

    public readonly SHIPPINGADDRESSVIEWXSL: string = this.SHIPPINGADDRESSDIR +"shippingAddressView.xsl";

    public readonly NEWTAXADDRESSXSL: string = this.SHIPPINGADDRESSDIR +"newTaxAddressView.xsl";

    public readonly EDITTAXADDRESSXSL: string = this.SHIPPINGADDRESSDIR +"editTaxAddressView.xsl";

    public readonly SHIPPINGMETHODSXSL: string = this.SHIPPINGDIR +"shippingMethods.xsl";

    public readonly ORDERCUSTOMEREMAILVIEWXSL: string = this.ORDEREMAILDIR +"orderCustomerEmailView.xsl";

    public readonly ORDERMANAGEREMAILVIEWXSL: string = this.ORDEREMAILDIR +"orderManagerEmailView.xsl";

    public readonly EDITCUSTOMERXSL: string = this.USERDIR +"editCustomerInputForm.xsl";

    public readonly ORDERHISTORYXSL: string = this.ORDERHISTORYDIR +"orderHistory.xsl";

    public readonly PAYMENTVIEWXSL: string = this.PAYMENTDIR +"paymentView.xsl";

    public readonly SUMMARYXSL: string = this.ITEMDIR +"summary/summary.xsl";

    public readonly PAYMENTGATEWAYOPTIONSXSL: string = this.PAYMENTDIR +"paymentGatewayOptions.xsl";

    public readonly MAKEPAYMENTVIEWXSL: string = this.PAYMENTDIR +"invoice/" +"makePayment.xsl";

}
                
            

