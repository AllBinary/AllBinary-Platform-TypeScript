
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
        



import { LogUtil } from "../../../../../org/allbinary/logic/communication/log/LogUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { BasicArrayList } from "../../../../../org/allbinary/util/BasicArrayList.js";

    
import { BasicArrayListUtil } from "../../../../../org/allbinary/util/BasicArrayListUtil.js";

    

export class KeylessBasicArrayListCache extends IndexedBasicArrayListCache {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;
        
        

    readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;
        
        
public constructor (){

            super();
            }

public constructor (size: number)                        

                            : super(size){

            super();
            var size = size


                            //For kotlin this is before the body of the constructor.
                    
}


    public get(): BasicArrayList{

        try {
            
                        if(this.index >= this.list.size())
                        
                                    {
                                    this.this.add()

                                    }
                                

    var list: BasicArrayList = this.get(this.index++) as BasicArrayList;
        
        




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
} catch(e: Exception)
            {
logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET, e)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return basicArrayListUtil!.getImmutableInstance();
    
}

}


    public clear(){
super.clear()

    var basicArrayList: BasicArrayList





                        for (
    var index: number = this.list.size() -1;
        
        
index >= 0; index--)
        {
basicArrayList= (this.list.objectArray[index]! as BasicArrayList)
basicArrayList!.clear()
}

}


    public log(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        

stringBuffer!.append("S: ")
stringBuffer!.appendint(this.list.size())

    var S_LABEL: string = " s: ";
        
        


    var basicArrayList: BasicArrayList





                        for (
    var index: number = this.list.size() -1;
        
        
index >= 0; index--)
        {
stringBuffer!.append(S_LABEL)
basicArrayList= (this.list.objectArray[index]! as BasicArrayList)
stringBuffer!.appendint(basicArrayList!.size())
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


}
                
            

