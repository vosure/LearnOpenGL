#version 330 core

layout (location = 0) in vec3 positions;
layout (location = 1) in vec3 normalVecsPositions;
layout (location = 2) in vec2 textureCoords;

out vec3 normal;
out vec3 cubePosition;
out vec2 texCoords;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
	normal = mat3(transpose(inverse(model))) * normalVecsPositions;
	cubePosition = vec3(model * vec4(positions, 1.0));
	texCoords = textureCoords;

	gl_Position = projection * view * vec4(cubePosition, 1.0);
}