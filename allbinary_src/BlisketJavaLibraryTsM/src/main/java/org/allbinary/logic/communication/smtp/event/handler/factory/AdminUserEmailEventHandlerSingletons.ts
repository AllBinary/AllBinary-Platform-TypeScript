
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { Vector } from "../../../../../../../../java/util/Vector.js";

    
import { UserEntityFactory } from "../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { UserEmailEventNameData } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js";

    
import { EmailEventHandlerUtil } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/EmailEventHandlerUtil.js";

    
import { UserEmailEventHandler } from "../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js";

    
import { AbeClientInformationInterface } from "../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonStrings } from "../../../../../../../../org/allbinary/string/CommonStrings.js";

    

export class AdminUserEmailEventHandlerSingletons
            extends Object
         {
        

    private static readonly instance: AdminUserEmailEventHandlerSingletons = new AdminUserEmailEventHandlerSingletons();
        
        

    public static getInstance(): AdminUserEmailEventHandlerSingletons{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly userEmailEventHandlerHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        
private constructor (){

            super();
            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put(commonStrings!.START, this, commonStrings!.CONSTRUCTOR)

                                    }
                                
}


                //@Throws(Error::class)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData): UserEmailEventHandler{
    //var abeClientInformation = abeClientInformation
var userEmailEventNameData = userEmailEventNameData

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put(this.commonStrings!.START, this, commonStrings!.GET_INSTANCE)

                                    }
                                

    var userEmailEventHandler: UserEmailEventHandler = this.userEmailEventHandlerHashMap!.get(userEmailEventNameData as Object) as UserEmailEventHandler;
        
        


                        if(userEmailEventHandler == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("Creating New Named UserEmailEventHandler", this, commonStrings!.GET_INSTANCE)

                                    }
                                

    var userVector: Vector = UserEntityFactory.getInstance()!.getAdministrators()!;
        
        


    var newUserEmailEventHandler: UserEmailEventHandler = EmailEventHandlerUtil.getInstance()!.getEventHandler(abeClientInformation, userEmailEventNameData, userVector)!;
        
        

this.userEmailEventHandlerHashMap!.put(userEmailEventNameData, newUserEmailEventHandler)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newUserEmailEventHandler;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    logUtil!.put("Returning existing UserEmailEventHandler", this, commonStrings!.GET_INSTANCE)

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userEmailEventHandler;
    

                        }
                            
}


}
                
            

