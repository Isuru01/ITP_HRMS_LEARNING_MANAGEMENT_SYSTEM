import mongoose from "mongoose"

export async function connectDB() {
    const uri = ``
    mongoose.set("strictQuery", true);
   
    try {
        await mongoose.connect(uri)
        console.log("MongoDB Connected")
    } catch (err) {
        console.log(`Atlas Server Connection Error ${err}`)
    } 
};



// async function listDatabases(client) {
//    const dbList =  await client.db().admin().listDatabases()
//    dbList.databases.forEach( db => {
//      console.log(`${db.name}`)
//    })
//    console.log()
// }
// connectDB().catch(console.error)
