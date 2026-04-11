
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

    
import { GameFeatureChoiceGroups } from "../../../../org/allbinary/game/configuration/feature/GameFeatureChoiceGroups.js";

    
import { InGameFeatureChoiceGroups } from "../../../../org/allbinary/game/configuration/feature/InGameFeatureChoiceGroups.js";

    
import { SensorFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/SensorFeatureFactory.js";

    
import { TouchFeatureFactory } from "../../../../org/allbinary/game/configuration/feature/TouchFeatureFactory.js";

    
import { Init } from "../../../../org/allbinary/init/Init.js";

    
import { OrientationData } from "../../../../org/allbinary/input/gyro/OrientationData.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class InGameFeatures extends Init {
        

    public init(){

    var LABEL: string = "Screen Buttons";
        
        
;
    

    var orientationData: OrientationData = OrientationData.getInstance()!;
        
        
;
    

    var exclusiveOrientationSensorVector: BasicArrayList = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.get(orientationData!.ORIENTATION_SENSOR_INPUT as Object);

                         as BasicArrayList;
        
        
;
    

    var inGameFeatureChoiceGroups: InGameFeatureChoiceGroups = InGameFeatureChoiceGroups.getExclusiveInstance()!;
        
        
;
    

                        if(exclusiveOrientationSensorVector != 
                                    null
                                )
                        
                                    {
                                    
    var inGameExclusiveOrientationSensorVectorCanBeNull: any = {}? = inGameFeatureChoiceGroups!.get()!.get(orientationData!.ORIENTATION_SENSOR_INPUT as Object);
        
        
;
    

                        if(inGameExclusiveOrientationSensorVectorCanBeNull == 
                                    null
                                )
                        
                                    {
                                    this.addToInGameMenu();
    

                                    }
                                
                        else {
                            
    var inGameExclusiveOrientationSensorVector: BasicArrayList = inGameExclusiveOrientationSensorVectorCanBeNull as BasicArrayList;
        
        
;
    

                        if(inGameExclusiveOrientationSensorVector!.size() == 0)
                        
                                    {
                                    this.addToInGameMenu();
    

                                    }
                                

                        }
                            

                                    }
                                

    var features: Features = Features.getInstance()!;
        
        
;
    

                        if(features.isFeature(TouchFeatureFactory.getInstance()!.SHOW_SCREEN_BUTTONS) || features.isFeature(TouchFeatureFactory.getInstance()!.AUTO_HIDE_SHOW_SCREEN_BUTTONS) || features.isFeature(TouchFeatureFactory.getInstance()!.HIDE_SCREEN_BUTTONS))
                        
                                    {
                                    
    var exclusiveScreenButtonsVector: BasicArrayList = new BasicArrayList();
        
        
;
    

    var touchFeatureFactory: TouchFeatureFactory = TouchFeatureFactory.getInstance()!;
        
        
;
    
exclusiveScreenButtonsVector!.add(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS);
    
exclusiveScreenButtonsVector!.add(touchFeatureFactory!.SHOW_SCREEN_BUTTONS);
    
exclusiveScreenButtonsVector!.add(touchFeatureFactory!.HIDE_SCREEN_BUTTONS);
    
inGameFeatureChoiceGroups!.add(LABEL, exclusiveScreenButtonsVector);
    

                                    }
                                
}


    addToInGameMenu(){

    var orientationData: OrientationData = OrientationData.getInstance()!;
        
        
;
    

    var inGameExclusiveOrientationSensorVector: BasicArrayList = new BasicArrayList();
        
        
;
    
inGameExclusiveOrientationSensorVector!.add(SensorFeatureFactory.getInstance()!.ORIENTATION_SENSORS);
    
inGameExclusiveOrientationSensorVector!.add(SensorFeatureFactory.getInstance()!.NO_ORIENTATION);
    
InGameFeatureChoiceGroups.getExclusiveInstance()!.add(orientationData!.ORIENTATION_SENSOR_INPUT, inGameExclusiveOrientationSensorVector);
    
}


    public isAny(): boolean{

    var features: Features = Features.getInstance()!;
        
        
;
    

    var touchFeatureFactory: TouchFeatureFactory = TouchFeatureFactory.getInstance()!;
        
        
;
    

                        if(features.isFeature(touchFeatureFactory!.SHOW_SCREEN_BUTTONS) || features.isFeature(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS) || features.isFeature(touchFeatureFactory!.HIDE_SCREEN_BUTTONS))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                

    var exclusiveOrientationSensorVector: BasicArrayList = GameFeatureChoiceGroups.getExclusiveInstance()!.get()!.get(OrientationData.getInstance()!.ORIENTATION_SENSOR_INPUT as Object);

                         as BasicArrayList;
        
        
;
    

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
                
            

