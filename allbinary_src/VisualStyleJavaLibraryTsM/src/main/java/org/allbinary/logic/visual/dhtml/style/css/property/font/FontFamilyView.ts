
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

        


            import { Exception } from '../../../../../../../../../java/lang/Exception.js';
        
import { CssPropertyView } from '../../../../../../../../../org/allbinary/logic/visual/dhtml/style/css/property/CssPropertyView.js';
//not GWT import const CssPropertyView

import { Node } from '../../../../../../../../../org/w3c/dom/Node.js';
//not GWT import const Node

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { FontFamilyData } from './FontFamilyData.js';
//sameFolderImports - not GWT import - same folder const FontFamilyData

export class FontFamilyView extends CssPropertyView {
        

    public constructor(...args: any[]) {
        if(args.length === 0) {
            super(FontFamilyData.getInstance()!.VALUE);
            this.constructor$0();
            
        }
        else if(args.length === 1) {
            const node = args[0];
            super(node);
            this.constructor$1(node);
            
        }
        
    }
    
    private constructor$0(): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
    private constructor$1(node: Node): void {
        

                            //For kotlin this is before the body of the constructor.
                    

    }
    
}

