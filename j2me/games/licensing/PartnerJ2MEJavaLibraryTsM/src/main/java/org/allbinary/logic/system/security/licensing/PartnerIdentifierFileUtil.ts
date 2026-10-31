
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
        
import { InputStream } from '../../../../../../java/io/InputStream.js';
//not GWT import const InputStream

//not plain js import { InputStreamReader } 
const InputStreamReader = (globalThis.java?.io?.InputStreamReader ?? class {}) as typeof globalThis.java.io.InputStreamReader;
type InputStreamReader<T = any, U = any> = typeof InputStreamReader extends abstract new (...args: any[]) => infer Instance ? Instance : typeof InputStreamReader;

//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
type ResourceUtil<T = any, U = any> = typeof ResourceUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ResourceUtil;

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class PartnerIdentifierFileUtil
            extends Object
         {
        

    private static readonly instance: PartnerIdentifierFileUtil = new PartnerIdentifierFileUtil();

    public static getInstance(): PartnerIdentifierFileUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return PartnerIdentifierFileUtil.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly FILE_NAME: string = "partner.txt";

    public get(): string{

 try { 
    let resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;;
    

    let inputStream: InputStream = resourceUtil!.getResourceAsStream(this.FILE_NAME)!;;
    

    let inputStreamReader: InputStreamReader = new InputStreamReader(inputStream);;
    

    let chars: string[] = 
                                                        
                                                        new Array(30)
                                                    ;;
    

    let size: number = inputStreamReader!.read(chars)!;;
    

    let partnerString: string = StringUtil.getInstance()!.EMPTY_STRING;;
    

                        if(size > 0)
                        
                                    {
                                    partnerString= ((data: any[], offset: number, count: number) => data.slice(offset, offset + count).map(value => typeof value === 'number' ? String.fromCharCode(value & 255) : value).join(''))(chars, 0, size);
    

                                    }
                                
inputStreamReader!.close();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return partnerString;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  

    let commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return StringUtil.getInstance()!.NULL_STRING;
    

 }
   }
 
}


}

