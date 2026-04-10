
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
        



import { SmallIntegerSingletonFactory } from "../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js";

    
import { StringMaker } from "../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../org/allbinary/logic/string/StringUtil.js";

    

export class Group
            extends Object
        
                , GroupInterface {
        

    public static readonly ID: Integer = SmallIntegerSingletonFactory.getInstance()!.getInstance(10)!;
        
        

    private static readonly GROUP_NAME_LABEL: string = "Group Name: ";
        
        

    private static readonly ID_LABEL: string = " Id: ";
        
        

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private readonly teamId: number

    private string: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (teamName: string, teamId: number){

            super();
            var teamName = teamName
var teamId = teamId
this.setName(teamName)
this.teamId= teamId
}


    public getGroupName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return name;
    
}


    public setName(name: string){
    //var name = name
this.name= name

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append(GROUP_NAME_LABEL)
stringBuffer!.append(this.name)
stringBuffer!.append(ID_LABEL)
stringBuffer!.appendshort(this.teamId)
this.string= stringBuffer!.toString()
}


    public getGroupId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return teamId;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return string;
    
}


}
                
            

