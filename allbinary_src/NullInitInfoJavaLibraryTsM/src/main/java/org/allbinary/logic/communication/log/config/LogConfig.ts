
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
        



import { EntryData } from "../../../../../../org/allbinary/business/entry/EntryData.js";

    
import { DomNodeHelper } from "../../../../../../org/allbinary/data/tree/dom/DomNodeHelper.js";

    
import { DomSearchHelper } from "../../../../../../org/allbinary/data/tree/dom/DomSearchHelper.js";

    
import { BooleanUtil } from "../../../../../../org/allbinary/logic/java/bool/BooleanUtil.js";

    
import { BasicArrayList } from "../../../../../../org/allbinary/util/BasicArrayList.js";

    
import { Node } from "../../../../../../org/w3c/dom/Node.js";

    

export class LogConfig
            extends Object
         {
        

    private isEnabled: boolean

    private name: string

    private description: string

    private path: string

    private fileName: string
public constructor (aName: string, aDescription: string, aPath: string, aFileName: string){

            super();
            var aName = aName
var aDescription = aDescription
var aPath = aPath
var aFileName = aFileName
this.isEnabled= false;
    
this.name= aName;
    
this.description= aDescription;
    
this.path= aPath;
    
this.fileName= aFileName;
    
}

public constructor (node: Node){

            super();
            var node = node

    var enabledValueNode: Node = DomSearchHelper.getNode(EntryData.getInstance()!.ENABLE, node.getChildNodes())!;
        
        
;
    

    var isEnabledString: string = DomNodeHelper.getTextNodeValue(enabledValueNode)!;
        
        
;
    
this.isEnabled= BooleanUtil.getInstance()!.getFromString(isEnabledString);
    

    var logConfigData: LogConfigData = LogConfigData.getInstance()!;
        
        
;
    

    var nameValueNode: Node = DomSearchHelper.getNode(logConfigData!.NAME, node.getChildNodes())!;
        
        
;
    
this.name= DomNodeHelper.getTextNodeValue(nameValueNode);
    

    var descriptionValueNode: Node = DomSearchHelper.getNode(logConfigData!.DESCRIPTION, node.getChildNodes())!;
        
        
;
    
this.description= DomNodeHelper.getTextNodeValue(descriptionValueNode);
    

    var fileValueNode: Node = DomSearchHelper.getNode(logConfigData!.FILE, node.getChildNodes())!;
        
        
;
    
this.fileName= DomNodeHelper.getTextNodeValue(fileValueNode);
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public isEnabled(): boolean{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.isEnabled;
    
}


    public enable(){
this.isEnabled= true;
    
}


    public disable(){
this.isEnabled= false;
    
}


    public getDescription(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.description;
    
}


    public getFileName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.fileName;
    
}


    public setName(value: string){
var value = value
this.name= value;
    
}


    public setDescription(value: string){
var value = value
this.description= value;
    
}


    public setPath(value: string){
var value = value
this.path= value;
    
}


    public setFileName(value: string){
var value = value
this.fileName= value;
    
}


                //@Throws(Error::class)
            
    public getTypeVector(): BasicArrayList{

    var logKeyVector: BasicArrayList = new BasicArrayList();
        
        
;
    



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return logKeyVector;
    
}


}
                
            

