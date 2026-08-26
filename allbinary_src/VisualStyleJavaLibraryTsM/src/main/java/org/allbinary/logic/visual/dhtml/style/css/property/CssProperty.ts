
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
        



            import { Object } from '../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
//not game specific package import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      const HashMap = globalThis.java.util.HashMap;

      
//not game specific package import { DomData } from '../../../../../../../../org/allbinary/data/tree/dom/DomData.js';
      const DomData = globalThis.org.allbinary.data.tree.dom.DomData;

      
//not game specific package import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
//not game specific package import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
//not game specific package import { DomSearchHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
//not game specific package import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not game specific package import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
//not game specific package import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssPropertyValues } from './CssPropertyValues.js';
import { CssPropertyData } from './CssPropertyData.js';

export class CssProperty
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private propertyName: string;

    private cssPropertyValues: CssPropertyValues;

public constructor (name: string){

            super();
        this.propertyName= name;
    
this.cssPropertyValues= new CssPropertyValues();
    
}


public constructor (node: Node){

            super();
        
    var propertyNode: Node = DomSearchHelper.getNode(DomData.VALUE, node.getChildNodes())!;;
    
this.propertyName= DomNodeHelper.getTextNodeValue(propertyNode);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STYLE))
                        
                                    {
                                    this.logUtil!.putF("Name: " +this.getName(), this, "CssProperty()");
    

                                    }
                                

    var propertyValuesNode: Node = DomSearchHelper.getNode(CssPropertyData.getInstance()!.VALUES, node.getChildNodes())!;;
    
this.cssPropertyValues= new CssPropertyValues(propertyValuesNode);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.propertyName;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    
hashMap!.put(CssPropertyData.getInstance()!.NAME, this.propertyName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    var hashMap: HashMap<any, any> = this.toHashMap()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("CssView HashMap: " +hashMap!.toString(), this, "toXmlNode()");
    

                                    }
                                

    var node: Node = ModDomHelper.createNameValueNodes(document, CssPropertyData.getInstance()!.NAME, this.propertyName)!;;
    
node.appendChild(this.cssPropertyValues!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

