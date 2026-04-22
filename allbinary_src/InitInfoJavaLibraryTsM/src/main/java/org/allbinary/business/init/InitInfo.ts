
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
        



import { HashMap } from "../../../../java/util/HashMap.js";

    
import { PreLogUtil } from "../../../../org/allbinary/logic/communication/log/PreLogUtil.js";

    
import { LogConfigTypeFactory } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypeFactory.js";

    
import { LogConfigTypes } from "../../../../org/allbinary/logic/communication/log/config/type/LogConfigTypes.js";

    
import { AbPath } from "../../../../org/allbinary/logic/io/path/AbPath.js";

    
import { BooleanUtil } from "../../../../org/allbinary/logic/java/bool/BooleanUtil.js";

    

















        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class InitInfo
            extends Object
         {
        

    private static readonly instance: InitInfo = new InitInfo();
        
        

    public static getInstance(): InitInfo{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly TESTING: string = "TESTING";
        
        

    public readonly MAINPATH: string = "MAINPATH";
        
        

    public readonly TESTHTMLPATH: string = "TESTHTMLPATH";
        
        

    private testing: string = 
                null
            ;
        
        

    private mainPath: AbPath = 
                null
            ;
        
        

    private testHtmlPath: AbPath = 
                null
            ;
        
        

    private hasRead: boolean = false;
        
        
private constructor (){

            super();
        }


                //@Throws(InitException::class)
            @Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public set(){

        try {
            
    var initInfoEntity: InitInfoEntity = new InitInfoEntity();
        
        
;
    

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put("created entity", "InitInfo", "set()");
    

                                    }
                                

                        if(!initInfoEntity!.is();

                        )
                        
                                    {
                                    
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put("adding", "InitInfo", "set()");
    

                                    }
                                
initInfoEntity!.add();
    

                                    }
                                
                        else {
                            
                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADER))
                        
                                    {
                                    PreLogUtil.put("update", "InitInfo", "set()");
    

                                    }
                                
initInfoEntity!.update();
    

                        }
                            
this.hasRead= false;
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("error", "InitInfo", "set()", e);
    

                                    }
                                
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public set(hashMap: HashMap<any, any>){
var hashMap = hashMap

        try {
            this.testing= hashMap!.get(this.TESTING);

                         as String;
    
this.mainPath= new AbPath(hashMap!.get(this.MAINPATH);

                         as String);
    
this.testHtmlPath= new AbPath(hashMap!.get(this.TESTHTMLPATH);

                         as String);
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("error", "InitInfo", "set()", e);
    

                                    }
                                
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    get(){

        try {
            this.testing= 
                                        null
                                    ;
    
this.mainPath= 
                                        null
                                    ;
    
this.testHtmlPath= 
                                        null
                                    ;
    

    var initInfoEntity: InitInfoEntity = new InitInfoEntity();
        
        
;
    
initInfoEntity!.get();
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("error", "InitInfo", "set()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    public setHasRead(value: boolean){
var value = value
this.hasRead= value;
    
}

@Synchronized //TWB - This is not allowed for Typescript native. Instead use Coroutine logic instead.

    updateIfNeeded(){

        try {
            
                        if(!this.hasRead)
                        
                                    {
                                    this.hasRead= true;
    
this.get();
    

                                    }
                                

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("error", "InitInfo", "updateIfNeeded()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return ;
    
}

}


    public isTesting(): boolean{

        try {
            this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanUtil.getInstance()!.getFromString(this.testing);

                        ;
    

                //: 
} catch(e) 
            {

                        if(LogConfigTypes.LOGGING.contains(LogConfigTypeFactory.getInstance()!.PRELOADERERROR))
                        
                                    {
                                    PreLogUtil.putOE("error", "InitInfo", "updateIfNeeded()", e);
    

                                    }
                                



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    
}

}


    public getTesting(): string{
this.updateIfNeeded();
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return testing;
    
}


    public getTestHtmlPath(): string{
this.updateIfNeeded();
    

                        if(this.testHtmlPath != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return testHtmlPath!.toString();

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public getMainPath(): string{
this.updateIfNeeded();
    

                        if(this.mainPath != 
                                    null
                                )
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return mainPath!.toString();

                        ;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return null;
    

                        }
                            
}


    public setTesting(value: string){
var value = value
this.testing= value;
    
}


    public setTestHtmlPath(value: AbPath){
var value = value
this.testHtmlPath= value;
    
}


    public setMainPath(value: AbPath){
var value = value
this.mainPath= value;
    
}


    public isMainPathValid(abPath: AbPath): boolean{
var abPath = abPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


    public isTestHtmlPathValid(abPath: AbPath): boolean{
var abPath = abPath



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    
}


                //@Throws(Error::class)
            
    public isTestingValid(testing: string): boolean{
var testing = testing



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return BooleanUtil.getInstance()!.isStringBoolean(testing);

                        ;
    
}


    public toHashMap(): HashMap<any, any>{

    var hashMap: HashMap<any, any> = new HashMap<any, any>();
        
        
;
    
hashMap!.put(this.TESTING, this.getTesting());
    
hashMap!.put(this.MAINPATH, this.getMainPath());
    
hashMap!.put(this.TESTHTMLPATH, this.getTestHtmlPath());
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return hashMap;
    
}


}
                
            

