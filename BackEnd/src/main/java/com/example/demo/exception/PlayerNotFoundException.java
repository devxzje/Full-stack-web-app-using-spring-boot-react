package com.example.demo.exception;

public class PlayerNotFoundException extends RuntimeException{
    public PlayerNotFoundException(Integer id){
        super("Can not find player with id: "+id);
    }
}
