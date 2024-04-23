package dev.eshanM.Musik;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;
@Document(collection = "songs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Song {

//    private ObjectId _id;
    @Id
    private String title;
    @DocumentReference
    private Link spotUrl;
    private Link ytUrl;
    private Link dlink;
    private Link lyric;
    private Link artInfo;
    private Link albInfo;
    private Integer popularity;
    private Integer duration;
    private Float acousticness;
    private Float danceability;
    private Float energy;
    private Float instrumentalness;
    private Integer key;
    private Float liveness;
    private Float loudness;
    private Integer mode;
    private Float speechiness;
    private Float tempo;
    private Integer timeSignature;
    private Float valence;
}
