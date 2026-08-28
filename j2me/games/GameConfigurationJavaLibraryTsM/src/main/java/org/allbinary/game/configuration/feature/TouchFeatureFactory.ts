
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

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { TouchFeature } from './TouchFeature.js';

export class TouchFeatureFactory
            extends Object
         {
        

    private static readonly instance: TouchFeatureFactory = new TouchFeatureFactory();

    public static getInstance(): TouchFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return TouchFeatureFactory.instance;
    
}


private constructor (){

            super();
        }


    public readonly TOUCH_ENABLED: TouchFeature = new TouchFeature("Touch Enabled");

    public readonly SHOW_SCREEN_BUTTONS: TouchFeature = new TouchFeature("Show");

    public readonly AUTO_HIDE_SHOW_SCREEN_BUTTONS: TouchFeature = new TouchFeature("Auto Hide (One Level)");

    public readonly HIDE_SCREEN_BUTTONS: TouchFeature = new TouchFeature("Hide");

}



