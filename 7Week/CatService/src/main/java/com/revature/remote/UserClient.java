package com.revature.remote;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

import com.revature.models.User;

@FeignClient(name = "user-service", fallback = UserClientFallback.class)
public interface UserClient {
	//inside this interface, I write methods like in a controller and it will generate the impls
	@GetMapping("users")
	public User getAllUser();

}
