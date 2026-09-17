
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2026 AllBinary 
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

        


            import { Object } from '../../../java/lang/Object.js';
        
import { Item } from '../../../javax/microedition/lcdui/Item.js';
//not GWT import const Item

import { CommandForm } from '../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const CommandForm

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        //Handle the differences in the public platform vs the raw JS build
export class MEUtil
            extends Object
         {
        

    public static getInstance(): MEUtil{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return MEUtil.instance;
    
}


    private static readonly instance: MEUtil = new MEUtil();

    public appendItem(form: CommandForm, item: Item){
form.append(item);
    
}


}



