
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


        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
            import { Float } from '../../../../../../../java/lang/Float.js';
        
import { Serializable } from '../../../../../../../java/io/Serializable.js';
      
import { HashMap } from '../../../../../../../java/util/HashMap.js';
      
import { Set } from '../../../../../../../java/util/Set.js';
      
import { ItemInterface } from '../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
      
import { Money } from '../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
      
import { MoneyException } from '../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
      
import { InventoryEntity } from '../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
      
import { InventoryEntityFactory } from '../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasketInterface } from './BasketInterface.js';

export class Basket
            extends Object
         implements BasketInterface, Serializable {
        

    private items: HashMap<any, any> = new HashMap<any, any>();
public constructor (){

            super();
        }


    public addItem(id: string, num: string){

                        if(this.items.containsKey(id))
                        
                                    {
                                    
    var oldNumStr: string = .toCharArray();
;
    

    var oldNumInt: Integer = Integer.valueOf(oldNumStr)!;
;
    

    var numInt: Integer = Integer.valueOf(num)!;
;
    

    var newNumInt: Integer = new Integer(oldNumInt!.intValue() +numInt!.intValue());
;
    
this.items.put(id, newNumInt!.toString());
    

                                    }
                                
                        else {
                            this.items.put(id, num);
    

                        }
                            
}


    public removeItem(id: string){
this.items.remove(id);
    
}


    public adjustItem(id: string, num: string){

                        if(Integer.valueOf(num)!.intValue() > 0)
                        
                                    {
                                    this.items.put(id, num);
    

                                    }
                                
                        else {
                            this.items.remove(id);
    

                        }
                            
}


    public getTotalWeight(): string{

    var itemsAndNumberInBasket: HashMap<any, any> = this.getItems()!;
;
    

    var totalWeight: Money = new Money();
;
    

                        if(itemsAndNumberInBasket!.size() > 0)
                        
                                    {
                                    
    var items: Set = itemsAndNumberInBasket!.keySet()!;
;
    

    var product: string
;
    

    var weightFloat: number
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
    
weightFloat= new number(new InventoryEntity().
                            getWeight(product));
    
weightFloat= new number(getNumberOf(product)! *weightFloat!);
    
totalWeight!.add(weightFloat!.toString());
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return totalWeight!.toString();;
    
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
                        return this.items;
    
}


    public getNumberOf(product: string): Integer{

    var numStr: string = this.items.get(product) as string;
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer.valueOf(numStr);;
    
}


                //@Throws(MoneyException.constructor)
            
    public getSubTotal(): Money{

    var itemsAndNumberInBasket: HashMap<any, any> = this.getItems()!;
;
    

    var subTotal: Money = new Money();
;
    

                        if(itemsAndNumberInBasket!.size() > 0)
                        
                                    {
                                    
    var items: Set = itemsAndNumberInBasket!.keySet()!;
;
    

    var inventoryEntityFactory: InventoryEntityFactory = InventoryEntityFactory.getInstance()!;
;
    

    var inventoryEntity: InventoryEntity = inventoryEntityFactory!.getInventoryEntityInstance() as InventoryEntity;
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
    
productTotal!.multiply(getNumberOf(product)!.intValue());
    
subTotal!.add(productTotal!.toString());
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subTotal;
    
}


}
                
            

