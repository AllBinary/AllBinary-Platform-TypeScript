
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
        



            import { Integer } from "../../../../../../../java/lang/Integer.js";
        
import { Serializable } from "../../../../../../../java/io/Serializable.js";

    
import { HashMap } from "../../../../../../../java/util/HashMap.js";

    
import { Set } from "../../../../../../../java/util/Set.js";

    
import { ItemInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { MoneyException } from "../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { InventoryEntity } from "../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { InventoryEntityFactory } from "../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasketInterface } from "./BasketInterface.js";

export class Basket
            extends Object
         implements BasketInterface, Serializable {
        

    private items: HashMap<any, any> = new HashMap<any, any>();
        
        
public constructor (){

            super();
        }


    public addItem(id: string, num: string){
var id = id
var num = num

                        if(this.items.containsKey(id))
                        
                                    {
                                    
    var oldNumStr: string = .toCharArray();
        
        
;
    

    var oldNumInt: Integer = Integer(Integer.valueOf(oldNumStr))!;
        
        
;
    

    var numInt: Integer = Integer(Integer.valueOf(num))!;
        
        
;
    

    var newNumInt: Integer = new Integer(oldNumInt!.toInt() +numInt!.toInt());
        
        
;
    
this.items.put(id, newNumInt!.toString());
    

                                    }
                                
                        else {
                            this.items.put(id, num);
    

                        }
                            
}


    public removeItem(id: string){
var id = id
this.items.remove(id);
    
}


    public adjustItem(id: string, num: string){
var id = id
var num = num

                        if(Integer.valueOf(num)!.toInt() > 0)
                        
                                    {
                                    this.items.put(id, num);
    

                                    }
                                
                        else {
                            this.items.remove(id);
    

                        }
                            
}


    public getTotalWeight(): string{

    var itemsAndNumberInBasket: HashMap<any, any> = getItems()!;
        
        
;
    

    var totalWeight: Money = new Money();
        
        
;
    

                        if(itemsAndNumberInBasket!.size() > 0)
                        
                                    {
                                    
    var items: Set = itemsAndNumberInBasket!.keySet()!;
        
        
;
    

    var product: string
;
    

    var weightFloat: Float
;
    

    var itemArray: any[] = items.toArray()!;
        
        
;
    

    var size: number = itemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
product= .toCharArray();
    
weightFloat= new Float(new InventoryEntity().
                            getWeight(product));
    
weightFloat= new Float(getNumberOf(product)!.toFloat() *weightFloat!.toFloat());
    
totalWeight!.add(weightFloat!.toString());
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalWeight!.toString();

                        ;
    
}


    public getNumberOfItems(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(this.items.size());
    
}


    public getIds(): Set{

    var set: Set = this.items.keySet()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return set;
    
}


    public getItems(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return items;
    
}


    public getNumberOf(product: string): Integer{
var product = product

    var numStr: string = this.items.get(product);

                         as String;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer(Integer.valueOf(numStr));

                        ;
    
}


                //@Throws(MoneyException::class)
            
    public getSubTotal(): Money{

    var itemsAndNumberInBasket: HashMap<any, any> = getItems()!;
        
        
;
    

    var subTotal: Money = new Money();
        
        
;
    

                        if(itemsAndNumberInBasket!.size() > 0)
                        
                                    {
                                    
    var items: Set = itemsAndNumberInBasket!.keySet()!;
        
        
;
    

    var inventoryEntityFactory: InventoryEntityFactory = InventoryEntityFactory.getInstance()!;
        
        
;
    

    var inventoryEntity: InventoryEntity = inventoryEntityFactory!.getInventoryEntityInstance();

                         as InventoryEntity;
        
        
;
    

    var itemArray: any[] = items.toArray()!;
        
        
;
    

    var size: number = itemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var product: string = .toCharArray();
        
        
;
    

    var itemInterface: ItemInterface = inventoryEntity!.getItem(product)!;
        
        
;
    

    var productTotal: Money = itemInterface!.getPrice()!;
        
        
;
    
productTotal!.multiply(getNumberOf(product)!.toInt());
    
subTotal!.add(productTotal!.toString());
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subTotal;
    
}


}
                
            

