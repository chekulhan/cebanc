// Pasar {sesion} como tercer argumento en las operaciones de actualización
const res2 = accounts.updateOne({ name: "NonExistent" }, { $inc: { balance: 50 } },  { session });


use("scott");

db.accounts.find({});

db.accounts.insertMany([
  { name: "Jon", balance: 100 },
  { name: "Maria", balance: 100 }
])


use("scott");

const session = db.getMongo().startSession();

try {
  session.startTransaction();

  const accounts = session.getDatabase(db.getName()).accounts;

  // Decrease Jon's balance by 50
  const res1 = accounts.updateOne(
    { name: "Jon", balance: { $gte: 50 } },
    { $inc: { balance: -50 } }
    
  );

  console.log(res1);

  if (res1.matchedCount === 0) {
    throw new Error("Saldo insuficiente o usuario no encontrado, abortando transacción");
  }

  // Increase Maria's balance by 50
  //const res2 = accounts.updateOne({ name: "Maria" }, { $inc: { balance: 50 } });
  
  // This will fail because user "NonExistent" does not exist
  const res2 = accounts.updateOne({ name: "NonExistent" }, { $inc: { balance: 50 } });

  if (res2.matchedCount === 0) {
    throw new Error("User to credit not found, aborting transaction");
  }

  // Commit the transaction if both updates succeeded
  session.commitTransaction();
  print("Transaction committed successfully.");

} catch (error) {
  // If an error occurred, abort the transaction
    session.abortTransaction();
    print("Transaction aborted due to an error:", error);
} finally {
  session.endSession();
}
