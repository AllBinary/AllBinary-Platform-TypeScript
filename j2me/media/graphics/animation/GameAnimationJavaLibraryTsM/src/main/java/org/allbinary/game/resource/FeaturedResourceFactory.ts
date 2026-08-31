
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../java/lang/Exception.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      //not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
import { GameFeatureControlledInterface } from '../../../../org/allbinary/game/configuration/feature/GameFeatureControlledInterface.js';
      //not GWT import const GameFeatureControlledInterface = globalThis.org.allbinary.game.configuration.feature.GameFeatureControlledInterface;

      
import { GraphicsFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GraphicsFeatureFactory.js';
      //not GWT import const GraphicsFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GraphicsFeatureFactory;

      
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
      const CommonSeps = globalThis.org.allbinary.string.CommonSeps;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ResourceLoadingLevelFactory } from './ResourceLoadingLevelFactory.js';
//not GWT import const ResourceLoadingLevelFactory = globalThis.org.allbinary.game.resource.ResourceLoadingLevelFactory;

                
export class FeaturedResourceFactory
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly list: BasicArrayList = new BasicArrayListD();

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

                //@Throws(Exception.constructor)
            
    public init(level: number){

    var size: number = this.list.size()!;;
    




                        for (
    var index: number = 0;index < size; index++)
        {

    var featureInterface: GameFeatureControlledInterface = this.list.objectArray[index]! as GameFeatureControlledInterface;;
    

    var isLoadingLevel: boolean = featureInterface!.isLoadingLevel(level)!;;
    

    var isFeature: boolean = featureInterface!.isFeature()!;;
    
this.logUtil!.putF(new StringMaker().append(this.GAME_FEATURE_CONTROLLED)!.append(featureInterface!.toString())!.append(this.IS_LOADING_LEVEL_LABEL)!.append(ResourceLoadingLevelFactory.getInstance()!.getLevelString(level))!.append(CommonSeps.getInstance()!.COLON_SEP)!.appendboolean(isLoadingLevel)!.append(this.IS_FEATURE)!.appendboolean(isFeature)!.toString(), this, this.commonStrings!.INIT);
    

                        if(isLoadingLevel && isFeature)
                        
                                    {
                                    featureInterface!.init(level);
    

                                    }
                                
}


    var features: Features = Features.getInstance()!;;
    

    var graphicsFeatureFactory: GraphicsFeatureFactory = GraphicsFeatureFactory.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.ANIMATION_FEATURES);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.VECTOR_GRAPHICS));
    
stringBuffer!.append(this.IMAGE_LABEL);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.IMAGE_GRAPHICS));
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.INIT);
    

                        if(features.isFeature(graphicsFeatureFactory!.IMAGE_GRAPHICS))
                        
                                    {
                                    stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append(this.IMAGE_GRAPHICS_ARRAY);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS));
    
stringBuffer!.append(this.IMAGE_GRAPHICS_ROTATION);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS));
    
stringBuffer!.append(this.SPRITE_QUARTER);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS));
    
stringBuffer!.append(this.SPRITE_FULL);
    
stringBuffer!.appendboolean(features.isFeature(graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS));
    
this.logUtil!.putF(stringBuffer!.toString(), this, this.commonStrings!.INIT);
    

                                    }
                                
}


    public clear(){
this.list.clear();
    
}


    public add(featureInterface: GameFeatureControlledInterface){
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString(featureInterface))!.toString(), this, this.commonStrings!.ADD);
    
this.list.add(featureInterface);
    
}


    public getList(): BasicArrayList{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list;
    
}


}



