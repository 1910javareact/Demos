package MyArithmeticException;

public class MyArithmeticException extends RuntimeException {

	public MyArithmeticException() {
		super();
	}
	
	public MyArithmeticException(String message) {
		super(message);
	}
	
	public MyArithmeticException(String message, Throwable cause) {
		super(message, cause);
	}
}
