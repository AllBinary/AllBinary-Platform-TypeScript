
        /* Generated Code Do Not Modify */
        



            import Vector from "@ohos.util.Vector";
        
import { IOException } from "../../../java/io/IOException.js";

    
import { MalformedURLException } from "../../../java/net/MalformedURLException.js";

    
import { URL } from "../../../java/net/URL.js";

    

//import { Vector } from "../../../java/util/Vector.js";

    
import { CryptInterface } from "../../../org/allbinary/init/crypt/jcehelper/CryptInterface.js";

    
import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    

export class XmlRpcClient
            extends Object
        
                , XmlRpcHandler {
        

    private readonly url: URL
public constructor (url: URL){

            super();
            var url = url
this.url= url;
    
}

public constructor (url: string)                        

                            : this(new URL(url)){

            super();
            var url = url


                            //For kotlin this is before the body of the constructor.
                    
}

public constructor (hostname: string, port: number)                        

                            : this(new URL("http://" +hostname +':' +port +"/RPC2")){

            super();
            var hostname = hostname
var port = port


                            //For kotlin this is before the body of the constructor.
                    
}


    public getURL(): URL{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.url;
    
}


    public setBasicAuthentication(user: string, password: string){
var user = user
var password = password
}


                //@Throws(XmlRpcException::class, IOException::class)
            
    public execute(method: string, params: Vector<any>): any{
var method = method
var params = params



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


                //@Throws(XmlRpcException::class, IOException::class)
            
    public execute(method: string, params: Vector<any>, cryptInterface: CryptInterface): any{
var method = method
var params = params
var cryptInterface = cryptInterface



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


}
                
            

