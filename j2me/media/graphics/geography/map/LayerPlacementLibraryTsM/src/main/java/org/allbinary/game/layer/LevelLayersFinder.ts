
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { Enumeration } from '../../../../java/util/Enumeration.js';
      
import { Hashtable } from '../../../../java/util/Hashtable.js';
      
import { Layer } from '../../../../org/allbinary/layer/Layer.js';
      
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      
import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      
import { EnumerationUtil } from '../../../../org/allbinary/util/EnumerationUtil.js';
      

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LevelLayersFinder
            extends Object
         {
        

    private static readonly instance: LevelLayersFinder = new LevelLayersFinder();

    public static getInstance(): LevelLayersFinder{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return LevelLayersFinder.instance;
    
}


    private readonly enumerationUtil: EnumerationUtil = EnumerationUtil.getInstance()!;

    public get(hashtable: Hashtable<any, any>): BasicArrayList{

    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
;
    

    var list: BasicArrayList = new BasicArrayListD();
;
    

    var enumeration: Enumeration<any> = hashtable.keys()!;
;
    

    var layerHashtableCanBeNull: Hashtable<any, any>
;
    

    var integerCanBeNull: Integer
;
    

    var cachedIntegerCanBeNull: Integer
;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
layerHashtableCanBeNull= hashtable.get(this.enumerationUtil!.nextElement(enumeration)! as Object) as Hashtable<any, any>;
    
integerCanBeNull= layerHashtableCanBeNull!.get(Layer.ID as Object) as Integer;
    
cachedIntegerCanBeNull= smallIntegerSingletonFactory!.getAt(integerCanBeNull!.intValue());
    

                        if(!list.contains(cachedIntegerCanBeNull))
                        
                                    {
                                    list.add(cachedIntegerCanBeNull);
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

