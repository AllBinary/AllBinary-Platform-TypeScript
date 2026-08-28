
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
        



            import { Exception } from '../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
      const StoreFrontData = globalThis.org.allbinary.business.context.modules.storefront.StoreFrontData;

      
//not game specific package import { InitSql } from '../../../../../../org/allbinary/business/init/InitSql.js';
      const InitSql = globalThis.org.allbinary.business.init.InitSql;

      
//not game specific package import { UserDbInitInfo } from '../../../../../../org/allbinary/business/init/db/UserDbInitInfo.js';
      const UserDbInitInfo = globalThis.org.allbinary.business.init.db.UserDbInitInfo;

      
//not game specific package import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { BasicStoreFront } from './BasicStoreFront.js';
import { BasicStoreFrontInterface } from './BasicStoreFrontInterface.js';

export class BasicStoreFrontsEntity extends InitSql {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly tableName: string = "storefronts";

public constructor (){
            super(new UserDbInitInfo());
                    

                            //For kotlin this is before the body of the constructor.
                    
this.setTable(this.tableName);
    
}


                //@Throws(Exception.constructor)
            
    public getStoreFrontInterface(name: string): BasicStoreFrontInterface{

    var keysAndValues: HashMap<any, any> = new HashMap<any, any>();;
    
keysAndValues!.put(StoreFrontData.getInstance()!.NAME, name);
    

    var storeHashMap: HashMap<any, any> = super.getRow(keysAndValues)!;;
    

                        if(storeHashMap == 
                                    null
                                )
                        
                                    throw new Exception("No Such Store: " +name);
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.FACTORYERROR))
                        
                                    {
                                    this.logUtil!.putF("StoreFront: " +storeHashMap!.toString(), this, "getStore()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new BasicStoreFront(storeHashMap) as BasicStoreFrontInterface;
    
}


}



