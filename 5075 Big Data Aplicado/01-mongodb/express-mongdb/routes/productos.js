import { Router } from 'express';

const router = Router();

// GET /api/v1/productos
router.get('/', async (req, res) => {
  try {
    const db = req.app.locals.db; // get db instance from app.locals
    const productos = await db.collection('productos').find().toArray();
    res.json(productos);
  } catch (error) {
    console.error("Error fetching productos:", error);
    res.status(500).json({ error: 'Failed to fetch productos' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // You can implement your delete logic here, example:
    const db = req.app.locals.db;
    const id = req.params.id;

    // If your id is ObjectId, import ObjectId from mongodb and convert
    // import { ObjectId } from 'mongodb';
    // const result = await db.collection('productos').deleteOne({ _id: new ObjectId(id) });

    // For now, just dummy response:
    res.json({ message: `DELETE producto with id: ${id}` });
  } catch (error) {
    console.error("Error deleting producto:", error);
    res.status(500).json({ error: 'Failed to delete producto' });
  }
});

export default router;
