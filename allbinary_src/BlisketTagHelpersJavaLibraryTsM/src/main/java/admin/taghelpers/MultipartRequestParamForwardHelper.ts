
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

        


            import { Object } from '../../java/lang/Object.js';
        
            import { Exception } from '../../java/lang/Exception.js';
        
import { HashMap } from '../../java/util/HashMap.js';
//not GWT import const HashMap

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { PageContext } from '../../javax/servlet/jsp/PageContext.js';
//not GWT import const PageContext

import { GLOBALS2 } from '../../org/allbinary/globals/GLOBALS2.js';
//not GWT import const GLOBALS2

import { RequestMapInterface } from '../../org/allbinary/logic/communication/http/request/RequestMapInterface.js';
//not GWT import const RequestMapInterface

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

import { StringValidationUtil } from '../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const StringValidationUtil

//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
type CommonSeps<T = any, U = any> = typeof CommonSeps extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonSeps;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

import { HelperTag } from '../../tags/HelperTag.js';
//not GWT import const HelperTag

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InventoryItemViewParentTagHelper } from './InventoryItemViewParentTagHelper.js';
//sameFolderImports - not GWT import - same folder const InventoryItemViewParentTagHelper

export class MultipartRequestParamForwardHelper
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly pageContext: PageContext;

    private readonly requestMapInterface: RequestMapInterface;

    private readonly page: string;

    private readonly command: string;

    private readonly paramVector: BasicArrayList;

public constructor (parentHelperTag: HelperTag, page: string, command: string, paramVector: BasicArrayList, pageContext: PageContext){

            super();
        this.pageContext= pageContext;
    
this.page= page;
    
this.command= command;
    
this.paramVector= paramVector;
    
this.requestMapInterface= InventoryItemViewParentTagHelper.getInstance()!.getRequestMapInterface(parentHelperTag);
    
}


                //@Throws(Exception.constructor)
            
    public forward(){

 try { 
                        if(this.shouldForward())
                        
                                    {
                                    
    let params: string = this.getParams()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.page);
    
stringBuffer!.append(params);
    
this.pageContext!.forward(stringBuffer!.toString());
    

                                    }
                                
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

                        if(org.allbinary.logic.communication.log.config.type.LogConfigTypes.LOGGING.contains(org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory.getInstance()!.SQLTAGSERROR))
                        
                                    {
                                    this.logUtil!.put(commonStrings!.EXCEPTION, this, "forward()", e);
    

                                    }
                                

 }
   }
 
}


    getParams(): string{

    let commonSeps: CommonSeps = CommonSeps.getInstance()!;;
    

    let AMP: string = commonSeps!.AMPERSAND;;
    

    let QUESTION: string = commonSeps!.QUESTION;;
    

    let EQUALS: string = commonSeps!.EQUALS;;
    

    let hashMap: HashMap<any, any> = this.requestMapInterface!.getRequestHashMap()!;;
    

    let stringBuffer: StringMaker = new StringMaker();;
    

    let size: number = this.paramVector!.size()!;;
    




                        for (
    let index: number = 0;index < size; index++)
        {

    let key: string = this.paramVector!.get(index) as string;;
    

    let value: string = hashMap!.get(key) as string;;
    

                        if(index != 0)
                        
                                    {
                                    stringBuffer!.append(AMP);
    

                                    }
                                
                        else {
                            stringBuffer!.append(QUESTION);
    

                        }
                            
stringBuffer!.append(key);
    
stringBuffer!.append(EQUALS);
    
stringBuffer!.append(value);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    shouldForward(): boolean{

    let hashMap: HashMap<any, any> = this.requestMapInterface!.getRequestHashMap()!;;
    

    let requestCommand: string = hashMap!.get(GLOBALS2.ADMINCOMMAND) as string;;
    

                        if(StringValidationUtil.getInstance()!.isEmpty(this.command) || (!StringValidationUtil.getInstance()!.isEmpty(requestCommand) && this.command.compareTo(requestCommand) == 0))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}

