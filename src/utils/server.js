// Importar dependencias
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Analiza las solicitudes JSON
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Configuración de la conexión a MongoDB
const uri = process.env.MONGO_DB_URI;
let client;

// Reutilizar el cliente de MongoDB
async function getClient() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client;
}

// Rutas
const router = express.Router();

/**
 * Ruta para verificar y agregar un puntaje al top 20.
 */
router.post("/check-score", async (req, res) => {
  try {
    const { username, time } = req.body;

    // Conectar a la base de datos
    const client = await getClient();
    const database = client.db("arcaneScoresDB");
    const collection = database.collection("userScores");

    // Obtener los 20 puntajes más rápidos
    const topScores = await collection
      .find()
      .sort({ time: 1 })
      .limit(20)
      .toArray();

    // Verificar si el nuevo puntaje pertenece al top 20
    if (topScores.length < 20 || time < topScores[topScores.length - 1].time) {
      const newScore = { username, time };
      await collection.insertOne(newScore);

      // Mantener solo los mejores 20 puntajes
      const updatedScores = await collection
        .find()
        .sort({ time: 1 })
        .limit(20)
        .toArray();
      const top20Usernames = updatedScores.map((score) => score.username);
      await collection.deleteMany({
        username: { $nin: top20Usernames },
      });

      return res
        .status(200)
        .json({ message: "Nuevo puntaje agregado al top 20", newScore });
    }

    res.status(200).json({ message: "El puntaje no pertenece al top 20" });
  } catch (error) {
    console.error("Error al manejar la puntuación:", error);
    res.status(500).json({ message: "Error al manejar la puntuación", error });
  }
});

/**
 * Ruta para obtener los 20 mejores puntajes.
 */
router.get("/top20", async (req, res) => {
  try {
    // Conectar a la base de datos
    const client = await getClient();
    const database = client.db("arcaneScoresDB");
    const collection = database.collection("userScores");

    // Obtener los 20 mejores puntajes
    const topScores = await collection
      .find()
      .sort({ time: 1 })
      .limit(20)
      .toArray();

    res.status(200).json(topScores);
  } catch (error) {
    console.error("Error al obtener los puntajes:", error);
    res.status(500).json({ message: "Error al obtener los puntajes", error });
  }
});

// Vincular el router al servidor
app.use("/", router);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
