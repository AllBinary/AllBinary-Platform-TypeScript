
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
        



import { Enumeration } from "../../../../java/util/Enumeration.js";

    
import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { Layer } from "../../../../org/allbinary/layer/Layer.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class LevelLayersFinder
            extends Object
         {
        

    private static readonly instance: LevelLayersFinder = new LevelLayersFinder();
        
        

    public static getInstance(): LevelLayersFinder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public get(hashtable: Hashtable<Any, Any>): BasicArrayList{
var hashtable = hashtable

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        


    var list: BasicArrayList = new BasicArrayList();
        
        


    var enumeration: Enumeration<Any?> = hashtable.keys()!;
        
        


        while(enumeration.hasMoreElements())
        {

    var layerHashtable: Hashtable<Any, Any> = hashtable.get(enumeration.nextElement()! as Object) as Hashtable<Any, Any>;
        
        


    var integer: Integer = layerHashtable!.get(Layer.ID as Object) as Integer;
        
        


    var cachedInteger: Integer = smallIntegerSingletonFactory!.getInstance(integer.toInt())!;
        
        


                        if(!list.contains(cachedInteger))
                        
                                    {
                                    list.add(cachedInteger)

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

