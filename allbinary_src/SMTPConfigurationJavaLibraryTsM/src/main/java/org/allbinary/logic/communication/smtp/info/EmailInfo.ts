
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
        



import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { BasicEmailInfo } from "./BasicEmailInfo.js";

export class EmailInfo
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private basicEmailInfo: BasicEmailInfo

    private htmlAttachment: string

    private contentBase: string
public constructor (basicEmailInfo: BasicEmailInfo){

            super();
            var basicEmailInfo = basicEmailInfo

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.init(basicEmailInfo, 
                            null, 
                            null);
    
}

public constructor (basicEmailInfo: BasicEmailInfo, htmlAttachment: string, contentBase: string){

            super();
            var basicEmailInfo = basicEmailInfo
var htmlAttachment = htmlAttachment
var contentBase = contentBase

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    
    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.init(basicEmailInfo, 
                            null, 
                            null);
    
}


    init(basicEmailInfo: BasicEmailInfo, htmlAttachment: string, contentBase: string){
var basicEmailInfo = basicEmailInfo
var htmlAttachment = htmlAttachment
var contentBase = contentBase
this.basicEmailInfo= basicEmailInfo;
    
this.htmlAttachment= htmlAttachment;
    
this.contentBase= contentBase;
    
}


    public getBasicEmailInfo(): BasicEmailInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicEmailInfo;
    
}


    public getHtmlAttachment(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.htmlAttachment;
    
}


    public getContentBase(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.contentBase;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Email Info: \n " +this.getBasicEmailInfo()!.toString();
    
}


}
                
            

