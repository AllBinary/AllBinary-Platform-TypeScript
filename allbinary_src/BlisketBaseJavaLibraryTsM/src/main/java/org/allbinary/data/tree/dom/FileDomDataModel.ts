
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
        



import { HashMap } from "../../../../../java/util/HashMap.js";

    
import { TableMappingInterface } from "../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { AbFile } from "../../../../../org/allbinary/logic/io/file/AbFile.js";

    
import { Document } from "../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { DomNodeInterface } from "./DomNodeInterface.js";

import { ModDomHelper } from "./ModDomHelper.js";

export class FileDomDataModel
            extends Object
         implements DomNodeInterface {
        

    private file: AbFile
public constructor (file: AbFile){

            super();
        var file = file
this.file= file;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var tableMappingInterface: TableMappingInterface = new FileTableMapping(this.file) as TableMappingInterface;
        
        
;
    

    var hashMap: HashMap<any, any> = tableMappingInterface!.toHashMap()!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNodeWithValueNodes(document, "file", hashMap);

                        ;
    
}


}
                
            

