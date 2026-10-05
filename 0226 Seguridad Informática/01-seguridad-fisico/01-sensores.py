import random
import time
from datetime import datetime

print("=" * 55)
print(" SERVER ROOM SECURITY MONITORING SYSTEM")
print("=" * 55)
print("Monitoring active... Press CTRL+C to stop.\n")

while True:

    timestamp = datetime.now().strftime("%H:%M:%S")

    # Normal sensor readings
    temperature = round(random.uniform(20, 27), 1)
    humidity = round(random.uniform(35, 55), 1)

    door = "CLOSED"
    access = "NONE"
    motion = "NONE"
    fire = "NO"

    alerts = []

    # Randomly generate an event
    event = random.randint(1, 100)

    # 1. Normal authorized entrance
    if event <= 5:
        door = "OPEN"
        access = "AUTHORIZED"
        motion = "DETECTED"

    # 2. Unauthorized entrance
    elif event <= 8:
        door = "OPEN"
        access = "UNAUTHORIZED"
        motion = "DETECTED"

    # 3. Suspicious motion without authorized access
    elif event <= 10:
        motion = "DETECTED"

    # 4. High temperature
    elif event <= 13:
        temperature = round(random.uniform(31, 39), 1)

    # 5. Serious overheating
    elif event == 14:
        temperature = round(random.uniform(40, 55), 1)

    # 6. Fire detected
    elif event == 15:
        fire = "DETECTED"
        temperature = round(random.uniform(35, 60), 1)

    # Display sensor readings
    print("\n" + "-" * 55)
    print(f"[{timestamp}] SENSOR READINGS")
    print("-" * 55)

    print(f"Temperature: {temperature} °C")
    print(f"Humidity: {humidity} %")
    print(f"Door: {door}")
    print(f"Access: {access}")
    print(f"Motion: {motion}")
    print(f"Fire/Smoke: {fire}")

    # Evaluate security conditions

    if access == "UNAUTHORIZED":
        alerts.append(
            ("CRITICAL", "UNAUTHORIZED ENTRANCE DETECTED",
             "Notify security. Verify access logs and camera footage.")
        )

    elif motion == "DETECTED" and access == "NONE":
        alerts.append(
            ("HIGH", "SUSPICIOUS MOTION DETECTED",
             "Investigate possible unauthorized presence.")
        )

    if temperature >= 40:
        alerts.append(
            ("CRITICAL", "SERIOUS SERVER ROOM OVERHEATING",
             "Notify on-call technician. Investigate immediately.")
        )

    elif temperature >= 30:
        alerts.append(
            ("WARNING", "HIGH SERVER ROOM TEMPERATURE",
             "Monitor temperature and investigate cooling.")
        )

    if fire == "DETECTED":
        alerts.append(
            ("CRITICAL", "FIRE/SMOKE DETECTED",
             "Activate emergency response procedures. Evacuate if required.")
        )

    # Display alerts
    if alerts:
        print("\n!!! ALERTS GENERATED !!!")

        for severity, title, action in alerts:
            print(f"\n[{severity}] {title}")
            print(f"Recommended action: {action}")

    else:
        print("\nStatus: NORMAL")

    time.sleep(3)
