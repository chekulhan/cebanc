import numpy as np
import pandas as pd

# -----------------------------
# Simulation Parameters
# -----------------------------
num_sensors = 10000      # Number of sensors
num_readings = 60        # Readings per sensor (e.g., 60 minutes)

# Total number of records
total_records = num_sensors * num_readings

# -----------------------------
# Monte Carlo Simulation
# -----------------------------
data = pd.DataFrame({
    "Sensor_ID": np.repeat(np.arange(1, num_sensors + 1), num_readings),

    # Random temperature between 20°C and 80°C
    "Temperature": np.random.uniform(20, 80, total_records),

    # Random humidity between 30% and 70%
    "Humidity": np.random.uniform(30, 70, total_records),

    # Random vibration between 0 and 5 mm/s
    "Vibration": np.random.uniform(0, 5, total_records),

    # Random pressure between 90 and 110 kPa
    "Pressure": np.random.uniform(90, 110, total_records)
})

# -----------------------------
# Display the first records
# -----------------------------
print(data.head())

# -----------------------------
# Basic Statistics
# -----------------------------
print("\nAverage Temperature:", data["Temperature"].mean())
print("Average Humidity:", data["Humidity"].mean())
print("Average Vibration:", data["Vibration"].mean())
print("Average Pressure:", data["Pressure"].mean())

# -----------------------------
# Detect Anomalies
# -----------------------------
high_temp = data[data["Temperature"] > 75]

print("\nNumber of high-temperature readings:", len(high_temp))