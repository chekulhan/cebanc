from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime


def task_1():
    print("Task 1 completed successfully.")


def task_2():
    print("Task 2 is about to fail...")
    raise Exception("Something went wrong in Task 2!")


def task_3():
    print("You should never see this message.")


with DAG(
    dag_id="failure_example",
    start_date=datetime(2024, 1, 1),
    schedule=None,
    catchup=False,
) as dag:

    t1 = PythonOperator(
        task_id="task_1",
        python_callable=task_1,
    )

    t2 = PythonOperator(
        task_id="task_2",
        python_callable=task_2,
    )

    t3 = PythonOperator(
        task_id="task_3",
        python_callable=task_3,
    )

    t1 >> t2 >> t3