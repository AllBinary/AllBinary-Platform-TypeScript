
        /* Generated Code Do Not Modify */
        













        



        //Current folder imports from return types, extended types, and scope (deduplicated)
        
import { GL10 } from "./GL10.js";

import { Buffer } from "./Buffer.js";

import { FloatBuffer } from "./FloatBuffer.js";

import { IntBuffer } from "./IntBuffer.js";

export interface GL11 extends javax.microedition.khronos.opengles.GL10 {
        

    public static readonly GL_ACTIVE_TEXTURE: number = 34016;
        
        

    public static readonly GL_ADD_SIGNED: number = 34164;
        
        

    public static readonly GL_ALPHA_SCALE: number = 3356;
        
        

    public static readonly GL_ALPHA_TEST_FUNC: number = 3009;
        
        

    public static readonly GL_ALPHA_TEST_REF: number = 3010;
        
        

    public static readonly GL_ARRAY_BUFFER: number = 34962;
        
        

    public static readonly GL_ARRAY_BUFFER_BINDING: number = 34964;
        
        

    public static readonly GL_BLEND_DST: number = 3040;
        
        

    public static readonly GL_BLEND_SRC: number = 3041;
        
        

    public static readonly GL_BUFFER_ACCESS: number = 35003;
        
        

    public static readonly GL_BUFFER_SIZE: number = 34660;
        
        

    public static readonly GL_BUFFER_USAGE: number = 34661;
        
        

    public static readonly GL_CLIENT_ACTIVE_TEXTURE: number = 34017;
        
        

    public static readonly GL_CLIP_PLANE0: number = 12288;
        
        

    public static readonly GL_CLIP_PLANE1: number = 12289;
        
        

    public static readonly GL_CLIP_PLANE2: number = 12290;
        
        

    public static readonly GL_CLIP_PLANE3: number = 12291;
        
        

    public static readonly GL_CLIP_PLANE4: number = 12292;
        
        

    public static readonly GL_CLIP_PLANE5: number = 12293;
        
        

    public static readonly GL_COLOR_ARRAY_BUFFER_BINDING: number = 34968;
        
        

    public static readonly GL_COLOR_ARRAY_POINTER: number = 32912;
        
        

    public static readonly GL_COLOR_ARRAY_SIZE: number = 32897;
        
        

    public static readonly GL_COLOR_ARRAY_STRIDE: number = 32899;
        
        

    public static readonly GL_COLOR_ARRAY_TYPE: number = 32898;
        
        

    public static readonly GL_COLOR_CLEAR_VALUE: number = 3106;
        
        

    public static readonly GL_COLOR_WRITEMASK: number = 3107;
        
        

    public static readonly GL_COMBINE: number = 34160;
        
        

    public static readonly GL_COMBINE_ALPHA: number = 34162;
        
        

    public static readonly GL_COMBINE_RGB: number = 34161;
        
        

    public static readonly GL_CONSTANT: number = 34166;
        
        

    public static readonly GL_COORD_REPLACE_OES: number = 34914;
        
        

    public static readonly GL_CULL_FACE_MODE: number = 2885;
        
        

    public static readonly GL_CURRENT_COLOR: number = 2816;
        
        

    public static readonly GL_CURRENT_NORMAL: number = 2818;
        
        

    public static readonly GL_CURRENT_TEXTURE_COORDS: number = 2819;
        
        

    public static readonly GL_DEPTH_CLEAR_VALUE: number = 2931;
        
        

    public static readonly GL_DEPTH_FUNC: number = 2932;
        
        

    public static readonly GL_DEPTH_RANGE: number = 2928;
        
        

    public static readonly GL_DEPTH_WRITEMASK: number = 2930;
        
        

    public static readonly GL_DOT3_RGB: number = 34478;
        
        

    public static readonly GL_DOT3_RGBA: number = 34479;
        
        

    public static readonly GL_DYNAMIC_DRAW: number = 35048;
        
        

    public static readonly GL_ELEMENT_ARRAY_BUFFER: number = 34963;
        
        

    public static readonly GL_ELEMENT_ARRAY_BUFFER_BINDING: number = 34965;
        
        

    public static readonly GL_FRONT_FACE: number = 2886;
        
        

    public static readonly GL_GENERATE_MIPMAP: number = 33169;
        
        

    public static readonly GL_GENERATE_MIPMAP_HINT: number = 33170;
        
        

    public static readonly GL_INTERPOLATE: number = 34165;
        
        

    public static readonly GL_LINE_WIDTH: number = 2849;
        
        

    public static readonly GL_LOGIC_OP_MODE: number = 3056;
        
        

    public static readonly GL_MATRIX_MODE: number = 2976;
        
        

    public static readonly GL_MAX_CLIP_PLANES: number = 3378;
        
        

