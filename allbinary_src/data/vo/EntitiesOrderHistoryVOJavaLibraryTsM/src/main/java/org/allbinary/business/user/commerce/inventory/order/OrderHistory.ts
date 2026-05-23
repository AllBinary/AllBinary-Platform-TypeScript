
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
        



            import { Object } from '../../../../../../../java/lang/Object.js';


        
            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../../java/lang/Long.js';
        

//import { Date } from '../../../../../../../java/util/Date.js';
      
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      
import { Set } from '../../../../../../../java/util/Set.js';
      
import { StoreFrontData } from '../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      
import { EntryData } from '../../../../../../../org/allbinary/business/entry/EntryData.js';
      
import { UserData } from '../../../../../../../org/allbinary/business/user/UserData.js';
      
import { BillingAddressData } from '../../../../../../../org/allbinary/business/user/address/BillingAddressData.js';
      
import { ShippingAddressData } from '../../../../../../../org/allbinary/business/user/address/ShippingAddressData.js';
      
import { StreetAddress } from '../../../../../../../org/allbinary/business/user/address/StreetAddress.js';
      
import { BasketInterface } from '../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js';
      
import { Money } from '../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
      
import { MoneyException } from '../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
      
import { Payment } from '../../../../../../../org/allbinary/business/user/commerce/money/payment/Payment.js';
      
import { PaymentData } from '../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js';
      
import { ShippingMethodData } from '../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js';
      
import { ModDomHelper } from '../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      
import { StringUtil } from '../../../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { Document } from '../../../../../../../org/w3c/dom/Document.js';
      
import { Node } from '../../../../../../../org/w3c/dom/Node.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Order } from './Order.js';
import { OrderHistoryInterface } from './OrderHistoryInterface.js';
import { OrderData } from './OrderData.js';
import { OrderHistoryData } from './OrderHistoryData.js';

export class OrderHistory extends Order implements OrderHistoryInterface {
        

    private userName: string

    private shippingAddress: StreetAddress

    private billingAddress: StreetAddress

    private payment: Payment

    private shipDate: string

    private orderDate: string

    private transDate: string

    private cancelDate: string

    private status: string

    private subTotal: Money

    private shippingCost: Money

    private taxes: Money

    private total: Money
public constructor (basketInterface: BasketInterface){
            super(basketInterface);
                    

                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (basketInterface: BasketInterface, orderHistory: OrderHistory){
            super(orderHistory!.getStoreName(), basketInterface, orderHistory!.getId(), orderHistory!.getShippingMethod(), orderHistory!.getSpecial(), orderHistory!.getPaymentMethod());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.userName= orderHistory!.getUserName();
    
this.shippingAddress= orderHistory!.getShippingAddress();
    
this.billingAddress= orderHistory!.getBillingAddress();
    
this.payment= orderHistory!.getPaymentInfo();
    
this.shipDate= orderHistory!.getShipDate();
    
this.orderDate= orderHistory!.getOrderDate();
    
this.transDate= orderHistory!.getTransDate();
    
this.cancelDate= orderHistory!.getCancelDate();
    
this.status= orderHistory!.getStatus();
    
this.subTotal= orderHistory!.getSubTotal();
    
this.shippingCost= orderHistory!.getShippingCost();
    
this.taxes= orderHistory!.getTaxes();
    
this.total= orderHistory!.getTotal();
    
super.setUserComments(orderHistory!.getUserComments() as string);
    
super.setUserCancelComments(orderHistory!.getUserCancelComments() as string);
    
super.setStoreComments(orderHistory!.getStoreComments() as string);
    
super.setStoreCancelComments(orderHistory!.getStoreCancelComments() as string);
    
}

public constructor (basketInterface: BasketInterface, orderHistoryHashMap: HashMap<any, any>){
            super(orderHistoryHashMap!.get(StoreFrontData.getInstance()!.NAME) as string, basketInterface, orderHistoryHashMap!.get(OrderData.ID) as string, orderHistoryHashMap!.get(ShippingMethodData.NAME) as string, orderHistoryHashMap!.get(EntryData.getInstance()!.SPECIAL) as string, orderHistoryHashMap!.get(PaymentData.METHOD) as string);
                    

                            //For kotlin this is before the body of the constructor.
                    
this.shippingAddress= new StreetAddress(orderHistoryHashMap!.get(ShippingAddressData.NAME) as string, orderHistoryHashMap!.get(ShippingAddressData.STREET) as string, orderHistoryHashMap!.get(ShippingAddressData.CITY) as string, orderHistoryHashMap!.get(ShippingAddressData.STATE) as string, orderHistoryHashMap!.get(ShippingAddressData.CODE) as string, orderHistoryHashMap!.get(ShippingAddressData.COUNTRY) as string);
    
this.billingAddress= new StreetAddress(orderHistoryHashMap!.get(BillingAddressData.NAME) as string, orderHistoryHashMap!.get(BillingAddressData.STREET) as string, orderHistoryHashMap!.get(BillingAddressData.CITY) as string, orderHistoryHashMap!.get(BillingAddressData.STATE) as string, orderHistoryHashMap!.get(BillingAddressData.CODE) as string, orderHistoryHashMap!.get(BillingAddressData.COUNTRY) as string);
    
this.payment= new Payment(orderHistoryHashMap);
    
this.userName= orderHistoryHashMap!.get(UserData.USERNAME) as string;
    
this.orderDate= orderHistoryHashMap!.get(OrderHistoryData.ORDERDATE) as string;
    
this.shipDate= orderHistoryHashMap!.get(OrderHistoryData.SHIPPEDDATE) as string;
    
this.transDate= orderHistoryHashMap!.get(OrderHistoryData.TRANSDATE) as string;
    
this.cancelDate= orderHistoryHashMap!.get(OrderHistoryData.CANCELDATE) as string;
    
this.status= orderHistoryHashMap!.get(OrderHistoryData.STATUS) as string;
    
this.subTotal= new Money(orderHistoryHashMap!.get(OrderHistoryData.SUBTOTAL) as string);
    
this.total= new Money(orderHistoryHashMap!.get(OrderHistoryData.TOTAL) as string);
    
this.shippingCost= new Money(orderHistoryHashMap!.get(OrderHistoryData.SHIPPINGCOST) as string);
    
this.taxes= new Money(orderHistoryHashMap!.get(OrderHistoryData.TAX) as string);
    
super.setUserComments(orderHistoryHashMap!.get(OrderData.CUSTOMERCOMMENT) as string);
    
super.setUserCancelComments(orderHistoryHashMap!.get(OrderData.CUSTOMERCANCELCOMMENT) as string);
    
super.setStoreComments(orderHistoryHashMap!.get(OrderData.STORECOMMENT) as string);
    
super.setStoreCancelComments(orderHistoryHashMap!.get(OrderData.STORECANCELCOMMENT) as string);
    
}


    public setUserName(value: string){
this.userName= value;
    
}


    public setDefaultShippingAddress(shippingAddress: StreetAddress){
this.shippingAddress= shippingAddress;
    
}


    public setBillingAddress(billingAddress: StreetAddress){
this.billingAddress= billingAddress;
    
}


    public setPaymentInfo(payment: Payment){
this.payment= payment;
    
}


    public setShipDate(value: string){
this.shipDate= value;
    
}


    public setOrderDate(value: string){
this.orderDate= value;
    
}


    public setTransDate(value: string){
this.transDate= value;
    
}


    public setCancelDate(value: string){
this.cancelDate= value;
    
}


    public setStatus(value: string){
this.status= value;
    
}


    public setSubTotal(value: Money){
this.subTotal= value;
    
}


    public setShippingCost(value: Money){
this.shippingCost= value;
    
}


    public setTaxes(value: Money){
this.taxes= value;
    
}


    public setTotal(value: Money){
this.total= value;
    
}


    public getUserName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userName;
    
}


