import bookdata from "../models/book.model.js";

export const getBooks = async (req, res) => {
    try{
        const books = await bookdata.find();
        res.status(200).json(books);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

