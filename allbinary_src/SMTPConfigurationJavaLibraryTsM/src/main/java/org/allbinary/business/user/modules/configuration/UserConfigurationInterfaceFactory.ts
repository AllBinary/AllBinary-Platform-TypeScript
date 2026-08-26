
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
        
//not game specific package import { UserRole } from '../../../../../../org/allbinary/business/user/role/UserRole.js';
      const UserRole = globalThis.org.allbinary.business.user.role.UserRole;

      
//not game specific package import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
      const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
//not game specific package import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
      const FREEBLISKET_PATH_GLOBALS = globalThis.org.allbinary.globals.FREEBLISKET_PATH_GLOBALS;

      
//not game specific package import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
      const URLGLOBALS = globalThis.org.allbinary.globals.URLGLOBALS;

      
//not game specific package import { CryptFileReader } from '../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
      const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
//not game specific package import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
      const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
//not game specific package import { AbPathData } from '../../../../../../org/allbinary/logic/io/path/AbPathData.js';
      const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;

      
//not game specific package import { Document } from '../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserConfigurationData } from './UserConfigurationData.js';
import { UserConfigurationView } from './UserConfigurationView.js';
import { UserConfigurationInterface } from './UserConfigurationInterface.js';
import { UserConfiguration } from './UserConfiguration.js';

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
                
            

