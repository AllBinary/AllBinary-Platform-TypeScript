
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
        



import { LogUtil } from "../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    
import { CommonStrings } from "../../../../org/allbinary/string/CommonStrings.js";

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    










        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { Group } from "./Group.js";

export class CompositeGroup
            extends Object
         {
        

    private static readonly ADDING_LABEL: string = "Adding: ";
        
        

    private static readonly TO_LABEL: string = " to: ";
        
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    private readonly groupInterface: Group

    private readonly list: BasicArrayList = new BasicArrayList();
        
        
public constructor (groupInterface: Group){

            super();
                //var groupInterface = groupInterface
this.groupInterface= groupInterface;
    
}


    public clear(){
this.list.clear();
    
}


    public add(groupInterface: Group){
    //var groupInterface = groupInterface

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;
        
        
;
    

    var stringBuffer: StringMaker = new StringMaker();
        
        
;
    
stringBuffer!.append(ADDING_LABEL);
    
stringBuffer!.append(groupInterface!.toString());
    
stringBuffer!.append(TO_LABEL);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.groupInterface));
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.ADD);
    
this.list.add(groupInterface);
    
}


    public isInGroup(groupInterface: Group): boolean{
    //var groupInterface = groupInterface

                        if(list.contains(groupInterface))
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public getGroup(): Group{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return groupInterface;
    
}


}
                
            

