
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
        



import { DatabaseConnectionInfoInterface } from "../../../../org/allbinary/business/init/db/DatabaseConnectionInfoInterface.js";

    
import { InitDbHelperFactory } from "../../../../org/allbinary/business/init/db/InitDbHelperFactory.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { LicensingException } from "../../../../org/allbinary/logic/system/security/licensing/LicensingException.js";

    

export class DynamicInitDb extends InitDb {
        
public constructor (abeClientInformation: AbeClientInformationInterface){

            super();
                //var abeClientInformation = abeClientInformation
this.setHelper(InitDbHelperFactory.getInstance(abeClientInformation))
}

public constructor (abeClientInformation: AbeClientInformationInterface, databaseConnectionInfoInterface: DatabaseConnectionInfoInterface){

            super();
                //var abeClientInformation = abeClientInformation
var databaseConnectionInfoInterface = databaseConnectionInfoInterface
this.setHelper(InitDbHelperFactory.getInstance(abeClientInformation, databaseConnectionInfoInterface))
}


}
                
            

