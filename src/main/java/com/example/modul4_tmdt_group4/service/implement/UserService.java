package com.example.modul4_tmdt_group4.service.implement;

import com.example.modul4_tmdt_group4.controller.request.SignupRequest;
import com.example.modul4_tmdt_group4.model.User;
import com.example.modul4_tmdt_group4.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Objects;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public User saveUserBySingUp(SignupRequest signupRequest,Long accountId){
        User convertUser = convertSingUpRequestToUser(signupRequest);
        if (Objects.isNull(accountId)){
            throw new RuntimeException("Thiếu thông tin account");
        }
        convertUser.setAccountId(accountId);
        return userRepository.save(convertUser);
    }

    private User convertSingUpRequestToUser(SignupRequest request){
        User user = new User();
        user.setName(request.getName());
        user.setAddress(request.getAddress());
        user.setPhoneNumber(request.getPhoneNumber());
        return  user;
    }
}
