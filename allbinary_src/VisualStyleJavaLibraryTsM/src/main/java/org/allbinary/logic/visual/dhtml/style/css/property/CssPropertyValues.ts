
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
        
            import { Integer } from '../../../../../../../../java/lang/Integer.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { Vector } from '../../../../../../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { DomData } from '../../../../../../../../org/allbinary/data/tree/dom/DomData.js';
      //not GWT import const DomData = globalThis.org.allbinary.data.tree.dom.DomData;

      
import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
      //not GWT import const DomNodeHelper = globalThis.org.allbinary.data.tree.dom.DomNodeHelper;

      
import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
      //not GWT import const DomNodeInterface = globalThis.org.allbinary.data.tree.dom.DomNodeInterface;

      
import { DomSearchHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
      //not GWT import const DomSearchHelper = globalThis.org.allbinary.data.tree.dom.DomSearchHelper;

      
import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
      //not GWT import const ModDomHelper = globalThis.org.allbinary.data.tree.dom.ModDomHelper;

      
//not plain js import { LogUtil } from '../../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { CommonSeps } from '../../../../../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
      //not GWT import const Document = globalThis.org.w3c.dom.Document;

      
import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssPropertyValueData } from './CssPropertyValueData.js';
//not GWT import const  = globalThis.org.allbinary.logic.visual.dhtml.style.css.property.CssPropertyValueData;

                import { CssPropertyData } from './CssPropertyData.js';
//not GWT import const  = globalThis.org.allbinary.logic.visual.dhtml.style.css.property.CssPropertyData;

                
export class CssPropertyValues
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private propertyValueVector: Vector;

public constructor (){

            super();
        this.propertyValueVector= new Vector();
    
}


public constructor (node: Node){

            super();
        
    var indexPropertyValueHashMap: HashMap<any, any> = new HashMap<any, any>();;
    
this.propertyValueVector= new Vector();
    

    var cssPropertyNodeVector: Vector = DomSearchHelper.getAllNodes(CssPropertyValueData.getInstance()!.NAME, node.getChildNodes())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STYLE))
                        
                                    {
                                    this.logUtil!.putF("Number Of Properties: " +cssPropertyNodeVector!.length, this, "CssProperties()");
    

                                    }
                                

    var size: number = cssPropertyNodeVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var cssPropertyValueNode: Node = cssPropertyNodeVector!.get(index) as Node;;
    

    var valueNode: Node = DomSearchHelper.getNode(DomData.VALUE, cssPropertyValueNode!.getChildNodes())!;;
    

    var propertyValue: string = DomNodeHelper.getTextNodeValue(valueNode)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STYLE))
                        
                                    {
                                    this.logUtil!.putF("Property Value: " +propertyValue, this, "CssProperties()");
    

                                    }
                                

    var indexNode: Node = DomSearchHelper.getNode(DomData.INDEX, cssPropertyValueNode!.getChildNodes())!;;
    

    var indexValue: string = DomNodeHelper.getTextNodeValue(indexNode)!;;
    
indexPropertyValueHashMap!.put(indexValue, propertyValue);
    
}


    var size2: number = indexPropertyValueHashMap!.keys().size()!;;
    




                        for (
    var index: number = 0;index < size2; index++)
        {

    var indexInt: Integer = new Integer(index);;
    

    var propertyValue: string = indexPropertyValueHashMap!.get(indexInt!.toString()) as string;;
    
this.propertyValueVector!.add(propertyValue);
    
}

}


    public toHashMap(): HashMap<any, any>{

    var commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    var cssPropertyValueData: CssPropertyValueData = CssPropertyValueData.getInstance()!;;
    

    var hashMap: HashMap<any, any> = new HashMap<any, any>();;
    

    var stringBuffer: StringMaker = new StringMaker();;
    

    var size: number = this.propertyValueVector!.length!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var value: string = this.propertyValueVector!.get(index) as string;;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(cssPropertyValueData!.NAME);
    
stringBuffer!.append(commonSeps!.BRACKET_OPEN);
    
stringBuffer!.appendint(index);
    
stringBuffer!.append(commonSeps!.BRACKET_CLOSE);
    
hashMap!.put(stringBuffer!.toString(), value);
    
index++;
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    
    var hashMap: HashMap<any, any> = this.toHashMap()!;;
    
this.logUtil!.putF("CssPropertyValues HashMap: " +hashMap!.toString(), this, "toXmlNode()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueIndexNodes(document, CssPropertyData.getInstance()!.VALUES, CssPropertyValueData.getInstance()!.NAME, this.propertyValueVector);;
    
}


}



