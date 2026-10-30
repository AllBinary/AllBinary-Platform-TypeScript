
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

        


            import { Exception } from '../../../../../java/lang/Exception.js';
        
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListUtil } 
const BasicArrayListUtil = globalThis.org.allbinary.util.BasicArrayListUtil;
type BasicArrayListUtil<T = any, U = any> = typeof BasicArrayListUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListUtil;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { IndexedBasicArrayListCache } from './IndexedBasicArrayListCache.js';
//sameFolderImports - not GWT import - same folder const IndexedBasicArrayListCache

export class KeylessBasicArrayListCache extends IndexedBasicArrayListCache {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly basicArrayListUtil: BasicArrayListUtil = BasicArrayListUtil.getInstance()!;

public constructor (){

            super();
        }


    public get(): BasicArrayList{

 try { 
                        if(this.index >= this.list.size())
                        
                                    {
                                    this.addDefault();
    

                                    }
                                

    let list: BasicArrayList = this.getAt(this.index++) as BasicArrayList;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    
 }
 catch (caught: any) {
 {
  const e = caught;
  
this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.GET, e);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.basicArrayListUtil!.getImmutableInstance();;
    

 }
   }
 
}


    public clear(){
super.clear();
    

    let basicArrayList: BasicArrayList;;
    




                        for (
    let index: number = this.list.size() -1;index >= 0; index--)
        {
basicArrayList= (this.list.objectArray[index]! as BasicArrayList);
    
basicArrayList!.clear();
    
}

}


    public log(): string{

    let stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append("S: ");
    
stringBuffer!.appendint(this.list.size());
    

    let S_LABEL: string = " s: ";;
    

    let basicArrayList: BasicArrayList;;
    




                        for (
    let index: number = this.list.size() -1;index >= 0; index--)
        {
stringBuffer!.append(S_LABEL);
    
basicArrayList= (this.list.objectArray[index]! as BasicArrayList);
    
stringBuffer!.appendint(basicArrayList!.size());
    
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


}

