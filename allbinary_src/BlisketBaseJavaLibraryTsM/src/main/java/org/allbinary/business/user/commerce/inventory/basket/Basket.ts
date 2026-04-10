
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

    
import { ItemInterface } from "../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js";

    
import { Money } from "../../../../../../../org/allbinary/business/user/commerce/money/Money.js";

    
import { MoneyException } from "../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js";

    
import { InventoryEntity } from "../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js";

    
import { InventoryEntityFactory } from "../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js";

    

export class Basket
            extends Object
        
                , BasketInterface
                , Serializable {
        

    private items: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        
public constructor (){

            super();
            }


    public addItem(id: string, num: string){
var id = id
var num = num

    
                        if(items.containsKey(id))
                        
                                    {
                                    
    var oldNumStr: string = new .toCharArray();
        
        


    var oldNumInt: Integer = Integer(Integer.valueOf(oldNumStr))!;
        
        


    var numInt: Integer = Integer(Integer.valueOf(num))!;
        
        


    var newNumInt: Integer = new Integer(oldNumInt!.toInt() +numInt!.toInt());
        
        

put(id, newNumInt!.toString())

                                    }
                                
                        else {
                            put(id, num)

                        }
                            
}


    public removeItem(id: string){
var id = id
remove(id)
}


    public adjustItem(id: string, num: string){
var id = id
var num = num

    
                        if(Integer.valueOf(num)!.toInt() > 0)
                        
                                    {
                                    put(id, num)

                                    }
                                
                        else {
                            remove(id)

                        }
                            
}


    public getTotalWeight(): string{

    var itemsAndNumberInBasket: HashMap<Any, Any> = getItems()!;
        
        


    var totalWeight: Money = new Money();
        
        


    
                        if(itemsAndNumberInBasket!.size() > 0)
                        
                                    {
                                    
    var items: Set = itemsAndNumberInBasket!.keySet()!;
        
        


    var product: string


    var weightFloat: Float


    var itemArray: any = {}[] = items.toArray()!;
        
        


    var size: number = itemArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
product= .toCharArray()
weightFloat= Float(InventoryEntity().
                            getWeight(product))
weightFloat= Float(getNumberOf(product)!.toFloat() *weightFloat!.toFloat())
add(weightFloat!.toString())
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalWeight!.toString();
    
}


    public getNumberOfItems(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer(items.size());
    
}


    public getIds(): Set{

    var set: Set = items.keySet()!;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return set;
    
}


    public getItems(): HashMap<Any, Any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return items;
    
}


    public getNumberOf(product: string): Integer{
var product = product

    var numStr: string = items.get(product) as String;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer(Integer.valueOf(numStr));
    
}


                @Throws(MoneyException::class)
            
    public getSubTotal(): Money{

    var itemsAndNumberInBasket: HashMap<Any, Any> = getItems()!;
        
        


    var subTotal: Money = new Money();
        
        


    
                        if(itemsAndNumberInBasket!.size() > 0)
                        
                                    {
                                    
    var items: Set = itemsAndNumberInBasket!.keySet()!;
        
        


    var inventoryEntityFactory: InventoryEntityFactory = InventoryEntityFactory.getInstance()!;
        
        


    var inventoryEntity: InventoryEntity = inventoryEntityFactory!.getInventoryEntityInstance() as InventoryEntity;
        
        


    var itemArray: any = {}[] = items.toArray()!;
        
        


    var size: number = itemArray!.length
                ;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var product: string = new .toCharArray();
        
        


    var itemInterface: ItemInterface = inventoryEntity!.getItem(product)!;
        
        


    var productTotal: Money = itemInterface!.getPrice()!;
        
        

multiply(getNumberOf(product)!.toInt())
add(productTotal!.toString())
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subTotal;
    
}


}
                
            

