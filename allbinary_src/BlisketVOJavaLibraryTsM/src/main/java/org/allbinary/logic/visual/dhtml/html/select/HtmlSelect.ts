
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

        


            import { Exception } from '../../../../../../../java/lang/Exception.js';
        
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
type BasicArrayList<T = any, U = any> = typeof BasicArrayList extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayList;

//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
type BasicArrayListD<T = any, U = any> = typeof BasicArrayListD extends abstract new (...args: any[]) => infer Instance ? Instance : typeof BasicArrayListD;

//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
type StdUtil<T = any, U = any> = typeof StdUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StdUtil;

import { LineReader } from '../../../../../../../org/allbinary/logic/io/LineReader.js';
//not GWT import const LineReader

//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
type StringUtil<T = any, U = any> = typeof StringUtil extends abstract new (...args: any[]) => infer Instance ? Instance : typeof StringUtil;

import { HtmlTag } from '../../../../../../../org/allbinary/logic/visual/dhtml/html/HtmlTag.js';
//not GWT import const HtmlTag

















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class HtmlSelect extends HtmlTag {
        

    private readonly END: string = ">";

    private readonly STARTSELECT: string = "<SELECT ";

    private readonly ENDSELECT: string = "</SELECT>";

    private readonly SIZE: string = "SIZE=\"";

    private readonly NAME: string = "NAME=\"";

    private readonly STARTOPTION: string = "<OPTION";

    private readonly SELETED: string = "SELECTED";

    private readonly ENDOPTION: string = "</OPTION>";

    private before: string;

    private name: string;

    private after: string;

    private size: string;

    private selected: string;

    private options: BasicArrayList;

    private multiple: string = "multiple";

    private isMultipleSelect: boolean = false;

public constructor (before: string, size: string, name: string, after: string){

            super();
        this.before= before;
    
this.size= size;
    
this.name= name;
    
this.after= after;
    
this.options= new BasicArrayListD();
    
}


    public addOption(key: string){
this.options.add(key);
    
}


    public addOptions(fileName: string){

 try { 
    let lineReader: LineReader = new LineReader(fileName);;
    

        while(lineReader!.hasNext())
        {

    let option: string = lineReader!.next()!;;
    
this.addOption(option);
    
}

 }
 catch (caught: any) {
 {
  const e = caught;
  
this.addOption("Error");
    

 }
   }
 
}


    public setSelected(selected: string){
this.selected= selected;
    
}


    public isMultiple(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isMultipleSelect;
    
}


    public setMultiple(value: boolean){
this.isMultipleSelect= value;
    
}


    getOptions(): string{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let result: string = stringUtil!.EMPTY_STRING;;
    

    let optionsArray: any[] = this.options.toArray()!;;
    

    let optionsSize: number = optionsArray!.length
                ;;
    




                        for (
    let i: number = 0;i < optionsSize; i++)
        {

    let value: string = optionsArray[i]! as string;;
    

                        if(value != 
                                    null
                                 && value.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    result += this.STARTOPTION;
    
result += this.END;
    
result += value;
    
result += this.ENDOPTION;
    

                                    }
                                
}




                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


    public toString(): string{

    let stringUtil: StringUtil = StringUtil.getInstance()!;;
    

    let result: string = stringUtil!.EMPTY_STRING;;
    

    let attributeKeys: any[] = this.otherAttributes!.keySet()!.toArray()!;;
    

    let attributeSize: number = attributeKeys!.length
                ;;
    
result= this.before;
    
result += this.STARTSELECT;
    
result += this.NAME;
    
result += this.name;
    
result += "\" ";
    
result += this.SIZE;
    
result += this.size;
    
result += "\" ";
    




                        for (
    let i: number = 0;i < attributeSize; i++)
        {

    let key: string = attributeKeys[i]! as string;;
    

    let value: string = otherAttributes!.get(key) as string;;
    

                        if(value != 
                                    null
                                 && value.compareTo(stringUtil!.EMPTY_STRING) != 0)
                        
                                    {
                                    result += key;
    
result += "=\"";
    
result += value;
    
result += "\" ";
    

                                    }
                                
}


                        if(this.isMultiple())
                        result += " " +this.multiple +" "
result += this.END;
    
result += this.getOptions();
    
result += this.ENDSELECT;
    
result += this.after;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return result;
    
}


}

