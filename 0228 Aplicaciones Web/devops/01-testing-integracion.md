# ¿Qué es Cypress?
Cypress es una herramienta de testing end-to-end (E2E) para aplicaciones web modernas. Permite escribir pruebas que simulan cómo un usuario interactúa con una página (hacer clic, escribir, enviar formularios, etc.).

| Característica                        | Cypress                                       | Selenium                                      |
|--------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Lenguaje principal                   | JavaScript                                     | Varios (Java, Python, JS, C#, Ruby, etc.)      |
| Arquitectura                         | Corre en el mismo loop que la app (browser)   | Corre fuera del navegador (control remoto)     |
| Velocidad de ejecución               | Rápida (por su integración directa)           | Más lenta (por su arquitectura remota)         |
| Instalación                          | Fácil (`npm install cypress`)                 | Más compleja (driver + bindings + setup)       |
| Reintentos automáticos               | ✅ Sí, incluidos por defecto                   | ❌ No, se deben manejar manualmente             |
| Debugging / DevTools                 | ✅ Integrado, usa el DOM real del browser      | ❌ Más difícil, acceso limitado                 |
| Grabación y reproducción de tests    | Studio (opcional, limitado)                   | Herramientas de terceros                       |
| Testing de componentes               | ✅ Soportado (React, Vue, etc.)                | ❌ No directamente                              |
| Soporte para testing mobile nativo   | ❌ No                                          | ✅ Sí (con Appium)                              |
| Testing cross-browser                | ✅ Chrome, Edge, Firefox                       | ✅ Más amplio (incluye Safari, IE, etc.)        |
| Comunidad y ecosistema               | Muy activo, en crecimiento                    | Muy grande y establecida                       |
| Licencia                             | MIT                                           | Apache 2.0                                     |

## Configuracion

Dentro del front-end, por ejemplo vite-front end

```lua
my-app/
├── frontend/         # React o Vite app
│   ├── src/
│   ├── cypress/
│   ├── cypress.config.js 
│   └── package.json 
```


```bash
npm install --save-dev cypress
```

```json
{
  "name": "frontend",
  "type": "module",
  "scripts": {
    "dev": "vite",               // or react-scripts start
    "cypress": "cypress open",
    "cypress:run": "cypress run"
  },
  "devDependencies": {
    "cypress": "^13.0.0"
  }
}

```

```bash
npm run cypress
npm run cypress:run
```







