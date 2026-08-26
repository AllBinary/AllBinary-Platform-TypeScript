
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
        



//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { ResourceLoadingLevel } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevel.js';
      const ResourceLoadingLevel = globalThis.org.allbinary.game.resource.ResourceLoadingLevel;

      
//not game specific package import { ResourceLoadingLevelFactory } from '../../../../../org/allbinary/game/resource/ResourceLoadingLevelFactory.js';
      const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

      
//not game specific package import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
      const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
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
                
            

