
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
        
import { HashSet } from "../../../../../../../java/util/HashSet.js";

    
import { Set } from "../../../../../../../java/util/Set.js";

    
import { Vector } from "../../../../../../../java/util/Vector.js";

    
import { Item } from "../../../../../../../org/allbinary/business/user/commerce/inventory/item/Item.js";

    
import { ItemView } from "../../../../../../../org/allbinary/business/user/commerce/inventory/item/ItemView.js";

    
import { Document } from "../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasketData } from "./BasketData.js";

export class BasketReview
            extends Object
         {
        

    items: Vector = new Vector();
        
        
public constructor (){

            super();
        }


    public isValid(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Boolean.TRUE;
    
}


    public addItem(item: Item){
var item = item
this.items.add(item);
    
}


    public getItems(): Vector{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return items;
    
}


    public removeItem(id: string){
var id = id

    var itemArray: any[] = this.items.toArray()!;
        
        
;
    

    var size: number = itemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: Item = itemArray[index]! as Item;
        
        
;
    

                        if(item.getId()!.compareTo(id) == 0)
                        
                                    {
                                    this.items.remove(item);
    

                                    }
                                
}

}


    public adjustItem(id: string, num: string){
var id = id
var num = num

    var itemArray: any[] = this.items.toArray()!;
        
        
;
    

    var size: number = itemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: Item = itemArray[index]! as Item;
        
        
;
    

                        if(item.getId()!.compareTo(id) == 0)
                        
                                    {
                                    item.setNumber(num);
    

                                    }
                                
}

}


    public getTotalWeight(): string{

    var weightFloat: number = 0;
        
        
;
    

    var itemArray: any[] = this.items.toArray()!;
        
        
;
    

    var size: number = itemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: Item = itemArray[index]! as Item;
        
        
;
    
weightFloat += new Float(item.getWeight()).
                            toFloat();
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Float(weightFloat).
                            toString();

                        ;
    
}


    public getNumberOfItems(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(this.items.length);
    
}


    public getIds(): Set{

    var idSet: HashSet = new HashSet();
        
        
;
    

    var itemArray: any[] = this.items.toArray()!;
        
        
;
    

    var size: number = itemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: Item = itemArray[index]! as Item;
        
        
;
    
idSet!.add(item.getId());
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return idSet as Set;
    
}


    public getNumberOf(id: string): Integer{
var id = id

    var itemArray: any[] = this.items.toArray()!;
        
        
;
    

    var size: number = itemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: Item = itemArray[index]! as Item;
        
        
;
    

                        if(item.getId()!.compareTo(id) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(item.getNumber());
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new Integer(0);
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var node: Node = document.createElement(BasketData.BASKET)!;
        
        
;
    

    var itemArray: any[] = this.items.toArray()!;
        
        
;
    

    var size: number = itemArray!.length
                ;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var item: Item = itemArray[index]! as Item;
        
        
;
    
node.appendChild(new ItemView(item, new Vector()).
                            toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

