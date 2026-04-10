
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
        




export class HtmlMetaAttributeData
            extends Object
         {
        

    private id: number

    private name: string
public constructor (id: number, value: string){

            super();
            var id = id
var value = value
this.name= value
this.id= id
}


    public equals(htmlMetaAttributeData: HtmlMetaAttributeData?): boolean{
var htmlMetaAttributeData = htmlMetaAttributeData

                        if(htmlMetaAttributeData!.id == this.id)
                        
                                    {
                                    


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
    

                                    }
                                
                        else {
                            


                        //if statement needs to be on the same line and ternary does not work the same way.
                        return false;
    

                        }
                            
}


    public toString(): string{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return this.name;
    
}


}
                
            

