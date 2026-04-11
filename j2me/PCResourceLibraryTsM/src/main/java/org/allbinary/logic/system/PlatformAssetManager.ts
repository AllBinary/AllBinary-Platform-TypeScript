
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2022 AllBinary 
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
        



import { InputStream } from "../../../../java/io/InputStream.js";

    
import { ResourceUtil } from "../../../../org/allbinary/data/resource/ResourceUtil.js";

    

export class PlatformAssetManager
            extends Object
         {
        

    private static readonly instance: PlatformAssetManager = new PlatformAssetManager();
        
        

    public static getInstance(): PlatformAssetManager{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


                //@Throws(Error::class)
            
    public getResourceAsStream(resource: string): InputStream{
    //var resource = resource

    var resourceUtil: ResourceUtil = ResourceUtil.getInstance()!;
        
        
;
    

    var inputStream: InputStream = resourceUtil!.getResourceAsStream(resource)!;
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return inputStream;
    
}


}
                
            

