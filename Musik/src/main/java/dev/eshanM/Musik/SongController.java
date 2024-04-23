package dev.eshanM.Musik;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/songs")
public class SongController {
    @Autowired
    private SongService songService;
    @Autowired
    private SongRepository songRepository;
    @GetMapping
    public ResponseEntity<List<Song>> getAllSongs(){
//        return new ResponseEntity<String>("All Songs : ", HttpStatus.OK);
        return new ResponseEntity<List<Song>>(songService.getAllSongs(), HttpStatus.OK);
    }
//    @GetMapping("/{id}")
//    public ResponseEntity<Optional<Song>> getSong(@PathVariable ObjectId id){
//        return new ResponseEntity<Optional<Song>>(songService.getSong(id), HttpStatus.OK);
//    }
//    @GetMapping("/id/{Nid}")
//    public ResponseEntity<Optional<Song>> getSong(@PathVariable String Nid){
//        return new ResponseEntity<Optional<Song>>(songService.getSong(Nid),HttpStatus.OK);
//    }
    @GetMapping("/{title}")
    public ResponseEntity<Optional<Song>> getSongByTitle(@PathVariable String title){
        return new ResponseEntity<Optional<Song>>(songService.getSongByTitle(title), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Song> addSong(@RequestBody Song song){
        return new ResponseEntity<Song>(songService.addSong(song), HttpStatus.CREATED);
    }
}
