import socket

HOST = '0.0.0.0'  # listen on all interfaces
PORT = 8024       # pick an unused port

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))
server.listen(1)
print(f"Telnet server listening on port {PORT}...")

conn, addr = server.accept()
print(f"Connection from {addr}")

conn.sendall(b"Welcome to my Telnet server!\nType 'exit' to quit.\n")

while True:
    data = conn.recv(1024)
    if not data:
        break
    message = data.decode('utf-8').strip()
    if message.lower() == 'exit':
        conn.sendall(b"Goodbye!\n")
        break
    # echo back
    conn.sendall(f"You said: {message}\n".encode('utf-8'))

conn.close()
server.close()