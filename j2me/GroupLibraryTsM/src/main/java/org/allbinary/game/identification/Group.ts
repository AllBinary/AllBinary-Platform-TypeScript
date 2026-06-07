
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
        



            import { Object } from '../../../../java/lang/Object.js';


        
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { GroupInterface } from './GroupInterface.js';
import { GroupCommonFactory } from './GroupCommonFactory.js';

export class Group
            extends Object
         implements GroupInterface {
        

    private name: string = StringUtil.getInstance()!.EMPTY_STRING;

    private readonly teamId: number;

    private string: string = StringUtil.getInstance()!.EMPTY_STRING;

public constructor (teamName: string, teamId: number){

            super();
        this.teamId= teamId;
    
this.setName(teamName);
    
}


    public getGroupName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public setName(name: string){
this.name= name;
    

    var groupCommonFactory: GroupCommonFactory = GroupCommonFactory.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(groupCommonFactory!.GROUP_NAME_LABEL);
    
stringBuffer!.append(this.name);
    
stringBuffer!.append(groupCommonFactory!.ID_LABEL);
    
stringBuffer!.appendshort(this.teamId);
    
this.string= stringBuffer!.toString();
    
}


    public getGroupId(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.teamId;
    
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.string;
    
}


}
                
            

