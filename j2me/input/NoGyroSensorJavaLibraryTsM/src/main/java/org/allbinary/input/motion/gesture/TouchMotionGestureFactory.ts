
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
      const InputFactory = globalThis.org.allbinary.game.input.InputFactory;

      
//not game specific package import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
      const NullUtil = globalThis.org.allbinary.logic.NullUtil;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { MotionGestureInput } from './MotionGestureInput.js';

export class TouchMotionGestureFactory
            extends Object
         {
        

    private static instance: any = NullUtil.getInstance()!.NULL_OBJECT;

    public static getInstance(): TouchMotionGestureFactory{

                        if(TouchMotionGestureFactory.instance == NullUtil.getInstance()!.NULL_OBJECT)
                        
                                    {
                                    TouchMotionGestureFactory.instance= new TouchMotionGestureFactory();
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TouchMotionGestureFactory.instance as TouchMotionGestureFactory;
    
}


    public readonly LEFT: MotionGestureInput;

    public readonly RIGHT: MotionGestureInput;

    public readonly UP: MotionGestureInput;

    public readonly DOWN: MotionGestureInput;

    public readonly PRESSED: MotionGestureInput;

    public readonly RELEASED: MotionGestureInput;

    public readonly DIAGONAL_DOWN_RIGHT: MotionGestureInput;

    public readonly DIAGONAL_DOWN_LEFT: MotionGestureInput;

    public readonly DIAGONAL_UP_RIGHT: MotionGestureInput;

    public readonly DIAGONAL_UP_LEFT: MotionGestureInput;

    public readonly SCROLL_UP: MotionGestureInput;

    public readonly SCROLL_DOWN: MotionGestureInput;

    public readonly NO_MOTION: MotionGestureInput;

    public readonly LAST_MOTION: MotionGestureInput;

private constructor (){

            super();
        
    var MAX: number = InputFactory.getInstance()!.MAX;;
    
this.LEFT= new MotionGestureInput(MAX -3, "Left Touch");
    
this.RIGHT= new MotionGestureInput(MAX -4, "Right Touch");
    
this.UP= new MotionGestureInput(MAX -5, "Up Touch");
    
this.DOWN= new MotionGestureInput(MAX -6, "Down Touch");
    
this.PRESSED= new MotionGestureInput(MAX -7, "Screen Press");
    
this.RELEASED= new MotionGestureInput(MAX -8, "Released");
    
this.DIAGONAL_DOWN_RIGHT= new MotionGestureInput(MAX -9, "Diagonal Dn R");
    
this.DIAGONAL_DOWN_LEFT= new MotionGestureInput(MAX -10, "Diagonal Dn L");
    
this.DIAGONAL_UP_RIGHT= new MotionGestureInput(MAX -11, "Diagonal Up R");
    
this.DIAGONAL_UP_LEFT= new MotionGestureInput(MAX -12, "Diagonal Up L");
    
this.SCROLL_UP= new MotionGestureInput(MAX -13, "Scroll Up");
    
this.SCROLL_DOWN= new MotionGestureInput(MAX -14, "Scroll Down");
    
this.NO_MOTION= new MotionGestureInput(MAX -2, "No Motion");
    
this.LAST_MOTION= new MotionGestureInput(MAX -19, "Last Motion");
    
}


}



