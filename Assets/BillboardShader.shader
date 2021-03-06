﻿Shader "GLSL shader for billboards" {
   Properties {
      _MainTex ("Texture Image", 2D) = "black" {}
   }
   SubShader {
   Tags { "Queue" = "Transparent" } 
      Pass {   
      		//Cull Off // draw front and back faces
         //ZWrite Off // don't write to depth buffer 
            // in order not to occlude other objects
         Blend One OneMinusSrcAlpha;
         GLSLPROGRAM
 
         // User-specified uniforms            
         uniform sampler2D _MainTex;        
 
         // Varyings
         varying vec4 textureCoords;
 
         #ifdef VERTEX
 
         void main()
         {
            gl_Position = gl_ProjectionMatrix 
               * (gl_ModelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0) 
               + vec4(gl_Vertex.x, gl_Vertex.y, 0.0, 0.0));
 
            textureCoords = 
               vec4(gl_Vertex.x + 0.5, gl_Vertex.y + 0.5, 0.0, 0.0);
         }
 
         #endif
 
         #ifdef FRAGMENT
 
         void main()
         {
              
            gl_FragColor = texture2D(_MainTex, vec2(textureCoords));
         }
 
         #endif
 
         ENDGLSL
      }
   }
}