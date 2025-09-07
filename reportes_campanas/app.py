import pandas as pd
import json

# Datos simulados
data = {
    "campaña": ["Campaña A", "Campaña B", "Campaña C"],
    "impresiones": [1000, 800, 1200],
    "clics": [120, 80, 150],
    "conversiones": [30, 20, 50]
}
df = pd.DataFrame(data)
df["CTR"] = (df["clics"] / df["impresiones"]) * 100
df["TasaConversion"] = (df["conversiones"] / df["clics"]) * 100

# Guardar como JSON
df.to_json("datos_campanas.json", orient="records")
print("✅ Archivo 'datos_campanas.json' generado.")
