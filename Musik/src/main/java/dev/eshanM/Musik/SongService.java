package dev.eshanM.Musik;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class SongService {
    @Autowired
    private SongRepository songRepository;
    public List<Song> getAllSongs(){
        return songRepository.findAll();
    }
//    public Optional<Song> getSong(ObjectId id){
//        return songRepository.findById(id);
//    }
//    public Optional<Song> getSong(String Nid){
//        return songRepository.findById(Nid);
//    }
    public Song addSong(Song song){
        return songRepository.save(song);
    }
    public Optional<Song> getSongByTitle(String title){
        return songRepository.findByTitle(title);
    }
}
