const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");

const Eobj = express();
const PORT = 8000;
const URL = "mongodb://127.0.0.1:27017";

const Client = new MongoClient(URL);
Eobj.listen(PORT, Server_Start);
Eobj.use(express.json());

Eobj.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
});


//---------------------------------------------------------------------------------------------------//
function Server_Start() {
    console.log("SERVER STARTED ON PORT:", PORT);
}

async function Get_Connection() {
    try {
        const Result = Client.connect(URL);
        console.log("Successfully connected to database....!");
        return (await Result).db("Test");
    }
    catch (error) {
        console.error("Failed to connect with mongodb ....!");
        throw error;
    }

}

async function Get_Collection(name) {
    const DB = Get_Connection();
    const Existing_collections = (await DB).listCollections().toArray();
    const Collection_Names = (await Existing_collections).map(col => col.name);

    if (!Collection_Names.includes(name)) {
        (await DB).createCollection(name);
        console.log(`Collection is created ${name}`);
    }
    return (await DB).collection(name);
}

async function Insert_User(req, res) {
    try {
        const newUser = req.body;
        if (newUser._id === "" || newUser._id === null || newUser._id === undefined) {
            delete newUser._id;
        }
        const User_collection = await Get_Collection("Users");
        const Result = await User_collection.insertOne(newUser);

        if (Result.acknowledged) {
            res.send({ message: "user added successfully" });
        }
        else {
            res.status(500).send({ message: "failed to add user" });
        }
    }
    catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

async function Insert_Dish(req, res) {
    try {
        const newDish = req.body;
        if (newDish._id === "" || newDish._id === null || newDish._id === undefined) {
            delete newDish._id;
        }
        const Dish_Collection = await Get_Collection("Dishes");
        const Result = await Dish_Collection.insertOne(newDish);

        if (Result.acknowledged) {
            res.send({ message: "Successfully added the dish" });
        }
        else {
            res.status(500).send({ message: "Failed to add the new dish" });
        }
    }
    catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

async function Book_New_Table(req, res) {
    try {
        const NewTable = req.body;
        if (NewTable._id === "" || NewTable._id === null || NewTable._id === undefined) {
            delete NewTable._id;
        }
        const TableCollection = await Get_Collection("Bookings");
        const Result = await TableCollection.insertOne(NewTable);

        if (Result.acknowledged) {
            res.send({ message: "successfuly added the new table" });
        }
        else {
            res.status(500).send({ message: "failed to add the new table" });
        }
    }
    catch (error) {
        console.log("Error while inserting the table");
        res.status(500).send({ message: "Internal server error" });
    }
}

async function Insert_Contact(req, res) {
    try {
        const newContact = req.body;
        const Contact_Collection = await Get_Collection("Contacts");
        const Result = await Contact_Collection.insertOne(newContact);

        if (Result.acknowledged) {
            res.send({ message: "Sucessfully added the " })
        }
    }
    catch (error) {

    }
}


async function Delete_user_By_Id(req, res) {
    try {
        const UserId = req.params.id;
        console.log(UserId);

        const user_obj_id = new ObjectId(UserId);

        console.log(user_obj_id);
        const User_collection = await Get_Collection("Users");
        const Result = await User_collection.deleteOne({ _id: user_obj_id });

        if (Result.deletedCount === 1) {
            res.send({ message: "deleted" });
        } else {
            res.status(404).send({ message: "failed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "internal server error" });
    }
}

async function Delete_booking_By_Id(req, res) {
    try {
        const TableId = req.params.id;
        const Table_obj_id = new ObjectId(TableId);

        const Bookings_collection = await Get_Collection("Bookings");
        const Result = await Bookings_collection.deleteOne({ _id: Table_obj_id });

        if (Result.deletedCount === 1) {
            res.send({ message: "deleted" });
        } else {
            res.status(404).send({ message: "failed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "internal server error" });
    }
}

async function Delete_dish_By_Id(req, res) {
    try {
        const DishId = req.params.id;
        const Dish_obj_id = new ObjectId(DishId);

        const Dish_collection = await Get_Collection("Dishes");
        const Result = await Dish_collection.deleteOne({ _id: Dish_obj_id });

        if (Result.deletedCount === 1) {
            res.send({ message: "deleted" });
        } else {
            res.status(404).send({ message: "failed" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "internal server error" });
    }
}


async function Get_All_Dishes(req, res) {
    let DB = await Get_Collection("Dishes");
    let result = await DB.find().toArray();
    res.send(result);
}

async function Get_All_Users(req, res) {
    let DB = await Get_Collection("Users");
    let result = await DB.find().toArray();
    res.send(result);

}

async function Get_All_Bookings(req, res) {
    let DB = await Get_Collection("Bookings");
    let Result = await DB.find().toArray();
    res.send(Result);
}




Eobj.post('/adduser', express.json(), Insert_User);
Eobj.post('/adddish', express.json(), Insert_Dish);
Eobj.post('/addtable', express.json(), Book_New_Table);
Eobj.post('/addcontact', express.json(), Insert_Contact);
Eobj.get('/getalldishes', Get_All_Dishes);
Eobj.get('/getallusers', Get_All_Users);
Eobj.get('/getallbookings', Get_All_Bookings);
Eobj.delete('/deleteuser/:id', Delete_user_By_Id);
Eobj.delete('/deletedish/:id', Delete_dish_By_Id);
Eobj.delete('/deletetable/:id', Delete_booking_By_Id);