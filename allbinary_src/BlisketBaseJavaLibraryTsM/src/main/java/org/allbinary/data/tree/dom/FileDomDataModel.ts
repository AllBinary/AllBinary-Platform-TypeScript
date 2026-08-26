
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
        
//not game specific package import { HashMap } from '../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { TableMappingInterface } from '../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
//not game specific package import { AbFile } from '../../../../../org/allbinary/logic/io/file/AbFile.js';
      const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DomNodeInterface } from './DomNodeInterface.js';
import { FileTableMapping } from './FileTableMapping.js';
import { ModDomHelper } from './ModDomHelper.js';

export class FileDomDataModel
            extends Object
         implements DomNodeInterface {
        

    private file: AbFile;

public constructor (file: AbFile){

            super();
        this.file= file;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var tableMappingInterface: TableMappingInterface = new FileTableMapping(this.file) as TableMappingInterface;;
    

    var hashMap: HashMap<any, any> = tableMappingInterface!.toHashMap()!;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNodeWithValueNodes(document, "file", hashMap);;
    
}


}
                
            

