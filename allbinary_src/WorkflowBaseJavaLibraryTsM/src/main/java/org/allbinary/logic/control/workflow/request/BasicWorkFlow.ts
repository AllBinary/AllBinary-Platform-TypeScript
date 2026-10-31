
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
            import { Long } from '../../../../../../java/lang/Long.js';
        
import { Calendar } from '../../../../../../java/util/Calendar.js';
//not GWT import const Calendar

import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Set } from '../../../../../../java/util/Set.js';
//not GWT import const Set

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { StoreFrontData } from '../../../../../../org/allbinary/business/context/modules/storefront/StoreFrontData.js';
//not GWT import const StoreFrontData

import { EntryData } from '../../../../../../org/allbinary/business/entry/EntryData.js';
//not GWT import const EntryData

import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

import { DomDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/DomDocumentHelper.js';
//not GWT import const DomDocumentHelper

import { XmlDocumentHelper } from '../../../../../../org/allbinary/data/tree/dom/document/XmlDocumentHelper.js';
//not GWT import const XmlDocumentHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { RequestParams } from '../../../../../../org/allbinary/logic/communication/http/request/RequestParams.js';
//not GWT import const RequestParams

import { WeblisketSession } from '../../../../../../org/allbinary/logic/communication/http/request/session/WeblisketSession.js';
//not GWT import const WeblisketSession

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { WorkFlowData } from '../../../../../../org/allbinary/logic/control/workflow/WorkFlowData.js';
//not GWT import const WorkFlowData

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicWorkFlow
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private workFlowDoc: Document;

    private workFlowName: string;

    private storeName: string;

    public constructor(...args: any[]) {
        super();if(args.length === 0) {
            
            this.constructor$0();
            
        }
        else if(args.length === 2) {
            
            this.constructor$1(args[0], args[1]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$2(args[0]);
            
        }
        
    }
    
    private constructor$0(): void {
        this.workFlowName= StringUtil.getInstance()!.EMPTY_STRING;
    
this.workFlowDoc= DomDocumentHelper.create();
    

    let workFlowNode: Node = this.workFlowDoc!.createElement(WorkFlowData.getInstance()!.WORKFLOW)!;;
    
this.workFlowDoc!.appendChild(workFlowNode);
    

    }
    
    private constructor$1(hashMap: HashMap<any, any>, pageContext: PageContext): void {
        
    let weblisketSession: WeblisketSession = new WeblisketSession(hashMap, pageContext);;
    
this.storeName= weblisketSession!.getStoreName();
    

    let requestHashMap: HashMap<any, any> = new RequestParams(pageContext).toHashMap()!;;
    
this.workFlowName= requestHashMap!.get(WorkFlowData.getInstance()!.NAME) as string;
    
this.workFlowDoc= DomDocumentHelper.create(requestHashMap!.get(WorkFlowData.getInstance()!.DATA) as string);
    

    }
    
    private constructor$2(hashMap: HashMap<any, any>): void {
        this.workFlowName= hashMap!.get(WorkFlowData.getInstance()!.NAME) as string;
    
this.storeName= hashMap!.get(StoreFrontData.getInstance()!.NAME) as string;
    
this.workFlowDoc= DomDocumentHelper.create(hashMap!.get(WorkFlowData.getInstance()!.DATA) as string);
    

    }
    
    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.workFlowName;
    
}


    public getStoreName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.storeName;
    
}


    public getKey(): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.getName();
    
}


                //@Throws(Exception.constructor)
            
    public toVector(): BasicArrayList{

    let values: BasicArrayList = new BasicArrayListD();;
    
values.add(this.workFlowName);
    
values.add(this.storeName);
    
values.add(XmlDocumentHelper.toString(this.workFlowDoc));
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    
values.add(time);
    
values.add(time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return values;
    
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(WorkFlowData.getInstance()!.NAME, this.workFlowName);
    
hashMap!.put(StoreFrontData.getInstance()!.NAME, this.storeName);
    
hashMap!.put(WorkFlowData.getInstance()!.DATA, XmlDocumentHelper.toString(this.workFlowDoc));
    

    let calendar: Calendar = Calendar.getInstance()!;;
    

    let time: string = new Long(calendar.getTimeInMillis()).toString();;
    
hashMap!.put(EntryData.getInstance()!.LASTMODIFIED, time);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


    public toXmlNode(document: Document): Node{

 try { 
    let hashMap: HashMap<any, any> = this.toHashMap()!;;
    

    let keySet: Set = hashMap!.keys()!;;
    

    let node: Node = document.createElement(WorkFlowData.getInstance()!.WORKFLOW)!;;
    

    let nameArray: any[] = keySet!.toArray()!;;
    

    let size: number = nameArray!.length
                ;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let name: string = nameArray[index]! as string;;
    

    let value: string = hashMap!.get(name) as string;;
    
node.appendChild(ModDomHelper.createNameValueNodes(document, name, value));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlNode()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public toXmlDoc(): Document{

 try { 


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.workFlowDoc;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlDoc()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


    public isValid(): Boolean{

 try { 
    let returnBoolean: Boolean = Boolean.TRUE;;
    

                        if(this.workFlowName == 
                                    null
                                )
                        
                                    {
                                    returnBoolean= false;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return returnBoolean;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to validate", this, this.commonStrings!.IS_VALID, e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

 }
   }
 
}


    public validationInfo(): string{

 try { 
    let stringBuffer: StringMaker = new StringMaker();;
    

                        if(this.workFlowName == 
                                    null
                                )
                        stringBuffer!.append("No WorkFlow name specified.")



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEWERROR))
                        
                                    {
                                    this.logUtil!.put("Failed to generate validation error info", this, "validationInfo()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return "Error Getting Validation Info";
    

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


}

