
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
        



//not game specific package import { JsType } from '../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
      const Graphics = globalThis.javax.microedition.lcdui.Graphics;

      
//not game specific package import { Paintable } from '../../../../org/allbinary/graphics/paint/Paintable.js';
      const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;

      
//not game specific package import { JsMethod } from '../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MainGameDemoStatePaintable extends Paintable {
        

    private readonly ownershipPaintableInterface: Paintable;

    private readonly menuPaintableInterface: Paintable;

public constructor (ownershipPaintableInterface: Paintable, menuPaintableInterface: Paintable){

            super();
        this.ownershipPaintableInterface= ownershipPaintableInterface;
    
this.menuPaintableInterface= menuPaintableInterface;
    
}


    public paint(graphics: Graphics){
this.menuPaintableInterface!.paint(graphics);
    
this.ownershipPaintableInterface!.paint(graphics);
    
}


    public getOwnershipPaintableInterface(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.ownershipPaintableInterface;
    
}


    public getMenuPaintableInterface(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.menuPaintableInterface;
    
}


}
                
            

