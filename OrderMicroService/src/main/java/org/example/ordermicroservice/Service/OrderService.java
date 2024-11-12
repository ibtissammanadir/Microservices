package org.example.ordermicroservice.Service;

import org.example.ordermicroservice.Entity.Order;
import org.example.ordermicroservice.Entity.User;
import org.example.ordermicroservice.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.util.List;

@Service
public class OrderService {
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private OrderRepository orderRepository;

    private static final String USER_SERVICE_URL = "http://user-service:8081/users/";

    public List<Order> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }

    public boolean checkIfUserExists(Long userId) {
        try {
            ResponseEntity<User> response = restTemplate.getForEntity(USER_SERVICE_URL + userId, User.class);
            return response.getStatusCode().is2xxSuccessful();
        } catch (Exception e) {
            return false; // L'utilisateur n'existe pas ou une erreur est survenue
        }
    }

    public Order createOrder(Order order) {
        if (checkIfUserExists(order.getUserId())) {
            return orderRepository.save(order);
        } else {
            throw new RuntimeException("User not found. Order cannot be created.");
        }
    }
}
