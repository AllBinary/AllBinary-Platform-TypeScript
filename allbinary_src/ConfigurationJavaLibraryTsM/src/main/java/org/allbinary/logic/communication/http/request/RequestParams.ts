
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
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
//not GWT import const HashMap

import { Map } from '../../../../../../java/util/Map.js';
//not GWT import const Map

import { Set } from '../../../../../../java/util/Set.js';
//not GWT import const Set

import { HttpServletRequest } from '../../../../../../javax/servlet/http/HttpServletRequest.js';
//not GWT import const HttpServletRequest

import { PageContext } from '../../../../../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { ModDomHelper } from '../../../../../../org/allbinary/data/tree/dom/ModDomHelper.js';
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

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { Document } from '../../../../../../org/w3c/dom/Document.js';
//not GWT import const Document

import { Node } from '../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { RequestData } from './RequestData.js';
//sameFolderImports - not GWT import - same folder const RequestData
//Note: if request is destroyed or messed up this will not work. Use fileRequestParams
export class RequestParams
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private map: Map;

    public constructor(...args: any[]) {
        super();
        if(args.length === 0) {
            this.constructor$0();
        }
        else if(args.length === 1 && args[0] instanceof HttpServletRequest) {
            this.constructor$1(args[0]);
        }
        else if(args.length === 1) {
            this.constructor$2(args[0]);
        }
        
    }
    
    private constructor$0(): void {
        this.logUtil!.putF("New RequestParams Size: 0", this, this.commonStrings!.CONSTRUCTOR);
    

    }
    
    private constructor$1(request: HttpServletRequest): void {
        this.map= request.getParameterMap();
    
this.logUtil!.putF("RequestParams Size: " +this.getMap()!.keySet()!.size(), this, this.commonStrings!.CONSTRUCTOR);
    

    }
    
    private constructor$2(pageContext: PageContext): void {
        this.map= pageContext!.getRequest()!.getParameterMap();
    
this.logUtil!.putF("Request Params Size: " +this.getMap()!.keySet()!.size(), this, this.commonStrings!.CONSTRUCTOR);
    

    }
    
    setMap(map: Map){
this.map= map;
    
}


    getMap(): Map{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.map;
    
}


    private readonly KEY: string = "Key: ";

    private readonly VALUE: string = " Value: ";

    public toXmlNode(document: Document): Node{

 try { 
    let node: Node = document.createElement(RequestData.REQUEST)!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let keys: Set = this.map.keySet()!;;
    

    let keyArray: any[] = keys.toArray()!;;
    

    let size: number = keyArray!.length
                ;;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let key: string = keyArray[i]! as string;;
    

    let values: string[] = this.map.get(key) as string[];;
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.KEY);
    
stringBuffer!.append(key);
    
stringBuffer!.append(this.VALUE);
    
stringBuffer!.append(values[0]!);
    
this.logUtil!.putF(stringBuffer!.toString(), this, "toXmlNode(document)");
    
node.appendChild(ModDomHelper.createNameValueNodes(document, RequestData.PARAMETER, key.toCharArray().slice(0, ).join(''), .toCharArray()));
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return node;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "toXmlNode(document)", e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

 }
   }
 
}


                //@Throws(Exception.constructor)
            
    public toHashMap(): HashMap<any, any>{

    let hashMap: HashMap<any, any> = StdUtil.getInstance()!.createHashMap()!;;
    

    let keys: Set = this.map.keySet()!;;
    

    let keyArray: any[] = keys.toArray()!;;
    

    let size: number = keyArray!.length
                ;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    




                        for (
    let i: number = 0;i < size; i++)
        {

    let key: string = keyArray[i]! as string;;
    

    let values: string[] = this.map.get(key) as string[];;
    
hashMap!.put(key.toCharArray().slice(0, ).join(''), .toCharArray());
    
}

stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("RequestParams: ");
    
stringBuffer!.append(this.map.toString());
    
stringBuffer!.append("\ntoHashMap: ");
    
stringBuffer!.append(hashMap!.toString());
    
this.logUtil!.putF(stringBuffer!.toString(), this, "toHashMap()");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


}

