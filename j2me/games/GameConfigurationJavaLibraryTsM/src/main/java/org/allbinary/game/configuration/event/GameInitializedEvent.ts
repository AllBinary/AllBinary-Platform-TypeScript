
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
        



import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { ResourceLoadingLevel } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevel.js';
      //not GWT import const ResourceLoadingLevel = globalThis.org.allbinary.game.resource.ResourceLoadingLevel;

      
import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
      //not GWT import const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

      
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      //not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameInitializedEvent extends AllBinaryEventObject {
        

    private resourceLoadingLevel: ResourceLoadingLevel = ResourceLoadingLevelFactory.getInstance()!.LEVEL;

    private level: number= 0;

public constructor (anyType: any = {}){
            super(anyType);
                    

                            //For kotlin this is before the body of the constructor.
                    
}


    public setLevel(level: number){
this.level= level;
    
this.resourceLoadingLevel= ResourceLoadingLevelFactory.getInstance()!.LEVEL;
    
}


    public getLevel(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.level;
    
}


    public setResourceLoadingLevel(resourceLoadingLevel: ResourceLoadingLevel){
this.resourceLoadingLevel= resourceLoadingLevel;
    
this.level= this.resourceLoadingLevel!.getLevel();
    
}


    public getResourceLoadingLevel(): ResourceLoadingLevel{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.resourceLoadingLevel;
    
}


}



