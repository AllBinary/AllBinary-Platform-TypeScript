
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
        
//not game specific package import { JsType } from '../../../../../jsinterop/annotations/JsType.js';
      const JsType = globalThis.jsinterop.annotations.JsType;

      
//not game specific package import { Hashtable } from '../../../../../java/util/Hashtable.js';
      const Hashtable = globalThis.java.util.Hashtable;

      
//not game specific package import { Input } from '../../../../../org/allbinary/game/input/Input.js';
      const Input = globalThis.org.allbinary.game.input.Input;

      
//not game specific package import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
      const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;

      
//not game specific package import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;

      
//not game specific package import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;

      
//not game specific package import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
      const CommonLabels = globalThis.org.allbinary.string.CommonLabels;

      
//not game specific package import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
      const CommonStrings = globalThis.org.allbinary.string.CommonStrings;

      
//not game specific package import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
      const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;

      
//not game specific package import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
      const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;

      
//not game specific package import { JsMethod } from '../../../../../jsinterop/annotations/JsMethod.js';
      const JsMethod = globalThis.jsinterop.annotations.JsMethod;

      
//not game specific package import { JsConstructor } from '../../../../../jsinterop/annotations/JsConstructor.js';
      const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;

      
//not game specific package import { JsProperty } from '../../../../../jsinterop/annotations/JsProperty.js';
      const JsProperty = globalThis.jsinterop.annotations.JsProperty;

      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { InputToGameKeyMapping } from './InputToGameKeyMapping.js';

export class InputMapping
            extends Object
         {
        

    readonly logUtil: LogUtil = LogUtil.getInstance()!;

    readonly commonStrings: CommonStrings = CommonStrings.getInstance()!;

    private readonly hashtable: Hashtable<any, any> = new Hashtable<any, any>();

    private readonly mappedList: BasicArrayList = new BasicArrayListD();

protected constructor (){

            super();
        }


    public getTotalMapped(): number{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable.length;;
    
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

    var stringBuffer: StringMaker = new StringMaker();;
    

    var stringUtil: StringUtil = StringUtil.getInstance()!;;
    
stringBuffer!.append(CommonLabels.getInstance()!.START_LABEL);
    
stringBuffer!.append(stringUtil!.toString(input));
    
stringBuffer!.append(" == ");
    
stringBuffer!.append(stringUtil!.toString(mappedToInput));
    
this.logUtil!.putF(stringBuffer!.toString(), this, "InputMapping::remove");
    

    var list: BasicArrayList = this.getMappedInput(input)!;;
    

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

    var list: BasicArrayList = this.getMappedInput(input)!;;
    

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

    var mappingInputCanBeNullList: any = this.hashtable.get(id);;
    

                        if(mappingInputCanBeNullList == 
                                    null
                                )
                        
                                    {
                                    
    var list: BasicArrayList = new BasicArrayListD();;
    
this.hashtable.put(id, list);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return list;
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mappingInputCanBeNullList as BasicArrayList;
    
}


    public getHashtable(): Hashtable<any, any>{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hashtable;
    
}


}
                
            

