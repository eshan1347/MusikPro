package dev.eshanM.Musik;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class LinkService {
    @Autowired
    private LinkRepository linkRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Link addLink(String LinkName, String type, String ytl , String title){
        Link l = linkRepository.insert(new Link(LinkName,type, ytl));

//        mongoTemplate.update(Song.class)
//                .matching(Criteria.where("title").is(title))
//                .apply(new Update().push("url").value(l))
//                .first();
        switch (type) {
            case "yt" -> mongoTemplate.update(Song.class)
                    .matching(Criteria.where("title").is(title))
                    .apply(new Update().set("ytUrl", l))
                    .first();
            case "spotify" -> mongoTemplate.update(Song.class)
                    .matching(Criteria.where("title").is(title))
                    .apply(new Update().set("spotUrl", l))
                    .first();
            case "dlink" -> mongoTemplate.update(Song.class)
                    .matching(Criteria.where("title").is(title))
                    .apply(new Update().set("dlink", l))
                    .first();
            case "lyric" -> mongoTemplate.update(Song.class)
                    .matching(Criteria.where("title").is(title))
                    .apply(new Update().set("lyric", l))
                    .first();
            case "artInfo" -> mongoTemplate.update(Song.class)
                    .matching(Criteria.where("title").is(title))
                    .apply(new Update().set("artInfo", l))
                    .first();
            case "albInfo" -> mongoTemplate.update(Song.class)
                    .matching(Criteria.where("title").is(title))
                    .apply(new Update().set("albInfo", l))
                    .first();
//            case "artwork" -> mongoTemplate.update(Song.class)
//                    .matching(Criteria.where("title").is(title))
//                    .apply(new Update().set("artwork", l))
//                    .first();
        }
//        mongoTemplate.updateFirst(Query.query(Criteria.where("title").is((title))), new Update().push("url",l), Song.class);
        return l;
    }
}
