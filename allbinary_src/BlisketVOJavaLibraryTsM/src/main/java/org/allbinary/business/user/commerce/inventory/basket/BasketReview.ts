
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
        
            import { Integer } from '../../../../../../../java/lang/Integer.js';
        
            import { Float } from '../../../../../../../java/lang/Float.js';
        
import { HashSet } from '../../../../../../../java/util/HashSet.js';
//not GWT import const HashSet

import { Set } from '../../../../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { Item } from '../../../../../../../org/allbinary/business/user/commerce/inventory/item/Item.js';
//not GWT import const Item

import { ItemView } from '../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemView.js';
//not GWT import const ItemView

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { Document } from '../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasketData } from './BasketData.js';
//sameFolderImports - not GWT import - same folder const BasketData

export class BasketReview
            extends Object
         {
        

    items: BasicArrayList = new BasicArrayListD();

public constructor (){

            super();
        }


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public addItem(item: Item){
this.items.add(item);
    
}


    public getItems(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.items;
    
}


    public removeItem(id: string){

    let itemArray: any[] = this.items.toArray()!;;
    

    let size: number = itemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: Item = itemArray[index]! as Item;;
    

                        if(item.getId()!.compareTo(id) == 0)
                        
                                    {
                                    this.items.remove(item);
    

                                    }
                                
}

}


    public adjustItem(id: string, num: string){

    let itemArray: any[] = this.items.toArray()!;;
    

    let size: number = itemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: Item = itemArray[index]! as Item;;
    

                        if(item.getId()!.compareTo(id) == 0)
                        
                                    {
                                    item.setNumber(num);
    

                                    }
                                
}

}


    public getTotalWeight(): string{

    let weightFloat: number = 0;;
    

    let itemArray: any[] = this.items.toArray()!;;
    

    let size: number = itemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: Item = itemArray[index]! as Item;;
    
weightFloat += new number(item.getWeight());
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new number(weightFloat).toString();;
    
}


    public getNumberOfItems(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(this.items.size());
    
}


    public getIds(): Set{

    let idSet: HashSet = new HashSet();;
    

    let itemArray: any[] = this.items.toArray()!;;
    

    let size: number = itemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: Item = itemArray[index]! as Item;;
    
idSet!.add(item.getId());
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return idSet as Set;
    
}


    public getNumberOf(id: string): Integer{

    let itemArray: any[] = this.items.toArray()!;;
    

    let size: number = itemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: Item = itemArray[index]! as Item;;
    

                        if(item.getId()!.compareTo(id) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(item.getNumber());
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(0);
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(BasketData.BASKET)!;;
    

    let itemArray: any[] = this.items.toArray()!;;
    

    let size: number = itemArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let item: Item = itemArray[index]! as Item;;
    
node.appendChild(new ItemView(item, new BasicArrayListD()).toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

