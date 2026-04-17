
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
        



            import hilog from '@ohos.hilog';
        
            import { Integer } from "../../../java/lang/Integer.js";
        
import { Build } from "../../../android/os/Build.js";

    

export class AndroidInfoFactory
            extends Object
         {
        

            static readonly PUBLIC: string = '%{public}s';
            

    private static readonly instance: AndroidInfoFactory = new AndroidInfoFactory();
        
        

    public static getInstance(): AndroidInfoFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly version: number = Integer.parseInt(Build.VERSION.SDK)!;
        
        

    public getVersion(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return version;
    
}


}
                
            

