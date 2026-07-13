import { ObjectId } from 'mongodb';

export const typeDefs = /* GraphQL */ `
  type Producto {
    _id: ID!
    nombreProducto: String!
    precio: Float
    cantidad: Int
  }


  type Query {
    productos: [Producto!]!
    producto(id: ID!): Producto
  }

  input ProductoInput {
    nombreProducto: String!
    precio: Float!
    cantidad: Int
  }

  type Mutation {
    addProducto(input: ProductoInput!): Producto!
    updateProducto(id: ID!, input: ProductoInput!): Producto
    deleteProducto(id: ID!): Boolean
  }
`;



export const resolvers = {
  Query: {
    productos: async (_parent, _args, context) => {
      const db = context.db;
      return await db.collection('productos').find().toArray();
    },
    producto: async (_parent, { id }, context) => {
      const db = context.db;
      return await db.collection('productos').findOne({ _id: new ObjectId(id) });
    },
  },
  Mutation: {
    addProducto: async (_parent, { input }, context) => {
      const db = context.db;
      const now = new Date();
      const producto = { ...input }; //, createdAt: now.toISOString(), updatedAt: now.toISOString() };
      const result = await db.collection('productos').insertOne(producto);
      return { _id: result.insertedId, ...producto };
    },
    updateProducto: async (_parent, { id, input }, context) => {
      const db = context.db;
      //const now = new Date();
      const updateResult = await db.collection('productos').findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { ...input} }, //, updatedAt: now.toISOString() } },
        { returnDocument: 'after' }
      );
      return updateResult.value;
    },
    deleteProducto: async (_parent, { id }, context) => {
      const db = context.db;
      const result = await db.collection('productos').deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
    },
  },
};
