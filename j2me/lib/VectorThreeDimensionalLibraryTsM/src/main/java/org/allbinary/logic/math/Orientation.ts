
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
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //not plain js import { BasicDecimal } from './BasicDecimal.js';
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;

                
export class Orientation
            extends Object
         {
        

    public static NONE: Orientation = new Orientation(0, 0, 0);

    private static SINGLETON: Orientation = new Orientation(0, 0, 0);

    public static getInstance(yaw: number, pitch: number, roll: number): Orientation{
Orientation.SINGLETON.yaw.setint(yaw);
    
Orientation.SINGLETON.pitch.setint(pitch);
    
Orientation.SINGLETON.roll.setint(roll);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return Orientation.SINGLETON;
    
}


    public yaw: BasicDecimal = new BasicDecimal(0);

    public pitch: BasicDecimal = new BasicDecimal(0);

    public roll: BasicDecimal = new BasicDecimal(0);

private constructor (yaw: number, pitch: number, roll: number){

            super();
        this.yaw.setint(yaw);
    
this.pitch.setint(pitch);
    
this.roll.setint(roll);
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("Y: ");
    
stringBuffer!.append(this.yaw.toString());
    
stringBuffer!.append(" P: ");
    
stringBuffer!.append(this.pitch.toString());
    
stringBuffer!.append(" R: ");
    
stringBuffer!.append(this.roll.toString());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}



