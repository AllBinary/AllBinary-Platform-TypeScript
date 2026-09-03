
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

      
//not plain js import { BasicArrayList } from '../../../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      //not GWT import const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
import { UserEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js';
      //not GWT import const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
import { StdUtil } from '../../../../../../../../org/allbinary/logic/StdUtil.js';
      //not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;

      
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
        
export class StoreAdminUserEmailEventHandlerSingletons
            extends Object
         {
        

    private static readonly instance: StoreAdminUserEmailEventHandlerSingletons = new StoreAdminUserEmailEventHandlerSingletons();

    public static getInstance(): StoreAdminUserEmailEventHandlerSingletons{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StoreAdminUserEmailEventHandlerSingletons.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly userEmailEventHandlerHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;

private constructor (){

            super();
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.EMAILLOGGING))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public getInstance(userEmailEventNameData: UserEmailEventNameData, abeClientInformation: AbeClientInformationInterface, storeFrontInterface: StoreFrontInterface): UserEmailEventHandler{

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
                                

    var userVector: BasicArrayList = UserEntityFactory.getInstance()!.getStoreManagers(storeFrontInterface)!;;
    

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



