#version 330 core
out vec4 color;

struct Material
{
	sampler2D diffuse;
	sampler2D specular;

	float shininess;
};

struct Light
{
	vec3 ambient;
	vec3 diffuse;
	vec3 specular;

	vec3 position;
};

in vec3 normal;
in vec3 cubePosition;
in vec2 texCoords;

uniform Material material;
uniform Light light;
uniform vec3 viewPosition;

void main()
{
	vec3 ambient = light.ambient * vec3(texture(material.diffuse, texCoords));

	vec3 norm = normalize(normal);
	vec3 lightDir = normalize(light.position - cubePosition);
	float diff = max(dot(norm, lightDir), 0.0);
	vec3 diffuse = light.diffuse * diff * vec3(texture(material.diffuse, texCoords));

    vec3 viewDir = normalize(viewPosition - cubePosition);
    vec3 reflectDir = reflect(-lightDir, norm);  
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), material.shininess);
    vec3 specular = light.specular * (spec * vec3(texture(material.specular, texCoords)));  


    color = vec4((diffuse + ambient + specular), 1.0);
}
