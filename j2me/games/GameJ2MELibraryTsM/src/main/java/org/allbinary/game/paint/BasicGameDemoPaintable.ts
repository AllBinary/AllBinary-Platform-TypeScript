
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

    
import { NullPaintable } from "../../../../org/allbinary/graphics/paint/NullPaintable.js";

    
import { Paintable } from "../../../../org/allbinary/graphics/paint/Paintable.js";

    
import { StatePaintable } from "../../../../org/allbinary/graphics/paint/StatePaintable.js";

    

export class BasicGameDemoPaintable extends StatePaintable {
        

    private readonly mainDemoStatePaintable: Paintable

    private readonly ownershipPaintable: Paintable

    private readonly helpPaintableInterface: Paintable

    private currentStatePaintable: Paintable = NullPaintable.getInstance()!;
        
        
public constructor (mainDemoStatePaintable: Paintable, ownershipPaintable: Paintable, helpPaintableInterface: Paintable){

            super();
            var mainDemoStatePaintable = mainDemoStatePaintable
var ownershipPaintable = ownershipPaintable
var helpPaintableInterface = helpPaintableInterface
this.mainDemoStatePaintable= mainDemoStatePaintable
this.this.setCurrentStatePaintable(NullPaintable.getInstance())
this.ownershipPaintable= ownershipPaintable
this.helpPaintableInterface= helpPaintableInterface
}


    public setState(state: number){
var state = state

                        if(state == 0)
                        
                                    {
                                    this.this.setCurrentStatePaintable(this.getMainDemoStatePaintable())

                                    }
                                
                             else 
                        if(state == 1)
                        
                                    {
                                    this.this.setCurrentStatePaintable(this.helpPaintableInterface)

                                    }
                                
                        else {
                            this.this.setCurrentStatePaintable(this.ownershipPaintable)

                        }
                            
}


    public paint(graphics: Graphics){
var graphics = graphics
this.getCurrentStatePaintable()!.paint(graphics)
}


    public getHelpPaintableInterface(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return helpPaintableInterface;
    
}


    setCurrentStatePaintable(currentStatePaintable: Paintable){
var currentStatePaintable = currentStatePaintable
this.currentStatePaintable= currentStatePaintable
}


    getCurrentStatePaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return currentStatePaintable;
    
}


    getMainDemoStatePaintable(): Paintable{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mainDemoStatePaintable;
    
}


}
                
            

