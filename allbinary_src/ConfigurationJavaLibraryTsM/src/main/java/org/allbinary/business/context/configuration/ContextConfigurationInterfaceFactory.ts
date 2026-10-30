
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { DomSearchHelper } from '../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { CryptFileReader } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader

import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath

import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ContextConfigurationData } from './ContextConfigurationData.js';
//sameFolderImports - not GWT import - same folder const ContextConfigurationData
import { ContextConfigurationView } from './ContextConfigurationView.js';
//sameFolderImports - not GWT import - same folder const ContextConfigurationView
import { ContextConfigurationInterface } from './ContextConfigurationInterface.js';
//sameFolderImports - not GWT import - same folder const ContextConfigurationInterface
import { ContextConfigurationPathUtil } from './ContextConfigurationPathUtil.js';
//sameFolderImports - not GWT import - same folder const ContextConfigurationPathUtil

export class ContextConfigurationInterfaceFactory
            extends Object
         {
        

    private static readonly instance: ContextConfigurationInterfaceFactory = new ContextConfigurationInterfaceFactory();
static getInstance(...args: any[]): any {
   
    if (args.length === 0) return this.getInstance$overload1();
   
    if (args.length === 1) return this.getInstance$overload2(args[0]);
   
    if (args.length === 1 && typeof args[0] === 'string') return this.getInstance$overload3(args[0]);
   
   throw new TypeError('No matching overload: getInstance'); }
  
    public static getInstance$overload1(): ContextConfigurationInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ContextConfigurationInterfaceFactory.instance;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance$overload2(document: Document): ContextConfigurationInterface{

    let contextConfigurationData: ContextConfigurationData = ContextConfigurationData.getInstance()!;;
    

    let contextConfigurationNode: Node = DomSearchHelper.getNode(contextConfigurationData!.NAME, document.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ContextConfigurationView(contextConfigurationNode).getContextConfigurationInterface() as ContextConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance$overload3(contextName: string): ContextConfigurationInterface{

    let abPath: AbPath = ContextConfigurationPathUtil.getAbPath(contextName)!;;
    

    let contextConfigurationData: ContextConfigurationData = ContextConfigurationData.getInstance()!;;
    

    let documentString: string = new CryptFileReader(contextConfigurationData!.UNCRYPTED_EXTENSION, contextConfigurationData!.ENCRYPTED_EXTENSION).get(abPath)!;;
    

    let document: Document = DomDocumentHelper.create(documentString)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(document);;
    
}


}

