from PIL import Image
import os

# Chemins des dossiers
input_folder = r"C:\Users\ThinKPad\Pictures\CapturesDecran"  # Dossier source
output_folder = r"C:\Users\ThinKPad\photosMod"  # Dossier de sortie

# Créer le dossier de sortie s'il n'existe pas
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Taille des images redimensionnées
new_size = (300, 300)

# Parcourir les fichiers dans le dossier source
for filename in os.listdir(input_folder):
    # Vérifier si le fichier est une image (png, jpg, jpeg)
    if filename.lower().endswith((".png", ".jpg", ".jpeg")):
        # Chemin complet de l'image source
        input_path = os.path.join(input_folder, filename)
        
        # Ouvrir l'image
        img = Image.open(input_path)
        
        # Redimensionner l'image
        img_resized = img.resize(new_size)
        
        # Chemin complet de l'image de sortie
        output_path = os.path.join(output_folder, filename)
        
        # Enregistrer l'image redimensionnée
        img_resized.save(output_path)
        print(f"Image redimensionnée : {filename}")

print("Toutes les images ont été redimensionnées avec succès !")