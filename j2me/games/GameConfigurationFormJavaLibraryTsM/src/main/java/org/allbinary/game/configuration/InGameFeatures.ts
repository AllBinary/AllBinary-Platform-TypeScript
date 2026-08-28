
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
        



//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
      const Features = globalThis.org.allbinary.game.configuration.feature.Features;

      
//not game specific package import { GameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js';
      const GameFeatureChoiceGroups = globalThis.org.allbinary.game.configuration.feature.GameFeatureChoiceGroups;

      
//not game specific package import { InGameFeatureChoiceGroups } from '../../../../org/allbinary/game/configuration/feature/InGameFeatureChoiceGroups.js';
      const InGameFeatureChoiceGroups = globalThis.org.allbinary.game.configuration.feature.InGameFeatureChoiceGroups;

      
//not game specific package import { SensorFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js';
      const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;

      
//not game specific package import { TouchFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/TouchFeatureFactory.js';
      const TouchFeatureFactory = globalThis.org.allbinary.game.configuration.feature.TouchFeatureFactory;

      
//not game specific package import { Init } from '../../../../org/allbinary/init/Init.js';
      const Init = globalThis.org.allbinary.init.Init;

      
//not game specific package import { OrientationData } from '../../../../org/allbinary/input/gyro/OrientationData.js';
      const OrientationData = globalThis.org.allbinary.input.gyro.OrientationData;

      
//not game specific package import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InGameFeatures extends Init {
        

    public init(){

    var LABEL: string = "Screen Buttons";;
    

    var orientationData: OrientationData = OrientationData.getInstance()!;;
    

    var exclusiveOrientationSensorVector: BasicArrayList = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.get(orientationData!.ORIENTATION_SENSOR_INPUT) as BasicArrayList;;
    

    var inGameFeatureChoiceGroups: InGameFeatureChoiceGroups = InGameFeatureChoiceGroups.getExclusiveInstance()!;;
    

                        if(exclusiveOrientationSensorVector != 
                                    null
                                )
                        
                                    {
                                    
    var inGameExclusiveOrientationSensorVectorCanBeNull: any = inGameFeatureChoiceGroups!.get()!.get(orientationData!.ORIENTATION_SENSOR_INPUT);;
    

                        if(inGameExclusiveOrientationSensorVectorCanBeNull == 
                                    null
                                )
                        
                                    {
                                    this.addToInGameMenu();
    

                                    }
                                
                        else {
                            
    var inGameExclusiveOrientationSensorVector: BasicArrayList = inGameExclusiveOrientationSensorVectorCanBeNull as BasicArrayList;;
    

                        if(inGameExclusiveOrientationSensorVector!.size() == 0)
                        
                                    {
                                    this.addToInGameMenu();
    

                                    }
                                

                        }
                            

                                    }
                                

    var features: Features = Features.getInstance()!;;
    

                        if(features.isFeature(TouchFeatureFactory.getInstance()!.SHOW_SCREEN_BUTTONS) || features.isFeature(TouchFeatureFactory.getInstance()!.AUTO_HIDE_SHOW_SCREEN_BUTTONS) || features.isFeature(TouchFeatureFactory.getInstance()!.HIDE_SCREEN_BUTTONS))
                        
                                    {
                                    
    var exclusiveScreenButtonsVector: BasicArrayList = new BasicArrayListD();;
    

    var touchFeatureFactory: TouchFeatureFactory = TouchFeatureFactory.getInstance()!;;
    
exclusiveScreenButtonsVector!.add(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS);
    
exclusiveScreenButtonsVector!.add(touchFeatureFactory!.SHOW_SCREEN_BUTTONS);
    
exclusiveScreenButtonsVector!.add(touchFeatureFactory!.HIDE_SCREEN_BUTTONS);
    
inGameFeatureChoiceGroups!.add(LABEL, exclusiveScreenButtonsVector);
    

                                    }
                                
}


    addToInGameMenu(){

    var orientationData: OrientationData = OrientationData.getInstance()!;;
    

    var inGameExclusiveOrientationSensorVector: BasicArrayList = new BasicArrayListD();;
    
inGameExclusiveOrientationSensorVector!.add(SensorFeatureFactory.getInstance()!.ORIENTATION_SENSORS);
    
inGameExclusiveOrientationSensorVector!.add(SensorFeatureFactory.getInstance()!.NO_ORIENTATION);
    
InGameFeatureChoiceGroups.getExclusiveInstance()!.add(orientationData!.ORIENTATION_SENSOR_INPUT, inGameExclusiveOrientationSensorVector);
    
}


    public isAny(): boolean{

    var features: Features = Features.getInstance()!;;
    

    var touchFeatureFactory: TouchFeatureFactory = TouchFeatureFactory.getInstance()!;;
    

                        if(features.isFeature(touchFeatureFactory!.SHOW_SCREEN_BUTTONS) || features.isFeature(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS) || features.isFeature(touchFeatureFactory!.HIDE_SCREEN_BUTTONS))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

    var exclusiveOrientationSensorVector: BasicArrayList = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.get(OrientationData.getInstance()!.ORIENTATION_SENSOR_INPUT) as BasicArrayList;;
    

                        if(exclusiveOrientationSensorVector != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


}



