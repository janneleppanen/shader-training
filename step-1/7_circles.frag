# ifdef GLES
precision mediump float;
# endif

float circleShape (vec2 position, float radius) {
  return step(radius, length(position - vec2(0.5)));
}

void main() {
  vec2 center = gl_FragCoord.xy / iResolution.xy;
  float circle = circleShape(center + vec2(0.0), 0.05);
  
  for (int i = 0; i < 10; i++) {
    circle = circle * circleShape(
      center + vec2(
        sin(float(i) * 3.14 * 2.0 / 10.0 + iTime) * 0.25 + sin(iTime * 2.0 + float(i) * 0.2) * 0.1,
        cos(float(i) * 3.14 * 2.0 / 10.0 + iTime) * 0.25 + cos(iTime * 2.0 + float(i) * 0.2) * 0.1
      ), 0.05
    );
  }

  vec3 color = vec3(circle, 0.25, 0.25);

  gl_FragColor = vec4(color, 1.0);
}