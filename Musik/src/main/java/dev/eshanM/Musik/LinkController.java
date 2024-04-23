package dev.eshanM.Musik;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/urls")
public class LinkController {
    @Autowired
    private LinkService linkService;
    @PostMapping
    public ResponseEntity<Link> addLink(@RequestBody Map<String, String> m0){
        return new ResponseEntity<Link>(linkService.addLink(m0.get("LinkName"),m0.get("type"), m0.get("url"),m0.get("title")), HttpStatus.CREATED);
    }
}
