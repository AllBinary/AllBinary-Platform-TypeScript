
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
        
import { GameFeatureEvent } from "../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js";

    
import { GameFeatureEventHandler } from "../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js";

    
import { BooleanFactory } from "../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GameConfigurationSingleton } from "./GameConfigurationSingleton.js";

export class GameConfiguration
            extends Object
         {
        

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private defaultValue: number = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private value: number

    private minValue: number = this.defaultValue;

    private maxValue: number = this.defaultValue;

    private modifiable: Boolean = BooleanFactory.getInstance()!.TRUE;
public constructor (name: string, defaultValue: number, minValue: number, maxValue: number){

            super();
            //var name = name
    //var defaultValue = defaultValue
    //var minValue = minValue
    //var maxValue = maxValue
this.setName(name);
    
this.setDefaultValue(defaultValue);
    
this.value= this.getDefaultValue();
    
this.setMinValue(minValue);
    
this.setMaxValue(maxValue);
    
GameConfigurationSingleton.getInstance()!.getHashtable()!.put(this.getName(), this);
    
}


                //@Throws(Error::class)
            
    public setValue(value: number){
    //var value = value

                        if(this.value != value)
                        
                                    {
                                    
    var oldValue: number = this.value;
;
    
this.value= value;
    
GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent(this, new StringMaker().
                            append(this.name)!.append(" value: from: ")!.appendint(oldValue)!.append(" to ")!.appendint(value)!.toString()));
    

                                    }
                                
}


    public getValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


    public setMaxValue(maxValue: number){
    //var maxValue = maxValue
this.maxValue= maxValue;
    
}


    public getMaxValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxValue;
    
}


    public setMinValue(minValue: number){
    //var minValue = minValue
this.minValue= minValue;
    
}


    public getMinValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.minValue;
    
}


    public setName(name: string){
    //var name = name
this.name= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setDefaultValue(defaultValue: number){
    //var defaultValue = defaultValue
this.defaultValue= defaultValue;
    
}


    getDefaultValue(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultValue;
    
}


                //@Throws(Error::class)
            
    public setDefault(){
this.setValue(this.getDefaultValue());
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
;
    
stringBuffer!.append("Name: ");
    
stringBuffer!.append(this.name);
    
stringBuffer!.append(" Min: ");
    
stringBuffer!.appendint(this.getMinValue()!.toInt());
    
stringBuffer!.append(" Max: ");
    
stringBuffer!.appendint(this.getMaxValue()!.toInt());
    
stringBuffer!.append(" Value: ");
    
stringBuffer!.appendint(this.getValue()!.toInt());
    
stringBuffer!.append(" Default: ");
    
stringBuffer!.appendint(this.getDefaultValue()!.toInt());
    
stringBuffer!.append(" Modifiable: ");
    
stringBuffer!.appendboolean(this.isModifiable());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public setModifiable(modifiable: Boolean){
var modifiable = modifiable
this.modifiable= modifiable;
    
}


    public isModifiable(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.modifiable;
    
}


}
                
            

