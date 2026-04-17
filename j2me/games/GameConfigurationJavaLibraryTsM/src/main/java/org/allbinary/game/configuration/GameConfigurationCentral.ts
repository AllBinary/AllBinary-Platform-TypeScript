
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
        



            import { Integer } from "../../../../java/lang/Integer.js";
        
import { Hashtable } from "../../../../java/util/Hashtable.js";

    
import { GameConfigurationPersistanceSingleton } from "../../../../org/allbinary/game/configuration/persistance/GameConfigurationPersistanceSingleton.js";

    
import { KeyValuePersistance } from "../../../../org/allbinary/game/configuration/persistance/KeyValuePersistance.js";

    
import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { AbeClientInformationInterface } from "../../../../org/allbinary/logic/system/security/licensing/AbeClientInformationInterface.js";

    
import { CommonSeps } from "../../../../org/allbinary/string/CommonSeps.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class GameConfigurationCentral
            extends Object
         {
        

    private static readonly SINGLETON: GameConfigurationCentral = new GameConfigurationCentral();
        
        

    public static getInstance(): GameConfigurationCentral{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return SINGLETON;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly SCALE: GameConfiguration

    public readonly ORIENTATION: GameConfiguration

    public readonly SENSOR_UPDATE_RATE: GameConfiguration

    public readonly VIBRATION: GameConfiguration

    public readonly CHALLENGE_LEVEL: GameConfiguration

    public readonly COLLIDE_DAMAGE: GameConfiguration

    public readonly DURABILITY_CHALLENGE_LEVEL: GameConfiguration

    public readonly SPEED_CHALLENGE_LEVEL: GameConfiguration

    public readonly ATTACK_CHALLENGE_LEVEL: GameConfiguration

    public readonly CONTROL_LEVEL: GameConfiguration

    public readonly PLAYER_INPUT_WAIT: GameConfiguration

    public readonly SPEED: GameConfiguration

    public readonly SOUND_VOLUME: GameConfiguration

    public readonly MAX_GAME_OBJECTS: GameConfiguration

    public readonly MAX_LAYERS: GameConfiguration

    private gameControlFidelity: number = 36;
        
        
private constructor (){

            super();
            
    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    
SCALE= new GameConfiguration("Scale", smallIntegerSingletonFactory!.getInstance(2), smallIntegerSingletonFactory!.getInstance(2), smallIntegerSingletonFactory!.getInstance(3));
    
ORIENTATION= new GameConfiguration("Orientation", smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(8));
    
SENSOR_UPDATE_RATE= new GameConfiguration("Sensor Update Rate", smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(3));
    
VIBRATION= new GameConfiguration("Vibration", smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(3));
    
CHALLENGE_LEVEL= new GameConfiguration("Global Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10));
    
COLLIDE_DAMAGE= new GameConfiguration("Collide Damage Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10));
    
DURABILITY_CHALLENGE_LEVEL= new GameConfiguration("Enemy Durability Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10));
    
SPEED_CHALLENGE_LEVEL= new GameConfiguration("Enemy Speed Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10));
    
ATTACK_CHALLENGE_LEVEL= new GameConfiguration("Enemy Attack Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10));
    
CONTROL_LEVEL= new GameConfiguration("Control Fidelity", smallIntegerSingletonFactory!.getInstance(5), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10));
    
PLAYER_INPUT_WAIT= new GameConfiguration("Input Wait", smallIntegerSingletonFactory!.getInstance(5), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10));
    
SPEED= new GameConfiguration("Game Speed (Device Specific)", smallIntegerSingletonFactory!.getInstance(5), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10));
    
SOUND_VOLUME= new GameConfiguration("Sound Volume", smallIntegerSingletonFactory!.getInstance(6), smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(10));
    
MAX_GAME_OBJECTS= new GameConfiguration("Max Game Objects", smallIntegerSingletonFactory!.getInstance(20), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(50));
    
MAX_LAYERS= new GameConfiguration("Max Layers", smallIntegerSingletonFactory!.getInstance(20), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(50));
    
}


    public load(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

        try {
            
    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        
;
    

    var keyValuePersistance: KeyValuePersistance = GameConfigurationPersistanceSingleton.getInstance()!;
        
        
;
    
keyValuePersistance!.clear();
    
keyValuePersistance!.loadAll(abeClientInformation);
    

    var list: BasicArrayList = keyValuePersistance!.getIds()!;
        
        
;
    

                        if(list.size() > 0)
                        
                                    {
                                    
    var hashtable: Hashtable<any, any> = keyValuePersistance!.get(0)!;
        
        
;
    

    var anyType: any = this.SCALE.getName();

                         as Object;
        
        
;
    

    var value: string = hashtable.get(anyType as Object);

                         as String;
        
        
;
    
this.SCALE.setValue(smallIntegerSingletonFactory!.getInstance(Integer.valueOf(value)!.toInt()));
    

                                    }
                                
                        else {
                            this.logUtil!.putF("No Game Configuration To Load", this, commonStrings!.LOAD);
    

                        }
                            

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.LOAD, e);
    
}

}


    public setGameControlFidelity(gameControlFidelity: number){
    //var gameControlFidelity = gameControlFidelity
this.gameControlFidelity= gameControlFidelity;
    
}


    public getGameControlFidelity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameControlFidelity;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    

    var commonStrings: CommonSeps = CommonSeps.getInstance()!;
        
        
;
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.SCALE.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.SCALE.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.ORIENTATION.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.ORIENTATION.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.SENSOR_UPDATE_RATE.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.SENSOR_UPDATE_RATE.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.VIBRATION.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.VIBRATION.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.CHALLENGE_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.CHALLENGE_LEVEL.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.COLLIDE_DAMAGE.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.COLLIDE_DAMAGE.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.DURABILITY_CHALLENGE_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.DURABILITY_CHALLENGE_LEVEL.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.SPEED_CHALLENGE_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.SPEED_CHALLENGE_LEVEL.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.ATTACK_CHALLENGE_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.ATTACK_CHALLENGE_LEVEL.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.CONTROL_LEVEL.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.CONTROL_LEVEL.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.SPEED.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.SPEED.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.MAX_GAME_OBJECTS.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.MAX_GAME_OBJECTS.getValue()!.toInt());
    
stringBuffer!.append(commonStrings!.COMMA_SEP);
    
stringBuffer!.append(this.MAX_LAYERS.getName());
    
stringBuffer!.append(commonStrings!.EQUALS);
    
stringBuffer!.appendint(this.MAX_LAYERS.getValue()!.toInt());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();

                        ;
    
}


}
                
            

