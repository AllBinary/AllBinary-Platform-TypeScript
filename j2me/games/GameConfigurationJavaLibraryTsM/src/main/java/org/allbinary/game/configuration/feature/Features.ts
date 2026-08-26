
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
        
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { GameFeatureEvent } from '../../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js';
      const GameFeatureEvent = globalThis.org.allbinary.game.configuration.event.GameFeatureEvent;

      
//not game specific package import { GameFeatureEventHandler } from '../../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js';
      const GameFeatureEventHandler = globalThis.org.allbinary.game.configuration.event.GameFeatureEventHandler;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { PreLogUtil } from '../../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
      const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { GenericOperatingSystem } from '../../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
      const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;

      
//not game specific package import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
      const OperatingSystemFactory = globalThis.org.allbinary.logic.system.os.OperatingSystemFactory;

      
//not game specific package import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Feature } from './Feature.js';
import { GameFeatureFactory } from './GameFeatureFactory.js';
import { InputFeatureFactory } from './InputFeatureFactory.js';
import { SensorFeatureFactory } from './SensorFeatureFactory.js';
import { TouchFeatureFactory } from './TouchFeatureFactory.js';
import { MainFeatureFactory } from './MainFeatureFactory.js';

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
                
            

