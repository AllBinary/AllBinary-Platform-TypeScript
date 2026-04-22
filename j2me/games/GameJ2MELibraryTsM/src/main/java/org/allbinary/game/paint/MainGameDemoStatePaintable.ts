
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
        



import { Graphics } from "../../../../javax/microedition/lcdui/Graphics.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class MainGameDemoStatePaintable extends Paintable {
        

    private readonly ownershipPaintableInterface: Paintable

    private readonly menuPaintableInterface: Paintable
public constructor (ownershipPaintableInterface: Paintable, menuPaintableInterface: Paintable){

            super();
        var ownershipPaintableInterface = ownershipPaintableInterface
var menuPaintableInterface = menuPaintableInterface
this.ownershipPaintableInterface= ownershipPaintableInterface;
    
this.menuPaintableInterface= menuPaintableInterface;
    
}


    public paint(graphics: Graphics){
var graphics = graphics
this.menuPaintableInterface!.paint(graphics);
    
this.ownershipPaintableInterface!.paint(graphics);
    
}


    public getOwnershipPaintableInterface(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ownershipPaintableInterface;
    
}


    public getMenuPaintableInterface(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return menuPaintableInterface;
    
}


}
                
            

