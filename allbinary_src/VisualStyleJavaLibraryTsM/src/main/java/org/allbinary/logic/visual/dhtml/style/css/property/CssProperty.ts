
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
        



import { HashMap } from "../../../../../../../../java/util/HashMap.js";

    
import { DomData } from "../../../../../../../../org/allbinary/data/tree/dom/DomData.js";

    
import { DomNodeHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomNodeInterface } from "../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js";

    
import { DomSearchHelper } from "../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { ModDomHelper } from "../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js";

    
import { LogUtil } from "../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { Document } from "../../../../../../../../org/w3c/dom/Document.js";

    
import { Node } from "../../../../../../../../org/w3c/dom/Node.js";

    

export class CssProperty
            extends Object
        
                , DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private propertyName: string

    private cssPropertyValues: CssPropertyValues
public constructor (name: string){

            super();
            var name = name
this.propertyName= name;
    
this.cssPropertyValues= new CssPropertyValues();
    
}

public constructor (node: Node){

            super();
            var node = node

    var propertyNode: Node = DomSearchHelper.getNode(DomData.VALUE, node.getChildNodes())!;
        
        
;
    
this.propertyName= DomNodeHelper.getTextNodeValue(propertyNode);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STYLE))
                        
                                    {
                                    logUtil!.put("Name: " +this.getName(), this, "CssProperty()");
    

                                    }
                                

    var propertyValuesNode: Node = DomSearchHelper.getNode(CssPropertyData.getInstance()!.VALUES, node.getChildNodes())!;
        
        
;
    
this.cssPropertyValues= new CssPropertyValues(propertyValuesNode);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.propertyName;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(CssPropertyData.getInstance()!.NAME, this.propertyName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Error::class)
            
    public toXmlNode(document: Document): Node{
var document = document

    var hashMap: HashMap<any, any> = this.toHashMap()!;
        
        
;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    logUtil!.put("CssView HashMap: " +hashMap!.toString(), this, "toXmlNode()");
    

                                    }
                                

    var node: Node = ModDomHelper.createNameValueNodes(document, CssPropertyData.getInstance()!.NAME, this.propertyName)!;
        
        
;
    
node.appendChild(this.cssPropertyValues!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}
                
            

