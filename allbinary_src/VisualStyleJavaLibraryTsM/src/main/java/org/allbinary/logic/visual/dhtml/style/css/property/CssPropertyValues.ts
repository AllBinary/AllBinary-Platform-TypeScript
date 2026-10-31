
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
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { DomData } from '../../../../../../../../org/allbinary/data/tree/dom/DomData.js';
//not GWT import const DomData

import { DomNodeHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomSearchHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { ModDomHelper } from '../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssPropertyValueData } from './CssPropertyValueData.js';
//sameFolderImports - not GWT import - same folder const CssPropertyValueData
import { CssPropertyData } from './CssPropertyData.js';
//sameFolderImports - not GWT import - same folder const CssPropertyData

export class CssPropertyValues
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private propertyValueVector: BasicArrayList;

    public constructor(...args: any[]) {
        super();if(args.length === 0) {
            
            this.constructor$0();
            
        }
        else if(args.length === 1) {
            
            this.constructor$1(args[0]);
            
        }
        
    }
    
    private constructor$0(): void {
        this.propertyValueVector= new BasicArrayListD();
    

    }
    
    private constructor$1(node: Node): void {
        
    let indexPropertyValueHashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
this.propertyValueVector= new BasicArrayListD();
    

    let cssPropertyNodeVector: BasicArrayList = DomSearchHelper.getAllNodes(CssPropertyValueData.getInstance()!.NAME, node.getChildNodes())!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STYLE))
                        
                                    {
                                    this.logUtil!.putF("Number Of Properties: " +cssPropertyNodeVector!.size(), this, "CssProperties()");
    

                                    }
                                

    let size: number = cssPropertyNodeVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let cssPropertyValueNode: Node = cssPropertyNodeVector!.get(index) as Node;;
    

    let valueNode: Node = DomSearchHelper.getNode(DomData.VALUE, cssPropertyValueNode!.getChildNodes())!;;
    

    let propertyValue: string = DomNodeHelper.getTextNodeValue(valueNode)!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STYLE))
                        
                                    {
                                    this.logUtil!.putF("Property Value: " +propertyValue, this, "CssProperties()");
    

                                    }
                                

    let indexNode: Node = DomSearchHelper.getNode(DomData.INDEX, cssPropertyValueNode!.getChildNodes())!;;
    

    let indexValue: string = DomNodeHelper.getTextNodeValue(indexNode)!;;
    
indexPropertyValueHashMap!.put(indexValue, propertyValue);
    
}


    let size2: number = indexPropertyValueHashMap!.keys().size()!;;
    




                        for (
    let index: number = 0;index < size2; index++)
        {

    let indexInt: Integer = new Integer(index);;
    

    let propertyValue: string = indexPropertyValueHashMap!.get(indexInt!.toString()) as string;;
    
this.propertyValueVector!.add(propertyValue);
    
}


    }
    
    public toHashMap(): HashMap<any, any>{

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let cssPropertyValueData: CssPropertyValueData = CssPropertyValueData.getInstance()!;;
    

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let size: number = this.propertyValueVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let value: string = this.propertyValueVector!.get(index) as string;;
    
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
                                    
    let hashMap: HashMap<any, any> = this.toHashMap()!;;
    
this.logUtil!.putF("CssPropertyValues HashMap: " +hashMap!.toString(), this, "toXmlNode()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueIndexNodes(document, CssPropertyData.getInstance()!.VALUES, CssPropertyValueData.getInstance()!.NAME, this.propertyValueVector);;
    
}


}

