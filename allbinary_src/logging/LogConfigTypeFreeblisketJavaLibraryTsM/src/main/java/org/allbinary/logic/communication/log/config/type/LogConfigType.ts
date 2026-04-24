
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
        



import { LogUtil } from "../../../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { BasicArrayList } from "../../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListD } from "../../../../../../../org/allbinary/util/BasicArrayListD.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class LogConfigType
            extends Object
         {
        

    public availableLogConfigTypes: BasicArrayList = new BasicArrayListD();
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private name: string

    private description: string
public constructor (name: string, description: string){

            super();
        var name = name
var description = description
this.name= name;
    
this.description= description;
    
availableLogConfigTypes!.add(this);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getDescription(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.description;
    
}


    public setName(value: string){
var value = value
this.name= value;
    
}


    public setDescription(value: string){
var value = value
this.description= value;
    
}


}
                
            

