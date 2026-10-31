
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

        


            import { Exception } from '../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { PageData } from '../../../../../../../../org/allbinary/business/page/PageData.js';
//not GWT import const PageData

import { DomNodeInterface } from '../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomSearchHelper } from '../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { Validation } from '../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
//not GWT import const Validation

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { TitleData } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js';
//not GWT import const TitleData

import { TitleValidation } from '../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleValidation.js';
//not GWT import const TitleValidation

import { Document } from '../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PageValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private title: TitleValidation;

    public constructor(...args: any[]) {
        super();if(args.length === 0) {
            
            this.constructor$0();
            
        }
        else if(args.length === 1 && args[0] instanceof Document) {
            
            this.constructor$1(args[0]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$2(args[0]);
            
        }
        
    }
    
    private constructor$0(): void {
        this.title= new TitleValidation();
    

    }
    
    private constructor$1(document: Document): void {
        
    let node: Node = DomSearchHelper.getNode(TitleData.getInstance()!.NAME, document.getElementsByTagName(PageData.getInstance()!.NAME))!;;
    
this.title= new TitleValidation(node);
    

    }
    
    private constructor$2(hashMap: HashMap<any, any>): void {
        this.getFormData(hashMap);
    

    }
    
    public getFormData(hashMap: HashMap<any, any>){
this.title= new TitleValidation(hashMap);
    
}


    public isValid(): Boolean{

 try { 
    let valid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("PageValidation", this, this.commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!this.title.isValid().valueOf())
                        
                                    {
                                    valid= false;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("PageValidation: " +valid, this, this.commonStrings!.IS_VALID);
    

                                    }
                                



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
    

                        if(!this.title.isValid().valueOf())
                        
                                    {
                                    stringBuffer!.append(this.title.validationInfo());
    

                                    }
                                



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

    let node: Node = document.createElement(PageData.getInstance()!.NAME)!;;
    
node.appendChild(this.title.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

