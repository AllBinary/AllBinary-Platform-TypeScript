
        /*
                *  
                *  AllBinary Open License Version 1 
                *  Copyright (c) 2025 AllBinary 
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
        



import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class Shader
            extends Object
         {
        

    public shaderName: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public shaderStringList: BasicArrayList = BasicArrayListUtil.getInstance()!.getImmutableInstance()!;
        
        

    public shaderAsString: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    public shaderHandle: number= 0

}
                
            

