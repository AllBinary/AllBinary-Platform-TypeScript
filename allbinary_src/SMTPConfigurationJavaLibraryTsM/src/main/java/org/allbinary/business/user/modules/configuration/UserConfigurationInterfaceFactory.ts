
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { UserRole } from '../../../../../../org/allbinary/business/user/role/UserRole.js';
//not GWT import const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
//not GWT import const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
import { CryptFileReader } from '../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserConfigurationData } from './UserConfigurationData.js';
//not GWT import - same folder const UserConfigurationData = globalThis.org.allbinary.business.user.modules.configuration.UserConfigurationData;

                import { UserConfigurationView } from './UserConfigurationView.js';
//not GWT import - same folder const UserConfigurationView = globalThis.org.allbinary.business.user.modules.configuration.UserConfigurationView;

                import { UserConfigurationInterface } from './UserConfigurationInterface.js';
//not GWT import - same folder const UserConfigurationInterface = globalThis.org.allbinary.business.user.modules.configuration.UserConfigurationInterface;

                import { UserConfiguration } from './UserConfiguration.js';
//not GWT import - same folder const UserConfiguration = globalThis.org.allbinary.business.user.modules.configuration.UserConfiguration;

                
export class UserConfigurationInterfaceFactory
            extends Object
         {
        

    private static readonly configurationName: string = "DefaultUserConfiguration";

                //@Throws(Exception.constructor)
            
    public static getInstance(document: Document): UserConfigurationInterface{

    var configurationNode: Node = DomSearchHelper.getNode(UserConfigurationData.NAME, document.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new UserConfigurationView(configurationNode).getUserConfigurationInterface() as UserConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance(userRole: UserRole): UserConfigurationInterface{

    var abPath: AbPath = new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.USERCONFIGURATIONPATH, UserConfigurationInterfaceFactory.configurationName +userRole!.toString() +AbPathData.getInstance()!.EXTENSION_SEP +UserConfigurationData.UNCRYPTED_EXTENSION);;
    

    var documentString: string = new CryptFileReader(UserConfigurationData.UNCRYPTED_EXTENSION, UserConfigurationData.ENCRYPTED_EXTENSION).get(abPath)!;;
    

    var document: Document = DomDocumentHelper.create(documentString)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserConfigurationInterfaceFactory.getInstance(document);;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance(): UserConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new UserConfiguration();
    
}


private constructor (){

            super();
        }


}



