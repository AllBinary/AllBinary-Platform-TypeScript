
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
        



import { PATH_GLOBALS } from "../../../../org/allbinary/globals/PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UniqueIdGenerator } from "./UniqueIdGenerator.js";

export class ProductIdGenerator extends UniqueIdGenerator {
        

    private readonly IDFILE: string = "productId";
        
        
public constructor (){

            super();
        
    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.INIT_PATH);
    
stringBuffer!.append(this.IDFILE);
    
stringBuffer!.append(UniqueIdGenerator.EXT);
    
super.setFile(stringBuffer!.toString(), IDFILE);
    
}


}
                
            

