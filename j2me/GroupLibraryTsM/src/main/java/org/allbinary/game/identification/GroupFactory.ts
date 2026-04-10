
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

    
import { BasicArrayList } from "../../../../org/allbinary/util/BasicArrayList.js";

    

export class GroupFactory
            extends Object
         {
        

    private instance: GroupFactory = new GroupFactory();
        
        

    public static getInstance(): GroupFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    public readonly NULL_GROUP_ARRAY: Group[] = new Array(0);
        
        

    private readonly list: BasicArrayList = new BasicArrayList();
        
        

    private index: number = 0;
        
        

    public getNextGroup(): Group{

    var group: Group = list.objectArray[index]! as Group;
        
        

index++



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return group;
    
}


    public getNextGroup(name: string): Group{
    //var name = name

    var group: Group = this.getNextGroup()!;
        
        

group.setName(name)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return group;
    
}


    public init(groups: number, nameArray: string[]){
var groups = groups
var nameArray = nameArray

    var stringMaker: StringMaker = new StringMaker();
        
        


    var stringUtil: StringUtil = StringUtil.getInstance()!;
        
        


    var TEAM: string = "Team ";
        
        

list.clear()
index= 0

    var size: number = list.size()!;
        
        


        while(size < groups)
        {

    var name: string = stringUtil!.EMPTY_STRING;
        
        


                        if(size < nameArray!.length)
                        
                                    {
                                    name= nameArray[size]!

                                    }
                                
                        else {
                            stringMaker!.delete(0, stringMaker!.length())
name= stringMaker!.append(TEAM)!.appendint(size)!.toString()

                        }
                            
list.add(Group(name, (size +3).toShort()))
size++
}

}


}
                
            

