
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

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class EnumerationUtil
            extends Object
         {
        

    private static readonly instance: EnumerationUtil = new EnumerationUtil();

    public static getInstance(): EnumerationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EnumerationUtil.instance;
    
}


    public hasMoreElements(enumeration: Enumeration<any>): boolean{
    //var enumeration = enumeration



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return enumeration.hasMoreElements();;
    
}


    public nextElement(enumeration: Enumeration<any>): any{
    //var enumeration = enumeration



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return enumeration.hasMoreElements();;
    
}


}
                
            

