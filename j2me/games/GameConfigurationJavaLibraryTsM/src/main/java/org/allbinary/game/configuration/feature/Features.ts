
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameFeatureEvent } from '../../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js';
//not GWT import const GameFeatureEvent = globalThis.org.allbinary.game.configuration.event.GameFeatureEvent;

      
import { GameFeatureEventHandler } from '../../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js';
//not GWT import const GameFeatureEventHandler = globalThis.org.allbinary.game.configuration.event.GameFeatureEventHandler;

      
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { GenericOperatingSystem } from '../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
//not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

      
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Feature } from './Feature.js';
//not GWT import - same folder const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;

                import { GameFeatureFactory } from './GameFeatureFactory.js';
//not GWT import - same folder const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;

                import { InputFeatureFactory } from './InputFeatureFactory.js';
//not GWT import - same folder const InputFeatureFactory = globalThis.org.allbinary.game.configuration.feature.InputFeatureFactory;

                import { SensorFeatureFactory } from './SensorFeatureFactory.js';
//not GWT import - same folder const SensorFeatureFactory = globalThis.org.allbinary.game.configuration.feature.SensorFeatureFactory;

                import { TouchFeatureFactory } from './TouchFeatureFactory.js';
//not GWT import - same folder const TouchFeatureFactory = globalThis.org.allbinary.game.configuration.feature.TouchFeatureFactory;

                import { MainFeatureFactory } from './MainFeatureFactory.js';
//not GWT import - same folder const MainFeatureFactory = globalThis.org.allbinary.game.configuration.feature.MainFeatureFactory;

                
export class Features
            extends Object
         {
        

    private static SINGLETON: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): Features{

                        if(Features.SINGLETON == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    Features.SINGLETON= new Features();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Features.SINGLETON as Features;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly list: BasicArrayList;

    private readonly defaultList: BasicArrayList;

private constructor (){

            super();
        this.list= new BasicArrayListD();
    
this.defaultList= new BasicArrayListD();
    
this.init();
    
}


                //@Throws(Exception.constructor)
            
    public addDefault(gameFeature: Feature){
this.add(gameFeature);
    

                        if(!this.defaultList!.contains(gameFeature))
                        
                                    {
                                    this.defaultList!.add(gameFeature);
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public add(gameFeature: Feature){

                        if(!this.list.contains(gameFeature))
                        
                                    {
                                    this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append(gameFeature!.toString())!.toString(), this, this.commonStrings!.ADD);
    
this.list.add(gameFeature);
    
GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent(gameFeature, gameFeature!.toString()));
    

                                    }
                                
}


                //@Throws(Exception.constructor)
            
    public removeDefault(gameFeature: Feature){
this.logUtil!.putF(new StringMaker().append(CommonLabels.getInstance()!.START_LABEL)!.append(gameFeature!.toString())!.toString(), this, "removeDefault");
    
this.remove(gameFeature);
    
this.defaultList!.remove(gameFeature);
    
}


                //@Throws(Exception.constructor)
            
    public remove(gameFeature: Feature){

                        if(this.list.contains(gameFeature))
                        
                                    {
                                    this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.REMOVE);
    
this.list.remove(gameFeature);
    
GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent(gameFeature, gameFeature!.toString()));
    

                                    }
                                
}


    init(){

        try {
            
    var gameFeatureFactory: GameFeatureFactory = GameFeatureFactory.getInstance()!;;
    

    var inputFeatureFactory: InputFeatureFactory = InputFeatureFactory.getInstance()!;;
    

    var sensorFeatureFactory: SensorFeatureFactory = SensorFeatureFactory.getInstance()!;;
    

    var touchFeatureFactory: TouchFeatureFactory = TouchFeatureFactory.getInstance()!;;
    
this.addDefault(gameFeatureFactory!.ARTIFICIAL_INTELLEGENCE_PROCESSOR);
    
this.addDefault(gameFeatureFactory!.COLLIDABLE_INTERFACE_LAYER_PROCESSOR);
    
this.addDefault(gameFeatureFactory!.GAME_INPUT_LAYER_PROCESSOR);
    
this.addDefault(gameFeatureFactory!.TICKABLE_LAYER_PROCESSOR);
    
this.addDefault(inputFeatureFactory!.MULTI_KEY_PRESS);
    
this.addDefault(inputFeatureFactory!.REMOVE_DUPLICATE_KEY_PRESSES);
    
this.addDefault(gameFeatureFactory!.SCREEN_SHAKE);
    
this.addDefault(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION);
    

    var operatingSystemInterface: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;;
    

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
PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e);
    
}

}


    public isDefault(gameFeature: Feature): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultList!.contains(gameFeature);;
    
}


    public isFeature(gameFeature: Feature): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.list.contains(gameFeature);;
    
}


                //@Throws(Exception.constructor)
            
    public toggle(gameFeature: Feature){

                        if(this.isFeature(gameFeature))
                        
                                    {
                                    this.remove(gameFeature);
    

                                    }
                                
                        else {
                            this.add(gameFeature);
    

                        }
                            
}


}



