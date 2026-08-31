
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
        
import { HashMap } from '../../../../../../java/util/HashMap.js';
      //not GWT import const HashMap = globalThis.java.util.HashMap;

      
import { LOGGING } from '../../../../../../org/allbinary/log/LOGGING.js';
      //not GWT import const LOGGING = globalThis.org.allbinary.log.LOGGING;

      
//not plain js import { BasicArrayList } from '../../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
import { Node } from '../../../../../../org/w3c/dom/Node.js';
      //not GWT import const Node = globalThis.org.w3c.dom.Node;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { SelectionToolFactory } from './SelectionToolFactory.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.workarea.tools.SelectionToolFactory;

                import { GraphicsItemInterfaceFactoryInterface } from './GraphicsItemInterfaceFactoryInterface.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.workarea.tools.GraphicsItemInterfaceFactoryInterface;

                import { LinesGraphicItem } from './LinesGraphicItem.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.workarea.tools.LinesGraphicItem;

                import { LinesGraphicItemFactory } from './LinesGraphicItemFactory.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.workarea.tools.LinesGraphicItemFactory;

                import { GraphicItemBuilder } from './GraphicItemBuilder.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.workarea.tools.GraphicItemBuilder;

                import { GraphicItemInterface } from './GraphicItemInterface.js';
//not GWT import const  = globalThis.org.allbinary.graphics.j2me.workarea.tools.GraphicItemInterface;

                
export class GraphicItemFactory
            extends Object
         {
        

    private static readonly instance: GraphicItemFactory = new GraphicItemFactory();

    public static getInstance(): GraphicItemFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GraphicItemFactory.instance;
    
}


    private readonly graphicItems: HashMap<any, any>;

    private readonly DEFAULT: GraphicsItemInterfaceFactoryInterface = new SelectionToolFactory();

private constructor (){

            super();
        this.graphicItems= new HashMap<any, any>();
    
this.graphicItems!.put(LinesGraphicItem.getStaticName(), new LinesGraphicItemFactory());
    
}


    public getInstance(itemName: string): GraphicsItemInterfaceFactoryInterface{

    var graphicsItemInterfaceFactoryInterface: GraphicsItemInterfaceFactoryInterface = this.graphicItems!.get(itemName) as GraphicsItemInterfaceFactoryInterface;;
    

                        if(graphicsItemInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    graphicsItemInterfaceFactoryInterface= DEFAULT;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsItemInterfaceFactoryInterface;
    
}


                //@Throws(Exception.constructor)
            
    public getInstance(graphicItemNodeList: BasicArrayList): HashMap<any, any>{

    var numberOfItems: number = graphicItemNodeList!.size()!;;
    

    var graphicItemHashMap: HashMap<any, any> = new HashMap<any, any>();;
    

                        if(LOGGING.contains(LOGGING.MENUEVENT))
                        
                                    {
                                    
                                    }
                                




                        for (
    var index: number = 0;index < numberOfItems; index++)
        {

    var graphicItem: GraphicItemInterface = GraphicItemBuilder.getInstance(graphicItemNodeList!.get(index) as Node)!;;
    
graphicItemHashMap!.put(graphicItem!.getTreeNode(), graphicItem);
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicItemHashMap;
    
}


}



