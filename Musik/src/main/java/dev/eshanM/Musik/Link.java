package dev.eshanM.Musik;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "links")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Link {
    @Id
    private ObjectId id;
    private String LinkName;
    private String type;
    private String url;
    Link(String LinkName,String type, String url){
        this.LinkName = LinkName;
        this.type = type;
        this.url = url;
    }
}
