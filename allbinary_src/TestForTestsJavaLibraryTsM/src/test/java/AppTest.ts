
        /* Generated Code Do Not Modify */
        


import { Assertions } from "org/junit/jupiter/api/Assertions.js";

    
import { DisplayName } from "org/junit/jupiter/api/DisplayName.js";

    
import { Test } from "org/junit/jupiter/api/Test.js";

    

export class AppTest
            extends Object
         {
        

    testAddition(){
Assertions.assertEquals(2, 1 +1);
    
}


    testStringEquality(){

    var expected: string = "Hello World!";
        
        
;
    

    var actual: string = "Hello World!";
        
        
;
    
Assertions.assertEquals(expected, actual);
    
}


    testBooleanAssertions(){
Assertions.assertTrue(true);
    
Assertions.assertFalse(false);
    
}


}
                
            

