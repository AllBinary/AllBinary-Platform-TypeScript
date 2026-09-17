
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

        


            import { Object } from '../../../../java/lang/Object.js';
        
import { BasicColor } from '../../../../org/allbinary/graphics/color/BasicColor.js';
//not GWT import const BasicColor
import { GenericOperatingSystem } from '../../../../org/allbinary/logic/system/os/GenericOperatingSystem.js';
//not GWT import const GenericOperatingSystem
import { OperatingSystemFactory } from '../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const OperatingSystemFactory
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { ColorFillPaintable } from './ColorFillPaintable.js';
//not GWT import - same folder const ColorFillPaintableimport { OverScanColorFillPaintable } from './OverScanColorFillPaintable.js';
//not GWT import - same folder const OverScanColorFillPaintableimport { ColorFillBasePaintable } from './ColorFillBasePaintable.js';
//not GWT import - same folder const ColorFillBasePaintable
export class ColorFillPaintableFactory
            extends Object
         {
        

    private static readonly instance: ColorFillPaintableFactory = new ColorFillPaintableFactory();

    public static getInstance(): ColorFillPaintableFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ColorFillPaintableFactory.instance;
    
}


    public getInstance(basicColor: BasicColor, forThreedCanvas: boolean): ColorFillBasePaintable{

    var operatingSystem: GenericOperatingSystem = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!;;
    

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



