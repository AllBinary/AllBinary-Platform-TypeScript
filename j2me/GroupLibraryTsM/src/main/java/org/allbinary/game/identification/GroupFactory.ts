
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
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Group } from './Group.js';
//sameFolderImports - not GWT import - same folder const Group

export class GroupFactory
            extends Object
         {
        

    private static readonly instance: GroupFactory = new GroupFactory();

    public static getInstance(): GroupFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return GroupFactory.instance;
    
}


    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    public readonly NULL_GROUP_ARRAY: Group[] = [];

    private readonly list: BasicArrayList = new BasicArrayListD();

    private index: number = 0;

    public getNextGroup(): Group{

    let group: Group = this.list.objectArray[this.index]! as Group;;
    
this.index++;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return group;
    
}


    public getNextGroupByName(name: string): Group{

    let group: Group = this.getNextGroup()!;;
    
group.setName(name);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return group;
    
}


    public init(groups: number, nameArray: string[]){

    let stringMaker: StringMaker = new StringMaker();;
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let TEAM: string = "Team ";;
    
this.list.clear();
    
this.index= 0;
    

    let size: number = this.list.size()!;;
    

    let name: string;;
    

        while(size < groups)
        {
name= stringUtil!.EMPTY_STRING;
    

                        if(size < nameArray!.length)
                        
                                    {
                                    name= nameArray[size]!;
    

                                    }
                                
                        else {
                            stringMaker!.delete(0, stringMaker!.length());
    
name= stringMaker!.append(TEAM)!.appendint(size)!.toString();
    

                        }
                            
this.list.add(new Group(name, (size +3)));
    
size++;
    
}

}


}

