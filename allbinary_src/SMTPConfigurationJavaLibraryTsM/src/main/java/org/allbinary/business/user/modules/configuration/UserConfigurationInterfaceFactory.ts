
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
//not GWT import const UserRole

import { DomSearchHelper } from '../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { FREEBLISKET_PATH_GLOBALS } from '../../../../../../org/allbinary/globals/FREEBLISKET_PATH_GLOBALS.js';
//not GWT import const FREEBLISKET_PATH_GLOBALS

import { URLGLOBALS } from '../../../../../../org/allbinary/globals/URLGLOBALS.js';
//not GWT import const URLGLOBALS

import { CryptFileReader } from '../../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader

import { AbPath } from '../../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

//not plain js import { AbPathData } 
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
type AbPathData<T = any, U = any> = typeof AbPathData extends abstract new (...args: any[]) => infer Instance ? Instance : typeof AbPathData;

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserConfigurationData } from './UserConfigurationData.js';
//not GWT import - same folder const UserConfigurationData
import { UserConfigurationView } from './UserConfigurationView.js';
//not GWT import - same folder const UserConfigurationView
import { UserConfigurationInterface } from './UserConfigurationInterface.js';
//not GWT import - same folder const UserConfigurationInterface
import { UserConfiguration } from './UserConfiguration.js';
//not GWT import - same folder const UserConfiguration

export class UserConfigurationInterfaceFactory
            extends Object
         {
        

    private static readonly configurationName: string = "DefaultUserConfiguration";
static getInstance(...args: any[]): any {
   
    if (args.length === 1) return this.getInstance$overload1(args[0]);
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
    if (args.length === 0) return this.getInstance$overload3();
   
   throw new TypeError('No matching overload: getInstance'); }
  
                //@Throws(Exception.constructor)
            
    public static getInstance$overload1(document: Document): UserConfigurationInterface{

    let configurationNode: Node = DomSearchHelper.getNode(UserConfigurationData.NAME, document.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new UserConfigurationView(configurationNode).getUserConfigurationInterface() as UserConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance$overload2(userRole: UserRole): UserConfigurationInterface{

    let abPath: AbPath = new AbPath(URLGLOBALS.getMainPath() +FREEBLISKET_PATH_GLOBALS.getInstance()!.USERCONFIGURATIONPATH, UserConfigurationInterfaceFactory.configurationName +userRole!.toString() +AbPathData.getInstance()!.EXTENSION_SEP +UserConfigurationData.UNCRYPTED_EXTENSION);;
    

    let documentString: string = new CryptFileReader(UserConfigurationData.UNCRYPTED_EXTENSION, UserConfigurationData.ENCRYPTED_EXTENSION).get(abPath)!;;
    

    let document: Document = DomDocumentHelper.create(documentString)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return UserConfigurationInterfaceFactory.getInstance(document);;
    
}


                //@Throws(Exception.constructor)
            
    public static getInstance$overload3(): UserConfigurationInterface{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new UserConfiguration();
    
}


private constructor (){

            super();
        }


}

