
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
        



//not game specific package import { Vector } from '../../../../../../java/util/Vector.js';
      const Vector = globalThis.java.util.Vector;

      
//not game specific package import { CategoryInterface } from '../../../../../../org/allbinary/business/category/CategoryInterface.js';
      const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not game specific package import { TableMappingInterface } from '../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
//not game specific package import { ValidationInterface } from '../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
      const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
//not game specific package import { ThemeValidation } from '../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js';
      const ThemeValidation = globalThis.org.allbinary.logic.visual.theme.ThemeValidation;

      
//not game specific package import { CompositeTransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js';
      const CompositeTransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.CompositeTransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface StoreThemeCategoryInterface extends CategoryInterface, TableMappingInterface, ValidationInterface, CompositeTransformInfoInterface {
        

    addTheme(themeValidation: ThemeValidation)

    getThemes(): Vector

}



