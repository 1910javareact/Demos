import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import com.revature.Chair;
import com.revature.LowValueException;

public class ChairTest2 {
	
	private Chair chair = null;
	
	@Before
	public void setUp() {
		chair = new Chair("Leather", "Feathery", "Mahogany", 19997.13, 1);
	}
	
	@After
	public void tearDown() {
		chair = null;
	}

	@Test
	public void testSit1() {
		assertEquals(1, chair.getTimesSatUpon());
	}
	
	@Test
	public void testSit2() {
		chair.sit();
		assertEquals(2, chair.getTimesSatUpon());
	}
	
	@Test
	public void testPrice() {
		assertEquals(new Double(19997.13), new Double(chair.getPrice()));
	}
	
	@Test(expected=LowValueException.class)
	public void testLowValue() {
		for(int i = 0; i < 100_000; i++) {
			chair.sit();
		}
	}
	
	@Ignore
	@Test(timeout=3000)
	public void testTimeout() {
		while(true) {}
	}
}
