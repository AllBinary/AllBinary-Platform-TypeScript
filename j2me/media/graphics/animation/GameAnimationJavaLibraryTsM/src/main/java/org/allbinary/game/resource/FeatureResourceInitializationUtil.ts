
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
        



import { FeaturedAnimationInterfaceFactoryInterfaceFactory } from "../../../../org/allbinary/animation/FeaturedAnimationInterfaceFactoryInterfaceFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    

export class FeatureResourceInitializationUtil
            extends Object
         {
        

    private static readonly instance: FeatureResourceInitializationUtil = new FeatureResourceInitializationUtil();
        
        

    public static getInstance(): FeatureResourceInitializationUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

                //@Throws(Error::class)
            
    public init(level: number){
var level = level

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    
this.logUtil!.putF(commonStrings!.START, this, commonStrings!.INIT);
    

    var featuredResourceFactory: FeaturedResourceFactory = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!;
        
        
;
    
featuredResourceFactory!.init(level);
    
FeaturedResourceRelativeRelationshipFactory.getInstance()!.init(level);
    
}


}
                
            

