
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
        



import { Features } from "../../../../org/allbinary/game/configuration/feature/Features.js";

    
import { GameFeatureControlledInterface } from "../../../../org/allbinary/game/configuration/feature/GameFeatureControlledInterface.js";

    
import { GraphicsFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonLabels } from "../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class FeaturedResourceFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        
public constructor (){

            super();
            }


    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly ANIMATION_FEATURES: string = "Animation Features: Vector: ";
        
        

    private readonly IMAGE_LABEL: string = " Image: ";
        
        

    private readonly IMAGE_GRAPHICS_ARRAY: string = "Image Array: ";
        
        

    private readonly IMAGE_GRAPHICS_ROTATION: string = "Image Rotate: ";
        
        

    private readonly SPRITE_QUARTER: string = " Sprite Quarter: ";
        
        

    private readonly SPRITE_FULL: string = " Sprite Full: ";
        
        

    private readonly IS_LOADING_LEVEL_LABEL: string = " isLoadingLevel ";
        
        

    private readonly IS_FEATURE: string = " isFeature: ";
        
        

    private readonly GAME_FEATURE_CONTROLLED: string = "GameFeatureControlledInterface: ";
        
        

                //@Throws(Error::class)
            
    public init(level: number){
var level = level

    var size: number = this.list.size()!;
        
        
;
    




                        for (
    var index: number = 0;
        
        
index < size; index++)
        {

    var featureInterface: GameFeatureControlledInterface = this.list.objectArray[index]! as GameFeatureControlledInterface;
        
        
;
    

    var isLoadingLevel: boolean = featureInterface!.isLoadingLevel(level)!;
        
        
;
    

    var isFeature: boolean = featureInterface!.isFeature()!;
        
        
;
    
this.logUtil!.putF(new StringMaker().
                            append(this.GAME_FEATURE_CONTROLLED)!.append(featureInterface!.toString())!.append(this.IS_LOADING_LEVEL_LABEL)!.append(ResourceLoadingLevelFactory.getInstance()!.getLevelString(level))!.append(CommonSeps.getInstance()!.COLON_SEP)!.appendboolean(isLoadingLevel)!.append(this.IS_FEATURE)!.appendboolean(isFeature)!.toString(), this, commonStrings!.INIT);
    

                        if(isLoadingLevel && isFeature)
                        
                                    {
                                    featureInterface!.init(level);
    

                                    }
                                
}


    var features: Features = Features.getInstance()!;
        
        
;
    

    var graphicsFeatureFactory: GraphicsFeatureFactory = GraphicsFeatureFactory.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(ANIMATION_FEATURES);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.VECTOR_GRAPHICS));
    
stringBuffer!.append(IMAGE_LABEL);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.IMAGE_GRAPHICS));
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    

                        if(features.isFeature(graphicsFeatureFactory!.IMAGE_GRAPHICS))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(IMAGE_GRAPHICS_ARRAY);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS));
    
stringBuffer!.append(IMAGE_GRAPHICS_ROTATION);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS));
    
stringBuffer!.append(SPRITE_QUARTER);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS));
    
stringBuffer!.append(SPRITE_FULL);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS));
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.INIT);
    

                                    }
                                
}


    public clear(){
this.list.clear();
    
}


    public add(featureInterface: GameFeatureControlledInterface){
var featureInterface = featureInterface
this.logUtil!.putF(new StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString(featureInterface))!.toString(), this, commonStrings!.ADD);
    
this.list.add(featureInterface);
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
}


}
                
            

