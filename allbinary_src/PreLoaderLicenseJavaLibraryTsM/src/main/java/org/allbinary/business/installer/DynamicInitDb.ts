
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
        



//not game specific package import { DatabaseConnectionInfoInterface } from '../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js';
      const DatabaseConnectionInfoInterface = globalThis.org.allbinary.business.init.db.DatabaseConnectionInfoInterface;

      
//not game specific package import { InitDbHelperFactory } from '../../../../org/allbinary/business/init/db/InitDbHelperFactory.js';
      const InitDbHelperFactory = globalThis.org.allbinary.business.init.db.InitDbHelperFactory;

      
//not game specific package import { AbeClientInformationInterface } from '../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js';
      const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;

      
//not game specific package import { LicensingException } from '../../../../org/allbinary/logic/system/security/licensing/LicensingException.js';
      const LicensingException = globalThis.org.allbinary.logic.system.security.licensing.LicensingException;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InitDb } from './InitDb.js';
//Warning you must have sql root access
export class DynamicInitDb extends InitDb {
        

public constructor (abeClientInformation: AbeClientInformationInterface){

            super();
        this.setHelper(InitDbHelperFactory.getInstance(abeClientInformation));
    
}


public constructor (abeClientInformation: AbeClientInformationInterface, databaseConnectionInfoInterface: DatabaseConnectionInfoInterface){

            super();
        this.setHelper(InitDbHelperFactory.getInstance(abeClientInformation, databaseConnectionInfoInterface));
    
}


}



