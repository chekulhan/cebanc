import subprocess

def is_container_running(container_name):
    result = subprocess.run(
        ['docker', 'inspect', '-f', '{{.State.Running}}', container_name],
        capture_output=True, text=True)
    return result.stdout.strip() == 'true'

# result objeto CompletedProcess tiene stdout, stderr y returncode atributos


# Crear una funcion para mostrar el resultado de docker logs comando
# por ejemplo: docker logs sre-nginx-container --tail 10


if __name__ == "__main__":

    print(is_container_running("sre-nginx-container"))
    



# Respuesta - check=True salta a la exception
"""

def mostrar_logs(container_name):
    try:
        result = subprocess.run(
            ['docker', 'logs', container_name, '--tail', '10'], capture_output=True, text=True, check=True
        )
        if result.stderr !=0:
            print("errorNo ", result.stderr)
            print(result.returncode)
        else:
            print(result)
        
    except subprocess.CalledProcessError as e:
        print("Error dockering", e)
    except e:
        print("Exception error", e)

"""