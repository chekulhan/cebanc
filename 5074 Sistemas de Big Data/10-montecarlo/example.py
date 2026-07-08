import random

# Number of simulations
num_simulations = 10000

# Base travel time (minutes)
base_time = 20

# Store the results
travel_times = []

# Run the simulation
for _ in range(num_simulations):
    # Generate random delays
    traffic_lights = random.randint(0, 5)   # 0–5 min
    traffic = random.randint(0, 15)         # 0–15 min
    weather = random.randint(0, 10)         # 0–10 min

    # Total travel time
    total_time = base_time + traffic_lights + traffic + weather

    # Save the result
    travel_times.append(total_time)

# print(travel_times)

# Analyze the results
average_time = sum(travel_times) / num_simulations
minimum_time = min(travel_times)
maximum_time = max(travel_times)

# Probability of arriving in under 30 minutes
under_30 = sum(time < 30 for time in travel_times)
probability = (under_30 / num_simulations) * 100

# Display the results
print(f"Average travel time: {average_time:.2f} minutes")
print(f"Shortest trip: {minimum_time} minutes")
print(f"Longest trip: {maximum_time} minutes")
print(f"Probability of arriving in under 30 minutes: {probability:.2f}%")