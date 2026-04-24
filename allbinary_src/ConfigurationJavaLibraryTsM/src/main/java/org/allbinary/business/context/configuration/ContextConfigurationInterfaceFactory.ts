
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
        



import { DomSearchHelper } from "../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { DomDocumentHelper } from "../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js";

    
import { CryptFileReader } from "../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js";

    
import { AbPath } from "../../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { ContextConfigurationData } from "./ContextConfigurationData.js";

import { ContextConfigurationInterface } from "./ContextConfigurationInterface.js";

import { ContextConfigurationPathUtil } from "./ContextConfigurationPathUtil.js";

export class ContextConfigurationInterfaceFactory
            extends Object
         {
        

    private static readonly instance: ContextConfigurationInterfaceFactory = new ContextConfigurationInterfaceFactory();
        
        

    public static getInstance(): ContextConfigurationInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


                //@Throws(Error::class)
            
    public getInstance(document: Document): ContextConfigurationInterface{
    //var document = document

    var contextConfigurationData: ContextConfigurationData = ContextConfigurationData.getInstance()!;
        
        
;
    

    var contextConfigurationNode: Node = DomSearchHelper.getNode(contextConfigurationData!.NAME, document.getChildNodes())!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ContextConfigurationView(contextConfigurationNode).
                            getContextConfigurationInterface(); as ContextConfigurationInterface;
    
}


                //@Throws(Error::class)
            
    public getInstance(contextName: string): ContextConfigurationInterface{
    //var contextName = contextName

    var abPath: AbPath = ContextConfigurationPathUtil.getAbPath(contextName)!;
        
        
;
    

    var contextConfigurationData: ContextConfigurationData = ContextConfigurationData.getInstance()!;
        
        
;
    

    var documentString: string = new CryptFileReader(contextConfigurationData!.UNCRYPTED_EXTENSION, contextConfigurationData!.ENCRYPTED_EXTENSION).
                            get(abPath)!;
        
        
;
    

    var document: Document = DomDocumentHelper.create(documentString)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(document);;
    
}


}
                
            