    public static readonly GL_MODELVIEW_MATRIX: number = 2982;
        
        

    public static readonly GL_MODELVIEW_MATRIX_FLOAT_AS_INT_BITS_OES: number = 35213;
        
        

    public static readonly GL_MODELVIEW_STACK_DEPTH: number = 2979;
        
        

    public static readonly GL_NORMAL_ARRAY_BUFFER_BINDING: number = 34967;
        
        

    public static readonly GL_NORMAL_ARRAY_POINTER: number = 32911;
        
        

    public static readonly GL_NORMAL_ARRAY_STRIDE: number = 32895;
        
        

    public static readonly GL_NORMAL_ARRAY_TYPE: number = 32894;
        
        

    public static readonly GL_OPERAND0_ALPHA: number = 34200;
        
        

    public static readonly GL_OPERAND0_RGB: number = 34192;
        
        

    public static readonly GL_OPERAND1_ALPHA: number = 34201;
        
        

    public static readonly GL_OPERAND1_RGB: number = 34193;
        
        

    public static readonly GL_OPERAND2_ALPHA: number = 34202;
        
        

    public static readonly GL_OPERAND2_RGB: number = 34194;
        
        

    public static readonly GL_POINT_DISTANCE_ATTENUATION: number = 33065;
        
        

    public static readonly GL_POINT_FADE_THRESHOLD_SIZE: number = 33064;
        
        

    public static readonly GL_POINT_SIZE: number = 2833;
        
        

    public static readonly GL_POINT_SIZE_ARRAY_BUFFER_BINDING_OES: number = 35743;
        
        

    public static readonly GL_POINT_SIZE_ARRAY_OES: number = 35740;
        
        

    public static readonly GL_POINT_SIZE_ARRAY_POINTER_OES: number = 35212;
        
        

    public static readonly GL_POINT_SIZE_ARRAY_STRIDE_OES: number = 35211;
        
        

    public static readonly GL_POINT_SIZE_ARRAY_TYPE_OES: number = 35210;
        
        

    public static readonly GL_POINT_SIZE_MAX: number = 33063;
        
        

    public static readonly GL_POINT_SIZE_MIN: number = 33062;
        
        

    public static readonly GL_POINT_SPRITE_OES: number = 34913;
        
        

    public static readonly GL_POLYGON_OFFSET_FACTOR: number = 32824;
        
        

    public static readonly GL_POLYGON_OFFSET_UNITS: number = 10752;
        
        

    public static readonly GL_PREVIOUS: number = 34168;
        
        

    public static readonly GL_PRIMARY_COLOR: number = 34167;
        
        

    public static readonly GL_PROJECTION_MATRIX: number = 2983;
        
        

    public static readonly GL_PROJECTION_MATRIX_FLOAT_AS_INT_BITS_OES: number = 35214;
        
        

    public static readonly GL_PROJECTION_STACK_DEPTH: number = 2980;
        
        

    public static readonly GL_RGB_SCALE: number = 34163;
        
        

    public static readonly GL_SAMPLE_BUFFERS: number = 32936;
        
        

    public static readonly GL_SAMPLE_COVERAGE_INVERT: number = 32939;
        
        

    public static readonly GL_SAMPLE_COVERAGE_VALUE: number = 32938;
        
        

    public static readonly GL_SAMPLES: number = 32937;
        
        

    public static readonly GL_SCISSOR_BOX: number = 3088;
        
        

    public static readonly GL_SHADE_MODEL: number = 2900;
        
        

    public static readonly GL_SRC0_ALPHA: number = 34184;
        
        

    public static readonly GL_SRC0_RGB: number = 34176;
        
        

    public static readonly GL_SRC1_ALPHA: number = 34185;
        
        

    public static readonly GL_SRC1_RGB: number = 34177;
        
        

    public static readonly GL_SRC2_ALPHA: number = 34186;
        
        

    public static readonly GL_SRC2_RGB: number = 34178;
        
        

    public static readonly GL_STATIC_DRAW: number = 35044;
        
        

    public static readonly GL_STENCIL_CLEAR_VALUE: number = 2961;
        
        

    public static readonly GL_STENCIL_FAIL: number = 2964;
        
        

    public static readonly GL_STENCIL_FUNC: number = 2962;
        
        

    public static readonly GL_STENCIL_PASS_DEPTH_FAIL: number = 2965;
        
        

    public static readonly GL_STENCIL_PASS_DEPTH_PASS: number = 2966;
        
        

    public static readonly GL_STENCIL_REF: number = 2967;
        
        

    public static readonly GL_STENCIL_VALUE_MASK: number = 2963;
        
        

    public static readonly GL_STENCIL_WRITEMASK: number = 2968;
        
        

    public static readonly GL_SUBTRACT: number = 34023;
        
        

    public static readonly GL_TEXTURE_BINDING_2D: number = 32873;
        
        

