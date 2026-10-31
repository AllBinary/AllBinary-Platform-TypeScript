
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
                *  II
                *  Created By: Travis Berthelot  
        */
        
        /* Generated Code Do Not Modify */

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { StoreFrontFactory } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontFactory.js';
//not GWT import const StoreFrontFactory

import { StoreFrontInterface } from '../../../../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontInterface.js';
//not GWT import const StoreFrontInterface

import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { Validation } from '../../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
//not GWT import const Validation

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { HtmlMetaAttributeDataFactory } from '../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaAttributeDataFactory.js';
//not GWT import const HtmlMetaAttributeDataFactory

import { HtmlMetaAttributeValuesData } from '../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetaAttributeValuesData.js';
//not GWT import const HtmlMetaAttributeValuesData

import { HtmlMetasData } from '../../../../../../../../../org/allbinary/logic/visual/dhtml/html/head/meta/HtmlMetasData.js';
//not GWT import const HtmlMetasData

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MetaValidation } from './MetaValidation.js';
//sameFolderImports - not GWT import - same folder const MetaValidation

export class MetasValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private storeFrontInterface: StoreFrontInterface;

    private metaValidationVector: BasicArrayList;

    public constructor(...args: any[]) {
        super();
        if(args.length === 1 && typeof args[0] === 'string') {
            this.constructor$0(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$1(args[0]);
        }
        
    }
    
    private constructor$0(storeName: string): void {
        this.storeFrontInterface= StoreFrontFactory.getInstance(storeName);
    
this.metaValidationVector= new BasicArrayListD();
    

    let contentValue: string = this.storeFrontInterface!.getName() +" E-Commerce Site";;
    

    let keywordsMetaValidation: MetaValidation = new MetaValidation(HtmlMetaAttributeDataFactory.getInstance()!.NAME, "Keywords", HtmlMetaAttributeValuesData.getInstance()!.KEYWORDS, contentValue);;
    

    let abstractMetaValidation: MetaValidation = new MetaValidation(HtmlMetaAttributeDataFactory.getInstance()!.NAME, "Abstract", HtmlMetaAttributeValuesData.getInstance()!.ABSTRACT, contentValue);;
    

    let descriptionMetaValidation: MetaValidation = new MetaValidation(HtmlMetaAttributeDataFactory.getInstance()!.NAME, "Description", HtmlMetaAttributeValuesData.getInstance()!.DESCRIPTION, contentValue);;
    
this.metaValidationVector!.add(keywordsMetaValidation);
    
this.metaValidationVector!.add(abstractMetaValidation);
    
this.metaValidationVector!.add(descriptionMetaValidation);
    

    }
    
    private constructor$1(document: Document): void {
        


                            throw new Exception(CommonStrings.getInstance()!.NOT_IMPLEMENTED);
                    

    }
    
    public isValid(): Boolean{

 try { 
    let valid: Boolean = Boolean.TRUE;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return valid;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate form", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public validationInfo(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Validating Form";
    

 }
   }
 
}


    public toValidationInfoDoc(): Document{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


    public toValidationInfoNode(document: Document): Node{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let node: Node = document.createElement(HtmlMetasData.getInstance()!.NAME)!;;
    

    let metaArray: MetaValidation[] = this.metaValidationVector!.toArrayType(new Array(this.metaValidationVector!.size())) as MetaValidation[];;
    

    let size: number = metaArray!.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let metaValidation: MetaValidation = metaArray[i]!;;
    
node.appendChild(metaValidation!.toXmlNode(document));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

