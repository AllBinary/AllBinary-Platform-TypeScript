
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { EntryData } from "../../../../org/allbinary/business/entry/EntryData.js";

    
import { TableMappingInterface } from "../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { DomNodeInterface } from "../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { ModDomHelper } from "../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { Document } from "../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../org/w3c/dom/Node.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { UserData } from "./UserData.js";

export class UserDomNode
            extends Object
         implements DomNodeInterface {
        

    private dataMappingInterface: TableMappingInterface
public constructor (dataMappingInterface: TableMappingInterface){

            super();
        var dataMappingInterface = dataMappingInterface
this.dataMappingInterface= dataMappingInterface;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
;
    

    var hashMap: HashMap<any, any> = this.dataMappingInterface!.toHashMap()!;
        
        
;
    
hashMap!.put(EntryData.getInstance()!.LASTMODIFIED, EMPTY_STRING);
    
hashMap!.put(EntryData.getInstance()!.ENCRYPTION, EMPTY_STRING);
    
hashMap!.put(UserData.PASSWORD, EMPTY_STRING);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, UserData.NAME, hashMap);;
    
}


                //@Throws(Error::class)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Error::class)
            
    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

