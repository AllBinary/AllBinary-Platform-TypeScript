
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
        




export class BasicGroupFactory
            extends Object
         {
        

    private static readonly instance: BasicGroupFactory = new BasicGroupFactory();
        
        

    public static getInstance(): BasicGroupFactory{



                        //if statement needs to be on the same line and ternary does not work the same way.
                        return instance;
    
}


    public readonly NAME: string = "GROUP_NAME";
        
        

    public readonly NO_SUCH_GROUP: string = "No Such Group: ";
        
        

    public readonly GOOD: Group = new Group("Good Guys", 0.toShort());
        
        

    public readonly ENEMY: Group = new Group("Bad Guys", 1.toShort());
        
        

    public readonly ENEMY_ON_LEVEL: Group = new Group("Bad Guys on Level", 2.toShort());
        
        

    public readonly NONE: Group = new Group("Not On A Team", 3.toShort());
        
        

    public readonly GOOD_ARRAY: Group[] = 
                                                        [
                                                            this.GOOD
                                                        ];
        
        

    public readonly ENEMY_ARRAY: Group[] = 
                                                        [
                                                            this.ENEMY
                                                        ];
        
        

    public readonly ENEMY_ON_LEVEL_ARRAY: Group[] = 
                                                        [
                                                            this.ENEMY,this.ENEMY_ON_LEVEL
                                                        ];
        
        

    public readonly NONE_ARRAY: Group[] = 
                                                        [
                                                            this.NONE
                                                        ];
        
        

}
                
            

