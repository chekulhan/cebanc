import csv
import random
import time
from datetime import datetime

csv_file = "server_sensors.csv"

with open(csv_file, "w", newline="") as file:

    writer = csv.writer(file)

    # CSV header
    writer.writerow([
        "Timestamp",
        "Server",
        "Temperature",
        "Humidity",
        "CPU",
        "Disk",
        "Motion"
    ])

    # Generate 30 sensor readings
    for i in range(30):

        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        temperature = random.randint(18, 30)
        humidity = random.randint(35, 70)
        cpu = random.randint(10, 95)
        disk = random.randint(20, 90)
        motion = random.randint(0, 1)

        writer.writerow([
            timestamp,
            "SERVER01",
            temperature,
            humidity,
            cpu,
            disk,
            motion
        ])

        time.sleep(2)

print(f"Sensor data saved to {csv_file}")