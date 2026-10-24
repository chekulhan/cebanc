import promptSync from 'prompt-sync';


async function fetchProductos() {
  try {
    const response = await fetch('http://localhost:5000/api/v1/productos');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const productos = await response.json();
    return productos;
  } catch (error) {
        console.error('Error fetching products:', error);
  }
}

async function fetchMinProductos(minPrecio) {
  try {
    const response = await fetch(`http://localhost:5000/api/v1/productos/search?precio=${minPrecio}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const productos = await response.json();
    return productos;
  } catch (error) {
        console.error('Error fetching products:', error);
  }
}

const totalInventoryValue = (productos) => {
    return productos.reduce((total, p ) => total + (p.precio * p.cantidad), 0);
}

const productosActivos = (productos) => {
    return productos.filter((p) => p.activo == true);
}

async function main() {
  const prompt = promptSync();

  let running = true;

  while (running) {
    console.log(`\n--- USER MANAGER ---
        1. List productos
        2. Total valor de inventario (precio * cantidad)
        3. Filtrar por productos precio minimum 
        4. Productos activos
        5. Exit`);

    const choice = prompt('Elegir una acción: ').trim();

    if (parseInt(choice)== 1) {
        await fetchProductos();
    }   
    else if (parseInt(choice) == 2) { 
        const productos = await fetchProductos();
        let totalValue = totalInventoryValue(productos);
        console.log(`Total valor de inventario es ${totalValue}`);
    }
    else if (parseInt(choice) == 3) { 
        const productos = await fetchMinProductos(20);
        console.log(productos);
    }
     else if (parseInt(choice) == 4) { 
        let productos = await fetchProductos();
        let activoProductos = await productosActivos(productos);
        console.log(activoProductos);
    }

    else {
        running = false;
    }

  };
}

// --------------
main();






// GET /api/v1/search?precio=10
router.get('/search', async (req, res) =>{

  let minPrecio = parseFloat(req.query.minPrecio || 0) ;

  try {
    const db = req.app.locals.db; // get db instance from app.locals

    const productos = await db.collection('productos').find({"precio": {$gt: minPrecio}}).toArray();

    res.json(productos);
  }
  catch (error) {
    res.status(500).json({error: 'Failed to search'});
  }
})





[
  {
    $group:
      /**
       * _id: The id of the group.
       * fieldN: The first field name.
       */
      {
        _id: null,
        totalCantidad: {
          $sum: "$cantidad",
        },
      },
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        _id: 0,
      },
  },
]



[
  {
    $group:
      /**
       * _id: The id of the group.
       * fieldN: The first field name.
       */
      {
        _id: "$nombreProducto",
        totalVentas: {
          $sum: {
            $multiply: ["$cantidad", "$precio"],
          },
        },
      },
  },
  {
    $project:
      /**
       * specifications: The fields to
       *   include or exclude.
       */
      {
        _id: 0,
        producto: "$_id",
        totalVentas: {
          $round: ["$totalVentas"]
        },
      },
  },
]