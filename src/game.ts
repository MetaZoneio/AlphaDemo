let transparencyMode = 2

let myMaterial1 = new Material()
myMaterial1.albedoTexture = new Texture('materials/albedoTexture.png',{hasAlpha:true})
myMaterial1.alphaTexture = new Texture('materials/alphaTexture1.png',{hasAlpha:true})
myMaterial1.transparencyMode = transparencyMode
myMaterial1.metallic = 0
myMaterial1.roughness = 1

const wall1 = new Entity()
wall1.addComponent(new PlaneShape())
wall1.addComponent(myMaterial1)
wall1.addComponent(new Transform({
  position: new Vector3(4, 2, 8),
  rotation: new Quaternion(90, 0, 0),
  scale: new Vector3(3, 3, 3)
}))
engine.addEntity(wall1)


let myMaterial2 = new Material()
myMaterial2.albedoTexture = new Texture('materials/albedoTexture.png',{hasAlpha:true})
myMaterial2.alphaTexture = new Texture('materials/alphaTexture2.png',{hasAlpha:true})
myMaterial2.transparencyMode = transparencyMode
myMaterial2.metallic = 0
myMaterial2.roughness = 1

const wall2 = new Entity()
wall2.addComponent(new Transform({
  position: new Vector3(8, 2, 8),
  rotation: new Quaternion(90, 0, 0),
  scale: new Vector3(3, 3, 3)
}))
wall2.addComponent(new PlaneShape())
wall2.addComponent(myMaterial2)
engine.addEntity(wall2)


let myMaterial3 = new Material()
myMaterial3.albedoTexture = new Texture('materials/albedoTexture.png',{hasAlpha:true})
myMaterial3.alphaTexture = new Texture('materials/alphaTexture3.png',{hasAlpha:true})
myMaterial3.transparencyMode = transparencyMode
myMaterial3.metallic = 0
myMaterial3.roughness = 1

const wall3 = new Entity()
wall3.addComponent(new Transform({
  position: new Vector3(12, 2, 8),
  rotation: new Quaternion(90, 0, 0),
  scale: new Vector3(3, 3, 3)
}))
wall3.addComponent(new PlaneShape())
wall3.addComponent(myMaterial3)
engine.addEntity(wall3)
