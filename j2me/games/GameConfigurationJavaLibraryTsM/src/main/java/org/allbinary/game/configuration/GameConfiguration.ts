
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
        



import { GameFeatureEvent } from "../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js";

    
import { GameFeatureEventHandler } from "../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js";

    
import { BooleanFactory } from "../../../../org/allbinary/logic/java/bool/BooleanFactory.js";

    
import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

export class GameConfiguration
            extends Object
         {
        

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private defaultValue: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(0)!;
        
        

    private value: Integer

    private minValue: Integer = defaultValue;
        
        

    private maxValue: Integer = defaultValue;
        
        

    private modifiable: Boolean = BooleanFactory.getInstance()!.TRUE;
        
        
public constructor (name: string, defaultValue: Integer, minValue: Integer, maxValue: Integer){

            super();
                //var name = name
    //var defaultValue = defaultValue
    //var minValue = minValue
    //var maxValue = maxValue
this.setName(name)
this.setDefaultValue(defaultValue)
this.value= this.getDefaultValue()
this.setMinValue(minValue)
this.setMaxValue(maxValue)
put(this.getName(), this)
}


                @Throws(Exception::class)
            
    public setValue(value: Integer){
    //var value = value

    
                        if(this.value != value)
                        
                                    {
                                    
    var oldValue: Integer = this.value;
        
        

this.value= value
fireEvent(GameFeatureEvent(this, StringMaker().
                            append(this.name)!.append(" value: from: ")!.appendint(oldValue!.toInt())!.append(" to ")!.appendint(this.value.toInt())!.toString()))

                                    }
                                
}


    public getValue(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return value;
    
}


    public setMaxValue(maxValue: Integer){
    //var maxValue = maxValue
this.maxValue= maxValue
}


    public getMaxValue(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return maxValue;
    
}


    public setMinValue(minValue: Integer){
    //var minValue = minValue
this.minValue= minValue
}


    public getMinValue(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return minValue;
    
}


    public setName(name: string){
    //var name = name
this.name= name
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setDefaultValue(defaultValue: Integer){
    //var defaultValue = defaultValue
this.defaultValue= defaultValue
}


    getDefaultValue(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return defaultValue;
    
}


                @Throws(Exception::class)
            
    public setDefault(){
this.setValue(this.getDefaultValue())
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

append("Name: ")
append(this.name)
append(" Min: ")
appendint(this.getMinValue()!.toInt())
append(" Max: ")
appendint(this.getMaxValue()!.toInt())
append(" Value: ")
appendint(this.getValue()!.toInt())
append(" Default: ")
appendint(this.getDefaultValue()!.toInt())
append(" Modifiable: ")
appendboolean(this.isModifiable())



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public setModifiable(modifiable: Boolean){
var modifiable = modifiable
this.modifiable= modifiable
}


    public isModifiable(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return modifiable;
    
}


}
                
            

