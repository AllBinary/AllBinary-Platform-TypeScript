
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
        



import { UserRole } from "../../../../../../org/allbinary/business/user/role/UserRole.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { FREEBLISKET_PATH_GLOBALS } from "../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js";

    
import { URLGLOBALS } from "../../../../../../org/allbinary/globals/URLGLOBALS.js";

    
import { CryptFileReader } from "../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbPath } from "../../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { AbPathData } from "../../../../../../org/allbinary/logic/io/path/AbPathData.js";

    
import { Document } from "../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UserConfigurationData } from "./UserConfigurationData.js";

import { UserConfigurationInterface } from "./UserConfigurationInterface.js";

export class UserConfigurationInterfaceFactory
            extends Object
         {
        

    private static readonly configurationName: string = "DefaultUserConfiguration";
        
        

                //@Throws(Error::class)
            
    public static getInstance(document: Document): UserConfigurationInterface{
var document = document

    var configurationNode: Node = DomSearchHelper.getNode(UserConfigurationData.NAME, document.getChildNodes())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new UserConfigurationView(configurationNode).
                            getUserConfigurationInterface();

                         as UserConfigurationInterface;
    
}


                //@Throws(Error::class)
            
    public static getInstance(userRole: UserRole): UserConfigurationInterface{
var userRole = userRole

    var abPath: AbPath = new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.USERCONFIGURATIONPATH, configurationName +userRole!.toString() +AbPathData.getInstance()!.EXTENSION_SEP +UserConfigurationData.UNCRYPTED_EXTENSION);
        
        
;
    

    var documentString: string = new CryptFileReader(UserConfigurationData.UNCRYPTED_EXTENSION, UserConfigurationData.ENCRYPTED_EXTENSION).
                            get(abPath)!;
        
        
;
    

    var document: Document = DomDocumentHelper.create(documentString)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserConfigurationInterfaceFactory.getInstance(document);

                        ;
    
}


                //@Throws(Error::class)
            
    public static getInstance(): UserConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new UserConfiguration();
    
}

private constructor (){

            super();
        }


}
                
            

