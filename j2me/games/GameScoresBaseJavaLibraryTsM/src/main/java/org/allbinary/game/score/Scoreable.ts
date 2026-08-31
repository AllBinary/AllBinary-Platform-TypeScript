
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
        
            import { Integer } from '../../../../java/lang/Integer.js';
        
import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
      const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
import { JsProperty } from '../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ScoreableInterface } from './ScoreableInterface.js';
//not GWT import const  = globalThis.org.allbinary.game.score.ScoreableInterface;

                
export class Scoreable
            extends Object
         implements ScoreableInterface {
        

    public static ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getAt(3)!;

    private points: number;

public constructor (points: number){

            super();
        this.points= points;
    
}


    public addPoints(points: number){
this.points += points;
    
}


    public removePoints(points: number){
this.points -= points;
    
}


    setPoints(points: number){
this.points= points;
    
}


    public getPoints(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.points;
    
}


}



