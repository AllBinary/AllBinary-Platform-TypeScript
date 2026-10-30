
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

        


            import { Object } from '../../../../../java/lang/Object.js';
        
            import { Exception } from '../../../../../java/lang/Exception.js';
        
import { Input } from '../../../../../org/allbinary/game/input/Input.js';
//not GWT import const Input

//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
type LogUtil<T = any, U = any> = typeof LogUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof LogUtil;

//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
type StringMaker<T = any, U = any> = typeof StringMaker extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringMaker;

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
type CommonLabels<T = any, U = any> = typeof CommonLabels extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonLabels;

//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
type CommonStrings<T = any, U = any> = typeof CommonStrings extends abstract new (...args: any[]) => infer Instance ? Instance : typeof CommonStrings;

//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
type ABHashtable<T = any, U = any> = typeof ABHashtable extends abstract new (...args: any[]) => infer Instance ? Instance : typeof ABHashtable;

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputToGameKeyMapping } from './InputToGameKeyMapping.js';
//not GWT import - same folder const InputToGameKeyMapping

export class InputMapping
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly hashtable: ABHashtable<any, any> = StdUtil.getInstance()!.createHashtable()!;

    private readonly mappedList: BasicArrayList = new BasicArrayListD();

protected constructor (){

            super();
        }


    public getTotalMapped(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.size();;
    
}


    isDefaultNew(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}


    getDefault(): InputToGameKeyMapping{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return InputToGameKeyMapping.getNullInstance();;
    
}


    removeAll(){
this.hashtable.clear();
    
this.mappedList!.clear();
    
}


    public remove(input: Input, mappedToInput: Input){

    let stringBuffer: StringMaker = new StringMaker();;
    

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    
stringBuffer!.append(CommonLabels.getInstance()!.START_LABEL);
    
stringBuffer!.append(stringUtil!.toString(input));
    
stringBuffer!.append(" == ");
    
stringBuffer!.append(stringUtil!.toString(mappedToInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "InputMapping::remove");
    

    let list: BasicArrayList = this.getMappedInput(input)!;;
    

                        if(list.contains(mappedToInput))
                        
                                    {
                                    list.remove(mappedToInput);
    
this.mappedList!.remove(mappedToInput);
    
stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Removed: ");
    
stringBuffer!.append(stringUtil!.toString(input));
    
stringBuffer!.append(" == ");
    
stringBuffer!.append(stringUtil!.toString(mappedToInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "InputMapping::remove");
    

                                    }
                                
                        else {
                            stringBuffer!.delete(0, stringBuffer!.length());
    
stringBuffer!.append("Not Deleted: ");
    
stringBuffer!.append(stringUtil!.toString(input));
    
stringBuffer!.append(" == ");
    
stringBuffer!.append(stringUtil!.toString(mappedToInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "InputMapping::remove");
    

                        }
                            
}


                //@Throws(Exception.constructor)
            
    public addMapping(inputToGameKeyMapping: InputToGameKeyMapping){



                            throw new Exception(this.commonStrings!.NOT_IMPLEMENTED);
                    
}


    public add(input: Input, mappedToInput: Input){

    let list: BasicArrayList = this.getMappedInput(input)!;;
    

                        if(!list.contains(mappedToInput))
                        
                                    {
                                    list.add(mappedToInput);
    
this.mappedList!.add(mappedToInput);
    

                                    }
                                
}


    public isMapped(input: Input): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.mappedList!.contains(input);;
    
}


    public getMappedInput(id: Input): BasicArrayList{

    let mappingInputCanBeNullList: any = this.hashtable.get(id);;
    

                        if(mappingInputCanBeNullList == 
                                    null
                                )
                        
                                    {
                                    
    let list: BasicArrayList = new BasicArrayListD();;
    
this.hashtable.put(id, list);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mappingInputCanBeNullList as BasicArrayList;
    
}


    public getHashtable(): ABHashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


}

