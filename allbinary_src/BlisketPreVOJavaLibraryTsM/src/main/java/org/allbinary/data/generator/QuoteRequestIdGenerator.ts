
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

        


            import { Exception } from '../../../../java/lang/Exception.js';
        
import { PATH_GLOBALS } from '../../../../org/allbinary/globals/PATH_GLOBALS.js';
      //not GWT import const PATH_GLOBALS = globalThis.org.allbinary.globals.PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../org/allbinary/globals/URLGLOBALS.js';
      //not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UniqueIdGenerator } from './UniqueIdGenerator.js';
//not GWT import const  = globalThis.org.allbinary.data.generator.UniqueIdGenerator;

                
export class QuoteRequestIdGenerator extends UniqueIdGenerator {
        

    private readonly IDFILE: string = "quoterequestId";

public constructor (){

            super();
        
    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(URLGLOBALS.getMainPath());
    
stringBuffer!.append(PATH_GLOBALS.getInstance()!.INIT_PATH);
    
stringBuffer!.append(this.IDFILE);
    
stringBuffer!.append(UniqueIdGenerator.EXT);
    
super.setFile(stringBuffer!.toString(), this.IDFILE);
    
}


}



