
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
        



import { HashMap } from "../../../../../../java/util/HashMap.js";

    
import { LOGGING } from "../../../../../../org/allbinary/log/LOGGING.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class GraphicItemFactory
            extends Object
         {
        

    private static readonly instance: GraphicItemFactory = new GraphicItemFactory();
        
        

    public static getInstance(): GraphicItemFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    private readonly graphicItems: HashMap<Any, Any>

    private readonly DEFAULT: GraphicsItemInterfaceFactoryInterface = new SelectionToolFactory();
        
        
private constructor (){

            super();
            graphicItems= HashMap<Any, Any>()
put(LinesGraphicItem.getStaticName(), LinesGraphicItemFactory())
}


    public getInstance(itemName: string): GraphicsItemInterfaceFactoryInterface{
var itemName = itemName

    var graphicsItemInterfaceFactoryInterface: GraphicsItemInterfaceFactoryInterface = graphicItems!.get(itemName) as GraphicsItemInterfaceFactoryInterface;
        
        


    
                        if(graphicsItemInterfaceFactoryInterface == 
                                    null
                                )
                        
                                    {
                                    graphicsItemInterfaceFactoryInterface= DEFAULT

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicsItemInterfaceFactoryInterface;
    
}


                @Throws(Exception::class)
            
    public getInstance(graphicItemNodeList: BasicArrayList): HashMap<Any, Any>{
var graphicItemNodeList = graphicItemNodeList

    var numberOfItems: number = graphicItemNodeList!.size()!;
        
        


    var graphicItemHashMap: HashMap<Any, Any> = new HashMap<Any, Any>();
        
        


    
                        if(LOGGING.contains(LOGGING.MENUEVENT))
                        
                                    {
                                    
                                    }
                                




                        for (
    var index: number = 0;
        
        
index < numberOfItems; index++)
        {

    var graphicItem: GraphicItemInterface = GraphicItemBuilder.getInstance(graphicItemNodeList!.get(index) as Node)!;
        
        

put(graphicItem!.getTreeNode(), graphicItem)
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return graphicItemHashMap;
    
}


}
                
            

