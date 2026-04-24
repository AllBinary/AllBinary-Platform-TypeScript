
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
        



import { DomNodeHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { PreLogUtil } from "../../../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { LoggingInitInfo } from "../../../../../../../org/allbinary/logic/communication/log/config/LoggingInitInfo.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../../../org/allbinary/util/BasicArrayListD.js";

    
import { Node } from "../../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { LogConfigTypeFactory } from "./LogConfigTypeFactory.js";

import { LogConfigTypeData } from "./LogConfigTypeData.js";

import { LogConfigType } from "./LogConfigType.js";

export class LogConfigTypes
            extends Object
         {
        

    public static readonly JSP_ERROR_NO_FUNCTION: string = "in JSP Not In Function";
        
        

    public LOGGING: BasicArrayList = new BasicArrayListD();
        
        

                init{
LogConfigTypes.init();
    
}
@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public static init(){

        try {
            PreLogUtil.put("Initialize LogconfigTypes", "LogConfigTypes", "init()");
    
LogConfigTypeFactory.getInstance();
    

    var loggingInitInfo: LoggingInitInfo = new LoggingInitInfo();
        
        
;
    

    var logConfigTypeVector: BasicArrayList = loggingInitInfo!.getTypeList()!;
        
        
;
    
PreLogUtil.put("Number Of Log Configs: " +loggingInitInfo!.getNumberOfLogConfigs(), "LogConfigTypes", "init()");
    
PreLogUtil.put("Number Of Log Config Type Names: " +logConfigTypeVector!.size(), "LogConfigTypes", "init()");
    
LogConfigTypes.LOGGING.addAll(logConfigTypeVector);
    
LogConfigTypes.LOGGING.add(LogConfigTypeFactory.getInstance()!.NETBEANS_MODULE);
    

                //: 
} catch(e) 
            {
PreLogUtil.putSE("Unable to initialize LogConfigTypes", "LogConfigTypes", "init()", e);
    
}

}


                //@Throws(Error::class)
            
    public static getInstance(node: Node): LogConfigType{
    //var node = node

    var nameValueNode: Node = DomSearchHelper.getNode(LogConfigTypeData.getInstance()!.NAME, node.getChildNodes())!;
        
        
;
    

    var name: string = DomNodeHelper.getTextNodeValue(nameValueNode)!;
        
        
;
    

    var descriptionValueNode: Node = DomSearchHelper.getNodeNoThrow(LogConfigTypeData.getInstance()!.DESCRIPTION, node.getChildNodes())!;
        
        
;
    

                        if(descriptionValueNode != 
                                    null
                                )
                        
                                    {
                                    
    var description: string = DomNodeHelper.getTextNodeValue(descriptionValueNode)!;
        
        
;
    

                                    }
                                

    var availableLogConfigTypes: BasicArrayList = LogConfigType.availableLogConfigTypes;
        
        
;
    

    var size: number = availableLogConfigTypes!.size()!;
        
        
;
    

    var logConfigType: LogConfigType
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {
logConfigType= availableLogConfigTypes!.get(index); as LogConfigType;
    

                        if(logConfigType!.getName()!.compareTo(name) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return logConfigType;
    

                                    }
                                
}




                            throw new Error("No Such LogConfigType: " +name)
}

private constructor (){

            super();
        }


}
                
            

