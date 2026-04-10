
        /* Generated Code Do Not Modify */
        



import { Buffer } from "../../../../java/nio/Buffer.js";

    
import { FloatBuffer } from "../../../../java/nio/FloatBuffer.js";

    
import { IntBuffer } from "../../../../java/nio/IntBuffer.js";

    
import { ShortBuffer } from "../../../../java/nio/ShortBuffer.js";

    

interface GL11Ext extends GL {
        

    public static readonly GL_MATRIX_INDEX_ARRAY_BUFFER_BINDING_OES: number = 35742;
        
        

    public static readonly GL_MATRIX_INDEX_ARRAY_OES: number = 34884;
        
        

    public static readonly GL_MATRIX_INDEX_ARRAY_POINTER_OES: number = 34889;
        
        

    public static readonly GL_MATRIX_INDEX_ARRAY_SIZE_OES: number = 34886;
        
        

    public static readonly GL_MATRIX_INDEX_ARRAY_STRIDE_OES: number = 34888;
        
        

    public static readonly GL_MATRIX_INDEX_ARRAY_TYPE_OES: number = 34887;
        
        

    public static readonly GL_MATRIX_PALETTE_OES: number = 34880;
        
        

    public static readonly GL_MAX_PALETTE_MATRICES_OES: number = 34882;
        
        

    public static readonly GL_MAX_VERTEX_UNITS_OES: number = 34468;
        
        

    public static readonly GL_TEXTURE_CROP_RECT_OES: number = 35741;
        
        

    public static readonly GL_WEIGHT_ARRAY_BUFFER_BINDING_OES: number = 34974;
        
        

    public static readonly GL_WEIGHT_ARRAY_OES: number = 34477;
        
        

    public static readonly GL_WEIGHT_ARRAY_POINTER_OES: number = 34476;
        
        

    public static readonly GL_WEIGHT_ARRAY_SIZE_OES: number = 34475;
        
        

    public static readonly GL_WEIGHT_ARRAY_STRIDE_OES: number = 34474;
        
        

    public static readonly GL_WEIGHT_ARRAY_TYPE_OES: number = 34473;
        
        

    glTexParameterfv(target: number, pname: number, param: FloatArray, offset: number)

    glCurrentPaletteMatrixOES(matrixpaletteindex: number)

    glDrawTexfOES(x: number, y: number, z: number, width: number, height: number)

    glDrawTexfvOES(coords: FloatArray, offset: number)

    glDrawTexfvOES(coords: FloatBuffer)

    glDrawTexiOES(x: number, y: number, z: number, width: number, height: number)

    glDrawTexivOES(coords: IntArray, offset: number)

    glDrawTexivOES(coords: IntBuffer)

    glDrawTexsOES(x: number, y: number, z: number, width: number, height: number)

    glDrawTexsvOES(coords: ShortArray, offset: number)

    glDrawTexsvOES(coords: ShortBuffer)

    glDrawTexxOES(x: number, y: number, z: number, width: number, height: number)

    glDrawTexxvOES(coords: IntArray, offset: number)

    glDrawTexxvOES(coords: IntBuffer)

    glEnable(cap: number)

    glEnableClientState(array: number)

    glLoadPaletteFromModelViewMatrixOES()

    glMatrixIndexPointerOES(size: number, type: number, stride: number, pointer: Buffer)

    glMatrixIndexPointerOES(size: number, type: number, stride: number, offset: number)

    glWeightPointerOES(size: number, type: number, stride: number, pointer: Buffer)

    glWeightPointerOES(size: number, type: number, stride: number, offset: number)

}
                
            

