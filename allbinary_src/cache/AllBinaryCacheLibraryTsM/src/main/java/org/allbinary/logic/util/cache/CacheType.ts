
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2007 AllBinary 
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
        



import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class CacheType
            extends Object
         {
        

    private readonly vendor: string

    private readonly type: string
public constructor (vendor: string, type: string){

            super();
            var vendor = vendor
var type = type
this.vendor= vendor;
    
this.type= type;
    
}


    public getVendor(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return vendor;
    
}


    public getType(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return type;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append("CacheType: Vendor: ");
    
stringBuffer!.append(this.getVendor());
    
stringBuffer!.append(" Type: ");
    
stringBuffer!.append(this.getType());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

