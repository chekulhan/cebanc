import redis
import json
import random
import time
from datetime import datetime

r = redis.Redis(host="localhost", port=6379, decode_responses=True)

sensors = ["S01","S02","S03","S04","S05"]

while True:

    reading = {
        "sensor": random.choice(sensors),
        "temperature": round(random.uniform(18,30),1),
        "humidity": random.randint(40,80),
        "timestamp": datetime.now().strftime("%H:%M:%S")
    }

    r.lpush("weather_queue", json.dumps(reading))

    print("Produced:", reading)

    time.sleep(2)