
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
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
export class TransformInfoProperties
            extends Object
         {
        

    private name: string

    private label: string

    private description: string

    private objectFileName: string

    private objectConfigFileName: string

    private templateFileName: string
public constructor (name: string, label: string, description: string, objectFileName: string, objectConfigFileName: string, templateFileName: string){

            super();
            var name = name
var label = label
var description = description
var objectFileName = objectFileName
var objectConfigFileName = objectConfigFileName
var templateFileName = templateFileName
this.name= name;
    
this.label= label;
    
this.description= description;
    
this.objectFileName= objectFileName;
    
this.templateFileName= templateFileName;
    
this.objectConfigFileName= objectConfigFileName;
    
}


    public setName(value: string){
var value = value
this.name= value;
    
}


    public setDescription(value: string){
var value = value
this.description= value;
    
}


    public setViewFile(value: string){
var value = value
this.objectFileName= value;
    
}


    public setTemplateFile(value: string){
var value = value
this.templateFileName= value;
    
}


    public setObjectConfigFile(value: string){
var value = value
this.objectConfigFileName= value;
    
}


    public getName(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


    public getLabel(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.label;
    
}


    public getDescription(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.description;
    
}


    public getViewFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectFileName;
    
}


    public getTemplateFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.templateFileName;
    
}


    public getObjectConfigFile(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.objectConfigFileName;
    
}


}
                
            

