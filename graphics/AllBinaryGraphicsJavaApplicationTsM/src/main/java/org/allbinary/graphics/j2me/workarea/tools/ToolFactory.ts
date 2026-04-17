
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
        



import { StatusFactory } from "../../../../../../org/allbinary/graphics/j2me/StatusFactory.js";

    
import { LogUtil } from "../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { CommonStrings } from "../../../../../../org/allbinary/string/CommonStrings.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GraphicItemFactory } from "./GraphicItemFactory.js";

import { GraphicsItemInterfaceFactoryInterface } from "./GraphicsItemInterfaceFactoryInterface.js";

export class ToolFactory
            extends Object
         {
        

    private static readonly instance: ToolFactory = new ToolFactory();
        
        

    public static getInstance(): ToolFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        

    private selectedTool: GraphicsItemInterfaceFactoryInterface = 
                null
            ;
        
        

    private tool: string = 
                null
            ;
        
        

    private readonly SELECTED_LABEL: string = "Selected: ";
        
        

    public setSelectedTool(tool: string){
var tool = tool

        try {
            StatusFactory.getInstance()!.setStatus(SELECTED_LABEL +tool);
    
this.tool= tool;
    

                //: 
} catch(e) 
            {
this.logUtil!.put(commonStrings!.EXCEPTION, this, "setSelectionTool", e);
    
}

}


    public getSelectedToolFactory(): GraphicsItemInterfaceFactoryInterface{
StatusFactory.getInstance()!.setStatus("Tool In Use: " +tool);
    

                        if(tool != 
                                    null
                                )
                        
                                    {
                                    this.selectedTool= GraphicItemFactory.getInstance()!.getInstance(tool);
    
this.logUtil!.putF("New Tool: " +this.selectedTool, this, "getSelectedToolFactory");
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.selectedTool;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


}
                
            

