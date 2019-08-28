#version 330 core
out vec4 color;


in vec3 Normal;
in vec3 Position;

uniform vec3 cameraPos;
uniform samplerCube skybox;

void main()
{   
	float refraction = 1.0 / 1.52;

	vec3 I = normalize(Position - cameraPos);
	vec3 R = refract(I, normalize(Normal), refraction);
	color = vec4(texture(skybox, R).rgb, 1.0);
}