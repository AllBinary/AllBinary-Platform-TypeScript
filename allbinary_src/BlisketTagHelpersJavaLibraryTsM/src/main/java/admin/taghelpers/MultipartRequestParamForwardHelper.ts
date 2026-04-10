
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

    
import { Vector } from "../../java/util/Vector.js";

    
import { PageContext } from "../../javax/servlet/jsp/PageContext.js";

    
import { GLOBALS2 } from "../../org/allbinary/globals/GLOBALS2.js";

    
import { RequestMapInterface } from "../../org/allbinary/logic/communication/http/request/RequestMapInterface.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../org/allbinary/logic/string/StringMaker.js";

    
import { StringValidationUtil } from "../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonSeps } from "../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../org/allbinary/string/CommonStrings.js";

    
import { HelperTag } from "../../tags/HelperTag.js";

    

export class MultipartRequestParamForwardHelper
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly pageContext: PageContext

    private readonly requestMapInterface: RequestMapInterface

    private readonly page: string

    private readonly command: string

    private readonly paramVector: Vector
public constructor (parentHelperTag: HelperTag, page: string, command: string, paramVector: Vector, pageContext: PageContext){

            super();
            var parentHelperTag = parentHelperTag
var page = page
var command = command
var paramVector = paramVector
var pageContext = pageContext
this.pageContext= pageContext
this.page= page
this.command= command
this.paramVector= paramVector
this.requestMapInterface= InventoryItemViewParentTagHelper.getInstance()!.getRequestMapInterface(parentHelperTag)
}


                //@Throws(Error::class)
            
    public forward(){

        try {
            
                        if(this.shouldForward())
                        
                                    {
                                    
    var params: string = this.getParams()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(page)
stringBuffer!.append(params)
this.pageContext!.forward(stringBuffer!.toString())

                                    }
                                
} catch(e: Exception)
            {

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    logUtil!.put(commonStrings!.EXCEPTION, this, "forward()", e)

                                    }
                                
}

}


    getParams(): string{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        


    var AMP: string = commonSeps!.AMPERSAND;
        
        


    var QUESTION: string = commonSeps!.QUESTION;
        
        


    var EQUALS: string = commonSeps!.EQUALS;
        
        


    var hashMap: HashMap<Any, Any> = this.requestMapInterface!.getRequestHashMap()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        


    var size: number = this.paramVector!.length!;
        
        





                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var key: string = this.paramVector!.get(index) as String;
        
        


    var value: string = hashMap!.get(key as Object) as String;
        
        


                        if(index != 0)
                        
                                    {
                                    stringBuffer!.append(AMP)

                                    }
                                
                        else {
                            stringBuffer!.append(QUESTION)

                        }
                            
stringBuffer!.append(key)
stringBuffer!.append(EQUALS)
stringBuffer!.append(value)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    shouldForward(): boolean{

    var hashMap: HashMap<Any, Any> = this.requestMapInterface!.getRequestHashMap()!;
        
        


    var requestCommand: string = hashMap!.get(GLOBALS2.ADMINCOMMAND) as String;
        
        


                        if(StringValidationUtil.getInstance()!.isEmpty(command) || (!StringValidationUtil.getInstance()!.isEmpty(requestCommand) && command.compareTo(requestCommand) == 0))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}
                
            

