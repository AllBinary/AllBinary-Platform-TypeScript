
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

    
import { AllBinaryLayer } from "../../../../org/allbinary/layer/AllBinaryLayer.js";

    

export class HealthBarTwodAnimation extends HealthBarAnimation {
        
public constructor (layerInterface: AllBinaryLayer, location: number)                        

                            : super(layerInterface, location){

            super();
                //var layerInterface = layerInterface
    //var location = location


                            //For kotlin this is before the body of the constructor.
                    
}


    public paint(graphics: Graphics, x: number, y: number){
    //var graphics = graphics
    //var x = x
    //var y = y

    var ax: number = this.allbinaryLayer!.getViewPosition()!.getX()!;
        
        
;
    
this.basicSetColorUtil!.setBasicColorP(graphics, this.basicColor, this.colorP);
    
graphics.fillRect(ax, this.getY() -1, x2, this.thickness);
    
}


}
                
            

