
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
        
import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      //not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Feature } from './Feature.js';
//not GWT import const Feature = globalThis.org.allbinary.game.configuration.feature.Feature;

                
export class MainFeatureFactory
            extends Object
         {
        

    private static readonly instance: MainFeatureFactory = new MainFeatureFactory();

    public static getInstance(): MainFeatureFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MainFeatureFactory.instance;
    
}


    public readonly FULL_SCREEN: Feature = new Feature("Full Screen");

    public readonly TITLE_BAR: Feature = new Feature("Title Bar");

    public readonly STATIC: Feature = new Feature("Static Dependent Feature");

    public readonly LOAD_ONDEMAND: Feature = new Feature("Load OnDemand");

    public readonly LOAD_ALL: Feature = new Feature("Load All");

}



