const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";   // local MongoDB
const client = new MongoClient(url);

async function main() {
  await client.connect();
  console.log("Connected!");

  const db = client.db("college");
  const students = db.collection("students");

  // ================= CREATE =================
  await students.insertOne({
    name: "Het",
    roll: 34,
    branch: "CSE"
  });

  console.log("Inserted data");

  // ================= READ =================
  const allStudents = await students.find().toArray();
  console.log("All students:", allStudents);

  // ================= UPDATE =================
  await students.updateOne(
    { name: "Het" },
    { $set: { branch: "AI-DS" } }
  );

  console.log("Updated data");

  // ================= DELETE =================
  await students.deleteOne({ name: "Het" });

  console.log("Deleted data");

  client.close();
}

main();
