from http.server import HTTPServer, BaseHTTPRequestHandler
import threading

class SimpleHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b"Hello GET!\n")

def start_server():
    server = HTTPServer(('', 8084), SimpleHandler)
    server.serve_forever()

threading.Thread(target=start_server, daemon=True).start()
print("Server running on port 8084")