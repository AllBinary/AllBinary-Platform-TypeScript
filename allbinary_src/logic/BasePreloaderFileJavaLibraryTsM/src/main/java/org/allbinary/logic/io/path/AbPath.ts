
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
        



import { FilePathData } from "../../../../../org/allbinary/logic/io/file/FilePathData.js";

    
import { FilePathUtil } from "../../../../../org/allbinary/logic/io/file/FilePathUtil.js";

    
import { StringMaker } from "../../../../../org/allbinary/logic/string/StringMaker.js";

    
import { StringUtil } from "../../../../../org/allbinary/logic/string/StringUtil.js";

    
import { StringValidationUtil } from "../../../../../org/allbinary/logic/string/StringValidationUtil.js";

    
import { CommonSeps } from "../../../../../org/allbinary/string/CommonSeps.js";

    

export class AbPath
            extends Object
         {
        

    private static readonly NETWORK_SEP: string = ":/";
        
        

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;
        
        

    private readonly abPathData: AbPathData = AbPathData.getInstance()!;
        
        

    schema: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private path: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    nameP: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        

    private hasSchema: boolean = false;
        
        

    private numberOfSeps: number = 0;
        
        

    private readonly abPathUtil: PathUtil = PathUtil.getInstance()!;
        
        
public constructor (){

            super();
            init()
}


    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;
        
        
public constructor (aPath: string){

            super();
            var aPath = aPath

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(!stringValidationUtil!.isEmpty(aPath))
                        
                                    {
                                    this.schema= this.getSchema(aPath)
this.nameP= EMPTY_STRING
this.path= abPathUtil!.adjustEnd(abPathUtil!.adjust(this.getPath(aPath)))

                                    }
                                
                        else {
                            init()

                        }
                            
}

public constructor (aPath: string, name: string){

            super();
            var aPath = aPath
var name = name

    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;
        
        


    
                        if(!stringValidationUtil!.isEmpty(aPath))
                        
                                    {
                                    this.schema= this.getSchema(aPath)
this.nameP= name
this.path= abPathUtil!.adjustEnd(abPathUtil!.adjust(this.getPath(aPath)))

                                    }
                                
                        else {
                            init()

    
                        if(!stringValidationUtil!.isEmpty(name))
                        
                                    {
                                    this.nameP= name

                                    }
                                

                        }
                            
}


    init(){
this.schema= EMPTY_STRING
this.setPath(abPathData!.SEPARATOR)
this.nameP= EMPTY_STRING
}


    getSchema(aPath: string): string{
var aPath = aPath

    var beginIndex: number = aPath!.indexOf(commonSeps!.COLON)!;
        
        


    
                        if(beginIndex >= 0)
                        
                                    {
                                    this.hasSchema= true



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return aPath!.substring(0, beginIndex);
    

                                    }
                                
this.hasSchema= false



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return EMPTY_STRING;
    
}


    public hasSchema(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hasSchema;
    
}


                @Throws(Exception::class)
            
    public getPath(aPath: string): string{
var aPath = aPath

    var filePathData: FilePathData = FilePathData.getInstance()!;
        
        


    var tempPath: string = aPath;
        
        


    
                        if(!this.hasSchema())
                        
                                    {
                                    tempPath= abPathUtil!.adjustStart(tempPath)

                                    }
                                
                        else {
                            
    var beginIndex: number = tempPath!.indexOf(commonSeps!.COLON)!;
        
        


    
                        if(beginIndex >= 0)
                        
                                    {
                                    beginIndex++

        while(tempPath[beginIndex] == abPathData!.SEPARATORCHAR || tempPath[beginIndex] == filePathData!.SEPARATORCHAR)
        {
beginIndex++
numberOfSeps++

    
                        if(numberOfSeps > 2)
                        
                                    {
                                    


                            throw Exception("Should Not Have More Than Two Seps")

                                    }
                                
}

tempPath= tempPath!.substring(beginIndex, tempPath!.length)

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tempPath;
    
}


    public setName(name: string){
    //var name = name
this.nameP= name
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nameP;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();
        
        


    
                        if(this.hasSchema())
                        
                                    {
                                    append(this.schema)
append(NETWORK_SEP)

                                    }
                                
append(this.getPath())
append(this.nameP)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    
}


    public toFileSystemString(): string{

    
                        if(this.hasSchema())
                        
                                    {
                                    
    var filePathData: FilePathData = FilePathData.getInstance()!;
        
        


    var stringBuffer: StringMaker = new StringMaker();
        
        

append(this.schema)
append(commonSeps!.COLON)
append(filePathData!.SEPARATOR)
append(FilePathUtil.adjust(this.getPath()))
append(this.nameP)



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FilePathUtil.adjust(this.getPath()) +this.nameP;
    

                        }
                            
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return path;
    
}


    setPath(path: string){
var path = path
this.path= path
}


}
                
            

