
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
        



import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      //not GWT import const JsType = globalThis.jsinterop.annotations.JsType;

      
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
import { NullPaintable } from '../../../../org/allbinary/graphics/paint/NullPaintable.js';
      //not GWT import const NullPaintable = globalThis.org.allbinary.graphics.paint.NullPaintable;

      
import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      //not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
import { StatePaintable } from '../../../../org/allbinary/graphics/paint/StatePaintable.js';
      //not GWT import const StatePaintable = globalThis.org.allbinary.graphics.paint.StatePaintable;

      
import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      //not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      //not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class BasicGameDemoPaintable extends StatePaintable {
        

    private readonly mainDemoStatePaintable: Paintable;

    private readonly ownershipPaintable: Paintable;

    private readonly helpPaintableInterface: Paintable;

    private currentStatePaintable: Paintable = NullPaintable.getInstance()!;

public constructor (mainDemoStatePaintable: Paintable, ownershipPaintable: Paintable, helpPaintableInterface: Paintable){

            super();
        this.mainDemoStatePaintable= mainDemoStatePaintable;
    
this.setCurrentStatePaintable(NullPaintable.getInstance());
    
this.ownershipPaintable= ownershipPaintable;
    
this.helpPaintableInterface= helpPaintableInterface;
    
}


    public setState(state: number){

                        if(state == 0)
                        
                                    {
                                    this.setCurrentStatePaintable(this.getMainDemoStatePaintable());
    

                                    }
                                
                             else 
                        if(state == 1)
                        
                                    {
                                    this.setCurrentStatePaintable(this.helpPaintableInterface);
    

                                    }
                                
                        else {
                            this.setCurrentStatePaintable(this.ownershipPaintable);
    

                        }
                            
}


    public paint(graphics: Graphics){
this.getCurrentStatePaintable()!.paint(graphics);
    
}


    public getHelpPaintableInterface(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.helpPaintableInterface;
    
}


    setCurrentStatePaintable(currentStatePaintable: Paintable){
this.currentStatePaintable= currentStatePaintable;
    
}


    getCurrentStatePaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.currentStatePaintable;
    
}


    getMainDemoStatePaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mainDemoStatePaintable;
    
}


}



