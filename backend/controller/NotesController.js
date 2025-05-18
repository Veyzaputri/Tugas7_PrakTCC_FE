import { where } from "sequelize";
import Notes from "../models/NotesModel.js";

export const getNotes = async(req, res) =>{
    try {
        const response = await Notes.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getNotesById = async(req, res) =>{
    try {
        const response = await Notes.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createNotes = async(req, res) =>{
    try {
        await Notes.create(req.body);
        res.status(201).json({msg:"Notes Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNotes = async(req, res) =>{
    try {
        await Notes.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Notes Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNotes = async(req, res) =>{
    try {
        await Notes.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Notes Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}