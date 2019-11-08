package com.revature;

public class LowValueException extends RuntimeException {

	public LowValueException() {
		super();
	}

	public LowValueException(String arg0, Throwable arg1, boolean arg2, boolean arg3) {
		super(arg0, arg1, arg2, arg3);
	}

	public LowValueException(String arg0, Throwable arg1) {
		super(arg0, arg1);
	}

	public LowValueException(String arg0) {
		super(arg0);
	}

	public LowValueException(Throwable arg0) {
		super(arg0);
	}
}
