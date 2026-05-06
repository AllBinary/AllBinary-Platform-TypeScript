
        /* Generated Code Do Not Modify */
        



            import { Object } from '../../../../../java/lang/Object.js';


        
import { BasicColor } from '../../../../../org/allbinary/graphics/color/BasicColor.js';

    
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class ABStringComponent
            extends Object
         {
        

    public static readonly NULL_STRING_COMPONENT: ABStringComponent = new ABStringComponent(BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE);

    public getBackgroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicColorFactory.getInstance()!.WHITE;
    
}

public constructor (backgroundBasicColor: BasicColor, foregroundBasicColor: BasicColor){

            super();
            //var backgroundBasicColor = backgroundBasicColor
    //var foregroundBasicColor = foregroundBasicColor
}


    public getForegroundBasicColor(): BasicColor{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BasicColorFactory.getInstance()!.WHITE;
    
}


    public setForegroundBasicColor(foregroundBasicColor: BasicColor){
var foregroundBasicColor = foregroundBasicColor
}


}
                
            

