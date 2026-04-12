import bpy

bpy.ops.wm.read_factory_settings(use_empty=True)
input_path = "/Users/apple/Downloads/rajesh-portfolio-main/public/models/character_decrypted.glb"
bpy.ops.import_scene.gltf(filepath=input_path)

print("--- OBJECTS AND MATERIALS ---")
for obj in bpy.data.objects:
    if obj.type == 'MESH':
        print(f"Mesh: {obj.name}")
        for slot in obj.material_slots:
            if slot.material:
                print(f"  Material: {slot.material.name}")
print("-----------------------------")
