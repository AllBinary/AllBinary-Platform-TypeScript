
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
        



import { Vector } from "../../../../../../java/util/Vector.js";

    
import { CategoryInterface } from "../../../../../../org/allbinary/business/category/CategoryInterface.js";

    
import { TableMappingInterface } from "../../../../../../org/allbinary/data/tables/TableMappingInterface.js";

    
import { ValidationInterface } from "../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js";

    
import { ThemeValidation } from "../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js";

    
import { CompositeTransformInfoInterface } from "../../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js";

    

export interface StoreThemeCategoryInterface extends CategoryInterface, TableMappingInterface, ValidationInterface, CompositeTransformInfoInterface {
        

    public addTheme(themeValidation: ThemeValidation)

    public getThemes(): Vector

}
                
            

