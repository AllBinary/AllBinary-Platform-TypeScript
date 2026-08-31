
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

        


            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { UserEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js';
      //not GWT import const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
import { UserEmailEventNameData } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      //not GWT import const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
import { EmailEventHandlerUtil } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/EmailEventHandlerUtil.js';
      //not GWT import const EmailEventHandlerUtil = globalThis.org.allbinary.logic.communication.smtp.event.handler.EmailEventHandlerUtil;

      
import { UserEmailEventHandler } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
      //not GWT import const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

      
import { AbeClientInformationInterface } from '../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      //not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not plain js import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class AdminUserEmailEventHandlerSingletons
            extends Object
         {
        

    private static readonly instance: AdminUserEmailEventHandlerSingletons = new AdminUserEmailEventHandlerSingletons();

    public static getInstance(): AdminUserEmailEventHandlerSingletons{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return AdminUserEmailEventHandlerSingletons.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly userEmailEventHandlerHashMap: HashMap<any, any> = new HashMap<any, any>();

private constructor (){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getInstance(abeClientInformation: AbeClientInformationInterface, userEmailEventNameData: UserEmailEventNameData): UserEmailEventHandler{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                

    var userEmailEventHandler: UserEmailEventHandler = this.userEmailEventHandlerHashMap!.get(userEmailEventNameData) as UserEmailEventHandler;;
    

                        if(userEmailEventHandler == 
                                    null
                                )
                        
                                    {
                                    
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Creating New Named UserEmailEventHandler", this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                

    var userVector: Vector = UserEntityFactory.getInstance()!.getAdministrators()!;;
    

    var newUserEmailEventHandler: UserEmailEventHandler = EmailEventHandlerUtil.getInstance()!.getEventHandler(abeClientInformation, userEmailEventNameData, userVector)!;;
    
this.userEmailEventHandlerHashMap!.put(userEmailEventNameData, newUserEmailEventHandler);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return newUserEmailEventHandler;
    

                                    }
                                
                        else {
                            
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF("Returning existing UserEmailEventHandler", this, this.commonStrings!.GET_INSTANCE);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return userEmailEventHandler;
    

                        }
                            
}


}



