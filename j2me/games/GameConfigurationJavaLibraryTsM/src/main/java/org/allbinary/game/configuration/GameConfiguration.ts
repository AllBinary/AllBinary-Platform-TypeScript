
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { GameFeatureEvent } from '../../../../org/allbinary/game/configuration/event/GameFeatureEvent.js';
//not GWT import const GameFeatureEvent = globalThis.org.allbinary.game.configuration.event.GameFeatureEvent;

      
import { GameFeatureEventHandler } from '../../../../org/allbinary/game/configuration/event/GameFeatureEventHandler.js';
//not GWT import const GameFeatureEventHandler = globalThis.org.allbinary.game.configuration.event.GameFeatureEventHandler;

      
import { BooleanFactory } from '../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const BooleanFactory = globalThis.org.allbinary.logic.java.bool.BooleanFactory;

      
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GameConfigurationSingleton } from './GameConfigurationSingleton.js';
//not GWT import - same folder const GameConfigurationSingleton = globalThis.org.allbinary.game.configuration.GameConfigurationSingleton;

                
export class GameConfiguration
            extends Object
         {
        

    private static readonly MIN_VALUE: Integer = new Integer(Integer.MIN_VALUE);

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private defaultValue: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(0)!;

    private value: Integer = GameConfiguration.MIN_VALUE;

    private minValue: Integer = this.defaultValue;

    private maxValue: Integer = this.defaultValue;

    private modifiable: Boolean = BooleanFactory.getInstance()!.TRUE;

public constructor (name: string, defaultValue: Integer, minValue: Integer, maxValue: Integer){

            super();
        this.setName(name);
    
this.setDefaultValue(defaultValue);
    
this.value= this.getDefaultValue();
    
this.setMinValue(minValue);
    
this.setMaxValue(maxValue);
    
GameConfigurationSingleton.getInstance()!.getHashtable()!.put(this.getName(), this);
    
}


                //@Throws(Exception.constructor)
            
    public setValue(value: Integer){

                        if(this.value != value)
                        
                                    {
                                    
    var oldValue: Integer = this.value;;
    
this.value= value;
    
GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent(this, new StringMaker().append(this.name)!.append(" value: from: ")!.appendint(oldValue!.intValue())!.append(" to ")!.appendint(this.value.intValue())!.toString()));
    

                                    }
                                
}


    public getValue(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.value;
    
}


    public setMaxValue(maxValue: Integer){
this.maxValue= maxValue;
    
}


    public getMaxValue(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.maxValue;
    
}


    public setMinValue(minValue: Integer){
this.minValue= minValue;
    
}


    public getMinValue(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.minValue;
    
}


    public setName(name: string){
this.name= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setDefaultValue(defaultValue: Integer){
this.defaultValue= defaultValue;
    
}


    getDefaultValue(): Integer{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.defaultValue;
    
}


                //@Throws(Exception.constructor)
            
    public setDefault(){
this.setValue(this.getDefaultValue());
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Name: ");
    
stringBuffer!.append(this.name);
    
stringBuffer!.append(" Min: ");
    
stringBuffer!.appendint(this.getMinValue()!.intValue());
    
stringBuffer!.append(" Max: ");
    
stringBuffer!.appendint(this.getMaxValue()!.intValue());
    
stringBuffer!.append(" Value: ");
    
stringBuffer!.appendint(this.getValue()!.intValue());
    
stringBuffer!.append(" Default: ");
    
stringBuffer!.appendint(this.getDefaultValue()!.intValue());
    
stringBuffer!.append(" Modifiable: ");
    
stringBuffer!.appendboolean(this.isModifiable().valueOf());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public setModifiable(modifiable: Boolean){
this.modifiable= modifiable;
    
}


    public isModifiable(): Boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.modifiable;
    
}


}