    public static readonly GL_TEXTURE_COORD_ARRAY_BUFFER_BINDING: number = 34970;
        
        

    public static readonly GL_TEXTURE_COORD_ARRAY_POINTER: number = 32914;
        
        

    public static readonly GL_TEXTURE_COORD_ARRAY_SIZE: number = 32904;
        
        

    public static readonly GL_TEXTURE_COORD_ARRAY_STRIDE: number = 32906;
        
        

    public static readonly GL_TEXTURE_COORD_ARRAY_TYPE: number = 32905;
        
        

    public static readonly GL_TEXTURE_MATRIX: number = 2984;
        
        

    public static readonly GL_TEXTURE_MATRIX_FLOAT_AS_INT_BITS_OES: number = 35215;
        
        

    public static readonly GL_TEXTURE_STACK_DEPTH: number = 2981;
        
        

    public static readonly GL_VERTEX_ARRAY_BUFFER_BINDING: number = 34966;
        
        

    public static readonly GL_VERTEX_ARRAY_POINTER: number = 32910;
        
        

    public static readonly GL_VERTEX_ARRAY_SIZE: number = 32890;
        
        

    public static readonly GL_VERTEX_ARRAY_STRIDE: number = 32892;
        
        

    public static readonly GL_VERTEX_ARRAY_TYPE: number = 32891;
        
        

    public static readonly GL_VIEWPORT: number = 2978;
        
        

    public static readonly GL_WRITE_ONLY: number = 35001;
        
        

    glBindBuffer(target: number, buffer: number)

    glBufferData(target: number, size: number, data: java.nio.Buffer, usage: number)

    glBufferSubData(target: number, offset: number, size: number, data: java.nio.Buffer)

    glClipPlanef(plane: number, equation: number[], offset: number)

    glClipPlanef(plane: number, equation: java.nio.FloatBuffer)

    glColor4ub(red: number, green: number, blue: number, alpha: number)

    glColorPointer(size: number, type: number, stride: number, offset: number)

    glDeleteBuffers(n: number, buffers: number[], offset: number)

    glDeleteBuffers(n: number, buffers: java.nio.IntBuffer)

    glDrawElements(mode: number, count: number, type: number, offset: number)

    glGenBuffers(n: number, buffers: number[], offset: number)

    glGenBuffers(n: number, buffers: java.nio.IntBuffer)

    glGetBufferParameteriv(target: number, pname: number, params: number[], offset: number)

    glGetBufferParameteriv(target: number, pname: number, params: java.nio.IntBuffer)

    glGetClipPlanef(pname: number, eqn: number[], offset: number)

    glGetClipPlanef(pname: number, eqn: java.nio.FloatBuffer)

    glGetFloatv(pname: number, params: number[], offset: number)

    glGetFloatv(pname: number, params: java.nio.FloatBuffer)

    glGetLightfv(light: number, pname: number, params: number[], offset: number)

    glGetLightfv(light: number, pname: number, params: java.nio.FloatBuffer)

    glGetMaterialfv(face: number, pname: number, params: number[], offset: number)

    glGetMaterialfv(face: number, pname: number, params: java.nio.FloatBuffer)

    glGetTexEnviv(env: number, pname: number, params: number[], offset: number)

    glGetTexEnviv(env: number, pname: number, params: java.nio.IntBuffer)

    glGetTexParameterfv(target: number, pname: number, params: number[], offset: number)

    glGetTexParameterfv(target: number, pname: number, params: java.nio.FloatBuffer)

    glGetTexParameteriv(target: number, pname: number, params: number[], offset: number)

    glGetTexParameteriv(target: number, pname: number, params: java.nio.IntBuffer)

    glIsBuffer(buffer: number): boolean

    glIsEnabled(cap: number): boolean

    glIsTexture(texture: number): boolean

    glNormalPointer(type: number, stride: number, offset: number)

    glPointParameterf(pname: number, param: number)

    glPointParameterfv(pname: number, params: number[], offset: number)

    glPointParameterfv(pname: number, params: java.nio.FloatBuffer)

    glTexCoordPointer(size: number, type: number, stride: number, offset: number)

    glTexEnvi(target: number, pname: number, param: number)

    glTexEnviv(target: number, pname: number, params: number[], offset: number)

    glTexEnviv(target: number, pname: number, params: java.nio.IntBuffer)

    glTexParameterfv(target: number, pname: number, params: number[], offset: number)

    glTexParameterfv(target: number, pname: number, params: java.nio.FloatBuffer)

    glTexParameteri(target: number, pname: number, param: number)

    glTexParameteriv(target: number, pname: number, params: number[], offset: number)

    glTexParameteriv(target: number, pname: number, params: java.nio.IntBuffer)

    glVertexPointer(size: number, type: number, stride: number, offset: number)

}
                
            

