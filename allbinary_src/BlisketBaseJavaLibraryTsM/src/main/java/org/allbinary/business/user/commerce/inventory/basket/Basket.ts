
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
//not GWT import const Serializable

import { HashMap } from '../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Set } from '../../../../../../../java/util/Set.js';
//not GWT import const Set

import { ItemInterface } from '../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemInterface.js';
//not GWT import const ItemInterface

import { Money } from '../../../../../../../org/allbinary/business/user/commerce/money/Money.js';
//not GWT import const Money

import { MoneyException } from '../../../../../../../org/allbinary/business/user/commerce/money/MoneyException.js';
//not GWT import const MoneyException

import { InventoryEntity } from '../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntity.js';
//not GWT import const InventoryEntity

import { InventoryEntityFactory } from '../../../../../../../org/allbinary/data/tables/user/commerce/inventory/item/InventoryEntityFactory.js';
//not GWT import const InventoryEntityFactory

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasketInterface } from './BasketInterface.js';
//sameFolderImports - not GWT import - same folder const BasketInterface

export class Basket
            extends Object
         implements BasketInterface, Serializable {
        

    private items: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;

public constructor (){

            super();
        }


    public addItem(id: string, num: string){

                        if(this.items.containsKey(id))
                        
                                    {
                                    
    let oldNumStr: string = .toCharArray();;
    

    let oldNumInt: Integer = Integer.valueOf(oldNumStr)!;;
    

    let numInt: Integer = Integer.valueOf(num)!;;
    

    let newNumInt: Integer = new Integer(oldNumInt!.intValue() +numInt!.intValue());;
    
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

    let itemsAndNumberInBasket: HashMap<any, any> = this.getItems()!;;
    

    let totalWeight: Money = new Money();;
    

                        if(itemsAndNumberInBasket!.size() > 0)
                        
                                    {
                                    
    let items: Set = itemsAndNumberInBasket!.keySet()!;;
    

    let product: string;;
    

    let weightFloat: number;;
    

    let itemArray: any[] = items.toArray()!;;
    

    let size: number = itemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {
product= .toCharArray();
    
weightFloat= new number(new InventoryEntity().getWeight(product));
    
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

    let set: Set = this.items.keySet()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return set;
    
}


    public getItems(): HashMap<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.items;
    
}


    public getNumberOf(product: string): Integer{

    let numStr: string = this.items.get(product) as string;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Integer.valueOf(numStr);;
    
}


                //@Throws(MoneyException.constructor)
            
    public getSubTotal(): Money{

    let itemsAndNumberInBasket: HashMap<any, any> = this.getItems()!;;
    

    let subTotal: Money = new Money();;
    

                        if(itemsAndNumberInBasket!.size() > 0)
                        
                                    {
                                    
    let items: Set = itemsAndNumberInBasket!.keySet()!;;
    

    let inventoryEntityFactory: InventoryEntityFactory = InventoryEntityFactory.getInstance()!;;
    

    let inventoryEntity: InventoryEntity = inventoryEntityFactory!.getInventoryEntityInstance() as InventoryEntity;;
    

    let itemArray: any[] = items.toArray()!;;
    

    let size: number = itemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let product: string = .toCharArray();;
    

    let itemInterface: ItemInterface = inventoryEntity!.getItem(product)!;;
    

    let productTotal: Money = itemInterface!.getPrice()!;;
    
productTotal!.multiply(getNumberOf(product)!.intValue());
    
subTotal!.add(productTotal!.toString());
    
}


                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return subTotal;
    
}


}

