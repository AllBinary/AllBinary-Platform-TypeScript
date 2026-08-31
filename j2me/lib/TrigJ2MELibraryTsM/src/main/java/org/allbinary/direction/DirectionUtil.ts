
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

        


            import { Object } from '../../../java/lang/Object.js';
        
import { JsType } from '../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Angle } from '../../../org/allbinary/math/Angle.js';
      const Angle = globalThis.org.allbinary.math.Angle;

      
//not plain js import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
      const AngleFactory = globalThis.org.allbinary.math.AngleFactory;

      
import { JsMethod } from '../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { DirectionFactory } from './DirectionFactory.js';
//not GWT import const  = globalThis.org.allbinary.direction.DirectionFactory;

                import { Direction } from './Direction.js';
//not GWT import const  = globalThis.org.allbinary.direction.Direction;

                
export class DirectionUtil
            extends Object
         {
        

    private static readonly instance: DirectionUtil = new DirectionUtil();

    public static getInstance(): DirectionUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return DirectionUtil.instance;
    
}


    private directionArray: Angle[] = new Array(10);

    private directionArray2: Angle[] = new Array(10);

private constructor (){

            super();
        
    var angleFactory: AngleFactory = AngleFactory.getInstance()!;;
    

    var directionFactory: DirectionFactory = DirectionFactory.getInstance()!;;
    
this.directionArray[directionFactory!.LEFT.getValue()]= angleFactory!.LEFT;
    
this.directionArray[directionFactory!.RIGHT.getValue()]= angleFactory!.RIGHT;
    
this.directionArray[directionFactory!.UP.getValue()]= angleFactory!.UP;
    
this.directionArray[directionFactory!.DOWN.getValue()]= angleFactory!.DOWN;
    
this.directionArray2[directionFactory!.LEFT.getValue()]= angleFactory!.LEFT;
    
this.directionArray2[directionFactory!.RIGHT.getValue()]= angleFactory!.RIGHT;
    
this.directionArray2[directionFactory!.UP.getValue()]= angleFactory!.UP;
    
this.directionArray2[directionFactory!.DOWN.getValue()]= angleFactory!.DOWN;
    
}


    public getAngle(direction: Direction): Angle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directionArray2[direction.getValue()]!;
    
}


    public getFrameAngle(direction: Direction): Angle{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.directionArray[direction.getValue()]!;
    
}


}



