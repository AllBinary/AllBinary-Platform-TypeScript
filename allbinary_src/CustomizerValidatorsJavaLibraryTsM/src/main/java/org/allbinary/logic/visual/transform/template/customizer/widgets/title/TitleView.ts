
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

        


            import { Object } from '../../../../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { HashMap } from '../../../../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { DomData } from '../../../../../../../../../org/allbinary/data/tree/dom/DomData.js';
//not GWT import const DomData

import { DomNodeHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js';
//not GWT import const DomNodeHelper

import { DomNodeInterface } from '../../../../../../../../../org/allbinary/data/tree/dom/DomNodeInterface.js';
//not GWT import const DomNodeInterface

import { DomSearchHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js';
//not GWT import const DomSearchHelper

import { ModDomHelper } from '../../../../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
//not GWT import const ModDomHelper

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

import { StringValidationUtil } from '../../../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TitleData } from './TitleData.js';
//sameFolderImports - not GWT import - same folder const TitleData

export class TitleView
            extends Object
         implements DomNodeInterface {
        

    private static readonly NAME: string = "None";

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private title: string;

    public constructor(...args: any[]) {
        super();if(args.length === 0) {
            
            this.constructor$0();
            
        }
        else if(args.length === 1 && args[0] instanceof Node) {
            
            this.constructor$1(args[0]);
            
        }
        else if(args.length === 1) {
            
            this.constructor$2(args[0]);
            
        }
        
    }
    
    private constructor$0(): void {
        this.title= TitleView.NAME;
    

    }
    
    private constructor$1(node: Node): void {
        
    let titleTextNode: Node = DomSearchHelper.getNode(TitleData.getInstance()!.TEXT, node.getChildNodes())!;;
    

    let valueNode: Node = DomSearchHelper.getNode(DomData.VALUE, titleTextNode!.getChildNodes())!;;
    
this.title= DomNodeHelper.getTextNodeValue(valueNode);
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.title))
                        
                                    {
                                    this.title= TitleView.NAME;
    

                                    }
                                

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("Title: " +this.getTitle(), this, "Consructor()");
    

                                    }
                                

    }
    
    private constructor$2(hashMap: HashMap<any, any>): void {
        
                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("HashMap: " +hashMap!.toString(), this, this.commonStrings!.CONSTRUCTOR);
    

                                    }
                                
this.getFormData(hashMap);
    

    }
    
    public getTitle(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.title;
    
}


    public getFormData(hashMap: HashMap<any, any>){
this.title= hashMap!.get(TitleData.getInstance()!.TEXT) as string;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.title))
                        
                                    {
                                    this.title= TitleView.NAME;
    

                                    }
                                
}


    public toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    
hashMap!.put(TitleData.getInstance()!.TEXT, this.getTitle());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


                //@Throws(Exception.constructor)
            
    public toXmlNode(document: Document): Node{

    let hashMap: HashMap<any, any> = this.toHashMap()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.VIEW))
                        
                                    {
                                    this.logUtil!.putF("TitleView HashMap: " +hashMap!.toString(), this, "toXmlNode()");
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ModDomHelper.createNameValueNodes(document, TitleData.getInstance()!.NAME, hashMap);;
    
}


}

