
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



            import { Object } from '../../java/lang/Object.js';


        
import { HashMap } from '../../java/util/HashMap.js';
      
import { Map } from '../../java/util/Map.js';
      
import { Set } from '../../java/util/Set.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //ArkTs does not have this.  So this is for the ArkTs build.
export class J2SEUtil
            extends Object
         {
        

    private static readonly instance: J2SEUtil = new J2SEUtil();

    public static getInstance(): J2SEUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return J2SEUtil.instance;
    
}


    public getHashMapAsArray(hashMap: HashMap<any, any>): any[]{

    var objectArray: any[] = hashMap!.keys().()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray;
    
}


    public getMapAsArray(map: Map<any, any>): any[]{

    var objectArray: any[] = map.keySet()!.()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray;
    
}


    public getSetAsArray(set: Set<string>): any[]{

    var objectArray: any[] = set.toArray()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return objectArray;
    
}


}
                
            

