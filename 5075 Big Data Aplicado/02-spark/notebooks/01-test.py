# Copiar este código en un Notebook de Jupyter 
# celda 1

from pyspark.sql import SparkSession

spark = (
    SparkSession.builder
    .appName("Classroom Demo")
    .master("spark://spark-master:7077")
    .config("spark.driver.host", "jupyter")
    .config("spark.driver.bindAddress", "0.0.0.0")
    .config("spark.cores.max", "4")
    .getOrCreate()
)

print(spark.version)

# celda 2
df = spark.range(1000000)

df.groupBy().sum("id").show()





