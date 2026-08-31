
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
        
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { Group } from './Group.js';
import { GroupCommonFactory } from './GroupCommonFactory.js';

export class CompositeGroup
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    private readonly groupInterface: Group;

    private readonly list: BasicArrayList = new BasicArrayListD();

public constructor (groupInterface: Group){

            super();
        this.groupInterface= groupInterface;
    
}


    public clear(){
this.list.clear();
    
}


    public add(groupInterface: Group){

    var commonStrings: CommonStrings = CommonStrings.getInstance()!;;
    

    var groupCommonFactory: GroupCommonFactory = GroupCommonFactory.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(groupCommonFactory!.ADDING_LABEL);
    
stringBuffer!.append(groupInterface!.toString());
    
stringBuffer!.append(groupCommonFactory!.TO_LABEL);
    
stringBuffer!.append(StringUtil.getInstance()!.toString(this.groupInterface));
    
this.logUtil!.putF(stringBuffer!.toString(), this, commonStrings!.ADD);
    
this.list.add(groupInterface);
    
}


    public isInGroup(groupInterface: Group): boolean{

                        if(this.list.contains(groupInterface))
                        
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
                        return this.groupInterface;
    
}


}



