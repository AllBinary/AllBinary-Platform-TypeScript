
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
        
export class WorkFlowData
            extends Object
         {
        

    private static readonly instance: WorkFlowData = new WorkFlowData();
        
        

    public static getInstance(): WorkFlowData{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}

private constructor (){

            super();
        }


    public WORKFLOWS: string = "WORKFLOWS";
        
        

    public WORKFLOW: string = "WORKFLOW";
        
        

    public NAME: string = "WORKFLOW_NAME";
        
        

    public DATA: string = "WORKFLOW_DATA";
        
        

}
                
            

