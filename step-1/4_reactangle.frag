# ifdef GLES
precision mediump float;
# endif

float circleShape (vec2 position, float radius) {
  return step(radius, length(position - vec2(0.5)));
}

void main() {
  vec2 position = gl_FragCoord.xy / iResolution.xy;
  vec3 color = vec3(1.0);
  
  if (position.y < sin(iTime + position.x) * 0.25 + 0.5) {
    color = vec3(0.0, position.y + 0.5, 1.0);
  }

  gl_FragColor = vec4(color, 1.0);
}