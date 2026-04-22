
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
        



import { KotlinUtil } from "../../../../org/allbinary/KotlinUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class SoftwareInformation
            extends Object
         {
        

    private readonly name: string

    private readonly shortName: string

    private readonly version: string
public constructor (name: string, version: string, shortName: string){

            super();
            //var name = name
    //var version = version
    //var shortName = shortName
this.name= name;
    
this.version= version;
    
this.shortName= new StringMaker().
                            append(shortName)!.append(KotlinUtil.getShortName())!.toString();
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public getVersion(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return version;
    
}


    public toShortString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.shortName;
    
}


    public toString(): string{

    var NAME: string = "Name: ";
        
        
;
    

    var VERSION: string = "Version: ";
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(NAME);
    
stringBuffer!.append(this.getName());
    
stringBuffer!.append(CommonSeps.getInstance()!.SPACE);
    
stringBuffer!.append(VERSION);
    
stringBuffer!.append(this.getVersion());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