    public getShippingAddress(): StreetAddress{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingAddress;
    
}


    public getBillingAddress(): StreetAddress{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.billingAddress;
    
}


    public getPaymentInfo(): Payment{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.payment;
    
}


    public getShipDate(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shipDate;
    
}


    public getOrderDate(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.orderDate;
    
}


    public getTransDate(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.transDate;
    
}


    public getCancelDate(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.cancelDate;
    
}


    public getStatus(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.status;
    
}


    public getSubTotal(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.subTotal;
    
}


    public getShippingCost(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingCost;
    
}


    public getTaxes(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.taxes;
    
}


    public getTotal(): Money{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.total;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
;
    
hashMap!.put(UserData.USERNAME, this.userName);
    
hashMap!.put(OrderHistoryData.ORDERDATE, this.orderDate);
    
hashMap!.put(OrderHistoryData.SHIPPEDDATE, this.shipDate);
    
hashMap!.put(OrderHistoryData.TRANSDATE, this.transDate);
    
hashMap!.put(OrderHistoryData.CANCELDATE, this.cancelDate);
    
hashMap!.put(OrderHistoryData.ORDERDATEFORMATTED, new Date(new Long(this.orderDate).longValue()).toString());
    
hashMap!.put(OrderHistoryData.SHIPPEDDATEFORMATTED, new Date(new Long(this.shipDate).longValue()).toString());
    
hashMap!.put(OrderHistoryData.TRANSDATEFORMATTED, new Date(new Long(this.transDate).longValue()).toString());
    
hashMap!.put(OrderHistoryData.CANCELDATEFORMATTED, new Date(new Long(this.cancelDate).longValue()).toString());
    
hashMap!.put(OrderHistoryData.STATUS, this.status);
    
hashMap!.put(OrderHistoryData.SUBTOTAL, this.subTotal!.toString());
    
hashMap!.put(OrderHistoryData.TOTAL, this.total.toString());
    
hashMap!.put(OrderHistoryData.SHIPPINGCOST, this.shippingCost!.toString());
    
hashMap!.put(OrderHistoryData.TAX, this.taxes.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var hashMap: HashMap<any, any> = this.toHashMap()!;
;
    

    var keySet: Set = hashMap!.keys!;
;
    

    var keyArray: any[] = keySet!.()!;
;
    

    var size: number = keyArray!.length
                ;
;
    

    var node: Node = document.createElement(OrderHistoryData.ORDERHISTORY)!;
;
    
node.appendChild(super.toXmlNode(document));
    

    var billingAddressNode: Node = document.createElement(BillingAddressData.BILLINGADDRESS)!;
;
    
billingAddressNode!.appendChild(this.billingAddress!.toXmlNode(document));
    

    var shippingAddressNode: Node = document.createElement(ShippingAddressData.SHIPPINGADDRESS)!;
;
    
shippingAddressNode!.appendChild(this.shippingAddress!.toXmlNode(document));
    
node.appendChild(billingAddressNode);
    
node.appendChild(shippingAddressNode);
    
node.appendChild(this.payment.toXmlNode(document));
    




                        for (
    var i: number = 0;
i < size; i++)
        {

    var name: string = keyArray[i]! as string;
;
    

    var value: string = hashMap!.get(name) as string;
;
    
value= StringUtil.getInstance()!.getNonNull(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

