
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
        




//import { Date } from "../../../../../../../java/util/Date.js";

    
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../java/util/Set.js";

    
import { StoreFrontData } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { EntryData } from "../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { UserData } from "../../../../../../../org/allbinary/business/user/UserData.js";

    
import { BillingAddressData } from "../../../../../../../org/allbinary/business/user/address/BillingAddressData.js";

    
import { ShippingAddressData } from "../../../../../../../org/allbinary/business/user/address/ShippingAddressData.js";

    
import { StreetAddress } from "../../../../../../../org/allbinary/business/user/address/StreetAddress.js";

    
import { BasketInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    
import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { MoneyException } from "../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { Payment } from "../../../../../../../org/allbinary/business/user/commerce/money/payment/Payment.js";

    
import { PaymentData } from "../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js";

    
import { ShippingMethodData } from "../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Order } from "./Order.js";

import { OrderHistoryInterface } from "./OrderHistoryInterface.js";

import { OrderData } from "./OrderData.js";

import { OrderHistoryData } from "./OrderHistoryData.js";

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
                    var basketInterface = basketInterface


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (basketInterface: BasketInterface, orderHistory: OrderHistory){
            super(orderHistory!.getStoreName(), basketInterface, orderHistory!.getId(), orderHistory!.getShippingMethod(), orderHistory!.getSpecial(), orderHistory!.getPaymentMethod());
                    var basketInterface = basketInterface
var orderHistory = orderHistory


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
    
super.setUserComments( as StringorderHistory!.getUserComments());
    
super.setUserCancelComments( as StringorderHistory!.getUserCancelComments());
    
super.setStoreComments( as StringorderHistory!.getStoreComments());
    
super.setStoreCancelComments( as StringorderHistory!.getStoreCancelComments());
    
}

public constructor (basketInterface: BasketInterface, orderHistoryHashMap: HashMap){
            super( as StringorderHistoryHashMap!.get(StoreFrontData.getInstance()!.NAME), basketInterface,  as StringorderHistoryHashMap!.get(OrderData.ID),  as StringorderHistoryHashMap!.get(ShippingMethodData.NAME),  as StringorderHistoryHashMap!.get(EntryData.getInstance()!.SPECIAL),  as StringorderHistoryHashMap!.get(PaymentData.METHOD));
                    var basketInterface = basketInterface
var orderHistoryHashMap = orderHistoryHashMap


                            //For kotlin this is before the body of the constructor.
                    
this.shippingAddress= new StreetAddress( as StringorderHistoryHashMap!.get(ShippingAddressData.NAME),  as StringorderHistoryHashMap!.get(ShippingAddressData.STREET),  as StringorderHistoryHashMap!.get(ShippingAddressData.CITY),  as StringorderHistoryHashMap!.get(ShippingAddressData.STATE),  as StringorderHistoryHashMap!.get(ShippingAddressData.CODE),  as StringorderHistoryHashMap!.get(ShippingAddressData.COUNTRY));
    
this.billingAddress= new StreetAddress( as StringorderHistoryHashMap!.get(BillingAddressData.NAME),  as StringorderHistoryHashMap!.get(BillingAddressData.STREET),  as StringorderHistoryHashMap!.get(BillingAddressData.CITY),  as StringorderHistoryHashMap!.get(BillingAddressData.STATE),  as StringorderHistoryHashMap!.get(BillingAddressData.CODE),  as StringorderHistoryHashMap!.get(BillingAddressData.COUNTRY));
    
this.payment= new Payment(orderHistoryHashMap);
    
this.userName=  as StringorderHistoryHashMap!.get(UserData.USERNAME);;
    
this.orderDate=  as StringorderHistoryHashMap!.get(OrderHistoryData.ORDERDATE);;
    
this.shipDate=  as StringorderHistoryHashMap!.get(OrderHistoryData.SHIPPEDDATE);;
    
this.transDate=  as StringorderHistoryHashMap!.get(OrderHistoryData.TRANSDATE);;
    
this.cancelDate=  as StringorderHistoryHashMap!.get(OrderHistoryData.CANCELDATE);;
    
this.status=  as StringorderHistoryHashMap!.get(OrderHistoryData.STATUS);;
    
this.subTotal= new Money( as StringorderHistoryHashMap!.get(OrderHistoryData.SUBTOTAL));
    
this.total= new Money( as StringorderHistoryHashMap!.get(OrderHistoryData.TOTAL));
    
this.shippingCost= new Money( as StringorderHistoryHashMap!.get(OrderHistoryData.SHIPPINGCOST));
    
this.taxes= new Money( as StringorderHistoryHashMap!.get(OrderHistoryData.TAX));
    
super.setUserComments( as StringorderHistoryHashMap!.get(OrderData.CUSTOMERCOMMENT));
    
super.setUserCancelComments( as StringorderHistoryHashMap!.get(OrderData.CUSTOMERCANCELCOMMENT));
    
super.setStoreComments( as StringorderHistoryHashMap!.get(OrderData.STORECOMMENT));
    
super.setStoreCancelComments( as StringorderHistoryHashMap!.get(OrderData.STORECANCELCOMMENT));
    
}


    public setUserName(value: string){
var value = value
this.userName= value;
    
}


    public setDefaultShippingAddress(shippingAddress: StreetAddress){
var shippingAddress = shippingAddress
this.shippingAddress= shippingAddress;
    
}


    public setBillingAddress(billingAddress: StreetAddress){
var billingAddress = billingAddress
this.billingAddress= billingAddress;
    
}


    public setPaymentInfo(payment: Payment){
var payment = payment
this.payment= payment;
    
}


    public setShipDate(value: string){
var value = value
this.shipDate= value;
    
}


    public setOrderDate(value: string){
var value = value
this.orderDate= value;
    
}


    public setTransDate(value: string){
var value = value
this.transDate= value;
    
}


    public setCancelDate(value: string){
var value = value
this.cancelDate= value;
    
}


    public setStatus(value: string){
var value = value
this.status= value;
    
}


    public setSubTotal(value: Money){
var value = value
this.subTotal= value;
    
}


    public setShippingCost(value: Money){
var value = value
this.shippingCost= value;
    
}


    public setTaxes(value: Money){
var value = value
this.taxes= value;
    
}


    public setTotal(value: Money){
var value = value
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


    public toHashMap(): HashMap{

    var hashMap: HashMap = new HashMap();
;
    
hashMap!.put(UserData.USERNAME, this.userName);
    
hashMap!.put(OrderHistoryData.ORDERDATE, this.orderDate);
    
hashMap!.put(OrderHistoryData.SHIPPEDDATE, this.shipDate);
    
hashMap!.put(OrderHistoryData.TRANSDATE, this.transDate);
    
hashMap!.put(OrderHistoryData.CANCELDATE, this.cancelDate);
    
hashMap!.put(OrderHistoryData.ORDERDATEFORMATTED, new Date(this.orderDate.
                            longValue()).
                            toString());
    
hashMap!.put(OrderHistoryData.SHIPPEDDATEFORMATTED, new Date(this.shipDate.
                            longValue()).
                            toString());
    
hashMap!.put(OrderHistoryData.TRANSDATEFORMATTED, new Date(this.transDate.
                            longValue()).
                            toString());
    
hashMap!.put(OrderHistoryData.CANCELDATEFORMATTED, new Date(this.cancelDate.
                            longValue()).
                            toString());
    
hashMap!.put(OrderHistoryData.STATUS, this.status);
    
hashMap!.put(OrderHistoryData.SUBTOTAL, this.subTotal!.toString());
    
hashMap!.put(OrderHistoryData.TOTAL, this.total.toString());
    
hashMap!.put(OrderHistoryData.SHIPPINGCOST, this.shippingCost!.toString());
    
hashMap!.put(OrderHistoryData.TAX, this.taxes.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap = this.toHashMap()!;
;
    

    var keySet: Set = hashMap!.keys!;
;
    

    var keyArray: any[] = keySet!.toTypedArray()!;
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

    var name: string =  as StringkeyArray[i]!;
;
    

    var value: string =  as StringhashMap!.get(name as Object);;
;
    
value= StringUtil.getInstance()!.getNonNull(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

