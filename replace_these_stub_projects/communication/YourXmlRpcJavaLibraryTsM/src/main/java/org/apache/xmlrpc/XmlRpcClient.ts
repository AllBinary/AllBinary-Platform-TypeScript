
        /* Generated Code Do Not Modify */

        


            import { Object } from '../../../java/lang/Object.js';
        
import { IOException } from '../../../java/io/IOException.js';
      //not GWT import const IOException = globalThis.java.io.IOException;

      
import { MalformedURLException } from '../../../java/net/MalformedURLException.js';
      //not GWT import const MalformedURLException = globalThis.java.net.MalformedURLException;

      
import { URL } from '../../../java/net/URL.js';
      //not GWT import const URL = globalThis.java.net.URL;

      
import { Vector } from '../../../java/util/Vector.js';
      //not GWT import const Vector = globalThis.java.util.Vector;

      
import { CryptInterface } from '../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
      //not GWT import const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;

      
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { XmlRpcHandler } from './XmlRpcHandler.js';
//not GWT import const  = globalThis.org.apache.xmlrpc.XmlRpcHandler;

                
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


                //@Throws(XmlRpcException.constructor, IOException.constructor)
            
    public execute(method: string, params: Vector<any>): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


                //@Throws(XmlRpcException.constructor, IOException.constructor)
            
    public execute(method: string, params: Vector<any>, cryptInterface: CryptInterface): any{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


}



