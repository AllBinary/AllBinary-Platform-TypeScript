
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
        



//not game specific package import { CategoryInterface } from '../../../../../org/allbinary/business/category/CategoryInterface.js';
      const CategoryInterface = globalThis.org.allbinary.business.category.CategoryInterface;

      
//not game specific package import { Document } from '../../../../../org/w3c/dom/Document.js';
      const Document = globalThis.org.w3c.dom.Document;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { CategoryModifierTreeInterface } from './CategoryModifierTreeInterface.js';

export interface CategoryLoaderInterface extends CategoryModifierTreeInterface {
        

    getDoc(categoryInterface: CategoryInterface): Document

    get(categoryInterface: CategoryInterface): CategoryInterface

    getAll(categoryInterface: CategoryInterface): CategoryInterface

}
                
            

