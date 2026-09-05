
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
//not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { DomDocumentHelper } from '../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper = globalThis.org.allbinary.data.tree.dom.document.DomDocumentHelper;

      
import { CryptFileReader } from '../../../../../org/allbinary/logic/control/crypt/file/CryptFileReader.js';
//not GWT import const CryptFileReader = globalThis.org.allbinary.logic.control.crypt.file.CryptFileReader;

      
import { AbPath } from '../../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;

      
import { Document } from '../../../../../org/w3c/dom/Document.js';
//not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../org/w3c/dom/Node.js';
//not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ContextConfigurationData } from './ContextConfigurationData.js';
//not GWT import - same folder const ContextConfigurationData = globalThis.org.allbinary.business.context.configuration.ContextConfigurationData;

                import { ContextConfigurationView } from './ContextConfigurationView.js';
//not GWT import - same folder const ContextConfigurationView = globalThis.org.allbinary.business.context.configuration.ContextConfigurationView;

                import { ContextConfigurationInterface } from './ContextConfigurationInterface.js';
//not GWT import - same folder const ContextConfigurationInterface = globalThis.org.allbinary.business.context.configuration.ContextConfigurationInterface;

                import { ContextConfigurationPathUtil } from './ContextConfigurationPathUtil.js';
//not GWT import - same folder const ContextConfigurationPathUtil = globalThis.org.allbinary.business.context.configuration.ContextConfigurationPathUtil;

                
export class ContextConfigurationInterfaceFactory
            extends Object
         {
        

    private static readonly instance: ContextConfigurationInterfaceFactory = new ContextConfigurationInterfaceFactory();

    public static getInstance(): ContextConfigurationInterfaceFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ContextConfigurationInterfaceFactory.instance;
    
}


private constructor (){

            super();
        }


                //@Throws(Exception.constructor)
            
    public getInstance(document: Document): ContextConfigurationInterface{

    var contextConfigurationData: ContextConfigurationData = ContextConfigurationData.getInstance()!;;
    

    var contextConfigurationNode: Node = DomSearchHelper.getNode(contextConfigurationData!.NAME, document.getChildNodes())!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ContextConfigurationView(contextConfigurationNode).getContextConfigurationInterface() as ContextConfigurationInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(contextName: string): ContextConfigurationInterface{

    var abPath: AbPath = ContextConfigurationPathUtil.getAbPath(contextName)!;;
    

    var contextConfigurationData: ContextConfigurationData = ContextConfigurationData.getInstance()!;;
    

    var documentString: string = new CryptFileReader(contextConfigurationData!.UNCRYPTED_EXTENSION, contextConfigurationData!.ENCRYPTED_EXTENSION).get(abPath)!;;
    

    var document: Document = DomDocumentHelper.create(documentString)!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getInstance(document);;
    
}


}



