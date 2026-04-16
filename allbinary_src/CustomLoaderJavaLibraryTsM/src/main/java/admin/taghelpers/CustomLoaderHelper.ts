
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
        



import { HashMap } from "../../java/util/HashMap.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { AppUrlGlobals } from "../../org/allbinary/globals/AppUrlGlobals.js";

    
import { URLGLOBALS } from "../../org/allbinary/globals/URLGLOBALS.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../org/allbinary/string/CommonStrings.js";

    

import { LOGGING } from "./LOGGING.js";

import { LogConfigTypes } from "./LogConfigTypes.js";

import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

export class CustomLoaderHelper
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
public constructor (hashMap: HashMap<any, any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
}

public constructor (){

            super();
            }


                //@Throws(Error::class)
            
    public getWebappPath(): string{

        try {
            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return org.allbinary.globals.URLGLOBALS.getWebappPath();

                        ;
    

                //: 
} catch(e) 
            {



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}

}


                //@Throws(Error::class)
            
    public setWebappPath(path: string){
var path = path

        try {
            
    var urlGlobals: AppUrlGlobals = new AppUrlGlobals();
        
        
;
    
urlGlobals!.setWebappPath(path);
    
URLGLOBALS.init(urlGlobals);
    

                //: 
} catch(e) 
            {

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.TAGHELPERERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "setWebappPath()", e);
    

                                    }
                                
}

}


}
                
            

