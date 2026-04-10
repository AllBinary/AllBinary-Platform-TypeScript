
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

    

export class PaymentGatewayIdGenerator extends UniqueIdGenerator {
        

    private readonly IDFILE: string = "paymentgatewayId";
        
        
public constructor (){

            super();
            
    var stringBuffer: StringMaker = new StringMaker();
        
        

append(URLGLOBALS.getMainPath())
append(PATH_GLOBALS.getInstance()!.INIT_PATH)
append(IDFILE)
append(UniqueIdGenerator.EXT)
setFile(stringBuffer!.toString(), IDFILE)
}


}
                
            

