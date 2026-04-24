
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
        



import { Serializable } from "../../../../../../../java/io/Serializable.js";

    
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../java/util/Set.js";

    
import { StoreFrontData } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js";

    
import { StoreFrontInterface } from "../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js";

    
import { EntryData } from "../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { BasketInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/basket/BasketInterface.js";

    
import { PaymentData } from "../../../../../../../org/allbinary/business/user/commerce/money/payment/PaymentData.js";

    
import { ShippingMethodData } from "../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { ModDomHelper } from "../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { OrderInterface } from "./OrderInterface.js";

import { OrderHistoryData } from "./OrderHistoryData.js";

import { OrderData } from "./OrderData.js";

export class Order
            extends Object
         implements OrderInterface, Serializable {
        

    private readonly basket: BasketInterface

    private paymentMethod: string

    private shippingType: string

    private storeName: string

    private special: string

    private id: string

    private userComment: string

    private userCancelComment: string

    private storeComment: string

    private storeCancelComment: string
public constructor (basket: BasketInterface){

            super();
        var basket = basket
this.basket= basket;
    
this.id= 
                                        null
                                    ;
    
this.shippingType= StringUtil.getInstance()!.EMPTY_STRING;
    
}

public constructor (storeName: string, basket: BasketInterface, id: string, shippingType: string, special: string, paymentMethod: string){

            super();
        var storeName = storeName
var basket = basket
var id = id
var shippingType = shippingType
var special = special
var paymentMethod = paymentMethod
this.storeName= storeName;
    
this.basket= basket;
    
this.id= id;
    
this.shippingType= shippingType;
    
this.special= special;
    
this.paymentMethod= paymentMethod;
    
}


    public isIdValid(): Boolean{

                        if(this.getId() == 
                                    null
                                 || this.getId()!.compareTo(StringUtil.getInstance()!.EMPTY_STRING) == 0 || this.getId()!.length() > OrderHistoryData.MAXIDLEN || !StringValidationUtil.getInstance()!.isNumber(this.getId());)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.FALSE;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public getIdValidationInfo(): string{

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

                        if(this.getId() == 
                                    null
                                 || this.getId()!.compareTo(EMPTY_STRING) == 0 || this.getId()!.length() > OrderHistoryData.MAXIDLEN || !StringValidationUtil.getInstance()!.isNumber(this.getId());)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Please enter a valid order Id < " +OrderHistoryData.MAXIDLEN +" digits in length.<br>";
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EMPTY_STRING;
    
}


    public setShippingMethod(shippingType: string){
var shippingType = shippingType
this.shippingType= shippingType;
    
}


    public setPaymentMethod(value: string){
var value = value
this.paymentMethod= value;
    
}


    public setSpecial(special: string){
var special = special
this.special= special;
    
}


    public setId(value: string){
var value = value
this.id= value;
    
}


    public setStoreName(value: string){
var value = value
this.storeName= value;
    
}


    public setUserComments(value: string){
var value = value
this.userComment= value;
    
}


    public setUserCancelComments(value: string){
var value = value
this.userCancelComment= value;
    
}


    public setStoreComments(value: string){
var value = value
this.storeComment= value;
    
}


    public setStoreCancelComments(value: string){
var value = value
this.storeCancelComment= value;
    
}


    public getBasket(): BasketInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basket;
    
}


    public getShippingMethod(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingType;
    
}


    public getPaymentMethod(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.paymentMethod;
    
}


    public getSpecial(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special;
    
}


    public getId(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.id;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeName;
    
}


    public getUserComments(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userComment;
    
}


    public getUserCancelComments(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.userCancelComment;
    
}


    public getStoreComments(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeComment;
    
}


    public getStoreCancelComments(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeCancelComment;
    
}


    public reviewOrder(paymentMethod: string): string{
var paymentMethod = paymentMethod



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Create your own Order.reviewOrder";
    
}


    public viewOrder(paymentMethod: string): string{
var paymentMethod = paymentMethod



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Create your own Order.viewOrder";
    
}


    public emailOrder(userName: string, paymentMethod: string, storeFrontInterface: StoreFrontInterface): string{
var userName = userName
var paymentMethod = paymentMethod
var storeFrontInterface = storeFrontInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Create your own Order.emailOrder";
    
}


    public toHashMapOrder(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(PaymentData.METHOD, this.paymentMethod);
    
hashMap!.put(ShippingMethodData.NAME, this.shippingType);
    
hashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
hashMap!.put(EntryData.getInstance()!.SPECIAL, this.special);
    
hashMap!.put(OrderData.ID, this.id);
    
hashMap!.put(OrderData.CUSTOMERCOMMENT, this.userComment);
    
hashMap!.put(OrderData.CUSTOMERCANCELCOMMENT, this.userCancelComment);
    
hashMap!.put(OrderData.STORECOMMENT, this.storeComment);
    
hashMap!.put(OrderData.STORECANCELCOMMENT, this.storeCancelComment);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.toHashMapOrder()!;
        
        
;
    

    var keySet: Set = hashMap!.keys!;
        
        
;
    

    var keyArray: any[] = keySet!.toTypedArray()!;
        
        
;
    

    var size: number = keyArray!.length
                ;
        
        
;
    

    var node: Node = document.createElement(OrderData.ORDER)!;
        
        
;
    




                        for (
    var i: number = 0;
        
        
i < size; i++)
        {

    var name: string = keyArray[i]! as String;
        
        
;
    

    var value: string = hashMap!.get(name as Object); as String;
        
        
;
    
value= StringUtil.getInstance()!.getInstance(value);
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

