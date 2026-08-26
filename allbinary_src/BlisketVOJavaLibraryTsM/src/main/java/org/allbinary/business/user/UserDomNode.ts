
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
        



            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { EntryData } from '../../../../org/allbinary/business/entry/EntryData.js';
      const EntryData = globalThis.org.allbinary.business.entry.EntryData;

      
//not game specific package import { TableMappingInterface } from '../../../../org/allbinary/data/tables/TableMappingInterface.js';
      const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
//not game specific package import { DomNodeInterface } from '../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { ModDomHelper } from '../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { Document } from '../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { UserData } from './UserData.js';

export class UserDomNode
            extends Object
         implements DomNodeInterface {
        

    private dataMappingInterface: TableMappingInterface;

public constructor (dataMappingInterface: TableMappingInterface){

            super();
        this.dataMappingInterface= dataMappingInterface;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

    var hashMap: HashMap<any, any> = this.dataMappingInterface!.toHashMap()!;;
    
hashMap!.put(EntryData.getInstance()!.LASTMODIFIED, EMPTY_STRING);
    
hashMap!.put(EntryData.getInstance()!.ENCRYPTION, EMPTY_STRING);
    
hashMap!.put(UserData.PASSWORD, EMPTY_STRING);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, UserData.NAME, hashMap);;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public view(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


}
                
            

