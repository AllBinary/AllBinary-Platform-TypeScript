
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
        



import { ResourceLoadingLevel } from "../../../../../org/allbinary/game/resource/ResourceLoadingLevel.js";

    
import { ResourceLoadingLevelFactory } from "../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js";

    
import { AllBinaryEventObject } from "../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js";

    

export class GameInitializedEvent extends AllBinaryEventObject {
        

    private resourceLoadingLevel: ResourceLoadingLevel = ResourceLoadingLevelFactory.getInstance()!.LEVEL;
        
        

    private level: number= 0
public constructor (anyType: any = {})                        

                            : super(anyType){

            super();
            var anyType = anyType


                            //For kotlin this is before the body of the constructor.
                    
}


    public setLevel(level: number){
var level = level
this.level= level;
    
this.resourceLoadingLevel= ResourceLoadingLevelFactory.getInstance()!.LEVEL;
    
}


    public getLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return level;
    
}


    public setResourceLoadingLevel(resourceLoadingLevel: ResourceLoadingLevel){
var resourceLoadingLevel = resourceLoadingLevel
this.resourceLoadingLevel= resourceLoadingLevel;
    
level= this.resourceLoadingLevel!.getLevel();
    
}


    public getResourceLoadingLevel(): ResourceLoadingLevel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return resourceLoadingLevel;
    
}


}
                
            

