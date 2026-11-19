# JSON
events_df = spark.read.json(
    "/opt/spark-data/input/events.json"
)

events_df.show(truncate=False)
events_df.printSchema()

# CSV
sales = spark.read \
    .option("header", True) \
    .option("inferSchema", True) \
    .csv("/opt/spark-data/input/sales.csv")

# Parquet
customers = spark.read.parquet(
    "/opt/spark-data/input/customers.parquet"
)


