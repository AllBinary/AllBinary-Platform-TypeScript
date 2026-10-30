
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { Validation } from '../../../../../../../../../org/allbinary/logic/control/validate/Validation.js';
//not GWT import const Validation

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { LogoData } from '../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/logo/LogoData.js';
//not GWT import const LogoData

import { LogoValidation } from '../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/logo/LogoValidation.js';
//not GWT import const LogoValidation

import { TitleData } from '../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleData.js';
//not GWT import const TitleData

import { TitleValidation } from '../../../../../../../../../org/allbinary/logic/visual/transform/template/customizer/widgets/title/TitleValidation.js';
//not GWT import const TitleValidation

import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

import { NodeList } from '../../../../../../../../../org/w3c/dom/NodeList.js';
//not GWT import const NodeList

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { HeadingData } from './HeadingData.js';
//not GWT import - same folder const HeadingData

export class HeadingValidation extends Validation implements DomNodeInterface {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private title: TitleValidation;

    private logo: LogoValidation;

public constructor (){

            super();
        this.title= new TitleValidation();
    
this.logo= new LogoValidation();
    
}


public constructor (document: Document){

            super();
        
    let headingNodeList: NodeList = document.getElementsByTagName(HeadingData.NAME)!;;
    

    let titleNode: Node = DomSearchHelper.getNode(TitleData.getInstance()!.NAME, headingNodeList!.item(0)!.getChildNodes())!;;
    

    let logoNode: Node = DomSearchHelper.getNode(LogoData.getInstance()!.NAME, headingNodeList!.item(0)!.getChildNodes())!;;
    
this.title= new TitleValidation(titleNode);
    
this.logo= new LogoValidation(logoNode);
    
}


public constructor (hashMap: HashMap<any, any>){

            super();
        this.getFormData(hashMap);
    
}


                //@Throws(Exception.constructor)
            
    public getFormData(hashMap: HashMap<any, any>){
this.title= new TitleValidation(hashMap);
    
this.logo= new LogoValidation(hashMap);
    
}


    public isValid(): Boolean{

 try { 
    let valid: Boolean = Boolean.TRUE;;
    

    let titleValid: Boolean = Boolean.TRUE;;
    

    let logoValid: Boolean = Boolean.TRUE;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.IS_VALID);
    

                                    }
                                

                        if(!this.title.isValid().valueOf())
                        
                                    {
                                    titleValid= false;
    

                                    }
                                

                        if(!this.logo.isValid().valueOf())
                        
                                    {
                                    logoValid= false;
    

                                    }
                                
                        else {
                            this.logo.processLogoFile();
    

                        }
                            

                        if(!titleValid.valueOf() && !logoValid.valueOf())
                        
                                    {
                                    valid= false;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("HeadingValidation: " +valid, this, this.commonStrings!.IS_VALID);
    

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
    let valid: Boolean = Boolean.TRUE;;
    

    let titleValid: Boolean = Boolean.TRUE;;
    

    let logoValid: Boolean = Boolean.TRUE;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(!this.title.isValid().valueOf())
                        
                                    {
                                    titleValid= false;
    

                                    }
                                

                        if(!this.logo.isValid().valueOf())
                        
                                    {
                                    logoValid= false;
    

                                    }
                                

                        if(!titleValid.valueOf() && !logoValid.valueOf())
                        
                                    {
                                    valid= false;
    

                                    }
                                

                        if(!valid.valueOf())
                        
                                    {
                                    stringBuffer!.append("Include a title and/or logo for the header.");
    

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

    let node: Node = document.createElement(HeadingData.NAME)!;;
    
node.appendChild(this.logo.toXmlNode(document));
    
node.appendChild(this.title.toXmlNode(document));
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
}


}

