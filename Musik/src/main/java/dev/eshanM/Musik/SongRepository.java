package dev.eshanM.Musik;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SongRepository extends MongoRepository<Song, ObjectId> {
//    Optional<Song> findById(String id);
    Optional<Song> findByTitle(String title);
}
