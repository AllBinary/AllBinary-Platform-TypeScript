
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
        



import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class ArtificialIntelligenceInterfaceFactoryInterfaceFactory
            extends Object
         {
        

    private SINGLETON: ArtificialIntelligenceInterfaceFactoryInterfaceFactory = new ArtificialIntelligenceInterfaceFactoryInterfaceFactory();
        
        

    public static getInstance(): ArtificialIntelligenceInterfaceFactoryInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    private list: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    public clear(){
list= BasicArrayList()
}


    public getInstance(hashtable: Hashtable<Any, Any>): ArtificialIntelligenceInterfaceFactoryInterface{
var hashtable = hashtable

    var typeInteger: Integer = hashtable.get(BasicAI.ID as Object) as Integer;
        
        


    var type: number = typeInteger!.toInt()!;
        
        


    var artificialIntelligenceInterfaceFactoryInterface: ArtificialIntelligenceInterfaceFactoryInterface = list.objectArray[type -1]! as ArtificialIntelligenceInterfaceFactoryInterface;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return artificialIntelligenceInterfaceFactoryInterface;
    
}


    public add(artificialIntelligenceInterfaceFactoryInterface: ArtificialIntelligenceInterfaceFactoryInterface){
var artificialIntelligenceInterfaceFactoryInterface = artificialIntelligenceInterfaceFactoryInterface
list.add(artificialIntelligenceInterfaceFactoryInterface)
}


}
                
            

