package com.example.demo.service.impl;

import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Player;
import com.example.demo.repository.PlayerRepository;
import com.example.demo.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    PlayerRepository playerRepository;

    @Override
    public List<Player> getAll() {
        return playerRepository.findAll();
    }

    @Override
    public Player save(Player player) {
        return playerRepository.save(player);
    }

    @Override
    public Player update(Integer id, Player player) {
        if (player != null) {
            Player player1 = playerRepository.getById(id);
            if (player1 != null) {
                player1.setClub(player.getClub());
                player1.setName(player.getName());
                player1.setNumber(player.getNumber());
            }
            return playerRepository.save(player1);
        }
        return null;
    }

    @Override
    public void deleteById(Integer id) {
        playerRepository.deleteById(id);
    }

    @Override
    public Player findById(Integer id) throws NotFoundException {
        Optional<Player> player = playerRepository.findById(id);
        if(player.isPresent()){
            return player.get();
        }
        throw new NotFoundException("Can not find player with id: "+id);
    }
}
