
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
//not GWT import const Enumeration

import { Layer } from '../../../../org/allbinary/layer/Layer.js';
//not GWT import const Layer

import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { EnumerationUtil } 
const EnumerationUtil = globalThis.org.allbinary.util.EnumerationUtil;
type EnumerationUtil<T = any, U = any> = typeof EnumerationUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof EnumerationUtil;

















                                        
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

    public get(hashtable: ABHashtable<any, any>): BasicArrayList{

    let smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;;
    

    let list: BasicArrayList = new BasicArrayListD();;
    

    let enumeration: Enumeration<any> = hashtable.keys()!;;
    

    let layerHashtableCanBeNull: ABHashtable<any, any>;;
    

    let integerCanBeNull: Integer;;
    

    let cachedIntegerCanBeNull: Integer;;
    

        while(this.enumerationUtil!.hasMoreElements(enumeration))
        {
layerHashtableCanBeNull= hashtable.get(this.enumerationUtil!.nextElement(enumeration)!) as ABHashtable<any, any>;
    
integerCanBeNull= layerHashtableCanBeNull!.get(Layer.ID) as Integer;
    
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

