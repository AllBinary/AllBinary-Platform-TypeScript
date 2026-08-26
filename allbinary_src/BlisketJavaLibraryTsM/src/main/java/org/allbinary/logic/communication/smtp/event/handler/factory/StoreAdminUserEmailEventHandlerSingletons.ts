
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
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { Vector } from '../../../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { StoreFrontInterface } from '../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
      const StoreFrontInterface = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontInterface;

      
//not game specific package import { UserEntityFactory } from '../../../../../../../../org/allbinary/data/tables/user/UserEntityFactory.js';
      const UserEntityFactory = globalThis.org.allbinary.data.tables.user.UserEntityFactory;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { UserEmailEventNameData } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/UserEmailEventNameData.js';
      const UserEmailEventNameData = globalThis.org.allbinary.logic.communication.smtp.event.UserEmailEventNameData;

      
//not game specific package import { EmailEventHandlerUtil } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/EmailEventHandlerUtil.js';
      const EmailEventHandlerUtil = globalThis.org.allbinary.logic.communication.smtp.event.handler.EmailEventHandlerUtil;

      
//not game specific package import { UserEmailEventHandler } from '../../../../../../../../org/allbinary/logic/communication/smtp/event/handler/UserEmailEventHandler.js';
      const UserEmailEventHandler = globalThis.org.allbinary.logic.communication.smtp.event.handler.UserEmailEventHandler;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { CommonStrings } from '../../../../../../../../org/allbinary/string/CommonStrings.js';
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

    private readonly userEmailEventHandlerHashMap: HashMap<any, any> = new HashMap<any, any>();

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
                                

    var userVector: Vector = UserEntityFactory.getInstance()!.getStoreManagers(storeFrontInterface)!;;
    

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
                
            

