
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

        


            import { Object } from '../../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../../java/lang/Exception.js';
        
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { PointsDomUtil } from './PointsDomUtil.js';
//not GWT import const PointsDomUtil = globalThis.org.allbinary.graphics.j2me.workarea.tools.PointsDomUtil;

                import { LinesGraphicItem } from './LinesGraphicItem.js';
//not GWT import const LinesGraphicItem = globalThis.org.allbinary.graphics.j2me.workarea.tools.LinesGraphicItem;

                import { GraphicItemInterface } from './GraphicItemInterface.js';
//not GWT import const GraphicItemInterface = globalThis.org.allbinary.graphics.j2me.workarea.tools.GraphicItemInterface;

                
export class GraphicItemBuilder
            extends Object
         {
        

                //@Throws(Exception.constructor)
            
    public static getInstance(node: Node): GraphicItemInterface{

    var graphicItemName: string = node.getNodeName()!;;
    

                        if(graphicItemName!.compareTo(PointsDomUtil.getInstance()!.LINES) == 0)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new LinesGraphicItem(node);
    

                                    }
                                
                        else {
                            


                            throw new Exception("Graphic Item Does Not Exist: " +graphicItemName);
                    

                        }
                            
}


private constructor (){

            super();
        }


}



