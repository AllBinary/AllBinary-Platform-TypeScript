
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
import { IOException } from '../../../java/io/IOException.js';
//not GWT import const IOException

//not plain js import { MalformedURLException } 
const MalformedURLException = globalThis.java.net.MalformedURLException;
type MalformedURLException<T = any, U = any> = typeof MalformedURLException extends abstract new (...args: any[]) => infer Instance ? Instance : typeof MalformedURLException;

//not plain js import { URL } 
const URL = globalThis.java.net.URL;
type URL<T = any, U = any> = typeof URL extends abstract new (...args: any[]) => infer Instance ? Instance : typeof URL;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

import { CryptInterface } from '../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
//not GWT import const CryptInterface

//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
type NullUtil<T = any, U = any> = typeof NullUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof NullUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { XmlRpcHandler } from './XmlRpcHandler.js';
//sameFolderImports - not GWT import - same folder const XmlRpcHandler

export class XmlRpcClient
            extends Object
         implements XmlRpcHandler {
        

    private readonly url: URL;

public constructor (url: string){

            super();
        this.url= new URL(url);
    
}


    public getURL(): URL{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.url;
    
}


    public setBasicAuthentication(user: string, password: string){
}

execute(...args: any[]): any {
   
    if (args.length === 2 && typeof args[0] === 'string') return this.execute$overload1(args[0], args[1]);
   
    if (args.length === 3 && typeof args[0] === 'string') return this.execute$overload2(args[0], args[1], args[2]);
   
   throw new TypeError('No matching overload: execute'); }
  
                //@Throws(XmlRpcException.constructor, IOException.constructor)
            
    public execute$overload1(method: string, params: BasicArrayList): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


                //@Throws(XmlRpcException.constructor, IOException.constructor)
            
    public execute$overload2(method: string, params: BasicArrayList, cryptInterface: CryptInterface): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


}

