
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { Vector } from "../../../java/util/Vector.js";

    
import { NullUtil } from "../../../org/allbinary/logic/NullUtil.js";

    

export class NullXmlRpcHandler
            extends Object
        
                , XmlRpcHandler {
        

    public static readonly NULL_XML_RPC_HANDLER: NullXmlRpcHandler = new NullXmlRpcHandler();
        
        

                //@Throws(Error::class)
            
    public execute(method: string, params: Vector<any>): any{
var method = method
var params = params



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return NullUtil.getInstance()!.NULL_OBJECT;
    
}


}
                
            

