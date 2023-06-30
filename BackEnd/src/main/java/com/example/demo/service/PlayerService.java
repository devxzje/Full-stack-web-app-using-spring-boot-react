package com.example.demo.service;

import com.example.demo.exception.NotFoundException;
import com.example.demo.model.Player;

import java.util.List;

public interface PlayerService {

    public List<Player> getAll();

    public Player save(Player player);

    public Player update(Integer id, Player player);

    public void deleteById(Integer id);

    public Player findById(Integer id) throws NotFoundException;
}
