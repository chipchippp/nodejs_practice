const SongService = require("../services/SongService");

exports.getAllSongs = async (req, res) => {
    try{
        const songs = await SongService.getAllSongs();
        res.json({data: songs, status: "success"})
    } catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.createSong = async (req, res) => {
    try{
        const song = await SongService.createSong(req.body);
        res.json({data: song, status: "success"})
    } catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.getSongById = async (req, res) => {
    try{
        const song = await SongService.getSongById(req.params.id);
        res.json({data: song, status: "success"})
    } catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.updateSong = async (req, res) => {
    try{
        const song = await SongService.updateSong(req.params.id, req.body);
        res.json({data: song, status: "success"});
    } catch(err){
        res.status(500).json({error: err.message});
    }
};
exports.deleteSong = async (req, res) => {
    try{
        const song = await SongService.deleteSong(req.params.id);
        res.json({data: song, status: "success"});
    } catch(err){
        res.status(500).json({error: err.message});
    }
};