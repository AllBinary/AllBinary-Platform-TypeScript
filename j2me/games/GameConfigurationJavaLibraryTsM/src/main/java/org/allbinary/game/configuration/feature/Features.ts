
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
        



import { GameFeatureEvent } from "../../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js";

    
import { GameFeatureEventHandler } from "../../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js";

    
import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { PreLogUtil } from "../../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { GenericOperatingSystem } from "../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { OperatingSystemFactory } from "../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    
import { CommonLabels } from "../../../../../org/allbinary/string/CommonLabels.js";

    
import { CommonStrings } from "../../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Feature } from "./Feature.js";

import { GameFeatureFactory } from "./GameFeatureFactory.js";

import { InputFeatureFactory } from "./InputFeatureFactory.js";

import { SensorFeatureFactory } from "./SensorFeatureFactory.js";

import { TouchFeatureFactory } from "./TouchFeatureFactory.js";

import { MainFeatureFactory } from "./MainFeatureFactory.js";

export class Features
            extends Object
         {
        

    private static readonly SINGLETON: Features = new Features();
        
        

    public static getInstance(): Features{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private readonly list: BasicArrayList

    private readonly defaultList: BasicArrayList
private constructor (){

            super();
            list= new BasicArrayList();
    
defaultList= new BasicArrayList();
    
this.init();
    
}


                //@Throws(Error::class)
            
    public addDefault(gameFeature: Feature){
    //var gameFeature = gameFeature
this.add(gameFeature);
    

                        if(!defaultList!.contains(gameFeature);

                        )
                        
                                    {
                                    defaultList!.add(gameFeature);
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public add(gameFeature: Feature){
    //var gameFeature = gameFeature

                        if(!list.contains(gameFeature);

                        )
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append(gameFeature!.toString())!.toString(), this, commonStrings!.ADD);
    
list.add(gameFeature);
    
GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent(gameFeature, gameFeature!.toString()));
    

                                    }
                                
}


                //@Throws(Error::class)
            
    public removeDefault(gameFeature: Feature){
    //var gameFeature = gameFeature
this.logUtil!.putF(new StringMaker().
                            append(CommonLabels.getInstance()!.START_LABEL)!.append(gameFeature!.toString())!.toString(), this, "removeDefault");
    
this.remove(gameFeature);
    
defaultList!.remove(gameFeature);
    
}


                //@Throws(Error::class)
            
    public remove(gameFeature: Feature){
    //var gameFeature = gameFeature

                        if(list.contains(gameFeature))
                        
                                    {
                                    this.logUtil!.putF(commonStrings!.START, this, commonStrings!.REMOVE);
    
list.remove(gameFeature);
    
GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent(gameFeature, gameFeature!.toString()));
    

                                    }
                                
}


    init(){

        try {
            
    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;
        
        
;
    

    var inputFeatureFactory: InputFeatureFactory = InputFeatureFactory.getInstance()!;
        
        
;
    

    var sensorFeatureFactory: SensorFeatureFactory = SensorFeatureFactory.getInstance()!;
        
        
;
    

    var touchFeatureFactory: TouchFeatureFactory = TouchFeatureFactory.getInstance()!;
        
        
;
    
this.addDefault(gameFeatureFactory!.ARTIFICIAL_INTELLEGENCE_PROCESSOR);
    
this.addDefault(gameFeatureFactory!.COLLIDABLE_INTERFACE_LAYER_PROCESSOR);
    
this.addDefault(gameFeatureFactory!.GAME_INPUT_LAYER_PROCESSOR);
    
this.addDefault(gameFeatureFactory!.TICKABLE_LAYER_PROCESSOR);
    
this.addDefault(inputFeatureFactory!.MULTI_KEY_PRESS);
    
this.addDefault(inputFeatureFactory!.REMOVE_DUPLICATE_KEY_PRESSES);
    
this.addDefault(gameFeatureFactory!.SCREEN_SHAKE);
    
this.addDefault(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION);
    

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        
;
    

                        if(operatingSystemInterface!.isOverScan())
                        
                                    {
                                    this.addDefault(sensorFeatureFactory!.NO_ORIENTATION);
    
this.addDefault(touchFeatureFactory!.HIDE_SCREEN_BUTTONS);
    

                                    }
                                
                        else {
                            this.addDefault(sensorFeatureFactory!.ORIENTATION_SENSORS);
    
this.addDefault(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS);
    

                        }
                            
this.addDefault(touchFeatureFactory!.TOUCH_ENABLED);
    
this.addDefault(MainFeatureFactory.getInstance()!.FULL_SCREEN);
    
this.addDefault(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND);
    

                //: 
} catch(e) 
            {
PreLogUtil.putOE(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e);
    
}

}


    public isDefault(gameFeature: Feature): boolean{
var gameFeature = gameFeature



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultList!.contains(gameFeature);

                        ;
    
}


    public isFeature(gameFeature: Feature): boolean{
var gameFeature = gameFeature



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.contains(gameFeature);

                        ;
    
}


                //@Throws(Error::class)
            
    public toggle(gameFeature: Feature){
var gameFeature = gameFeature

                        if(this.isFeature(gameFeature))
                        
                                    {
                                    this.remove(gameFeature);
    

                                    }
                                
                        else {
                            this.add(gameFeature);
    

                        }
                            
}


}
                
            

