
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
        



import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { EntryData } from "../../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { ShippingAddressData } from "../../../../../../../org/allbinary/business/user/address/ShippingAddressData.js";

    
import { StreetAddress } from "../../../../../../../org/allbinary/business/user/address/StreetAddress.js";

    
import { StreetAddressData } from "../../../../../../../org/allbinary/business/user/address/StreetAddressData.js";

    
import { OrderHistoryData } from "../../../../../../../org/allbinary/business/user/commerce/inventory/order/OrderHistoryData.js";

    
import { MoneyException } from "../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { ShippingMethodData } from "../../../../../../../org/allbinary/business/user/commerce/shipping/ShippingMethodData.js";

    
import { StringUtil } from "../../../../../../../org/allbinary/logic/string/StringUtil.js";

    

export class Item extends BasicItem
                , OrderItemInterface {
        

    private group: string

    private tax: string

    private shippingType: string

    private shippingCost: string

    private shippedDate: string

    private shippingAddress: StreetAddress

    private special: string
public constructor (itemHashMap: HashMap<any, any>)                        

                            : super(itemHashMap){

            super();
            var itemHashMap = itemHashMap


                            //For kotlin this is before the body of the constructor.
                    
this.setData(itemHashMap);
    
}

public constructor (){

            super();
            
    var EMPTY: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    
group= EMPTY;
    
tax= EMPTY;
    
shippingType= EMPTY;
    
shippingCost= EMPTY;
    
shippingAddress= StreetAddress();
    
}


    setData(itemHashMap: HashMap<any, any>){
var itemHashMap = itemHashMap
this.group= itemHashMap!.get(ShippingMethodData.GROUP);

                         as String;
    
this.tax= itemHashMap!.get(OrderHistoryData.TAX);

                         as String;
    
this.shippingType= itemHashMap!.get(ShippingMethodData.NAME);

                         as String;
    
this.shippingCost= itemHashMap!.get(ShippingMethodData.COST);

                         as String;
    
this.shippedDate= itemHashMap!.get(OrderHistoryData.SHIPPEDDATE);

                         as String;
    
itemHashMap!.put(StreetAddressData.NAME, itemHashMap!.get(ShippingAddressData.NAME));
    
itemHashMap!.put(StreetAddressData.STREET, itemHashMap!.get(ShippingAddressData.STREET));
    
itemHashMap!.put(StreetAddressData.CITY, itemHashMap!.get(ShippingAddressData.CITY));
    
itemHashMap!.put(StreetAddressData.STATE, itemHashMap!.get(ShippingAddressData.STATE));
    
itemHashMap!.put(StreetAddressData.CODE, itemHashMap!.get(ShippingAddressData.CODE));
    
itemHashMap!.put(StreetAddressData.COUNTRY, itemHashMap!.get(ShippingAddressData.COUNTRY));
    
this.shippingAddress= StreetAddress(itemHashMap);
    
}


    public setGroup(value: string){
var value = value
this.group= value;
    
}


    public setTax(value: string){
var value = value
this.tax= value;
    
}


    public setShippingType(value: string){
var value = value
this.shippingType= value;
    
}


    public setShippingCost(value: string){
var value = value
this.shippingCost= value;
    
}


    public setShippingAddress(value: StreetAddress){
var value = value
this.shippingAddress= value;
    
}


    public setSpecial(value: string){
var value = value
this.special= value;
    
}


    public getGroup(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.group;
    
}


    public getTax(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.tax;
    
}


    public getShippingType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingType;
    
}


    public getShippingCost(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingCost;
    
}


    public getShippingAddress(): StreetAddress{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shippingAddress;
    
}


    public getSpecial(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.special;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = super.toHashMap()!;
        
        
;
    
hashMap!.put(ShippingMethodData.GROUP, this.group);
    
hashMap!.put(OrderHistoryData.TAX, this.tax);
    
hashMap!.put(ShippingMethodData.NAME, this.shippingType);
    
hashMap!.put(ShippingMethodData.COST, this.shippingCost);
    
hashMap!.put(OrderHistoryData.SHIPPEDDATE, this.shippedDate);
    
hashMap!.put(EntryData.getInstance()!.SPECIAL, this.special);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


}
                
            

