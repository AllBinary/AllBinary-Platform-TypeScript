
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../java/lang/Object.js';
        
//not game specific package import { IOException } from '../../../java/io/IOException.js';
      const IOException = globalThis.java.io.IOException;

      
//not game specific package import { MalformedURLException } from '../../../java/net/MalformedURLException.js';
      const MalformedURLException = globalThis.java.net.MalformedURLException;

      
//not game specific package import { URL } from '../../../java/net/URL.js';
      const URL = globalThis.java.net.URL;

      
//not game specific package import { Vector } from '../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { CryptInterface } from '../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js';
      const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;

      
//not game specific package import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { XmlRpcHandler } from './XmlRpcHandler.js';

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



