# 🎨 How to Swap the 3D Character Model

## Quick Steps

### 1. Get the current model
The decrypted model is already extracted at:
```
public/models/character_decrypted.glb
```
Open this file in **Blender** (free from [blender.org](https://www.blender.org/download/)).

### 2. Modify in Blender
Add a turban, earphones, or any changes you want. **Keep these bone names intact** — the animations depend on them:

| Bone Name | Purpose |
|-----------|---------|
| `spine005` | Neck (head tracking follows mouse) |
| `spine006` | Head bone |
| `footR`, `footL` | Feet positioning |
| `eyebrow_L`, `eyebrow_R` | Eyebrow raise on hover |
| `upper_armL/R`, `forearmL/R`, `handL/R` | Typing animation |
| All `f_*`, `palm*`, `thumb*` bones | Finger typing animation |

**Keep these animations intact:**
- `introAnimation` — entrance animation
- `Blink` — blinking
- `typing` — typing on keyboard
- `browup` — eyebrow raise
- `key1`, `key2`, `key5`, `key6` — keyboard keys

**Keep these mesh/object names:**
- `Plane004` — the monitor
- `screenlight` — screen glow effect
- `BODY.SHIRT` — shirt (colored via code)
- `Pant` — pants (colored via code)

### 3. Export from Blender
- File → Export → glTF 2.0 (.glb)
- Save as `character_new.glb` in the `public/models/` folder

### 4. Encrypt & replace
```bash
cd public/models
node encrypt_new.cjs character_new.glb
```
This overwrites `character.enc` with your new model.

### 5. Restart dev server
```bash
npm run dev
```

## Files Reference
| File | Purpose |
|------|---------|
| `public/models/decrypt.cjs` | Decrypt .enc → .glb |
| `public/models/encrypt_new.cjs` | Encrypt new .glb → .enc |
| `public/models/character_decrypted.glb` | Current model (open in Blender) |
| `src/components/Character/utils/character.ts` | Model loader code |
| `src/data/boneData.ts` | Bone names for animations |
