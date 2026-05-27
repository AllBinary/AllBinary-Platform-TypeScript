
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
        
            import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
        
import { FilePathData } from '../../../../../org/allbinary/logic/io/file/FilePathData.js';
      
import { FilePathUtil } from '../../../../../org/allbinary/logic/io/file/FilePathUtil.js';
      
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
      
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
      
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
      
import { CommonSeps } from '../../../../../org/allbinary/string/CommonSeps.js';
      
















                                        
        //Current folder imports from return types, extended types, and scope (deduplicated)
        import { AbPathData } from './AbPathData.js';
import { PathUtil } from './PathUtil.js';

export class AbPath
            extends Object
         {
        

    public static createAbPath(): AbPath{

        try {
            
    var EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return new AbPath(EMPTY_STRING, EMPTY_STRING);
    

                //: 
} catch(ex) 
            {



                            throw new RuntimeException();
                    
}

}


    private static readonly NETWORK_SEP: string = ":/";

    private readonly commonSeps: CommonSeps = CommonSeps.getInstance()!;

    private readonly abPathData: AbPathData = AbPathData.getInstance()!;

    private readonly abPathUtil: PathUtil = PathUtil.getInstance()!;

    private readonly EMPTY_STRING: string = StringUtil.getInstance()!.EMPTY_STRING;

    schema: string = this.EMPTY_STRING;

    private path: string = this.EMPTY_STRING;

    nameP: string = this.EMPTY_STRING;

    private hasSchemaP: boolean = false;

    private numberOfSeps: number = 0;

public constructor (aPath: string, name: string){

            super();
        
    var stringValidationUtil: StringValidationUtil = StringValidationUtil.getInstance()!;;
    

                        if(!stringValidationUtil!.isEmpty(aPath))
                        
                                    {
                                    this.schema= this.getSchema(aPath);
    
this.nameP= name;
    
this.path= this.abPathUtil!.adjustEnd(this.abPathUtil!.adjust(this.getPathFromPath(aPath)));
    

                                    }
                                
                        else {
                            this.init();
    

                        if(!stringValidationUtil!.isEmpty(name))
                        
                                    {
                                    this.nameP= name;
    

                                    }
                                

                        }
                            
}


    init(){
this.schema= this.EMPTY_STRING;
    
this.setPath(this.abPathData!.SEPARATOR);
    
this.nameP= this.EMPTY_STRING;
    
}


    getSchema(aPath: string): string{

    var beginIndex: number = aPath!.indexOf(this.commonSeps!.COLON)!;;
    

                        if(beginIndex >= 0)
                        
                                    {
                                    this.hasSchemaP= true;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return aPath!.substring(0, beginIndex);;
    

                                    }
                                
this.hasSchemaP= false;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.EMPTY_STRING;
    
}


    public hasSchema(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.hasSchemaP;
    
}


                //@Throws(Exception.constructor)
            
    public getPathFromPath(aPath: string): string{

    var filePathData: FilePathData = FilePathData.getInstance()!;;
    

    var tempPath: string = aPath;;
    

                        if(!this.hasSchema())
                        
                                    {
                                    tempPath= this.abPathUtil!.adjustStart(tempPath);
    

                                    }
                                
                        else {
                            
    var beginIndex: number = tempPath!.indexOf(this.commonSeps!.COLON)!;;
    

                        if(beginIndex >= 0)
                        
                                    {
                                    beginIndex++;
    

        while(tempPath[beginIndex] == this.abPathData!.SEPARATORCHAR || tempPath[beginIndex] == filePathData!.SEPARATORCHAR)
        {
beginIndex++;
    
this.numberOfSeps++;
    

                        if(this.numberOfSeps > 2)
                        
                                    {
                                    


                            throw new Exception("Should Not Have More Than Two Seps");
                    

                                    }
                                
}

tempPath= tempPath!.substring(beginIndex, tempPath!.length);
    

                                    }
                                

                        }
                            



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return tempPath;
    
}


    public setName(name: string){
this.nameP= name;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.nameP;
    
}


    public toString(): string{

    var stringBuffer: StringMaker = new StringMaker();;
    

                        if(this.hasSchema())
                        
                                    {
                                    stringBuffer!.append(this.schema);
    
stringBuffer!.append(AbPath.NETWORK_SEP);
    

                                    }
                                
stringBuffer!.append(this.getPath());
    
stringBuffer!.append(this.nameP);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    
}


    public toFileSystemString(): string{

                        if(this.hasSchema())
                        
                                    {
                                    
    var filePathData: FilePathData = FilePathData.getInstance()!;;
    

    var stringBuffer: StringMaker = new StringMaker();;
    
stringBuffer!.append(this.schema);
    
stringBuffer!.append(this.commonSeps!.COLON);
    
stringBuffer!.append(filePathData!.SEPARATOR);
    
stringBuffer!.append(FilePathUtil.adjust(this.getPath()));
    
stringBuffer!.append(this.nameP);
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return stringBuffer!.toString();;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return FilePathUtil.adjust(this.getPath()) +this.nameP;
    

                        }
                            
}


    public getPath(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.path;
    
}


    setPath(path: string){
this.path= path;
    
}


}
                
            

