import pandas as pd
import random
from pathlib import Path

random.seed(42)

# -------------------------------------------------------------------------
# 1. Stores Table (Tiendas) with BigQuery GEOGRAPHY (WKT Format)
# -------------------------------------------------------------------------
tiendas = [
    [1, "Supermercado Easo", "Donostia", "Gipuzkoa", "POINT(-1.9812 43.3183)"],
    [2, "Benta Berri Alimentación", "Donostia", "Gipuzkoa", "POINT(-2.0015 43.3130)"],
    [3, "Urdaneta Market", "Tolosa", "Gipuzkoa", "POINT(-2.0734 43.1362)"],
    [4, "Goierri Super", "Beasain", "Gipuzkoa", "POINT(-2.2471 43.0475)"],
    [5, "Deba Sarea", "Deba", "Gipuzkoa", "POINT(-2.3524 43.2956)"],
    [6, "Oiartzun Market", "Oiartzun", "Gipuzkoa", "POINT(-1.8596 43.2989)"],
    [7, "Txingudi Alimentación", "Irun", "Gipuzkoa", "POINT(-1.7891 43.3378)"],
    [8, "Oria Supermercados", "Ordizia", "Gipuzkoa", "POINT(-2.1793 43.0531)"],
    [9, "Kosta Denda", "Zarautz", "Gipuzkoa", "POINT(-2.1706 43.2848)"],
    [10, "Urola Market", "Azpeitia", "Gipuzkoa", "POINT(-2.2644 43.1812)"],
]

tiendas_df = pd.DataFrame(
    tiendas,
    columns=["id_tienda", "nombre_tienda", "municipio", "provincia", "geografia"]
)

# -------------------------------------------------------------------------
# 2. Expanded Product Catalog
# Structured for clustering: (id_producto, categoria, subcategoria, producto, precio_venta, costo_unitario)
# -------------------------------------------------------------------------
productos = [
    # Cerveza
    (101, "Cerveza", "Lager", "Cerveza lager 33cl", 1.20, 0.50),
    (102, "Cerveza", "Lager", "Cerveza lager 50cl", 1.75, 0.75),
    (103, "Cerveza", "Especial", "Cerveza tostada 33cl", 1.45, 0.60),
    (104, "Cerveza", "Sin Alcohol", "Cerveza sin alcohol 33cl", 1.30, 0.55),
    (105, "Cerveza", "Artesanal", "Cerveza artesanal IPA 33cl", 2.80, 1.20),
    # Vino & Sidra
    (201, "Vino", "Tinto", "Vino tinto joven", 5.50, 2.50),
    (202, "Vino", "Tinto", "Vino tinto crianza", 8.90, 4.20),
    (203, "Vino", "Blanco", "Vino blanco Rueda", 5.90, 2.70),
    (204, "Vino", "Rosado", "Vino rosado Navarra", 5.75, 2.60),
    (205, "Vino", "Local", "Txakoli de Getaria", 9.50, 4.80),
    (206, "Sidra", "Local", "Sidra natural vasca 75cl", 2.50, 1.10),
    # Refrescos & Agua
    (301, "Refrescos", "Cola", "Refresco de cola 33cl", 1.10, 0.40),
    (302, "Refrescos", "Naranja", "Refresco de naranja 33cl", 1.10, 0.40),
    (303, "Agua", "Mineral", "Agua mineral 1.5L", 0.65, 0.15),
    (304, "Agua", "Con Gas", "Agua con gas 50cl", 0.90, 0.25),
    # Snacks & Aperitivos
    (401, "Snacks", "Patatas", "Patatas fritas artesanales 150g", 1.80, 0.70),
    (402, "Snacks", "Frutos Secos", "Aperitivo frutos secos variados", 2.20, 0.90),
    (403, "Conservas", "Pescado", "Anchoas del Cantábrico", 4.50, 2.10),
]

metodos_pago = ["Tarjeta", "Tarjeta", "Tarjeta", "Efectivo", "Móvil"]
canales_venta = ["Tienda Física", "Tienda Física", "Tienda Física", "Online Pick-Up"]

# -------------------------------------------------------------------------
# 3. Generate Sales Data (500 records across full year 2026 for partitioning)
# -------------------------------------------------------------------------
ventas = []
start_date = pd.Timestamp("2026-01-01")

for i in range(1, 501):
    prod_id, categoria, subcategoria, producto, precio, costo = random.choice(productos)
    cantidad = random.randint(1, 15)
    descuento = random.choice([0.0, 0.0, 0.0, 0.05, 0.10, 0.15])
    metodo_pago = random.choice(metodos_pago)
    canal = random.choice(canales_venta)
    
    # Random date throughout the year for clear partition pruning tests
    days_offset = random.randint(0, 265)
    fecha_dt = start_date + pd.Timedelta(days=days_offset)
    hora_str = f"{random.randint(9, 21):02d}:{random.randint(0, 59):02d}:{random.randint(0, 59):02d}"
    timestamp_str = f"{fecha_dt.strftime('%Y-%m-%d')} {hora_str}"
    
    total_bruto = round(cantidad * precio, 2)
    monto_descuento = round(total_bruto * descuento, 2)
    total_neto = round(total_bruto - monto_descuento, 2)
    costo_total = round(cantidad * costo, 2)
    beneficio_bruto = round(total_neto - costo_total, 2)
    
    ventas.append([
        i,                          # id_venta
        fecha_dt.strftime("%Y-%m-%d"), # fecha (PARTITION column)
        timestamp_str,              # timestamp_transaccion
        random.randint(1, 10),      # id_tienda
        prod_id,                    # id_producto (CLUSTER column option)
        categoria,                  # categoria (CLUSTER column option)
        subcategoria,               # subcategoria
        producto,                   # producto
        cantidad,                   # cantidad
        precio,                     # precio_unitario_eur
        costo,                      # costo_unitario_eur
        descuento,                  # porcentaje_descuento
        monto_descuento,            # monto_descuento_eur
        total_neto,                 # total_eur
        costo_total,                # costo_total_eur
        beneficio_bruto,            # beneficio_bruto_eur
        metodo_pago,                # metodo_pago
        canal                       # canal_venta
    ])

ventas_df = pd.DataFrame(
    ventas,
    columns=[
        "id_venta",
        "fecha",
        "timestamp_transaccion",
        "id_tienda",
        "id_producto",
        "categoria",
        "subcategoria",
        "producto",
        "cantidad",
        "precio_unitario_eur",
        "costo_unitario_eur",
        "porcentaje_descuento",
        "monto_descuento_eur",
        "total_eur",
        "costo_total_eur",
        "beneficio_bruto_eur",
        "metodo_pago",
        "canal_venta"
    ]
)

# -------------------------------------------------------------------------
# 4. Save CSV Files
# -------------------------------------------------------------------------
p1 = Path("./tiendas_gipuzkoa.csv")
p2 = Path("./ventas_cerveza_vino.csv")

tiendas_df.to_csv(p1, index=False, encoding="utf-8-sig")
ventas_df.to_csv(p2, index=False, encoding="utf-8-sig")

print("Generated data summary:")
print(f" - Stores count: {len(tiendas_df)}")
print(f" - Sales records count: {len(ventas_df)}")
print(f" - Saved files to: {p1.resolve()} & {p2.resolve()}")