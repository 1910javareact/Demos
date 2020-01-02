package com.revature.remote;

import org.springframework.stereotype.Component;
import com.revature.models.User;

@Component
public class UserClientFallback implements UserClient {

	@Override
	public User getAllUser() {
		// TODO Auto-generated method stub
		return null;
	}

}
