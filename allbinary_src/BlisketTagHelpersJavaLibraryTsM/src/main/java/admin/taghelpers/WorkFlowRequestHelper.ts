
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

    
import { WorkFlowEntityFactory } from "../../org/allbinary/data/tables/workflow/WorkFlowEntityFactory.js";

    
import { LogUtil } from "../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { NewWorkFlowFactory } from "../../org/allbinary/logic/control/workflow/NewWorkFlowFactory.js";

    
import { WorkFlowData } from "../../org/allbinary/logic/control/workflow/WorkFlowData.js";

    
import { WorkFlowInterface } from "../../org/allbinary/logic/control/workflow/WorkFlowInterface.js";

    
import { StringUtil } from "../../org/allbinary/logic/string/StringUtil.js";

    
import { AbeClientInformationInterface } from "../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { ServiceClientInformationInterfaceFactory } from "../../org/allbinary/logic/system/security/licensing/ServiceClientInformationInterfaceFactory.js";

    

export class WorkFlowRequestHelper extends ModifyTable {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly abeClientInformation: AbeClientInformationInterface = ServiceClientInformationInterfaceFactory.getInstance()!;
        
        

    private workFlowInterface: WorkFlowInterface
public constructor (hashMap: HashMap<Any, Any>, pageContext: PageContext){

            super();
            var hashMap = hashMap
var pageContext = pageContext
this.workFlowInterface= NewWorkFlowFactory.getInstance()!.getInstance(this.abeClientInformation, hashMap, pageContext)
}


                @Throws(Exception::class)
            
    public delete(): string{

        try {
            
    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        

delete(this.workFlowInterface!.getName(), stringUtil!.EMPTY_STRING)

    var success: string = "Successfully Removed the workflow with " +WorkFlowData.getInstance()!.NAME +"= " +this.workFlowInterface!.getName() +" from ";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    put(success, this, "delete()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

        try {
            
    var error: string = "Failed to remove workflow with " +WorkFlowData.getInstance()!.NAME +"= " +this.workFlowInterface!.getName() +" from ";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "delete()", e)

                                    }
                                



                            throw Exception(e)
} catch(ex: Exception)
            {

    var error: string = "Failed to get data from workflowinterface to set error string";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "delete()", ex)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}

}


    public insert(): string{

        try {
            
    var success: string = "New User Successfully added to the Users Table";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    put(success, this, "add()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to add User";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "add()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


    public update(): string{

        try {
            
    var success: string = "Updated WorkFlow Successfully";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGS))
                        
                                    {
                                    put(success, this, "update()")

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return success;
    
} catch(e: Exception)
            {

    var error: string = "Failed to update WorkFlow";
        
        


    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    put(commonStrings!.EXCEPTION, this, "update()", e)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return error;
    
}

}


}
                
            

