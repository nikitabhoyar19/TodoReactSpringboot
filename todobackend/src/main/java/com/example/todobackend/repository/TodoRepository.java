package com.example.todobackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.todobackend.todo.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{

	List<Todo> findByUsername(String username);
}
