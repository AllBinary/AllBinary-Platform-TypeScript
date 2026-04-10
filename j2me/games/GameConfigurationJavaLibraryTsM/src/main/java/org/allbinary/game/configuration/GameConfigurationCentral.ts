
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
        
        

SCALE= GameConfiguration("Scale", smallIntegerSingletonFactory!.getInstance(2), smallIntegerSingletonFactory!.getInstance(2), smallIntegerSingletonFactory!.getInstance(3))
ORIENTATION= GameConfiguration("Orientation", smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(8))
SENSOR_UPDATE_RATE= GameConfiguration("Sensor Update Rate", smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(3))
VIBRATION= GameConfiguration("Vibration", smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(3))
CHALLENGE_LEVEL= GameConfiguration("Global Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10))
COLLIDE_DAMAGE= GameConfiguration("Collide Damage Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10))
DURABILITY_CHALLENGE_LEVEL= GameConfiguration("Enemy Durability Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10))
SPEED_CHALLENGE_LEVEL= GameConfiguration("Enemy Speed Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10))
ATTACK_CHALLENGE_LEVEL= GameConfiguration("Enemy Attack Challenge Level", smallIntegerSingletonFactory!.getInstance(3), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10))
CONTROL_LEVEL= GameConfiguration("Control Fidelity", smallIntegerSingletonFactory!.getInstance(5), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10))
PLAYER_INPUT_WAIT= GameConfiguration("Input Wait", smallIntegerSingletonFactory!.getInstance(5), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10))
SPEED= GameConfiguration("Game Speed (Device Specific)", smallIntegerSingletonFactory!.getInstance(5), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(10))
SOUND_VOLUME= GameConfiguration("Sound Volume", smallIntegerSingletonFactory!.getInstance(6), smallIntegerSingletonFactory!.getInstance(0), smallIntegerSingletonFactory!.getInstance(10))
MAX_GAME_OBJECTS= GameConfiguration("Max Game Objects", smallIntegerSingletonFactory!.getInstance(20), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(50))
MAX_LAYERS= GameConfiguration("Max Layers", smallIntegerSingletonFactory!.getInstance(20), smallIntegerSingletonFactory!.getInstance(1), smallIntegerSingletonFactory!.getInstance(50))
}


    public load(abeClientInformation: AbeClientInformationInterface){
    //var abeClientInformation = abeClientInformation

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        


        try {
            
    var smallIntegerSingletonFactory: SmallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance()!;
        
        


    var keyValuePersistance: KeyValuePersistance = GameConfigurationPersistanceSingleton.getInstance()!;
        
        

clear()
loadAll(abeClientInformation)

    var list: BasicArrayList = keyValuePersistance!.getIds()!;
        
        


    
                        if(list.size() > 0)
                        
                                    {
                                    
    var hashtable: Hashtable<Any, Any> = keyValuePersistance!.get(0)!;
        
        


    var anyType: any = {} = this.SCALE.getName() as Object;
        
        


    var value: string = hashtable.get(anyType as Object) as String;
        
        

setValue(smallIntegerSingletonFactory!.getInstance(Integer.valueOf(value)!.toInt()))

                                    }
                                
                        else {
                            put("No Game Configuration To Load", this, commonStrings!.LOAD)

                        }
                            
} catch(e: Exception)
            {
put(commonStrings!.EXCEPTION, this, commonStrings!.LOAD, e)
}

}


    public setGameControlFidelity(gameControlFidelity: number){
    //var gameControlFidelity = gameControlFidelity
this.gameControlFidelity= gameControlFidelity
}


    public getGameControlFidelity(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.gameControlFidelity;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    var commonStrings: CommonSeps = CommonSeps.getInstance()!;
        
        

append(commonStrings!.COMMA_SEP)
append(this.SCALE.getName())
append(commonStrings!.EQUALS)
appendint(this.SCALE.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.ORIENTATION.getName())
append(commonStrings!.EQUALS)
appendint(this.ORIENTATION.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.SENSOR_UPDATE_RATE.getName())
append(commonStrings!.EQUALS)
appendint(this.SENSOR_UPDATE_RATE.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.VIBRATION.getName())
append(commonStrings!.EQUALS)
appendint(this.VIBRATION.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.CHALLENGE_LEVEL.getName())
append(commonStrings!.EQUALS)
appendint(this.CHALLENGE_LEVEL.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.COLLIDE_DAMAGE.getName())
append(commonStrings!.EQUALS)
appendint(this.COLLIDE_DAMAGE.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.DURABILITY_CHALLENGE_LEVEL.getName())
append(commonStrings!.EQUALS)
appendint(this.DURABILITY_CHALLENGE_LEVEL.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.SPEED_CHALLENGE_LEVEL.getName())
append(commonStrings!.EQUALS)
appendint(this.SPEED_CHALLENGE_LEVEL.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.ATTACK_CHALLENGE_LEVEL.getName())
append(commonStrings!.EQUALS)
appendint(this.ATTACK_CHALLENGE_LEVEL.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.CONTROL_LEVEL.getName())
append(commonStrings!.EQUALS)
appendint(this.CONTROL_LEVEL.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.SPEED.getName())
append(commonStrings!.EQUALS)
appendint(this.SPEED.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.MAX_GAME_OBJECTS.getName())
append(commonStrings!.EQUALS)
appendint(this.MAX_GAME_OBJECTS.getValue()!.toInt())
append(commonStrings!.COMMA_SEP)
append(this.MAX_LAYERS.getName())
append(commonStrings!.EQUALS)
appendint(this.MAX_LAYERS.getValue()!.toInt())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

