package com.example.demo.controller;

import com.example.demo.exception.NotFoundException;
import com.example.demo.exception.PlayerNotFoundException;
import com.example.demo.model.Player;
import com.example.demo.repository.PlayerRepository;
import com.example.demo.service.PlayerService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/player")
public class PlayerController {

    @Autowired
    PlayerService playerService;

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping("/index")
    public List<Player> get() {
        return playerService.getAll();
    }

    @GetMapping("/{id}")
    public Player detail(@PathVariable("id") Integer id
                         ) throws NotFoundException {
        return playerRepository.findById(id)
                .orElseThrow(()->new PlayerNotFoundException(id));
    }
//    @GetMapping("/index/{id}")
//    public Player detail(@PathVariable("id") Integer id
//                         ) throws NotFoundException {
//        return playerService.findById(id);
//    }

    @PostMapping("/add")
    public Player add(@RequestBody Player player) {
        return playerService.save(player);
    }

    @PutMapping("/update/{id}")
    public Player update(@PathVariable("id") Integer id,
                         @RequestBody Player player) throws NotFoundException {
        return playerService.update(id,player);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") Integer id) {
        playerService.deleteById(id);
    }

}
