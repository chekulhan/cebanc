import redis
import json
import time

r = redis.Redis(host="localhost", port=6379, decode_responses=True)

while True:

    message = r.rpop("weather_queue")

    if message:

        reading = json.loads(message)

        print(reading)

        print("Temperature:", reading["temperature"])

        time.sleep(2)