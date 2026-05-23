
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
        



            import { Object } from '../../../java/lang/Object.js';


        
import { Enumeration } from '../../../java/util/Enumeration.js';
      
import { Set } from '../../../java/util/Set.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicArrayListD } from './BasicArrayListD.js';
import { BasicArrayList } from './BasicArrayList.js';
//ArkTs does not have this.  So this is for the ArkTs build.
export class EnumerationUtil
            extends Object
         {
        

    private static readonly instance: EnumerationUtil = new EnumerationUtil();

    public static getInstance(): EnumerationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EnumerationUtil.instance;
    
}


    public hasMoreElements(enumeration: Enumeration<any>): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return enumeration.hasMoreElements();;
    
}


    public nextElement(enumeration: Enumeration<any>): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return enumeration.nextElement()!;;
    
}


    public getAsArray(set: Set): any[]{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return set.toArray();;
    
}


    public getAsArray(enumeration: Enumeration<any>): any[]{

    var basicArrayList: BasicArrayList = new BasicArrayListD();
;
    

        while(this.hasMoreElements(enumeration))
        {
basicArrayList!.add(this.nextElement(enumeration)!);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayList!.toArray();;
    
}


}
                
            

