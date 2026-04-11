
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
        



import { BasicColor } from "../../../../org/allbinary/graphics/color/BasicColor.js";

    
import { GenericOperatingSystem } from "../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js";

    
import { OperatingSystemFactory } from "../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js";

    

export class ColorFillPaintableFactory
            extends Object
         {
        

    private static readonly instance: ColorFillPaintableFactory = new ColorFillPaintableFactory();
        
        

    public static getInstance(): ColorFillPaintableFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public getInstance(basicColor: BasicColor, forThreedCanvas: boolean): ColorFillBasePaintable{
    //var basicColor = basicColor
    //var forThreedCanvas = forThreedCanvas

    var operatingSystem: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;
        
        
;
    

                        if(operatingSystem!.isOverScan())
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new OverScanColorFillPaintable(basicColor);
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new ColorFillPaintable(basicColor);
    

                        }
                            
}


}
                
            

