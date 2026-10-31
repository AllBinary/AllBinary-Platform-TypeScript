
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
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

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

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CssPropertyValues } from './CssPropertyValues.js';
//sameFolderImports - not GWT import - same folder const CssPropertyValues
import { CssPropertyData } from './CssPropertyData.js';
//sameFolderImports - not GWT import - same folder const CssPropertyData

export class CssProperty
            extends Object
         implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private propertyName: string;

    private cssPropertyValues: CssPropertyValues;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1 && typeof args[0] === 'string') {
            this.constructor$0(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$1(args[0]);
        }
        
    }
    
    private constructor$0(name: string): void {
        this.propertyName= name;
    
this.cssPropertyValues= new CssPropertyValues();
    

    }
    
    private constructor$1(node: Node): void {
        
    let propertyNode: Node = DomSearchHelper.getNode(DomData.VALUE, node.getChildNodes())!;;
    
this.propertyName= DomNodeHelper.getTextNodeValue(propertyNode);
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.STYLE))
                        
                                    {
                                    this.logUtil!.putF("Name: " +this.getName(), this, "CssProperty()");
    

                                    }
                                

    let propertyValuesNode: Node = DomSearchHelper.getNode(CssPropertyData.getInstance()!.VALUES, node.getChildNodes())!;;
    
this.cssPropertyValues= new CssPropertyValues(propertyValuesNode);
    

    }
    
    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.propertyName;
    
}


    public toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(CssPropertyData.getInstance()!.NAME, this.propertyName);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let hashMap: HashMap<any, any> = this.toHashMap()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("CssView HashMap: " +hashMap!.toString(), this, "toXmlNode()");
    

                                    }
                                

    let node: Node = ModDomHelper.createNameValueNodes(document, CssPropertyData.getInstance()!.NAME, this.propertyName)!;;
    
node.appendChild(this.cssPropertyValues!.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

