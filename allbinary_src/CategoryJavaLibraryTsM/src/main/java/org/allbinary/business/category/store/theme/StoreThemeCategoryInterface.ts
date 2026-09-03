
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

        


//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
import { CategoryInterface } from '../../../../../../org/allbinary/business/category/CategoryInterface.js';
      //not GWT import const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
import { TableMappingInterface } from '../../../../../../org/allbinary/data/tables/TableMappingInterface.js';
      //not GWT import const TableMappingInterface = globalThis.org.allbinary.data.tables.TableMappingInterface;

      
import { ValidationInterface } from '../../../../../../org/allbinary/logic/control/validate/ValidationInterface.js';
      //not GWT import const ValidationInterface = globalThis.org.allbinary.logic.control.validate.ValidationInterface;

      
import { ThemeValidation } from '../../../../../../org/allbinary/logic/visual/theme/ThemeValidation.js';
      //not GWT import const ThemeValidation = globalThis.org.allbinary.logic.visual.theme.ThemeValidation;

      
import { CompositeTransformInfoInterface } from '../../../../../../org/allbinary/logic/visual/transform/info/CompositeTransformInfoInterface.js';
      //not GWT import const CompositeTransformInfoInterface = globalThis.org.allbinary.logic.visual.transform.info.CompositeTransformInfoInterface;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export interface StoreThemeCategoryInterface extends CategoryInterface, TableMappingInterface, ValidationInterface, CompositeTransformInfoInterface {
        

    addTheme(themeValidation: ThemeValidation)

    getThemes(): BasicArrayList

}



