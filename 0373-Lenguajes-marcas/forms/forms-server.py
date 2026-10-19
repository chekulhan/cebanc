from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs

class Handler(BaseHTTPRequestHandler):

    def do_POST(self):
        length = int(self.headers["Content-Length"])
        data = self.rfile.read(length).decode()
        form = parse_qs(data)

        print(form, flush=True)

        self.send_response(302)
        self.send_header("Location", "/thankyou")
        self.end_headers()

    def do_GET(self):
        if self.path == "/thankyou":
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(
                b"<h1>Thank you!</h1><p>Form submitted successfully.</p>"
            )
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"Page not found")

HTTPServer(("localhost", 8000), Handler).serve_forever()


# > python forms-server.py
# Ejecutar el proyecto con LiveServer y liveserver.html