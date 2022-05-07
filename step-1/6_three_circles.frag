# ifdef GLES
precision mediump float;
# endif

float circleShape (vec2 position, float radius) {
  return step(radius, length(position - vec2(0.5)));
}

void main() {
  vec2 position = gl_FragCoord.xy / iResolution.xy;
  // float x = position.x + sin(iTime * 2.0) * 0.4;
  // float y = position.y + cos(iTime * 2.0) * 0.4;
  float circle1 = circleShape(vec2(
    position.x + sin(iTime * 2.0) * 0.3, 
    position.y + cos(iTime * 2.0) * 0.3
  ), 0.05);

  float circle2 = circleShape(vec2(
    position.x + sin(iTime * 2.0 + 2.1) * 0.3, 
    position.y + cos(iTime * 2.0 + 2.1) * 0.3
  ), 0.05);

  float circle3 = circleShape(vec2(
    position.x + sin(iTime * 2.0 + 4.2) * 0.3, 
    position.y + cos(iTime * 2.0 + 4.2) * 0.3
  ), 0.05);

  vec3 color = vec3(circle1, circle2, circle3);

  gl_FragColor = vec4(color, 1.0);
}