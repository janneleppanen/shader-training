# ifdef GLES
precision mediump float;
# endif

float circleShape (vec2 position, float radius) {
  return step(radius, length(position - vec2(0.5)));
}

void main() {
  vec2 position = gl_FragCoord.xy / iResolution.xy;
  float circle = circleShape(position, 0.25);
  vec3 color = vec3(circle);

  gl_FragColor = vec4(color, 1.0);
}