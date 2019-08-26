#pragma once

#include "glad/glad.h"
#include "glm/glm.hpp"

#include "Shader.h"

#include <string>
#include <iostream>

#include <vector>

struct Vertex
{
	glm::vec3 positions;
	glm::vec3 normal;
	glm::vec2 texCoords;
	glm::vec3 tangent;
	glm::vec3 biTangent;
};

struct Texture
{
	unsigned int ID;
	std::string type;
	std::string path;
};

class Mesh
{
public:
	std::vector<Vertex> vertices;
	std::vector<unsigned int> indices;
	std::vector<Texture> textures;
	unsigned int VAO;

public:
	Mesh(std::vector<Vertex> vertices, std::vector<unsigned int> indices, std::vector<Texture> textures);
	void Draw(Shader shader) const;

private:
	unsigned int VBO;
	unsigned int EBO;

private:
	void setupMesh();
};

